/* Denver Rescue Mission shared navigation. All links relative to this script's location. */
(function(){
"use strict";
const current=document.currentScript;
if(!current)return;
const base=new URL("../",current.src);
const local=p=>new URL(p,base).href;
const donate="https://my.denverrescuemission.org/denver-rescue-mission/checkout/drm-donate?campaign=325804&utm_campaign=drm&utm_source=web&utm_term=waystogivenav";
const links=[
["Who We Are","who-we-are.html",[["Our Mission & Vision","who-we-are/mission-vision.html"],["Our History","who-we-are/history.html"],["Financial Accountability","who-we-are/financial-accountability.html"],["Leadership","who-we-are/leadership.html"],["FAQ","who-we-are/faq.html"],["Locations","who-we-are/locations.html"],["Contact Us","who-we-are/contact.html"]]],
["What We Do","what-we-do.html",[["Homelessness in Denver","what-we-do/homelessness-in-denver.html"],["How We Help","what-we-do/how-we-help.html"],["Our Impact","what-we-do/impact.html"],["Stories of Changed Lives","stories-of-changed-lives.html"],["Videos","videos.html"],["Get Help","get-help.html"]]],
["Get Involved","get-involved.html",[["Overview","get-involved.html"],["Volunteer","get-involved/volunteer.html"],["Join Young Professionals","get-involved/young-professionals.html"],["Corporate Engagement","get-involved/corporate-engagement.html"],["Church Engagement","get-involved/church-partnerships.html"],["Careers","get-involved/careers.html"]]],
["Ways to Give","ways-to-give.html",[["Overview","ways-to-give.html"],["Give Now",donate],["Give Monthly","ways-to-give/monthly-giving.html"],["Give Clothes & Food","ways-to-give/donate-items.html"],["Start a Fundraiser","ways-to-give/fundraise.html"],["Give a Vehicle","ways-to-give/vehicles.html"],["Tax Credit Programs","ways-to-give/tax-credit-programs.html"],["Donate Stock","ways-to-give/donate-stock.html"],["IRA Gifts","ways-to-give/ira-gifts.html"],["Employer Matching Gifts","ways-to-give/workplace-giving.html"],["Donor Advised Funds","ways-to-give/donor-advised-funds.html"],["Legacy Giving","ways-to-give/legacy-giving.html"],["Give Cryptocurrency","ways-to-give/cryptocurrency.html"],["FAQ’s and Facts","who-we-are/faqs-and-facts.html"],["Development Team","who-we-are/development-team.html"]]],
["Volunteer","get-involved/volunteer.html",[]],
["Blog","https://denverrescuemission.org/blog/",[]],
["Get Help","get-help.html",[]]
];
function href(s){return /^https?:\/\//.test(s)?s:local(s)}
function anchor(label,url,cls){const a=document.createElement("a");a.textContent=label;a.href=href(url);if(cls)a.className=cls;return a}
const header=document.createElement("header");header.className="drm-site-header";header.setAttribute("data-drm-navigation","1");
const shell=document.createElement("div");shell.className="drm-nav-shell";
const brand=anchor("","index.html","drm-brand");brand.setAttribute("aria-label","Denver Rescue Mission homepage");const logo=document.createElement("img");logo.src=local("assets/DRM_logo.svg");logo.alt="Denver Rescue Mission";logo.width=101;logo.height=90;brand.appendChild(logo);shell.appendChild(brand);
const toggle=document.createElement("button");toggle.type="button";toggle.className="drm-nav-toggle";toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-controls","drm-main-nav");toggle.textContent="☰ Menu";shell.appendChild(toggle);
const nav=document.createElement("nav");nav.className="drm-nav";nav.id="drm-main-nav";nav.setAttribute("aria-label","Main navigation");
for(const [label,url,children] of links.slice(0,4)){const group=document.createElement("div");group.className="drm-nav-group drm-primary";const main=anchor(label,url,"drm-nav-heading");group.appendChild(main);
if(children.length){main.insertAdjacentHTML("beforeend",'<span class="drm-nav-arrow" aria-hidden="true">⌄</span>');
const drop=document.createElement("div");drop.className="drm-dropdown";drop.setAttribute("aria-label",label+" submenu");for(const [name,target] of children)drop.appendChild(anchor(name,target));group.appendChild(drop);
main.addEventListener("click",e=>{if(matchMedia("(max-width:1100px)").matches){e.preventDefault();const wasOpen=group.classList.contains("is-open");nav.querySelectorAll(".drm-nav-group").forEach(g=>g.classList.remove("is-open"));group.classList.toggle("is-open",!wasOpen)}});
group.addEventListener("keydown",e=>{if(e.key==="Escape"){group.classList.remove("is-open");main.focus()}});
}
nav.appendChild(group)}
shell.appendChild(nav);
const utilities=document.createElement("div");utilities.className="drm-nav-utilities";
for(const [label,url] of links.slice(4)){utilities.appendChild(anchor(label,url))}
const searchButton=document.createElement("button");searchButton.type="button";searchButton.className="drm-nav-search";searchButton.setAttribute("aria-label","Search website");searchButton.setAttribute("aria-expanded","false");searchButton.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/></svg>';utilities.appendChild(searchButton);shell.appendChild(utilities);
shell.appendChild(anchor("DONATE",donate,"drm-nav-donate"));header.appendChild(shell);
const searchForm=document.createElement("form");searchForm.className="drm-search-form";searchForm.method="get";searchForm.action="https://denverrescuemission.org/";searchForm.setAttribute("role","search");const searchInput=document.createElement("input");searchInput.name="s";searchInput.type="search";searchInput.placeholder="Search Denver Rescue Mission";searchInput.setAttribute("aria-label","Search Denver Rescue Mission");const searchSubmit=document.createElement("button");searchSubmit.type="submit";searchSubmit.textContent="Search";searchForm.append(searchInput,searchSubmit);header.appendChild(searchForm);
searchButton.addEventListener("click",()=>{const open=searchForm.classList.toggle("is-open");searchButton.setAttribute("aria-expanded",String(open));if(open)searchInput.focus()});
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("is-mobile-open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕ Close":"☰ Menu"});
const old=document.querySelector("header");if(old)old.replaceWith(header);else document.body.insertBefore(header,document.body.firstChild);
const sheet=document.createElement("link");sheet.rel="stylesheet";sheet.href=local("assets/navigation.css");document.head.appendChild(sheet);
/* Remove trailing decorative arrow glyphs from button text, preserving nested icons and links. */
function cleanButtonArrows(){
 const items=document.querySelectorAll('a.btn,button.btn,a.button,button.button,a.button-primary,button.button-primary,a.cta-button,button.cta-button,a.drm-nav-donate,button[type="submit"],input[type="submit"],input[type="button"]');
 for(const el of items){
   if(el.matches('input')){el.value=el.value.replace(/\\s*[↗↖↘↙→←➜➔➝➞❯›»]\\s*$/u,'').trimEnd();continue;}
   const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);
   let last=null;while(walker.nextNode())if(walker.currentNode.nodeValue.trim())last=walker.currentNode;
   if(last)last.nodeValue=last.nodeValue.replace(/\\s*[↗↖↘↙→←➜➔➝➞❯›»]\\s*$/u,'').trimEnd();
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',cleanButtonArrows,{once:true});
else cleanButtonArrows();
})();