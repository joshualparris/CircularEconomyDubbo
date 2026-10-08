import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { MarkdownLite } from "@/components/MarkdownLite";

export const metadata={title:"Repair First — pilot playbook"};

export default async function RepairPlaybookPage(){
 const file=path.join(process.cwd(),"research","REPAIR-FIRST-DUBBO-PILOT-PLAYBOOK.md");
 const text=await readFile(file,"utf8");
 return <div>
  <div className="internal-hero"><div><div className="kicker">Repair First Dubbo</div><h1 style={{fontSize:"3.4rem"}}>12-week pilot playbook</h1><p className="lede">A bounded diagnosis-first test with baseline measurement, instant incentive hypothesis, repairer standards and evaluation rules.</p></div></div>
  <p><Link className="small-link" href="/internal/repair-first">← Repair First workspace</Link></p>
  <div className="private-note">Internal operational proposal. The suggested $30 diagnosis support and 30% / $75 repair bonus are pilot hypotheses, not announced benefits.</div>
  <MarkdownLite text={text}/>
 </div>;
}
