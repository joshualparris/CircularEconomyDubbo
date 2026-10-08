const roles=["Welcome & booking desk","Repair volunteers by skill area","Safety / triage lead","Parts & consumables coordinator","Outcome recorder","Commercial-referral coordinator","Venue setup / pack-down","Volunteer coordinator"];
const measures=["Booking attempted / attended / no-show","Item category and approximate age","Fault description","Outcome: fixed / partly fixed / diagnosed / referred / not accepted","Minutes spent","Part required and estimated cost","Commercial referral","What the owner would otherwise have done: replace / discard / store / paid repair","Volunteer hours","Safety exclusions or incidents"];
const boundaries=["No unattended drop-off repair queue.","Owners stay involved unless a specific controlled process says otherwise.","Mains electrical internal work only where competence, insurance and test/tag controls allow it.","Damaged/swollen lithium batteries are excluded from casual repair handling.","No promises of data recovery or data privacy beyond the written tech-clinic procedure.","Unrepaired items go home with the owner unless a separate lawful waste/reuse pathway is explicitly arranged.","Do not compete with local repair businesses for complex commercial work; refer appropriately."];

export const metadata={title:"Repair Café workspace"};

export default function RepairCafeInternal(){
 return <div>
  <div className="internal-hero"><div><div className="kicker">Repair Café Dubbo</div><h1 style={{fontSize:"3.4rem"}}>Pilot operations</h1><p className="lede">The purpose is repairability assessment, simple repair, skills and better routing before disposal. It is not a free anonymous repair shop.</p></div></div>
  <div className="card-grid two">
   <section className="card"><h2>Recommended first format</h2><ul><li>Pre-booked, limited-capacity session.</li><li>Start with a small number of categories matched to confirmed volunteer skills.</li><li>Tech clinic can begin with 6–8 computer/device bookings.</li><li>Broader event can add textiles, bikes and simple household items only when skilled volunteers are confirmed.</li><li>Every item is triaged before a volunteer starts work.</li></ul></section>
   <section className="card"><h2>Volunteer roles</h2><ul>{roles.map(x=><li key={x}>{x}</li>)}</ul></section>
  </div>
  <section className="section"><div className="card"><h2>Safety boundaries</h2><ul className="checklist">{boundaries.map(x=><li key={x}>✓ {x}</li>)}</ul></div></section>
  <section className="section"><div className="card"><h2>Measure every session</h2><p>Three measured sessions are more useful than another speculative demand forecast.</p><div className="card-grid two">{measures.map(x=><div className="card" key={x}>{x}</div>)}</div></div></section>
  <section className="section"><div className="card"><h2>Venue checklist</h2><ul><li>Accessible, welcoming and easy to find.</li><li>Tables, chairs, power only where safely managed, good lighting and toilets.</li><li>Public liability / host approval clarified in writing.</li><li>Safe isolation area for rejected battery/electrical hazards if the venue accepts those categories.</li><li>Nearby parking/loading without turning the event into bulky-waste drop-off.</li><li>Internet helpful for manuals, model lookup and software support.</li><li>Clear pack-down, waste and parts handling plan.</li></ul></div></section>
 </div>;
}
