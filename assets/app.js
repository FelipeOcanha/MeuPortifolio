const ids = ['about', 'experience', 'skills', 'education'];
function setLanguage(lang) {
  const t = window.portfolioLocales[lang] || window.portfolioLocales['pt-BR'];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-label]').forEach(el => el.textContent = t.labels[el.dataset.label]);
  const texts = {'hero-status':t.status,'hero-role':t.role,'hero-description':t.description,contact:t.contact,location:t.location,explore:t.explore,'terminal-message':t.terminal,'footer-text':t.footer,'back-top':t.backTop};
  Object.entries(texts).forEach(([id,text]) => document.getElementById(id).textContent = text);
  document.querySelector('meta[name="description"]').content = t.description;
  document.getElementById('navigation').innerHTML = t.nav.map((text,i) => `<a href="#${ids[i]}">${text}</a>`).join('');
  document.getElementById('navigation').setAttribute('aria-label',lang === 'pt-BR' ? 'Navegação principal' : 'Main navigation');
  document.getElementById('developer-code').textContent = JSON.stringify(t.code,null,2);
  document.getElementById('about-text').innerHTML = t.about.map(p => `<p>${p}</p>`).join('');
  document.getElementById('experience-list').innerHTML = t.experience.map((e,i) => `<article class="experience-card"><p class="mission-label">${t.labels.mission} ${String(3-i).padStart(2,'0')} ${i===0 ? `<span class="mission-live">● ${t.labels.current}</span>` : ''}</p><div class="company-line"><h3>${e.company}</h3><span class="period">${e.period}</span></div><p class="mission-story">${e.story}</p><details><summary>${t.labels.archive} <span>+</span></summary><div class="roles">${e.roles.map(([role,date]) => `<div class="role"><h4>${role}</h4><span>${date}</span></div>`).join('')}</div>${e.details.length ? `<ul>${e.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}</details></article>`).join('');
  document.getElementById('skills-list').innerHTML = t.skillGroups.map(([n,title,skills]) => `<article class="skill-card"><span class="card-number">[ ${n} ]</span><h3>${title}</h3><div class="tags">${skills.map(s => `<span>${s}</span>`).join('')}</div></article>`).join('');
  document.getElementById('education-list').innerHTML = t.education.map(e => `<article class="education-card"><span class="education-icon" aria-hidden="true">&lt;/&gt;</span><p class="period">${e.period}</p><h3>${e.degree}</h3><p>${e.school}</p></article>`).join('');
  document.getElementById('certification-list').innerHTML = t.certifications.map(c => `<span>${c}</span>`).join('');
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.lang === lang)));
  try { localStorage.setItem('portfolio-language',lang); } catch {}
}
let language = 'pt-BR';
try { language = localStorage.getItem('portfolio-language') || language; } catch {}
if (!window.portfolioLocales[language]) language = 'pt-BR';
setLanguage(language);
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click',() => setLanguage(b.dataset.lang)));
document.getElementById('year').textContent = new Date().getFullYear();
const canvas = document.getElementById('matrix'), ctx = canvas.getContext('2d');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let columns=[], last=0;
function resize() { canvas.width=innerWidth; canvas.height=innerHeight; columns=Array.from({length:Math.ceil(innerWidth/24)},() => Math.random()*-80); }
resize(); addEventListener('resize',resize);
function draw(time) {
  requestAnimationFrame(draw);
  if (motion.matches || document.hidden || time-last < 95) return;
  last=time; ctx.fillStyle='rgba(8,13,11,0.09)';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#48ec98';ctx.font='12px monospace';
  columns.forEach((y,i) => {ctx.fillText(Math.random()>.5?'1':'0',i*24,y*24);columns[i]=y*24>canvas.height && Math.random()>.985?0:y+1;});
}
if(ctx) requestAnimationFrame(draw);
