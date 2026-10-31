/* Decorative section transitions shared by all DRM redesign pages.
   Chooses only contrasting, solid-color section boundaries; no content is moved. */
(function(){
"use strict";
function apply(){
  const main=document.querySelector("main");
  if(!main)return;
  const sections=[...main.children].filter(el=>el.tagName==="SECTION");
  if(sections.length<2)return;
  const ignore=el=>el.matches(".hero,.hero-screenshot,.subscription-section,.subscribe,.prototype-directory,[id^='drm-migration-links']");
  const color=el=>{
    const c=getComputedStyle(el).backgroundColor;
    const m=c.match(/^rgba?\(([^)]+)\)$/);
    if(!m)return null;
    const parts=m[1].split(",").map(v=>Number(v.trim()));
    if(parts.length===4&&parts[3]<.99)return null;
    return parts.slice(0,3);
  };
  const difference=(a,b)=>Math.max(...a.map((x,i)=>Math.abs(x-b[i])));
  const candidates=[];
  for(let i=1;i<sections.length;i++){
    const section=sections[i],previous=sections[i-1];
    if(ignore(section)||ignore(previous))continue;
    const a=color(previous),b=color(section);
    if(!a||!b||difference(a,b)<55)continue;
    /* Decorative overlap is placed only at the beginning of a roomy section. */
    if(section.getBoundingClientRect().height<190)continue;
    candidates.push({section,rgb:b,index:i});
  }
  if(!candidates.length)return;
  /* For long pages distribute up to four accents; short pages get one or two. */
  const max=Math.min(4,Math.max(1,Math.round(sections.length/4)));
  const chosen=candidates.length<=max?candidates:
    Array.from({length:max},(_,i)=>candidates[Math.min(candidates.length-1,Math.round((i+.5)*candidates.length/max-.5))]);
  const unique=[...new Set(chosen)];
  unique.forEach(({section,rgb},i)=>{
    const brightness=(rgb[0]*299+rgb[1]*587+rgb[2]*114)/1000;
    const style=brightness<145?"mountain":i%3===0?"slant":i%3===1?"curve":"mountain";
    section.classList.add("drm-shaped-section","drm-shape-"+style);
    section.style.setProperty("--drm-shape-color","rgb("+rgb.join(",")+")");
  });
}
const css=`
/* Sitewide editorial section dividers: decorative, responsive, non-interactive. */
.drm-shaped-section{position:relative}
.drm-shaped-section::before{
  content:"";position:absolute;left:0;right:0;top:-25px;height:26px;
  background:var(--drm-shape-color);pointer-events:none;z-index:1;
}
.drm-shape-slant::before{clip-path:polygon(0 94%,100% 0,100% 100%,0 100%)}
.drm-shape-mountain::before{clip-path:polygon(0 75%,12% 33%,23% 68%,38% 0,51% 65%,65% 19%,78% 63%,90% 26%,100% 75%,100% 100%,0 100%)}
.drm-shape-curve::before{height:34px;top:-33px;border-radius:53% 47% 0 0 / 95% 92% 0 0}
@media(max-width:700px){
 .drm-shaped-section::before{top:-15px;height:16px}
 .drm-shape-curve::before{top:-21px;height:22px}
}
`;
const style=document.createElement("style");style.id="drm-section-divider-styles";style.textContent=css;document.head.appendChild(style);
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply,{once:true});else apply();
})();