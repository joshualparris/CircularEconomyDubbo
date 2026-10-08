import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";

export const runtime="nodejs";
export const dynamic="force-dynamic";

function back(request){
 const response=NextResponse.redirect(new URL("/login?error=Could%20not%20verify%20the%20single-use%20sign-in.%20Open%20the%20volunteer%20portal%20and%20try%20again.",request.url),303);
 response.headers.set("Cache-Control","no-store");
 response.headers.set("Referrer-Policy","no-referrer");
 return response;
}
export async function POST(request){
 const configURL=process.env.SHARED_SUPABASE_URL;
 const apiKey=process.env.SHARED_SUPABASE_PUBLISHABLE_KEY;
 if(!configURL||!apiKey) return back(request);
 let input;
 try{input=await request.formData();}catch{return back(request);}
 const ticket=String(input.get("ticket")||"");
 if(!/^[0-9a-f]{64}$/.test(ticket)) return back(request);
 let role=null;
 try{
  const response=await fetch(configURL.replace(/\/$/,"")+"/rest/v1/rpc/redeem_circular_handoff",{
   method:"POST",
   headers:{"apikey":apiKey,"content-type":"application/json","accept":"application/json"},
   body:JSON.stringify({in_ticket:ticket}),cache:"no-store",redirect:"error",
  });
  if(response.ok) role=await response.json();
 }catch{return back(request);}
 if(!["volunteer","staff","admin"].includes(role)) return back(request);
 await createSession(role);
 const result=NextResponse.redirect(new URL("/internal",request.url),303);
 result.headers.set("Cache-Control","no-store");
 result.headers.set("Referrer-Policy","no-referrer");
 return result;
}
