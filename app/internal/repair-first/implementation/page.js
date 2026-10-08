import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { MarkdownLite } from "@/components/MarkdownLite";

export const metadata={title:"Repair First — implementation plan"};

export default async function RepairImplementationPage(){
 const file=path.join(process.cwd(),"research","REPAIR-FIRST-DUBBO-IMPLEMENTATION-PLAN.md");
 const text=await readFile(file,"utf8");
 return <div>
  <div className="internal-hero"><div><div className="kicker">Repair First Dubbo</div><h1 style={{fontSize:"3.4rem"}}>Implementation plan</h1><p className="lede">How Repair Check, repair incentives, directory/referrals, Repair Café and local repair capacity fit together.</p></div></div>
  <p><Link className="small-link" href="/internal/repair-first">← Repair First workspace</Link></p>
  <div className="private-note">Internal planning view. Incentive amounts are proposals until a pilot and funding arrangement approve them.</div>
  <MarkdownLite text={text}/>
 </div>;
}
