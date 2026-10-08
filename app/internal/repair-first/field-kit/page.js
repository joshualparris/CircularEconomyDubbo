import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { MarkdownLite } from "@/components/MarkdownLite";

export const metadata={title:"Repair First — field kit"};

export default async function RepairFieldKitPage(){
 const file=path.join(process.cwd(),"research","REPAIR-FIRST-DUBBO-FIELD-KIT.md");
 const text=await readFile(file,"utf8");
 return <div>
  <div className="internal-hero"><div><div className="kicker">Repair First Dubbo</div><h1 style={{fontSize:"3.4rem"}}>Field kit</h1><p className="lede">Interview questions, Repair Check intake, outcome recording, follow-up and the minimum metrics needed to measure real behaviour change.</p></div></div>
  <p><Link className="small-link" href="/internal/repair-first">← Repair First workspace</Link></p>
  <div className="private-note">Internal fieldwork material. Do not publish personal participant data or imply a listed repair business has joined the program without consent.</div>
  <MarkdownLite text={text}/>
 </div>;
}
