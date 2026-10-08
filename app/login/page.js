import Link from "next/link";
import {login} from "./actions";
export const metadata={title:"Circular Economy Research Sign In"};
export default async function LoginPage({searchParams}){
 const params=await searchParams;
 return <div className="login-shell"><div className="login-card">
   <div className="kicker">Dubbo Circular Economy · private research</div>
   <h1>One volunteer sign-in</h1>
   <p>Use the same account as DubboEwaste, Repair Café and Library of Things training. A secure one-time hand-off opens the research portal without another password.</p>
   <div className="notice">
    <strong>Volunteer or staff member?</strong>
    <p>Sign in through the shared portal. You'll come back here with a research session that expires after eight hours.</p>
    <a className="button" href="https://dubbo-ewaste-app.vercel.app/circular-access">Open with my volunteer account →</a>
   </div>
   {params?.error?<p className="error" role="alert">{params.error}</p>:null}
   <details style={{marginTop:"22px"}}>
    <summary style={{cursor:"pointer",fontWeight:700}}>Legacy research access code (existing coordinators only)</summary>
    <p className="muted">Kept temporarily for existing research coordinators. New volunteers should use the shared account above.</p>
    <form className="form" action={login}>
      <label>Existing research access code<input name="code" type="password" autoComplete="current-password" required/></label>
      <button className="button button-secondary">Sign in with legacy code</button>
    </form>
   </details>
   <p className="small-link"><Link href="/">Back to public circular economy site</Link></p>
  </div></div>;
}
