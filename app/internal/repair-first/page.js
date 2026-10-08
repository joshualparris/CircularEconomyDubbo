import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { MarkdownLite } from "@/components/MarkdownLite";

export const metadata={title:"Repair First Dubbo workspace"};

const tools=[
 ["2026 evidence update","Newest Australian behaviour evidence, Austria/France repair incentives, Dubbo capacity and current policy/funding comparators.","/internal/repair-first/evidence"],
 ["Implementation plan","The full repair ecosystem: Repair Check, directory, Repair Café, repair bonus, loaners, referrals and staged rollout.","/internal/repair-first/implementation"],
 ["12-week pilot playbook","Baseline first, then a small instant incentive hypothesis with clear guardrails, repairer standards and evaluation.","/internal/repair-first/playbook"],
 ["Field kit","Repairer interview, participant intake, outcome card, 30-day follow-up and dashboard metrics.","/internal/repair-first/field-kit"],
];

export default async function RepairFirstPage(){
 const file=path.join(process.cwd(),"research","REPAIR-FIRST-DUBBO-DEEP-RESEARCH.md");
 const text=await readFile(file,"utf8");
 return <div>
  <div className="internal-hero"><div><div className="kicker">Repair First Dubbo</div><h1 style={{fontSize:"3.4rem"}}>Make repair the easy first choice</h1><p className="lede">The operating goal is simple: <strong>before you replace it, get one repair check.</strong> This workspace keeps the evidence, pilot design and field tools behind login so the public site stays useful.</p></div></div>
  <div className="private-note">Internal workspace. Repair rebates, partner lists and pilot values below are proposals until formally agreed and funded.</div>

  <div className="internal-grid" style={{marginTop:24}}>
   {tools.map(([title,text,href])=><Link className="card action-card" href={href} key={href}><div><h2 style={{fontSize:"1.4rem"}}>{title}</h2><p>{text}</p></div><span className="small-link">Open →</span></Link>)}
  </div>

  <section className="section">
   <div className="card">
    <div className="kicker">Recommended sequence</div>
    <h2>Do not begin with a city-wide rebate</h2>
    <ol>
     <li>Map and interview local repairers.</li>
     <li>Run Repair Check / Repair Café sessions and measure baseline decisions.</li>
     <li>Build the trusted directory and referral loop.</li>
     <li>Only then test a bounded instant Repair Bonus.</li>
     <li>Measure additional repairs caused by the intervention, not voucher counts.</li>
    </ol>
   </div>
  </section>

  <section className="section">
   <div className="section-head"><div className="kicker">Evidence base</div><h2>Full deep research</h2><p>The long-form evidence remains available below for staff who need the reasoning and sources.</p></div>
   <MarkdownLite text={text}/>
  </section>
 </div>;
}
