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
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n}
function anchor(label,url,cls){const n=el('a',cls,label);n.href=href(url);if(n.origin===location.origin&&n.pathname===location.pathname)n.setAttribute('aria-current','page');return n}
const header=el('header','drm-site-header');header.dataset.drmNavigation='1';
const skip=el('a','drm-skip-link','Skip to content');skip.href='#main';header.append(skip);
const shell=el('div','drm-nav-shell');const brand=anchor('','index.html','drm-brand');brand.setAttribute('aria-label','Denver Rescue Mission homepage');const logo=el('img');logo.src=local('assets/DRM_logo.svg');logo.alt='Denver Rescue Mission';logo.width=74;logo.height=74;brand.append(logo);shell.append(brand);
const menu=el('button','drm-nav-toggle','Menu');menu.type='button';menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-controls','drm-main-nav');shell.append(menu);
const nav=el('nav','drm-nav');nav.id='drm-main-nav';nav.setAttribute('aria-label','Main navigation');
const mq=matchMedia('(max-width:1100px)');
function closeAll(except){nav.querySelectorAll('.drm-nav-group').forEach(g=>{if(g!==except){g.classList.remove('is-open');g.querySelector('button')?.setAttribute('aria-expanded','false')}})}
for(const [i,[label,url,children]] of links.slice(0,4).entries()){
 const group=el('div','drm-nav-group');const row=el('div','drm-nav-row');row.append(anchor(label,url,'drm-nav-heading'));
 const toggle=el('button','drm-sub-toggle');toggle.type='button';toggle.setAttribute('aria-label','Show '+label+' pages');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls','drm-sub-'+i);toggle.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>';row.append(toggle);group.append(row);
 const drop=el('div','drm-dropdown');drop.id='drm-sub-'+i;
 for(const [name,target] of children)drop.append(anchor(name,target));group.append(drop);
 function setOpen(open){if(open)closeAll(group);group.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open))}
 toggle.addEventListener('click',()=>setOpen(!group.classList.contains('is-open')));
 group.addEventListener('pointerenter',e=>{if(!mq.matches&&e.pointerType==='mouse')setOpen(true)});group.addEventListener('pointerleave',()=>{if(!mq.matches&&!group.contains(document.activeElement))setOpen(false)});
 group.addEventListener('focusout',()=>setTimeout(()=>{if(!group.contains(document.activeElement))setOpen(false)},0));
 group.addEventListener('keydown',e=>{if(e.key==='Escape'){setOpen(false);toggle.focus()}});nav.append(group);
}
const utilities=el('div','drm-nav-utilities');for(const [label,url] of links.slice(4))utilities.append(anchor(label,url));nav.append(utilities);shell.append(nav);
const search=el('button','drm-nav-search');search.type='button';search.setAttribute('aria-label','Search the site');search.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>';shell.append(search);shell.append(anchor('Donate','https://my.denverrescuemission.org/denver-rescue-mission/checkout/drm-donate?campaign=325804','drm-nav-donate'));header.append(shell);
menu.addEventListener('click',()=>{const open=!nav.classList.contains('is-mobile-open');nav.classList.toggle('is-mobile-open',open);menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';if(!open)closeAll()});
document.addEventListener('click',e=>{if(!header.contains(e.target)){closeAll();nav.classList.remove('is-mobile-open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-mobile-open')){nav.classList.remove('is-mobile-open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';menu.focus()}});
mq.addEventListener('change',()=>{closeAll();nav.classList.remove('is-mobile-open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'});
const old=document.querySelector('body > header')||document.querySelector('header');if(old)old.replaceWith(header);else document.body.prepend(header);
const sheet=el('link');sheet.rel='stylesheet';sheet.href=local('assets/navigation.css');document.head.append(sheet);
})();
