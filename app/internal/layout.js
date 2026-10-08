import { InternalNav } from "@/components/InternalNav";
import { requireSession } from "@/lib/auth";

export const dynamic="force-dynamic";
export const metadata={robots:{index:false,follow:false}};

export default async function InternalLayout({children}){
 const session=await requireSession();
 return <div className="internal-shell">
  <InternalNav role={session.role}/>
  <div className="internal-main">{children}</div>
 </div>;
}
