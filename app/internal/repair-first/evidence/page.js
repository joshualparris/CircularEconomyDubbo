import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { MarkdownLite } from "@/components/MarkdownLite";

export const metadata={title:"Repair First — evidence update"};

export default async function RepairEvidencePage(){
 const file=path.join(process.cwd(),"research","REPAIR-FIRST-DUBBO-2026-EVIDENCE-UPDATE.md");
 const text=await readFile(file,"utf8");
 return <div>
  <div className="internal-hero"><div><div className="kicker">Repair First Dubbo</div><h1 style={{fontSize:"3.4rem"}}>2026 evidence update</h1><p className="lede">Newest Australian behaviour research, repair subsidy evidence, Dubbo repair capacity and current funding/policy comparators.</p></div></div>
  <p><Link className="small-link" href="/internal/repair-first">← Repair First workspace</Link></p>
  <div className="private-note">Internal evidence view. Comparator evidence is not a Dubbo outcome until tested locally.</div>
  <MarkdownLite text={text}/>
 </div>;
}
