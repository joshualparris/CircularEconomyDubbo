import Link from "next/link";

export const metadata={title:"Library of Things"};

const ideas=["Basic hand-tool kits","Bike-maintenance kits","Camping gear","Party & event gear","Creative and repair kits","Energy-monitoring tools","Occasional-use gardening tools","Projector / presentation kits"];

export default function ThingsPage(){
 return <div className="page narrow">
  <span className="status">Proposal · no Dubbo service is operating yet</span>
  <section className="section">
   <div className="kicker">Library of Things</div>
   <h1 style={{fontSize:"clamp(3rem,8vw,5.4rem)"}}>Borrow the thing. Skip the cupboard clutter.</h1>
   <p className="lede">Some useful things are needed once a month, once a season or once a year. A Library of Things lets a community share them instead of every household buying one.</p>
  </section>
  <section className="section">
   <h2>What could a small Dubbo pilot lend?</h2>
   <div className="card-grid two">{ideas.map(x=><div className="card" key={x}><h3>{x}</h3><p>Low-risk, inspectable and useful enough to test before expanding the collection.</p></div>)}</div>
  </section>
  <div className="notice"><strong>Still a proposal:</strong> there is no verified Dubbo Library of Things operating today. A pilot would need a host, storage, booking/loan rules, inspection, maintenance, insurance and real local demand data.</div>
  <section className="section">
    <h2>What we would test first</h2>
    <ol className="steps"><li>Ask residents about specific items they would actually borrow.</li><li>Start with 20–40 low-risk items, not an enormous catalogue.</li><li>Measure loans, repeat use, breakage, maintenance and storage burden.</li><li>Expand only when the borrowing data shows it is useful.</li></ol>
    <div className="actions"><Link className="button" href="/login">Volunteer / staff sign in</Link><Link className="button button-secondary" href="/">Back to circular economy</Link></div>
  </section>
 </div>;
}
