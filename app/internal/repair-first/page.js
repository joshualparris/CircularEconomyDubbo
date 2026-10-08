import { readFile } from "node:fs/promises";
import path from "node:path";
import { MarkdownLite } from "@/components/MarkdownLite";

export const metadata={title:"Repair First Dubbo research"};

export default async function RepairFirstPage(){
 const file=path.join(process.cwd(),"research","REPAIR-FIRST-DUBBO-DEEP-RESEARCH.md");
 const text=await readFile(file,"utf8");
 return <div>
  <div className="internal-hero"><div><div className="kicker">Deep research</div><h1 style={{fontSize:"3.4rem"}}>Repair First Dubbo</h1><p className="lede">Evidence on how to make repair the default before replacement: cost, diagnosis, trust, subsidies, local repair capacity and behaviour change.</p></div></div>
  <div className="private-note">Internal reading view. This is intentionally not placed on the resident-facing front page.</div>
  <MarkdownLite text={text}/>
 </div>;
}
