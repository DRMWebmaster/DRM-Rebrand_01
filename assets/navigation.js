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
shell.appendChild(anchor("DENVER RESCUE MISSION","index.html","drm-brand"));
const toggle=document.createElement("button");toggle.type="button";toggle.className="drm-nav-toggle";toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-controls","drm-main-nav");toggle.textContent="☰ Menu";shell.appendChild(toggle);
const nav=document.createElement("nav");nav.className="drm-nav";nav.id="drm-main-nav";nav.setAttribute("aria-label","Main navigation");
for(const [label,url,children] of links){const group=document.createElement("div");group.className="drm-nav-group";const main=anchor(label,url,"drm-nav-heading");group.appendChild(main);
if(children.length){main.insertAdjacentHTML("beforeend",'<span class="drm-nav-arrow" aria-hidden="true">⌄</span>');
const drop=document.createElement("div");drop.className="drm-dropdown";drop.setAttribute("aria-label",label+" submenu");for(const [name,target] of children)drop.appendChild(anchor(name,target));group.appendChild(drop);
main.addEventListener("click",e=>{if(matchMedia("(max-width:1100px)").matches){e.preventDefault();const wasOpen=group.classList.contains("is-open");nav.querySelectorAll(".drm-nav-group").forEach(g=>g.classList.remove("is-open"));group.classList.toggle("is-open",!wasOpen)}});
group.addEventListener("keydown",e=>{if(e.key==="Escape"){group.classList.remove("is-open");main.focus()}});
}
nav.appendChild(group)}
shell.appendChild(nav);shell.appendChild(anchor("Give Now",donate,"drm-nav-donate"));header.appendChild(shell);
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("is-mobile-open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕ Close":"☰ Menu"});
const old=document.querySelector("header");if(old)old.replaceWith(header);else document.body.insertBefore(header,document.body.firstChild);
const sheet=document.createElement("link");sheet.rel="stylesheet";sheet.href=local("assets/navigation.css");document.head.appendChild(sheet);
})();