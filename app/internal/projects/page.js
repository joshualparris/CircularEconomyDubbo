const groups=[
  {
    title:"Core internal workspaces",
    intro:"These are the main authenticated places for day-to-day circular-economy, repair and ITAD work.",
    links:[
      {name:"Dubbo Circular Economy · Internal",url:"https://circular-economy-dubbo.vercel.app/internal",note:"Research, Repair First, Repair Café, Library of Things, partners and field validation."},
      {name:"Repair Café Dubbo · Internal",url:"https://circular-economy-dubbo.vercel.app/internal/repair-cafe",note:"Volunteer roles, intake boundaries, safety and pilot measurements."},
      {name:"Library of Things · Internal",url:"https://circular-economy-dubbo.vercel.app/internal/library-of-things",note:"Demand testing, starter inventory, risk controls and lending metrics."},
      {name:"Repair First Dubbo · Internal",url:"https://circular-economy-dubbo.vercel.app/internal/repair-first",note:"Deep research on repair economics, behaviour and making repair the default."},
      {name:"Circular Economy · Field validation",url:"https://circular-economy-dubbo.vercel.app/internal/fieldwork",note:"Audits, interviews, records requests and measured pilots."},
      {name:"DubboEwaste · AssetFlow",url:"https://dubbo-ewaste-app.vercel.app/dashboard",note:"Authenticated ITAD operations, chain of custody, assets, media, repairs, resale and recycling."},
      {name:"DubboEwaste · Field validation",url:"https://dubbo-ewaste-app.vercel.app/validation",note:"Private evidence records for contracts, organisations, demand and pilot economics."},
      {name:"DubboEwaste · Repair Café volunteer hub",url:"https://dubbo-ewaste-app.vercel.app/repair-cafe-volunteers",note:"Repair Café operational material inside the AssetFlow staff system."},
    ]
  },
  {
    title:"Resident-facing reference sites",
    intro:"These stay public and simple. Links are listed here so volunteers can check exactly what residents are being shown; they are not added to the public cross-project navigation.",
    links:[
      {name:"Dubbo Circular Economy",url:"https://circular-economy-dubbo.vercel.app/",note:"Public resident guide: repair, reuse, borrowing and correct recycling."},
      {name:"Repair Café Dubbo",url:"https://circular-economy-dubbo.vercel.app/repair-cafe",note:"Public explanation of the Repair Café idea."},
      {name:"Library of Things Dubbo",url:"https://circular-economy-dubbo.vercel.app/library-of-things",note:"Public explanation of the proposed sharing service."},
      {name:"DubboEwaste / AssetFlow public deployment",url:"https://dubbo-ewaste-app.vercel.app/",note:"Current DubboEwaste application entry point."},
      {name:"Cheap PCs & Laptops",url:"https://joshualparris.github.io/Cheappcslaptops/",note:"Refurbished-computer market, pricing and reuse research site."},
      {name:"DadLAN rollout snapshot",url:"https://parris-tech-services.github.io/DadlanControlCentre/",note:"DadLAN device rollout and donation/refurbishment snapshot."},
    ]
  },
  {
    title:"Core GitHub repositories",
    intro:"Canonical source, research history and implementation work.",
    links:[
      {name:"CircularEconomyDubbo",url:"https://github.com/joshualparris/CircularEconomyDubbo",note:"This public site plus the gated volunteer/staff workspace."},
      {name:"DubboEwaste",url:"https://github.com/joshualparris/DubboEwaste",note:"AssetFlow, ITAD/e-waste operations and the canonical Dubbo research corpus."},
      {name:"Cheappcslaptops",url:"https://github.com/joshualparris/Cheappcslaptops",note:"Dubbo refurb market, pricing and repair-economics research."},
      {name:"DadlanControlCentre",url:"https://github.com/Parris-Tech-Services/DadlanControlCentre",note:"Device sourcing, donation and rollout research."},
      {name:"Windows Doctor",url:"https://github.com/Parris-Tech-Services/hprobooktroubleshoot",note:"Windows/network diagnostics and technician tooling useful for repair/refurb workflows."},
      {name:"FieldNotes",url:"https://github.com/Parris-Tech-Services/FieldNotes",note:"Structured field notes for audits, interviews and technical observations."},
      {name:"ResearchAtlas",url:"https://github.com/Parris-Tech-Services/ResearchAtlas",note:"Research navigation and evidence-discovery tooling."},
    ]
  },
  {
    title:"Supporting live tools",
    intro:"Useful tools for volunteers/staff when doing repair, evidence gathering or research.",
    links:[
      {name:"FieldNotes",url:"https://field-notes-two.vercel.app/",note:"Structured incident/field notes. Do not store passwords or sensitive personal information."},
      {name:"ResearchAtlas",url:"https://research-atlas-phi.vercel.app/",note:"Research library/navigation tool."},
      {name:"Windows Doctor latest release",url:"https://github.com/Parris-Tech-Services/hprobooktroubleshoot/releases/tag/windows-crash-doctor-desktop-latest",note:"Current Windows Doctor desktop preview release."},
    ]
  }
];

export const metadata={title:"Connected projects"};

export default function ConnectedProjectsPage(){
 return <div>
   <div className="internal-hero"><div><div className="kicker">Project network</div><h1 style={{fontSize:"3.4rem"}}>Connected projects</h1><p className="lede">One internal map of the websites, workspaces and repositories that support Dubbo's repair, reuse, e-waste and circular-economy work.</p></div></div>
   <div className="private-note">This directory is intentionally inside the authenticated workspace. Public resident pages stay focused on resident actions rather than project infrastructure.</div>
   {groups.map(group=><section className="section" key={group.title}>
     <div className="section-head"><h2>{group.title}</h2><p>{group.intro}</p></div>
     <div className="card-grid two">{group.links.map(link=><a className="card action-card" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
       <div><h3>{link.name}</h3><p>{link.note}</p></div><span className="small-link">Open ↗</span>
     </a>)}</div>
   </section>)}
 </div>;
}
