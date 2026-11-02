import { siteData as data } from './site-data.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const safe = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = (value = '') => {
  if (!value) return '';
  try {
    const url = new URL(value, document.baseURI);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
};
const toast = (message) => {
  const item = $('#toast');
  item.textContent = message;
  item.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => item.classList.remove('show'), 2300);
};

function renderProjectArt(art) {
  if (art === 'yeshen') return `<span class="art-yeshen-star">✳</span><div class="art-yeshen-logo">YESHEN</div>`;
  if (art === 'wheelchair') return `<svg class="art-wheelchair-svg" viewBox="0 0 340 250" fill="none" aria-hidden="true"><circle cx="125" cy="168" r="64" fill="#0D2028" stroke="#83B9A6" stroke-width="13"/><circle cx="125" cy="168" r="37" stroke="#365D61" stroke-width="3"/><circle cx="125" cy="168" r="8" fill="#B5D6BB"/><circle cx="257" cy="208" r="26" fill="#0D2028" stroke="#92BDAB" stroke-width="9"/><path d="M104 62V120H193L227 191H257M104 118L150 170H240" stroke="#C3E4C9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="M102 65H165Q179 65 179 81V99H114" stroke="#649D98" stroke-width="15" stroke-linecap="round"/><path d="M96 57V18H154" stroke="#9ECBC0" stroke-width="12" stroke-linecap="round"/><path d="M165 102H209" stroke="#83B9A6" stroke-width="10" stroke-linecap="round"/><rect x="169" y="111" width="60" height="12" rx="6" fill="#BDE6CF"/><circle cx="177" cy="29" r="8" fill="#D5EED6"/><path d="M168 30C200 10 224 14 239 34" stroke="#4E807B" stroke-dasharray="4 8" stroke-width="2"/><path d="M157 13C189 -2 219 2 246 20" stroke="#3C736C" stroke-dasharray="4 8" stroke-width="2"/></svg>`;
  return `<div class="art-reviewer-shell"><div class="art-reviewer-top">VON'S REVIEWER <span>STUDY</span></div><div class="art-reviewer-line"></div><div class="art-reviewer-line short"></div><div class="art-reviewer-answer highlight">A · Cloud fundamentals</div><div class="art-reviewer-answer">B · Networking concepts</div></div>`;
}
function renderProjects() {
  $('#project-grid').innerHTML = data.projects.map(project => {
    const projectUrl = safeUrl(project.url);
    const action = projectUrl
      ? `<a class="project-card-action" href="${safe(projectUrl)}" target="_blank" rel="noopener noreferrer">Visit project <span>↗</span></a>`
      : `<button type="button" class="project-card-action" data-project="${safe(project.number)}">Project overview <span>↗</span></button>`;
    return `<article class="project-card reveal"><div class="project-art ${safe(project.art)}"><span class="art-chip">${safe(project.category)}</span>${renderProjectArt(project.art)}</div><div class="project-card-content"><div class="project-card-meta"><span class="proj-num">/ ${safe(project.number)}</span><span>FEATURED PROJECT</span></div><h3>${safe(project.title)}</h3><p>${safe(project.summary)}</p><div class="tag-list">${project.tags.map(t=>`<span class="tag">${safe(t)}</span>`).join('')}</div>${action}</div></article>`;
  }).join('');
  $$('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project)));
}

function renderShot(art) {
  if (art === 'horizon') return `<div class="shot-scene"><div class="shot-browser"><div class="shot-browser-top"><i></i><i></i><i></i></div><div class="shot-horizon-content"><div class="shot-horizon-side">h.<span></span><span></span><span></span></div><div class="shot-horizon-main"><div class="shot-small-label">TOTAL BALANCE</div><div class="shot-total">$48,294.50</div><div class="shot-horizon-chart">${[48,70,61,88,64,97,83,100,71,95,116,99].map(h=>`<b style="height:${h*.58}px"></b>`).join('')}</div><div class="shot-horizon-bottom"><span></span><span></span><span></span></div></div></div></div></div>`;
  if (art === 'form') return `<div class="shot-scene"><div class="shot-form-page"><div class="shot-form-nav"><strong>FORM & FORM</strong><span>OBJECTS &nbsp; COLLECTIONS &nbsp; ⊕</span></div><div class="shot-form-main"><div class="shot-form-copy"><span>THE ART OF EVERYDAY</span><strong>Thoughtful<br><i>living.</i></strong><em>Discover objects ↗</em></div><div class="shot-form-vase"><div class="shot-vase"></div></div></div></div></div>`;
  return `<div class="shot-scene"><div class="shot-morrow-phone"><div class="shot-morrow-top"><span>9:41</span><span>●●● ▰</span></div><div class="shot-morrow-greeting">Good things take <i>time.</i></div><div class="shot-morrow-orb"></div><div class="shot-morrow-banner">✧ &nbsp; A moment for yourself</div><div class="shot-morrow-lines"><span></span><span></span><span></span></div></div></div>`;
}
let currentFilter = 'All';
function renderShowroom() {
  const filtered = data.showroom.filter(item => currentFilter === 'All' || item.category === currentFilter);
  $('#filter-all-count').textContent = String(data.showroom.length).padStart(2, '0');
  $('#showroom-grid').innerHTML = filtered.map((item, i) => `<article class="showroom-card reveal ${filtered.length===3 && i===0?'wide':''}"><button type="button" class="showroom-shot ${safe(item.art)}" data-preview="${safe(item.id)}" aria-label="Open interactive preview for ${safe(item.name)}"><span class="shot-hover">OPEN LIVE PREVIEW ↗</span>${renderShot(item.art)}</button><div class="showroom-card-head"><div><div class="showroom-meta">${safe(item.number)} / ${safe(item.kind.toUpperCase())} &nbsp; · &nbsp; ${safe(item.year)} &nbsp; · &nbsp; INTERACTIVE CONCEPT</div><h3>${safe(item.name)}</h3><p>${safe(item.subtitle)}</p></div><button class="showroom-card-launch" data-preview="${safe(item.id)}" aria-label="Open ${safe(item.name)}">↗</button></div></article>`).join('');
  $$('[data-preview]').forEach(button => button.addEventListener('click', () => openPreview(button.dataset.preview)));
  observeReveals();
}

function renderSkills() {
  $('#expertise-grid').innerHTML = data.skills.map(group=>`<article class="expertise-card reveal"><div class="expertise-icon">${safe(group.icon)}</div><h3>${safe(group.title)}</h3><div class="expertise-skills">${group.items.map(item=>`<span>${safe(item)}</span>`).join('')}</div></article>`).join('');
}

function renderIdentity() {
  $('#availability-text').textContent = data.availability;
  $('#hero-eyebrow').textContent = data.heroEyebrow;
  $('#hero-title-top').textContent = data.heroTitleTop;
  // Keep editorial serif styling for the headline's highlighted word.
  const bottom = $('#hero-title .hero-headline-bottom');
  const match = data.heroTitleBottom.match(/^(\S+)\s+(.+)$/);
  bottom.innerHTML = match ? `<em>${safe(match[1])}</em> ${safe(match[2].replace(/[.]$/, ''))}<span class="period">.</span>` : safe(data.heroTitleBottom);
  $('#hero-description').textContent = data.heroDescription;
  $('#hero-location').innerHTML = `${safe(data.location.toUpperCase())} <span>↗</span>`;
  $('#about-name').textContent = data.name.split(' ')[0] + '.';
  $('#about-description').textContent = data.about;
  $('#contact-email').textContent = data.email;
  const arrow = document.createElement('span'); arrow.textContent = ' ↗'; $('#contact-email').append(arrow);
  $('#contact-email').href = `mailto:${data.email}`;
  $('#github-link').href = safeUrl(data.github) || '#contact';
  if (safeUrl(data.linkedin)) { $('#linkedin-link').href=safeUrl(data.linkedin); $('#linkedin-link').hidden=false; }
  if (safeUrl(data.resumeUrl)) { $('#resume-link').href = safeUrl(data.resumeUrl); $('#resume-link').hidden = false; }
  $('#year').textContent = new Date().getFullYear();
  document.title = `${data.name} — Portfolio & Design Showroom`;
  $('meta[name="description"]').content = `${data.name} — ${data.role}. Explore featured work and interactive design concepts.`;
}

let projectDialog;
function openProject(projectNumber) {
  const item = data.projects.find(p=>p.number===projectNumber);
  if (!item) return;
  if (!projectDialog) {
    projectDialog = document.createElement('dialog');
    projectDialog.className = 'project-overview-dialog';
    projectDialog.innerHTML = `<div class="project-overview-box"><button type="button" class="project-overview-close" aria-label="Close project overview">✕</button><p class="project-overview-kicker"></p><h2></h2><p class="project-overview-description"></p><div class="project-overview-tags"></div><a href="#contact" class="project-overview-cta">Discuss a project like this ↗</a></div>`;
    document.body.appendChild(projectDialog);
    $('.project-overview-close',projectDialog).onclick=()=>projectDialog.close();
    $('.project-overview-cta',projectDialog).onclick=()=>projectDialog.close();
    projectDialog.addEventListener('click',e=>{if(e.target===projectDialog)projectDialog.close();});
  }
  $('.project-overview-kicker',projectDialog).textContent=`PROJECT ${item.number} / ${item.category}`;
  $('h2',projectDialog).textContent=item.title;
  $('.project-overview-description',projectDialog).textContent=item.detail;
  $('.project-overview-tags',projectDialog).innerHTML=item.tags.map(t=>`<span>${safe(t)}</span>`).join('');
  projectDialog.showModal();
}

const previewDialog = $('#preview-dialog');
let selectedIndex = -1;
let activeDevice = 'desktop';
function getEmbeddedUrl(item) {
  const live = safeUrl(item.liveUrl);
  const figma = safeUrl(item.figmaUrl);
  if (item.previewType === 'figma' && figma) return 'https://www.figma.com/embed?embed_host=share&url=' + encodeURIComponent(figma);
  return live || (figma ? 'https://www.figma.com/embed?embed_host=share&url=' + encodeURIComponent(figma) : '');
}
function openPreview(id) {
  selectedIndex = data.showroom.findIndex(item=>item.id===id);
  if (selectedIndex < 0) return;
  const item = data.showroom[selectedIndex];
  const url = getEmbeddedUrl(item);
  if (!url) { toast('Add a Figma or live URL in site-data.js first.'); return; }
  $('#preview-title').textContent = item.name;
  $('#preview-description').textContent = item.description;
  $('#preview-frame').src = url;
  $('#preview-frame').title = `${item.name} — interactive ${item.previewType === 'figma'?'Figma prototype':'website'} preview`;
  const figma = safeUrl(item.figmaUrl);
  const live = safeUrl(item.liveUrl);
  const external = $('#preview-external');
  external.href = item.previewType==='figma' ? (figma || url) : (live || figma || url);
  external.textContent = item.previewType==='figma' ? 'Open Figma prototype ↗' : 'Open full site ↗';
  $('#preview-figma').hidden = !figma || item.previewType === 'figma';
  if (figma) $('#preview-figma').href = figma;
  setDevice(item.category==='Mobile'?'mobile':'desktop');
  if (!previewDialog.open) previewDialog.showModal();
  document.body.classList.add('modal-open');
}
function setDevice(device) {
  activeDevice=device;
  $('#preview-frame-wrap').dataset.device=device;
  $$('.device-btn').forEach(button=>button.classList.toggle('active',button.dataset.device===device));
}
$('#preview-close').addEventListener('click',()=>previewDialog.close());
previewDialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');$('#preview-frame').src='about:blank';});
$$('.device-btn').forEach(button=>button.addEventListener('click',()=>setDevice(button.dataset.device)));
$('#preview-next').addEventListener('click',()=>openPreview(data.showroom[(selectedIndex+1)%data.showroom.length].id));

function observeReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    $$('.reveal').forEach(element=>element.classList.add('in-view'));
    return;
  }
  if (!observeReveals.observer) observeReveals.observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observeReveals.observer.unobserve(entry.target);}});
  },{threshold:.09,rootMargin:'0px 0px -25px 0px'});
  $$('.reveal:not(.in-view)').forEach(el=>observeReveals.observer.observe(el));
}

function setupInteractions() {
  $$('.filter-btn').forEach(button=>button.addEventListener('click',()=>{
    currentFilter=button.dataset.filter;
    $$('.filter-btn').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active?'true':'false');});
    renderShowroom();
  }));
  const menu=$('#menu-toggle'), mobile=$('#mobile-nav');
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');mobile.hidden=!open;});
  $$('#mobile-nav a').forEach(link=>link.addEventListener('click',()=>{mobile.hidden=true;menu.setAttribute('aria-expanded','false');}));
  $('#copy-email').addEventListener('click',async()=>{
    try {await navigator.clipboard.writeText(data.email);toast('Email copied to clipboard!');}
    catch{toast(`Email: ${data.email}`);}
  });
  const storedTheme=(()=>{try{return localStorage.getItem('sj-theme')}catch{return null}})();
  if(storedTheme==='light') document.documentElement.dataset.theme='light';
  const updateThemeLabel=()=>$('#theme-toggle').setAttribute('aria-label',document.documentElement.dataset.theme==='light'?'Switch to dark theme':'Switch to light theme');
  updateThemeLabel();
  $('#theme-toggle').addEventListener('click',()=>{
    const light=document.documentElement.dataset.theme!=='light';document.documentElement.dataset.theme=light?'light':'dark';
    try{localStorage.setItem('sj-theme',light?'light':'dark')}catch{}
    updateThemeLabel();
  });
  const halo=$('#cursor-halo');
  window.addEventListener('pointermove',event=>{if(event.pointerType!=='mouse')return;halo.style.opacity='1';halo.style.left=event.clientX+'px';halo.style.top=event.clientY+'px';},{passive:true});
  let ticking=false;
  window.addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{$('#scroll-progress').style.width=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100||0)+'%';ticking=false;});},{passive:true});
  document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='k'&&(e.metaKey||e.ctrlKey)){e.preventDefault();document.querySelector('#showroom').scrollIntoView({behavior:'smooth'});toast('Jumped to design showroom');}});
}

renderIdentity();renderProjects();renderShowroom();renderSkills();setupInteractions();observeReveals();
