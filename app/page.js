import Link from "next/link";

const actions=[
  {icon:"🛠️",title:"Repair it",text:"A small fix can be cheaper and simpler than replacing the whole thing.",href:"/repair-cafe"},
  {icon:"♻️",title:"Reuse or donate it",text:"If it still works, keep the item as an item instead of turning it into material.",href:"/where-next"},
  {icon:"🤝",title:"Borrow instead of buy",text:"Some things are useful twice a year. Sharing can make more sense than owning.",href:"/library-of-things"},
  {icon:"↻",title:"Recycle it properly",text:"When reuse is finished, use the right recycling or disposal pathway.",href:"/where-next"},
];

const categories=[
  ["Computers & phones","Repair, refurbish, donate or use an approved e-waste route."],
  ["Appliances","Check repair first; separate batteries and use the right recycling route."],
  ["Furniture","Resell, donate, restore or pass it on before bulky disposal."],
  ["Bikes","A service, tube, tyre or brake job may keep it riding."],
  ["Clothing","Repair, alter, donate, then use textile recycling for what cannot be reused."],
  ["Tools","Repair, share or borrow before replacing a rarely used tool."],
  ["Building materials","Salvage whole doors, timber, fittings and fixtures before material recycling."],
];

export default function HomePage(){
  return <div className="page">
    <section className="hero">
      <div>
        <div className="kicker">Practical circular economy for Dubbo</div>
        <h1>Keep useful things in use, for longer.</h1>
        <p className="lede">Before something becomes waste, there may be a better next step: repair it, pass it on, borrow instead of buying, or recycle it properly when its useful life is really over.</p>
        <div className="actions">
          <Link className="button" href="/where-next">What can I do with this?</Link>
          <Link className="button button-secondary" href="/repair-cafe">Repair Café idea</Link>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="loop"></div>
        <div className="hero-note">Useful first. Waste last.</div>
      </div>
    </section>

    <section className="section">
      <div className="section-head"><div className="kicker">Four simple moves</div><h2>Circular economy without the jargon</h2></div>
      <div className="card-grid">{actions.map(a=><Link className="card action-card" href={a.href} key={a.title}><div><div className="action-icon">{a.icon}</div><h3>{a.title}</h3><p>{a.text}</p></div><span className="small-link">See the next step →</span></Link>)}</div>
    </section>

    <section className="section">
      <div className="section-head"><div className="kicker">Start with the object</div><h2>What are you trying to keep in use?</h2><p>You do not need to learn waste policy. Start with the thing in front of you.</p></div>
      <div className="card-grid three">{categories.map(([name,text])=><Link href={"/where-next#"+name.toLowerCase().replaceAll(" ","-").replace("&","and")} className="card" key={name}><h3>{name}</h3><p>{text}</p><span className="small-link">See options →</span></Link>)}</div>
    </section>

    <section className="section">
      <div className="card-grid two">
        <article className="card">
          <span className="status">Idea being tested</span>
          <h2 style={{marginTop:16}}>Repair Café Dubbo</h2>
          <p>A friendly place where people bring portable broken items, sit with volunteers and try to understand or repair them together.</p>
          <Link className="small-link" href="/repair-cafe">See the public concept →</Link>
        </article>
        <article className="card">
          <span className="status">Proposal</span>
          <h2 style={{marginTop:16}}>Library of Things</h2>
          <p>Borrow useful things you only need occasionally instead of every household buying its own.</p>
          <Link className="small-link" href="/library-of-things">Explore the idea →</Link>
        </article>
      </div>
    </section>

    <section className="section">
      <div className="banner">
        <div><div className="kicker" style={{color:"#fff"}}>What is already true</div><h2>Dubbo is not starting from zero.</h2><p>Repair businesses, charities, community groups and recycling services already keep things moving. Council is also planning stronger reuse and circular-economy infrastructure. The opportunity is to connect these pathways earlier, before a useful item becomes waste.</p></div>
        <div className="fact-list">
          <div className="fact"><span className="fact-dot"></span><span>Whylandra is a recycling and disposal facility today. Do not assume public salvage or scavenging is allowed.</span></div>
          <div className="fact"><span className="fact-dot"></span><span>Reuse-shop concepts are part of Council planning, but an operating Whylandra reuse shop is not yet verified.</span></div>
          <div className="fact"><span className="fact-dot"></span><span>Repair Café and Library of Things are proposals being explored, not operating services yet.</span></div>
        </div>
      </div>
    </section>
  </div>;
}
