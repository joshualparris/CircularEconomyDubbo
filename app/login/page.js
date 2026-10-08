import { login } from "./actions";

export const metadata={title:"Volunteer & staff sign in"};

export default async function LoginPage({searchParams}){
 const params=await searchParams;
 return <div className="login-shell">
  <div className="login-card">
   <div className="kicker">Private workspace</div>
   <h1 style={{fontSize:"2.8rem"}}>Volunteer & staff sign in</h1>
   <p className="muted">Detailed research, planning, safety notes and fieldwork live here rather than on the resident-facing website.</p>
   {params?.error?<p className="error">{params.error}</p>:null}
   <form className="form" action={login}>
    <label>Access code<input name="code" type="password" autoComplete="current-password" required /></label>
    <button className="button" type="submit">Sign in</button>
   </form>
   <p className="private-note">Access is for approved volunteers and staff. Sessions expire automatically after eight hours.</p>
  </div>
 </div>;
}
