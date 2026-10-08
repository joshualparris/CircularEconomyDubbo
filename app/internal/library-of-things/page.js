const starter=[
 ["Hand-tool kit","Low","High","Simple inspection; replace lost consumables"],
 ["Bike-maintenance kit","Low–medium","High","Training card; inspect tools each return"],
 ["Camping gear","Low–medium","Medium","Cleaning/dry-storage process"],
 ["Party / event gear","Low","Medium","Easy community use; bulky storage can grow quickly"],
 ["Repair / creative kits","Low","Medium","Keep complete inventory per kit"],
 ["Energy monitor / thermal camera","Low","Medium","High information value; booking and basic instructions"],
 ["Simple gardening hand tools","Low","Medium","Avoid high-risk powered equipment at launch"],
 ["Projector / presentation kit","Low","Medium","Existing library/community-event fit"],
];

export const metadata={title:"Library of Things workspace"};

export default function ThingsInternal(){
 return <div>
  <div className="internal-hero"><div><div className="kicker">Library of Things</div><h1 style={{fontSize:"3.4rem"}}>Feasibility & pilot</h1><p className="lede">Do not build a huge catalogue because the idea sounds good. Survey exact objects, launch small, then let real borrowing data decide.</p></div></div>
  <section className="card"><h2>Best local host hypothesis</h2><p>Macquarie Regional Library is a plausible partner because it already has lending systems, free membership, community rooms and Makers/STEAM programming. This is a hypothesis, not an agreement. A separate community group co-located at the library may be easier to pilot than asking the library to immediately own every liability and maintenance obligation.</p></section>
  <section className="section"><div className="card"><h2>Starter inventory matrix</h2><div className="table-wrap"><table><thead><tr><th>Item</th><th>Risk</th><th>Likely utility</th><th>Control</th></tr></thead><tbody>{starter.map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i}>{c}</td>)}</tr>)}</tbody></table></div></div></section>
  <section className="card-grid two">
   <div className="card"><h2>Survey questions</h2><ul><li>Which exact item would you borrow?</li><li>How often would you realistically use it?</li><li>Would you travel to a library/community hub to collect it?</li><li>What loan length makes sense?</li><li>Would you pay a small annual membership or per-loan fee?</li><li>What item do you own that neighbours rarely need but could share?</li></ul></div>
   <div className="card"><h2>Metrics after launch</h2><ul><li>Loans per item / month.</li><li>Unique borrowers and repeat borrowers.</li><li>Late/lost/broken items.</li><li>Maintenance minutes and cost.</li><li>Storage volume per active loan.</li><li>Estimated retail/hire cost avoided.</li><li>Items with effectively zero demand.</li></ul></div>
  </section>
 </div>;
}
