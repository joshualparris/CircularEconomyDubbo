const partners=[
 ["Dubbo Regional Council / Resource Recovery & Efficiency","Strategy, Whylandra, procurement, waste data, Circular Economy Hub","Engage formally; distinguish strategy from approved operations."],
 ["Dubbo Region Circular Economy Hub","Regional industry coordination","Ask for charter, lead contact, full membership, roadmap and community-project remit."],
 ["Macquarie Regional Library","Possible venue/host for community repair or sharing pilots","Plausible partner only; no agreement yet."],
 ["Dubbo Community Men's Shed","Wood/metal skills, community projects","Ask about electronics skills, public access, insurance and willingness to participate."],
 ["South Dubbo Veterans & Community Men's Shed","Workshop and repair activity","Same validation required before describing as an electronics repair partner."],
 ["Orana Support Service","Furniture, whitegoods/electrical reuse and household support","Useful charity/social-enterprise pathway; clarify testing, repairs and unsold route."],
 ["Local repair businesses","Commercial repair and referral network","Repair Café should refer complex/commercial work rather than compete with it."],
 ["Australian Metal Recycling / current e-waste contractor","E-waste/material pathway","Need documentary downstream evidence and current Council relationship."],
 ["Schools / TAFE / CSU / Health","Potential institutional surplus-device streams","Need current retired-device volumes, authority, provider and next-batch timing."],
 ["Demolition / construction contractors","C&D product salvage and material recovery","Potential deconstruction pilot; quantify whole-product salvage separately from recycling."]
];

export const metadata={title:"Partners & venues"};

export default function PartnersPage(){
 return <div><div className="internal-hero"><div><div className="kicker">Ecosystem</div><h1 style={{fontSize:"3.4rem"}}>Partners, not duplicated services</h1><p className="lede">The circular-economy opportunity is mainly coordination: route each item to the right existing skill or build a new pathway only where there is a proven gap.</p></div></div>
 <div className="table-wrap"><table><thead><tr><th>Organisation / group</th><th>Possible role</th><th>Evidence / caution</th></tr></thead><tbody>{partners.map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i}>{c}</td>)}</tr>)}</tbody></table></div>
 </div>;
}
