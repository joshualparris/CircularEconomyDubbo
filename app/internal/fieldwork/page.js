const work=[
 ["Bulky-goods condition audit","300–500 objects","Working / minor repair / major repair / parts / recycle / residual / hazardous; category and weight/volume."],
 ["Whylandra master-plan closure","Council records","Final/adopted plan, reuse-shop stage, funding, operator, timing, electronics scope, ownership-transfer point."],
 ["E-waste downstream proof","Council + processor documents","Current provider, first facility, downstream destinations, data process, reuse policy."],
 ["Institutional device retirement","Top 8–12 institutions","Fleet, refresh cycle, retired counts, models/age, last-batch outcomes, current provider, next batch."],
 ["Repair Café pilot","3 sessions","Demand, attendance, item mix, fix/diagnosis/referral, volunteer hours, parts, counterfactual."],
 ["Library of Things demand test","100–200 survey + 20–40 items","Exact objects, loan frequency, maintenance, breakage, repeat use, storage."],
 ["Charity hardgoods survey","Every major Dubbo op shop","Accepted/refused, test/tag, repairs, reject volume, unsold route, waste/recycler."],
 ["Repair economics sample","8–10 repairers; 30–50 jobs","Diagnosis, labour, parts, approval, decline reason, repair outcome, lead time."],
 ["C&D deconstruction sample","5–10 projects","Whole-product salvage, material recycling, landfill, labour, storage and recovered value."],
 ["Hub governance","Council / Hub contact","Charter, full membership, roadmap, project pipeline, community-participation mechanism."]
];

export const metadata={title:"Field validation"};

export default function FieldworkPage(){
 return <div><div className="internal-hero"><div><div className="kicker">Next evidence</div><h1 style={{fontSize:"3.4rem"}}>Stop searching. Measure these.</h1><p className="lede">These questions are now held by organisations or do not exist until Dubbo measures them. Another generic web search will not close them.</p></div></div>
 <div className="table-wrap"><table><thead><tr><th>Work</th><th>Minimum sample</th><th>What to capture</th></tr></thead><tbody>{work.map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i}>{c}</td>)}</tr>)}</tbody></table></div>
 <section className="section"><div className="card"><h2>Field-note standard</h2><ul><li>Date/time and organisation.</li><li>Person's name/role only where appropriate and public/consented.</li><li>Exact question asked.</li><li>Answer summary.</li><li>Document/evidence offered.</li><li>Confidence/status: verified, partial or verbal-only.</li><li>Never convert “someone told us” into a verified public claim without an evidence record.</li></ul></div></section>
 </div>;
}
