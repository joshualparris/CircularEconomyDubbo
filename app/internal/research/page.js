import { EvidenceBadge } from "@/components/EvidenceBadge";
import { gaps } from "@/lib/research";

export const metadata={title:"Research & evidence"};

export default function ResearchPage(){
 return <div>
  <div className="internal-hero"><div><div className="kicker">Evidence register</div><h1 style={{fontSize:"3.4rem"}}>10 biggest Dubbo research gaps</h1><p className="lede">Current answers, what is genuinely verified, and exactly what evidence would close each remaining question.</p></div></div>
  <article className="research-card"><h2><a href="/internal/research/dubbo-businesses">Inside Dubbo’s technology and repair businesses</a></h2><p>15 locations, 67 sources and six lessons covering public role maps, workplace evidence, device lifecycles and project experiments. Reviewed 10 October 2026.</p></article>
  <div className="research-list">{gaps.map(g=><article className="research-card" key={g.n}>
   <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"}}><div><span className="muted">Question {g.n}</span><h2>{g.q}</h2></div><EvidenceBadge status={g.status}/></div>
   <p><strong>Current answer:</strong> {g.answer}</p>
   <h3>Verified / supported</h3><ul>{g.verified.map(x=><li key={x}>{x}</li>)}</ul>
   <h3>Still unknown</h3><ul>{g.unknown.map(x=><li key={x}>{x}</li>)}</ul>
   <h3>Next evidence method</h3><p>{g.next}</p>
   <h3>Sources</h3><ul className="source-list">{g.sources.map(s=><li key={s}><a href={s} target="_blank" rel="noreferrer">{s}</a></li>)}</ul>
  </article>)}</div>
 </div>;
}
