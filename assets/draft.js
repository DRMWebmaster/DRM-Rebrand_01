/* Progressive enhancements for the static review draft. All source content is readable without JavaScript. */
(()=>{'use strict';
const script=document.currentScript;const base=new URL('../',script.src);const path=decodeURIComponent(location.pathname).slice(base.pathname.length)||'index.html';const main=document.querySelector('main');if(!main)return;
const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n}
const local=p=>new URL(p,base).href;
const sections={'who-we-are':['Who We Are','who-we-are.html'],'what-we-do':['What We Do','what-we-do.html'],'get-involved':['Get Involved','get-involved.html'],'ways-to-give':['Ways to Give','ways-to-give.html'],programs:['Our Programs','our-programs.html'],strategies:['Our Approach','what-we-do.html']};
const introductions={
 'who-we-are/financial-accountability.html':'Your trust matters. Explore our financial reports, independent accountability and commitment to good stewardship.',
 'who-we-are/leadership.html':'Meet the people guiding our work and serving our community.',
 'who-we-are/development-team.html':'Connect with the people who help turn your generosity into lasting impact.',
 'who-we-are/contact.html':'A question, a gift, a next step. Let’s get you to the right team.',
 'who-we-are/locations.html':'Find our locations, the work that happens there and how to get in touch.',
 'who-we-are/history.html':'A history of faith, community and showing up for our neighbors since 1892.',
 'who-we-are/faq.html':'Clear answers to common questions about the Mission, giving and getting involved.',
 'who-we-are/faqs-and-facts.html':'Find answers about giving, managing your donations and supporting the Mission.',
 'get-involved/volunteer.html':'Bring your time, your talents and your heart. Find a way to serve that fits you.',
 'get-involved/careers.html':'Meaningful work. A shared purpose. Explore a future with the Mission.',
 'get-involved/corporate-engagement.html':'Bring your team and our community together through meaningful partnership.',
 'get-involved/church-partnerships.html':'Put faith into action through prayer, service and community partnership.',
 'get-involved/young-professionals.html':'Serve, learn and connect with others who care about our city.',
 'ways-to-give/donate-items.html':'Put everyday essentials into the hands of neighbors who need them.',
 'ways-to-give.html':'There is more than one way to make a difference. Find the giving option that works for you.',
 'what-we-do/impact.html':'Behind every number is a person. See the difference our community makes together.'};
document.body.classList.add('draft-ready');document.body.dataset.page=path;
// Clear and consistent page headers, with useful breadcrumbs.
const hero=$('.draft-main > section:not(.content-newsletter)');
if(hero&&!hero.classList.contains('draft-home-hero')){
 const h=$('h1',hero);if(h){const paragraph=$$('p',hero).find(p=>p.textContent.trim().length>40&&!p.classList.contains('eyebrow'));const copy=introductions[path]||paragraph?.textContent.trim()||'';
 const wrap=node('div','draft-hero-inner');const crumb=node('nav','draft-breadcrumb');crumb.setAttribute('aria-label','Breadcrumb');const home=node('a','','Home');home.href=local('index.html');crumb.append(home);const section=sections[path.split('/')[0]];if(section){const sep=node('span','','/');sep.setAttribute('aria-hidden','true');const a=node('a','',section[0]);a.href=local(section[1]);crumb.append(sep,a)}const current=node('span','',document.title.split(' | ')[0].replace(/ — Design.*$/,''));current.setAttribute('aria-current','page');const sep=node('span','','/');sep.setAttribute('aria-hidden','true');crumb.append(sep,current);
 wrap.append(crumb,h);if(copy)wrap.append(node('p','draft-hero-description',copy));hero.replaceChildren(wrap);hero.classList.add('draft-hero');}
}
// Give genuine question-and-answer content a native, keyboard-accessible accordion.
for(const h of $$('.source-content h3.content-question')){
 const details=node('details','draft-accordion');const summary=node('summary');summary.id=h.id;summary.append(...h.childNodes);details.append(summary);h.before(details);let next=h.nextElementSibling;
 while(next&&!/^H[23]$/.test(next.tagName)){const current=next;next=next.nextElementSibling;details.append(current)}h.remove();
}
if(/\/faqs?(?:-and-facts)?\.html$/.test(path)){const first=$('.source-content > details');if(first){const heading=node('h2','','About the Mission');heading.id='about-the-mission';first.before(heading)}}
// Contact topics were separate source modals. Make them usable in a static draft.
if(path==='who-we-are/contact.html'){
 for(const block of $$('.source-content > div:not(.content-group)')){
  const h=$('h2',block);if(!h)continue;const details=node('details','draft-accordion draft-contact-topic');const summary=node('summary');summary.id=h.id;summary.append(...h.childNodes);details.append(summary);h.remove();details.append(...block.childNodes);if(block.id)details.id=block.id;block.replaceWith(details);
 }
 // Put the topic directory before the detailed questions; the accordion headings now serve as the directory.
 for(const h of $$('.source-content h2')){if(h.textContent.trim()==='What Can We Help You With?'){const group=h.closest('.content-group');if(group){group.classList.add('draft-contact-directory');const firstTopic=$('.source-content > .draft-contact-topic');if(firstTopic)firstTopic.before(group)}}}
}
// Financial documents: one organized resource card per reporting year.
if(path==='who-we-are/financial-accountability.html'){
 const years=$$('.source-content h4').filter(h=>/^20\d{2}$/.test(h.textContent.trim()));if(years.length){const grid=node('div','draft-resource-grid');years[0].before(grid);for(const h of years){const card=node('article','draft-resource-card');let next=h.nextElementSibling;card.append(h);while(next&&next.tagName!=='H4'){const current=next;next=next.nextElementSibling;card.append(current)}grid.append(card)}}
}
// Portraits, partner logos, statistics and history each get their own visual rhythm.
for(const card of $$('.draft-person')){const h=$('h3',card),image=$('img',card);if(h&&image&&!image.alt)image.alt=h.textContent.trim();const quote=$('p em',card);if(quote){const details=node('details','draft-person-note');const summary=node('summary','','A personal reflection');details.append(summary);const p=quote.closest('p');p.before(details);details.append(p)}}
for(const row of $$('.content-columns')){
 const cols=$$('.content-column',row).filter(c=>c.parentElement===row);
 if(cols.length>1&&cols.every(c=>$('h2',c)&&/^[\d,$.%]+$/.test($('h2',c).textContent.trim()))){row.classList.add('draft-stat-grid');cols.forEach(c=>c.classList.add('draft-stat'))}
 if(/corporate-engagement|financial-accountability/.test(path)&&cols.length>1&&cols.every(c=>$('img',c)&&c.textContent.trim().length<70))row.classList.add('draft-logo-grid');
 if(cols.some(c=>$('.draft-person',c)))row.classList.add('draft-people-grid');
}
for(const item of $$('[id^="ctl-story-"]')){item.classList.add('draft-milestone');const title=$('a[title]',item);if(title){const text=[...item.childNodes].find(n=>n.nodeType===Node.TEXT_NODE&&n.textContent.trim());if(text){const date=node('span','draft-milestone-date',text.textContent.trim());text.replaceWith(date)}}}
for(const a of $$('.source-content a')){if(/^[A-Z\s\d’&-]{6,}$/.test(a.textContent.trim())&&a.textContent.trim().length<85&&!a.querySelector('img')){a.classList.add('draft-inline-cta');a.textContent=a.textContent.toLowerCase().replace(/^\w/,c=>c.toUpperCase())}}
// Give image-only destination links an accessible name.
for(const a of $$('main a[href]')){if(!a.textContent.trim()&&!a.getAttribute('aria-label')&&!a.querySelector('img[alt]:not([alt=""])')){const image=$('img',a);if(image){try{a.setAttribute('aria-label','Visit '+new URL(a.href).hostname.replace(/^www\./,''))}catch{}}}}
// Article layout and a real table of contents for longer pages.
const contentNodes=[...main.children].filter(e=>e!==hero&&!e.classList.contains('content-newsletter'));const layout=node('div','draft-layout');const article=node('div','draft-article');article.id='page-content';contentNodes.forEach(e=>article.append(e));layout.append(article);const newsletter=$('.content-newsletter',main);if(newsletter)main.insertBefore(layout,newsletter);else main.append(layout);
const majorCount=$$('h2',article).filter(h=>!h.closest('.draft-person,.draft-contact-topic,.content-cards')).length;const seen=new Set();const headings=$$('h2,h3,summary',article).filter(h=>{const t=h.textContent.trim();if((h.tagName==='H3'&&majorCount>=3)||(h.tagName==='SUMMARY'&&path!=='who-we-are/contact.html'&&majorCount>=3))return false;if(!h.id||t.length<4||t.length>90||/^[\d,$.%]+$/.test(t)||/^(Questions\??|Still Have Questions\??|Stay connected\.)$/i.test(t)||h.closest('.draft-person,.draft-resource-card')||h.tagName==='H3'&&h.closest('.content-cards'))return false;if(seen.has(t))return false;seen.add(t);return true});
if(headings.length>=3&&path!=='index.html'&&path!=='stories-of-changed-lives.html'){
 const aside=node('aside','draft-toc');const nav=node('nav');nav.setAttribute('aria-label','On this page');nav.append(node('p','draft-toc-title','On this page'));const list=node('ul');for(const h of headings){const li=node('li'),a=node('a','',h.textContent.trim());a.href='#'+h.id;li.append(a);list.append(li)}nav.append(list);aside.append(nav);layout.prepend(aside);layout.classList.add('has-toc');
 if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){$$('a',nav).forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}},{rootMargin:'-15% 0px -65% 0px'});headings.forEach(h=>observer.observe(h))}
}else layout.classList.add('no-toc');
function revealHash(){if(!location.hash)return;let target;try{target=document.getElementById(decodeURIComponent(location.hash.slice(1)))}catch{return}if(target){let p=target.parentElement;while(p){if(p.tagName==='DETAILS')p.open=true;p=p.parentElement}if(target.tagName==='DETAILS')target.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}))}}
window.addEventListener('hashchange',revealHash);if(location.hash)setTimeout(revealHash,50);
// Native, scrollable source-story carousel; the links and quotes remain ordinary HTML.
const storyGrid=$('.source-story-grid');
if(storyGrid&&storyGrid.children.length>1){const controls=node('div','source-story-controls');const prev=node('button','','Previous');const next=node('button','','Next');prev.type=next.type='button';prev.setAttribute('aria-label','Previous story');next.setAttribute('aria-label','Next story');const counter=node('span','source-story-counter');counter.setAttribute('role','status');counter.setAttribute('aria-live','polite');controls.append(prev,counter,next);storyGrid.before(controls);function step(){return storyGrid.clientWidth+(parseFloat(getComputedStyle(storyGrid).columnGap)||0)}function update(){const i=Math.round(storyGrid.scrollLeft/step());counter.textContent=(i+1)+' / '+storyGrid.children.length;prev.disabled=i<=0;next.disabled=i>=storyGrid.children.length-1}function move(direction){storyGrid.scrollBy({left:step()*direction,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})}prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));storyGrid.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',()=>{storyGrid.scrollLeft=0;update()});update()}
// Accessible local search. Index failures have an explicit retry path.
const dialog=node('dialog','draft-search');dialog.setAttribute('aria-labelledby','draft-search-title');const top=node('div','draft-search-top');const title=node('h2','','Find your next step');title.id='draft-search-title';const close=node('button','draft-search-close','Close');close.type='button';top.append(title,close);const label=node('label','content-sr-only','Search pages, programs and services');label.htmlFor='draft-search-input';const input=node('input','draft-search-input');input.id='draft-search-input';input.type='search';input.placeholder='Try “shelter”, “volunteer” or “giving”';input.autocomplete='off';const status=node('p','draft-search-status','Search across this website draft.');status.setAttribute('role','status');const results=node('div','draft-search-results');dialog.append(top,label,input,status,results);document.body.append(dialog);let index=null,loading=null,returnFocus=null;
function loadIndex(){if(index)return Promise.resolve(index);if(loading)return loading;loading=fetch(local('assets/search-index.json')).then(r=>{if(!r.ok)throw Error('Search unavailable');return r.json()}).then(data=>{index=data;return data}).finally(()=>loading=null);return loading}
async function search(){const query=input.value.trim();results.replaceChildren();if(query.length<2){status.textContent='Enter at least two characters to search.';return}status.textContent='Searching…';try{const data=await loadIndex();if(input.value.trim()!==query)return;const terms=query.toLowerCase().split(/\s+/);const matches=data.map(p=>{const t=p.title.toLowerCase(),text=p.text.toLowerCase();const score=terms.every(x=>text.includes(x)||t.includes(x))?terms.reduce((s,x)=>s+(t.includes(x)?10:1),0):0;return {p,score}}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,12);status.textContent=matches.length?'Showing '+matches.length+' matching pages.':'No matching pages. Try another word, or visit Get Help or Contact Us.';for(const {p} of matches){const a=node('a','draft-search-result');a.href=local(p.path);a.append(node('strong','',p.title),node('span','',p.description));results.append(a)}if(!matches.length){for(const [label,p] of [['Get Help','get-help.html'],['Contact Us','who-we-are/contact.html']]){const a=node('a','draft-search-result',label);a.href=local(p);results.append(a)}}}catch{status.textContent='Search could not load. Please try again.';const retry=node('button','draft-button','Try again');retry.type='button';retry.addEventListener('click',search);results.replaceChildren(retry)}}
input.addEventListener('input',search);const trigger=$('.drm-nav-search');trigger?.addEventListener('click',()=>{returnFocus=document.activeElement;dialog.showModal();input.focus();loadIndex().catch(()=>{});if(input.value.trim())search()});close.addEventListener('click',()=>dialog.close());dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();dialog.close()}});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>returnFocus?.focus());
})();
