export const metadata={title:"E-waste evidence"};

export default function EwasteInternal(){
 return <div>
  <div className="internal-hero"><div><div className="kicker">E-waste</div><h1 style={{fontSize:"3.4rem"}}>What we know, and where the chain breaks</h1><p className="lede">The first hop is visible. The current downstream chain is not yet proven end-to-end.</p></div></div>
  <div className="card-grid three">
   <div className="card"><h2>Whylandra</h2><p>Domestic e-waste is accepted. Public guidance treats this as a recycling pathway, not a public salvage/reuse system.</p></div>
   <div className="card"><h2>Former Matthews contract</h2><p>Council's documented Matthews Metals arrangement expired 30 June 2025. Do not assume it simply continued under another business name.</p></div>
   <div className="card"><h2>AMR Dubbo</h2><p>Australian Metal Recycling now operates the former Matthews Dubbo site and accepts e-waste. Its exact Dubbo downstream e-waste processor is not publicly identified.</p></div>
  </div>
  <section className="section"><div className="card"><h2>Claims we must not make without evidence</h2><ul className="checklist"><li>✗ “Council currently uses AMR” unless a current award/purchase order says so.</li><li>✗ “AMR Dubbo sends e-waste to Sircel/Sims/Rutherford” without a docket, certificate or written statement.</li><li>✗ “Functional computers are reused before recycling” without processor policy/outcome evidence.</li><li>✗ “Drive data is securely destroyed” without a standard, method and evidence trail.</li></ul></div></section>
  <section className="card-grid two">
   <div className="card"><h2>Evidence to request from Council</h2><ul><li>Post-June-2025 e-waste provider and term.</li><li>Scope/service specification.</li><li>First receiving facility.</li><li>Reuse/remarketing requirements or prohibitions.</li><li>Data-bearing device requirements.</li><li>Annual e-waste tonnage by facility if available.</li></ul></div>
   <div className="card"><h2>Evidence to request from processor</h2><ul><li>Dispatch/receival documentation.</li><li>Downstream destinations by commodity.</li><li>Reuse versus material-recovery policy.</li><li>Drive sanitisation/destruction method.</li><li>Certificate/report examples.</li><li>Whether a pre-processing refurb partner is possible.</li></ul></div>
  </section>
 </div>;
}
