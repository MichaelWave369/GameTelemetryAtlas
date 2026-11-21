(() => {
"use strict";
const data=window.ATLAS_DATA;
if(!data || !Array.isArray(data.records)) return;
const records=data.records, sourceMap=new Map(data.sources.map(x=>[x.id,x]));
const $=id=>document.getElementById(id);
const filters={search:"",company:"all",status:"all",topic:"all"};
const statusClass={"Official disclosure":"official","Documented game feature":"documented","Context only":"context","Unverified allegation":"allegation"};
const escapeHtml=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const addOption=(id,value)=>{const n=document.createElement("option");n.value=value;n.textContent=value;$(id).append(n);};
[...new Set(records.map(x=>x.company))].sort().forEach(x=>addOption("company",x));
["Documented game feature","Official disclosure","Context only","Unverified allegation"].forEach(x=>addOption("status",x));
[...new Set(records.flatMap(x=>x.topics))].sort().forEach(x=>addOption("topic",x));
$("count-findings").textContent=records.length;
$("count-source-backed").textContent=records.filter(x=>["Official disclosure","Documented game feature"].includes(x.status)).length;
$("count-allegations").textContent=records.filter(x=>x.status==="Unverified allegation").length;
$("count-lens").textContent="0";
$("last-updated").textContent="Reviewed "+data.meta.as_of;
const selected=()=>records.filter(r=>{
const hay=[r.id,r.title,r.company,r.unit,r.scope,r.status,r.summary,r.what_is_shown,r.what_is_not_shown,...r.examples,...r.topics].join(" ").toLowerCase();
return (!filters.search||hay.includes(filters.search))&&(filters.company==="all"||r.company===filters.company)&&(filters.status==="all"||r.status===filters.status)&&(filters.topic==="all"||r.topics.includes(filters.topic));
});
function createCard(r) {
 const card=document.createElement("article");card.className="record";card.id=r.id;
 const src=r.sources.map(id=>{const s=sourceMap.get(id);return s?'<li><a target="_blank" rel="noopener noreferrer" href="'+escapeHtml(s.url)+'">'+escapeHtml(s.title)+' ↗</a><span class="scope-note"> · '+escapeHtml(s.kind)+' · checked '+escapeHtml(s.checked)+'</span></li>':"";}).join("");
 card.innerHTML='<div class="record-top"><span class="eyetag">'+escapeHtml(r.company)+' / '+escapeHtml(r.unit)+'</span><span class="status-chip '+(statusClass[r.status]||"context")+'">'+escapeHtml(r.status)+'</span></div><h3>'+escapeHtml(r.title)+'</h3><p class="record-summary">'+escapeHtml(r.summary)+'</p><div class="tag-row">'+r.topics.map(x=>'<span class="topic">'+escapeHtml(x)+'</span>').join("")+'</div><div class="record-foot"><span class="scope">'+escapeHtml(r.scope)+' · '+r.sources.length+' source(s)</span><button class="detail-toggle" type="button" aria-expanded="false">View evidence & limits +</button></div><div class="record-details" hidden><strong>What the source supports</strong><p>'+escapeHtml(r.what_is_shown)+'</p><strong>What is NOT established</strong><p>'+escapeHtml(r.what_is_not_shown)+'</p><strong>Examples and scope (not a complete game list)</strong><p>'+escapeHtml(r.examples.join(" · "))+'</p><strong>Validation next step</strong><p>'+escapeHtml(r.testing)+'</p><strong>Sources</strong><ul>'+src+'</ul><a href="#'+escapeHtml(r.id)+'">Direct link ↗</a></div>';
 const btn=card.querySelector(".detail-toggle"), details=card.querySelector(".record-details");
 btn.addEventListener("click",()=>{const open=details.hidden;details.hidden=!open;btn.setAttribute("aria-expanded",String(open));btn.textContent=open?"Hide evidence −":"View evidence & limits +";});
 return card;
}
function render(){
const found=selected();$("records").replaceChildren(...found.map(createCard));$("empty").hidden=found.length>0;
$("result-count").textContent="Showing "+found.length+" of "+records.length+" evidence entries";
const target=decodeURIComponent(location.hash.slice(1));const c=document.getElementById(target);
if(c?.classList.contains("record")) c.querySelector(".detail-toggle").click();
}
$("search").addEventListener("input",e=>{filters.search=e.target.value.trim().toLowerCase();render()});
["company","status","topic"].forEach(k=>$(k).addEventListener("change",e=>{filters[k]=e.target.value;render()}));
$("reset").addEventListener("click",()=>{$("search").value="";["company","status","topic"].forEach(k=>$(k).value="all");Object.assign(filters,{search:"",company:"all",status:"all",topic:"all"});render()});
const csv=s=>{let v=String(s??"");if(/^\s*[=+@-]/.test(v))v="'"+v;return '"'+v.replace(/"/g,'""')+'"'};
$("export-csv").addEventListener("click",()=>{
const keys=["id","title","company","unit","scope","status","summary","what_is_shown","what_is_not_shown"];
const txt=[keys.map(csv).join(","),...selected().map(r=>keys.map(k=>csv(r[k])).join(","))].join("\n");
const blob=new Blob(["\ufeff"+txt],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");
a.href=url;a.download="game-telemetry-atlas-filtered.csv";a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);
});
window.addEventListener("hashchange",render);render();
})();
