const groups=[
 {id:"computers-and-phones",title:"Computers & phones",steps:["If it is repairable, compare a repair/upgrade with an equivalent replacement.","If it still has useful life, refurbish, resell or donate through a trustworthy pathway.","Protect personal data before handover.","If reuse is finished, use a recognised e-waste pathway rather than general rubbish."]},
 {id:"appliances",title:"Appliances",steps:["Check whether the fault is simple and economical to repair.","For whitegoods and electricals, use an appropriate repairer and safe recycling path.","Separate removable batteries where the receiving service instructs you to.","Do not dismantle mains equipment unless you are competent and authorised to do so."]},
 {id:"furniture",title:"Furniture",steps:["Offer usable furniture for resale, donation or direct reuse first.","Consider restoration for solid timber or otherwise worthwhile pieces.","Check charity acceptance before transporting bulky items.","Use bulky-waste/disposal services only after practical reuse options are exhausted."]},
 {id:"bikes",title:"Bikes",steps:["A tube, tyre, brake, cable or service can be far cheaper than a replacement bike.","Ask a bike shop or experienced repairer if the frame and main components are sound.","Resell/donate a safe working bike before scrapping it."]},
 {id:"clothing",title:"Clothing",steps:["Mend, alter or pass on wearable items.","Donate clean usable clothing according to the shop's current rules.","For genuinely unsaleable textiles, Dubbo Regional Council provides a textile-recycling pathway at Whylandra."]},
 {id:"tools",title:"Tools",steps:["Repair a useful quality tool where parts and labour make sense.","Borrow or share a rarely-used tool if a safe service is available.","Recycle batteries separately using the correct pathway."]},
 {id:"building-materials",title:"Building materials",steps:["Before demolition, identify doors, windows, cabinetry, timber, fittings and fixtures that can stay whole.","Selective deconstruction can preserve more value than crushing material after demolition.","Use licensed/appropriate contractors and Council waste rules for residual material."]},
];

export const metadata={title:"What can I do with this?"};

export default function WhereNextPage(){
 return <div className="page">
  <div className="section-head"><div className="kicker">Resident guide</div><h1 style={{fontSize:"clamp(3rem,7vw,5rem)"}}>What can I do with this?</h1><p className="lede">Start with repair and reuse. Recycle when the item has genuinely reached the end of its useful life.</p></div>
  <div className="guide-grid">{groups.map(g=><article id={g.id} className="card guide-card" key={g.id}><h2>{g.title}</h2><ol className="steps">{g.steps.map(s=><li key={s}>{s}</li>)}</ol></article>)}</div>
  <section className="section">
    <div className="notice">Acceptance rules change. Before driving anywhere with an item, check the current Council, charity or repairer's own instructions.</div>
    <div className="actions"><a className="button" href="https://www.dubbo.nsw.gov.au/Households-Residents/Rubbish-Recycling-and-Sustainability/whylandra-waste-recycling-centre" target="_blank" rel="noreferrer">Current Whylandra information ↗</a><a className="button button-secondary" href="https://www.dubbo.nsw.gov.au/Households-Residents/Rubbish-Recycling-and-Sustainability/Domestic-Waste-Services/a-z-recycling" target="_blank" rel="noreferrer">Council A–Z recycling ↗</a></div>
  </section>
 </div>;
}
