"use client";

import { useMemo, useState } from "react";
import { categories, directory, routes } from "@/lib/public-resource-directory";
import "./public-options.css";

const conditionNames = {working:"Still usable",broken:"Broken / may be repairable",finished:"Beyond repair"};
const guidance = {
  devices:{working:"Back up and remove accounts, then consider passing the device on or trading it in.",broken:"Start with a repair assessment. If repair is uneconomical, protect personal data before recycling.",finished:"Protect your data and use a specialist e-waste recycler, not the household bin."},
  appliances:{working:"Keep working appliances in use; offer them only to a recipient who accepts electricals.",broken:"Ask a suitable repairer first. Leave electrical and battery hazards to qualified people.",finished:"Check the appliance and size requirements of the receiving recycler."},
  batteries:{working:"Store safely and use a battery suitable for the original device.",broken:"Do not use damaged, hot, leaking or swollen batteries; seek specialist disposal advice.",finished:"Tape exposed terminals on suitable loose batteries and use an approved collection point."},
  furniture:{working:"Offer clean, usable furniture to an accepting charity or a person who needs it.",broken:"Consider repair or restoration if the item is safe and worth saving.",finished:"Check Council bulky-item eligibility or facility pricing before moving large furniture."},
  clothing:{working:"Mend, swap or donate clean wearable garments.",broken:"Try mending or altering before giving up on the garment.",finished:"Use Council's textile-recycling instructions for textiles no longer suitable for wearing."},
  bikes:{working:"A safe second-hand bicycle can have many more years of use.",broken:"Check the tyres, brakes and frame with a bicycle repairer.",finished:"Ask a repairer whether usable parts can be salvaged before choosing a scrap path."},
  toys:{working:"Offer safe, clean toys for reuse; borrowing can reduce future purchases.",broken:"Check for repair options, avoiding unsafe batteries, broken sharp pieces or small parts.",finished:"Check material-specific recycling; mixed-material toys may not be recyclable."},
  tools:{working:"Share or hire infrequently-used tools; donate safe tools where accepted.",broken:"Seek a safe repair check, especially for powered tools and batteries.",finished:"Handle rechargeable batteries separately and confirm the recycler accepts the tool."},
  hazardous:{working:"Keep materials in their labelled containers and use only as intended.",broken:"Do not open, combine or pour out hazardous materials.",finished:"Use the Council hazardous-waste guidance; never place these items in kerbside bins."},
  packaging:{working:"Reuse sound packaging when practical.",broken:"Separate clean and contaminated materials.",finished:"Use the appropriate Council stream or Return and Earn for eligible drink containers."},
  other:{working:"See whether someone else can genuinely use the item.",broken:"Explore a repair check before disposal.",finished:"Use Council's material finder and check collection rules before making a trip."}
};
const suggested = {
  devices:{working:["jbtrade","apple","givit"],broken:["ifixit","repaircafe","officeworks"],finished:["officeworks","jbhi","mobilemuster"]},
  appliances:{working:["salvos","vouchers"],broken:["ifixit","repaircafe","jbhi"],finished:["whylandra","jbhi","vouchers"]},
  batteries:{working:["bcycle","bunnings"],broken:["hazwaste","whylandra"],finished:["bunnings","bcycle","whylandra"]},
  furniture:{working:["givit","salvos","vinnies"],broken:["repaircafe","vouchers"],finished:["vouchers","whylandra"]},
  clothing:{working:["salvos","vinnies"],broken:["textiles","salvos"],finished:["textiles","whylandra"]},
  bikes:{working:["bike-shoppe","wheeler-cycles"],broken:["bike-shoppe","wheeler-cycles"],finished:["whylandra","recycling-near-you"]},
  toys:{working:["toy-library","givit","salvos"],broken:["ifixit","repaircafe"],finished:["recycling-near-you","whylandra"]},
  tools:{working:["kennards","givit"],broken:["ifixit","repaircafe"],finished:["bunnings","bcycle","whylandra"]},
  hazardous:{working:["hazwaste"],broken:["hazwaste"],finished:["hazwaste","whylandra"]},
  packaging:{working:["return-earn","recycling-near-you"],broken:["polystyrene","return-earn"],finished:["return-earn","polystyrene","whylandra"]},
  other:{working:["givit","salvos"],broken:["repaircafe","ifixit"],finished:["recycling-near-you","vouchers","whylandra"]}
};
function ResourceCard({item,compact=false}){
  return <article className={"rd-card"+(compact?" rd-card-compact":"")}>
    <div className="rd-card-top"><span className="rd-tag">{item.area}</span><span className="rd-source">{item.verified}</span></div>
    <h3>{item.name}</h3>
    <p>{item.detail}</p>
    <p className="rd-caution"><strong>Before referring:</strong> {item.caution}</p>
    <div className="rd-card-bottom">
      <span className="rd-route-list">{item.routes.map(r=><span key={r}>{routes.find(x=>x.id===r)?.label||r}</span>)}</span>
      <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={"Visit "+item.name+" (opens in new tab)"}>Visit official link <span aria-hidden="true">↗</span></a>
    </div>
  </article>;
}

export default function PublicOptions(){
  const [item,setItem]=useState("devices");
  const [condition,setCondition]=useState("broken");
  const [filterItem,setFilterItem]=useState("all");
  const [filterRoute,setFilterRoute]=useState("all");
  const [search,setSearch]=useState("");
  const selected = useMemo(()=>suggested[item]?.[condition].map(id=>directory.find(r=>r.id===id)).filter(Boolean)||[],[item,condition]);
  const shown = useMemo(()=>{
    const q=search.trim().toLocaleLowerCase();
    return directory.filter(r=>(filterItem==="all"||r.categories.includes(filterItem))&&(filterRoute==="all"||r.routes.includes(filterRoute))&&(!q||[r.name,r.area,r.detail,r.caution,...r.categories].join(" ").toLocaleLowerCase().includes(q)));
  },[filterItem,filterRoute,search]);
  const reset=()=>{setFilterItem("all");setFilterRoute("all");setSearch("");};
  return <main className="rd-shell">
    <div className="rd-heading">
      <div className="kicker">Volunteer & staff only · Public referral tools</div>
      <h1>Where can people take it?</h1>
      <p className="lede">A practical Dubbo referral directory for repair, reuse, recycling and borrowing. Choose an item and its condition to find relevant next steps.</p>
      <p className="rd-context">This page is in the signed-in workspace, not the public homepage. It links to existing providers; it does not mean our own proposed services are accepting items.</p>
    </div>
    <section className="rd-panel" aria-labelledby="rd-finder-title">
      <div className="rd-section-title"><div><div className="rd-eyebrow">Quick item finder</div><h2 id="rd-finder-title">Help someone choose the next step</h2></div><span className="rd-date">Links reviewed: 8 October 2026</span></div>
      <div className="rd-controls">
        <div><label htmlFor="rd-item">What do they have?</label><select id="rd-item" value={item} onChange={e=>setItem(e.target.value)}>{categories.filter(c=>c.id!=="all").map(c=><option value={c.id} key={c.id}>{c.label}</option>)}</select></div>
        <div><label htmlFor="rd-condition">What condition is it in?</label><select id="rd-condition" value={condition} onChange={e=>setCondition(e.target.value)}>{Object.entries(conditionNames).map(([key,name])=><option value={key} key={key}>{name}</option>)}</select></div>
      </div>
      <div className="rd-advice" aria-live="polite">
        <div className="rd-advice-icon" aria-hidden="true">↗</div>
        <div><strong>Suggested next step</strong><p>{guidance[item]?.[condition]}</p></div>
      </div>
      <div className="rd-recommendations" aria-live="polite">{selected.map(r=><ResourceCard key={r.id} item={r} compact/>)}</div>
    </section>
    <section className="rd-directory" aria-labelledby="rd-directory-title">
      <div className="rd-section-title"><div><div className="rd-eyebrow">Service finder</div><h2 id="rd-directory-title">All local and national options</h2><p className="rd-muted">Filter by item or pathway; every card links to the service's own guidance.</p></div></div>
      <div className="rd-filterbar">
        <div><label htmlFor="rd-search">Search services and accepted items</label><input type="search" id="rd-search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="e.g. printer, batteries, clothing"/></div>
        <div><label htmlFor="rd-category">Item type</label><select id="rd-category" value={filterItem} onChange={e=>setFilterItem(e.target.value)}>{categories.map(c=><option value={c.id} key={c.id}>{c.label}</option>)}</select></div>
        <div><label htmlFor="rd-route">Option</label><select id="rd-route" value={filterRoute} onChange={e=>setFilterRoute(e.target.value)}>{routes.map(r=><option value={r.id} key={r.id}>{r.label}</option>)}</select></div>
      </div>
      <div className="rd-results-bar"><p role="status">{shown.length} {shown.length===1?"service":"services"} shown</p><button onClick={reset} type="button">Clear filters</button></div>
      {shown.length>0?<div className="rd-results">{shown.map(r=><ResourceCard key={r.id} item={r}/>)}</div>:<div className="rd-noresults"><strong>No matching services</strong><p>Try another item type, option or search phrase.</p><button type="button" onClick={reset}>Show all services</button></div>}
    </section>
    <section className="rd-notices" aria-label="Referral safety checks">
      <div><h2>Before sending someone anywhere</h2><ul>
        <li><strong>Check acceptance:</strong> retailer and charity programs can change. Call the local site about bulky, damaged, embedded-battery or unusual items.</li>
        <li><strong>Protect privacy:</strong> back up, sign out and securely erase data-bearing devices before any handover. <a href="https://www.cyber.gov.au/protect-yourself/securing-your-devices/how-secure-your-device/how-dispose-your-device-securely" target="_blank" rel="noopener noreferrer">Government instructions ↗</a></li>
        <li><strong>Prevent battery fires:</strong> never place loose batteries in mixed recycling. Damaged or swollen batteries need specific advice; ordinary retail drop-offs may refuse them.</li>
        <li><strong>Distinguish services:</strong> repair projects in development are not operating public drop-off points.</li>
      </ul></div>
      <div className="rd-review"><strong>Staff maintenance note</strong><p>Information verified against official service pages on 8 October 2026. This is a referral guide, not a promise of inventory, price, hours or acceptance. Recheck the source before referring residents.</p><a href="https://github.com/joshualparris/CircularEconomyDubbo" target="_blank" rel="noopener noreferrer">View source repository ↗</a></div>
    </section>
  </main>;
}
