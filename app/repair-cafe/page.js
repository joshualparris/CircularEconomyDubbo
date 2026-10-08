import Link from "next/link";

export const metadata={title:"Repair Café Dubbo"};

export default function RepairCafePage(){
 return <div className="page narrow">
  <span className="status">Community idea being tested · no event is operating yet</span>
  <section className="section">
    <div className="kicker">Repair Café Dubbo?</div>
    <h1 style={{fontSize:"clamp(3rem,8vw,5.4rem)"}}>Fix it. Learn it. Keep it in use.</h1>
    <p className="lede">The idea is simple: bring a portable broken item, sit beside someone who can help, and try to understand or repair it together.</p>
  </section>
  <section className="card-grid three">
    <div className="card"><div className="action-icon">1</div><h3>Bring something portable</h3><p>A computer, small household item, bike part, clothing repair or another safe item covered by the volunteers available that day.</p></div>
    <div className="card"><div className="action-icon">2</div><h3>Sit with a volunteer</h3><p>The point is not a free drop-off repair service. You stay involved and learn what is happening.</p></div>
    <div className="card"><div className="action-icon">3</div><h3>Repair or leave clearer</h3><p>If it cannot be fixed there, you should still leave knowing the likely fault and a sensible next step.</p></div>
  </section>
  <section className="section">
    <h2>What might people bring?</h2>
    <div className="card-grid two">
      <div className="card"><h3>💻 Computers & laptops</h3><p>Diagnosis, software help, simple upgrades and straightforward hardware jobs.</p></div>
      <div className="card"><h3>🧵 Clothing & textiles</h3><p>Simple mending, buttons, tears and basic sewing help.</p></div>
      <div className="card"><h3>🚲 Bikes</h3><p>Simple adjustments and maintenance where the right volunteer and tools are available.</p></div>
      <div className="card"><h3>🔧 Small useful items</h3><p>Only categories the event can handle safely. Exact intake would depend on venue, volunteers and safety controls.</p></div>
    </div>
  </section>
  <div className="notice"><strong>Important:</strong> mains electrical work, lithium battery damage and other higher-risk jobs need proper controls and may be excluded. A Repair Café should never become an uncontrolled repair shop or dumping point.</div>
  <section className="section">
    <h2>Want to help shape it?</h2>
    <p className="lede">You do not need to know how to repair everything. Events also need people who can welcome visitors, organise bookings, record outcomes, coordinate parts and keep the day running safely.</p>
    <div className="actions"><Link className="button" href="/login">Volunteer / staff sign in</Link><Link className="button button-secondary" href="/">Back to circular economy</Link></div>
  </section>
 </div>;
}
