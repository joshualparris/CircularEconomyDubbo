import Link from "next/link";
import { login } from "./actions";

export const metadata={title:"Circular economy research sign in"};

export default async function LoginPage({searchParams}){
 const params=await searchParams;
 return <div className="login-shell">
  <div className="login-card">
   <div className="kicker">Circular economy internal research</div>
   <h1 style={{fontSize:"2.8rem"}}>Research workspace sign in</h1>
   <p className="muted">This login is only for the broader Dubbo Circular Economy research workspace.</p>

   <div className="notice">
    <strong>Repair Café or DubboEwaste volunteer?</strong>
    <p>Use the shared volunteer and staff portal instead. Repair Café no longer has a separate login on this site.</p>
    <a className="button" href="https://dubbo-ewaste-app.vercel.app/login">Open shared volunteer portal →</a>
    <p><a href="https://dubbo-ewaste-app.vercel.app/learn">Dubbo Circular Learning: courses and saved progress ↗</a></p>
   </div>

   {params?.error?<p className="error">{params.error}</p>:null}
   <form className="form" action={login}>
    <label>Circular economy research access code<input name="code" type="password" autoComplete="current-password" required /></label>
    <button className="button button-secondary" type="submit">Sign in to research workspace</button>
   </form>
   <p className="private-note">This separate workspace contains broader circular-economy research such as Library of Things, fieldwork and partner research. Sessions expire automatically after eight hours.</p>
   <p className="small-link"><Link href="/">Back to public circular economy site</Link></p>
  </div>
 </div>;
}
