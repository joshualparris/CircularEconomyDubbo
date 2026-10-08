import Link from "next/link";

const cards=[
 ["Research & evidence","The 10 biggest unresolved Dubbo questions, with verified facts, gaps and next evidence steps.","/internal/research"],
 ["Repair First","Deep evidence, implementation plan, 12-week pilot playbook and field tools for making repair the easy first choice.","/internal/repair-first"],
 ["Repair Café","Pilot design, volunteer roles, safety boundaries, intake and outcome measurement.","/internal/repair-cafe"],
 ["Library of Things","Demand test, starter inventory, risk controls, hosting and loan metrics.","/internal/library-of-things"],
 ["E-waste","Current known chain, data-bearing devices, downstream proof and questions for Council/contractors.","/internal/ewaste"],
 ["Partners & venues","Council, library, Men's Sheds, charities, repairers and other possible collaborators.","/internal/partners"],
 ["Field validation","The work that cannot be solved by another web search: audits, interviews, records and pilots.","/internal/fieldwork"],
 ["Connected projects","All related websites, internal workspaces, GitHub repositories and supporting tools.","/internal/projects"],
];

export default function InternalHome(){
 return <div>
  <div className="internal-hero"><div><div className="kicker">Internal</div><h1 style={{fontSize:"3.4rem"}}>Volunteer & staff workspace</h1><p className="lede">Detailed material lives here so the public site stays useful instead of becoming a research archive.</p></div></div>
  <div className="internal-grid">{cards.map(([title,text,href])=><Link className="card action-card" href={href} key={href}><div><h2 style={{fontSize:"1.55rem"}}>{title}</h2><p>{text}</p></div><span className="small-link">Open workspace →</span></Link>)}</div>
  <section className="section">
   <div className="card"><h2>Evidence rule</h2><p>Do not turn a comparator, assumption or absence of public evidence into a Dubbo fact. When the remaining answer sits with Council, a contractor, a charity or a real-world pilot, say so and collect that evidence directly.</p></div>
  </section>
 </div>;
}
