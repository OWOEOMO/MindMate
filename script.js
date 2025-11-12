// 主題切換與表單示範
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const yearEl = document.getElementById('year');

function applyTheme(mode){
  const isLight = mode === 'light';
  const set = (k, v) => document.documentElement.style.setProperty(k, v);

  if (isLight) {
    set('--bg', '#F6F8FF');
    set('--panel', '#FFFFFF');
    set('--surface', '#F8FAFC');
    set('--ink', '#0B1020');
    set('--muted', '#4B5563');
    set('--subtle', '#64748B');
    set('--divider', 'rgba(2,6,23,0.10)');

    set('--card-bg', 'linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0.015))');
    set('--card-border', 'rgba(2,6,23,0.12)');

    set('--badge-bg', 'rgba(2,6,23,0.06)');
    set('--badge-text', '#1F2937');
    set('--badge-border', 'rgba(2,6,23,0.14)');

    set('--input-bg', '#FFFFFF');
    set('--input-border', 'rgba(2,6,23,0.14)');

    set('--btn-fg', '#0B1020');
    set('--btn-bg', 'rgba(2,6,23,0.04)');
    set('--btn-border', 'rgba(2,6,23,0.14)');

    set('--btn-ghost-fg', '#0B1020');
    set('--btn-ghost-bg', 'transparent');
    set('--btn-ghost-border', 'rgba(2,6,23,0.26)');

    set('--btn-hover-bg', 'rgba(2,6,23,0.06)');
    set('--btn-hover-border', 'rgba(2,6,23,0.34)');

    set('--nav-bg', 'rgba(11,16,32,0.75)');
    set('--nav-link', '#ffffff');
    set('--nav-link-muted', 'rgba(255,255,255,0.85)');
    set('--nav-link-hover', '#ffffff');
    set('--nav-divider', 'rgba(255,255,255,0.10)');
    set('--nav-btn-border', 'rgba(255,255,255,0.25)');
    set('--nav-btn-hover-bg', 'rgba(255,255,255,0.10)');
    
  } else {
    set('--bg', '#0b1020');
    set('--panel', '#111827');
    set('--surface', '#0f172a');
    set('--ink', '#e5e7eb');
    set('--muted', '#9ca3af');
    set('--subtle', '#cbd5e1');
    set('--divider', 'rgba(255,255,255,0.08)');

    set('--card-bg', 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))');
    set('--card-border', 'rgba(255,255,255,0.10)');

    set('--badge-bg', 'rgba(255,255,255,0.08)');
    set('--badge-text', '#cbd5e1');
    set('--badge-border', 'rgba(255,255,255,0.18)');

    set('--input-bg', '#0f172a');
    set('--input-border', 'rgba(255,255,255,0.14)');

    set('--btn-fg', '#ffffff');
    set('--btn-bg', 'transparent');
    set('--btn-border', 'rgba(255,255,255,0.15)');

    set('--btn-ghost-fg', '#e5e7eb');
    set('--btn-ghost-bg', 'transparent');
    set('--btn-ghost-border', 'rgba(255,255,255,0.20)');

    set('--btn-hover-bg', 'rgba(255,255,255,0.06)');
    set('--btn-hover-border', 'rgba(255,255,255,0.28)');
    
    set('--nav-bg', 'rgba(255,255,255,0.85)');
    set('--nav-link', '#0B1020');
    set('--nav-link-muted', '#1F2937');
    set('--nav-link-hover', '#0B1020');
    set('--nav-divider', 'rgba(2,6,23,0.10)');
    set('--nav-btn-border', 'rgba(2,6,23,0.20)');
    set('--nav-btn-hover-bg', 'rgba(2,6,23,0.06)');

  }

  set('--brand', '#7c3aed');
  set('--brand-2', '#06b6d4');
  set('--ring', '#3b82f6');

  localStorage.setItem('mm-theme', mode);
}
toggle?.addEventListener('click', ()=>{
  const curr = localStorage.getItem('mm-theme') || 'dark';
  applyTheme(curr === 'dark' ? 'light' : 'dark');
});

(function init(){
  const saved = localStorage.getItem('mm-theme');
  if(saved){ applyTheme(saved); }
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
})();

function fakeSubmit(e){
  e.preventDefault();
  alert('感謝！這是示範表單，無資料送出。');
  return false;
}

(function(){
  const imgs = document.querySelectorAll('[data-lightbox]');
  if(!imgs.length) return;
  let box = document.getElementById('lightbox');
  if(!box){
    box = document.createElement('div');
    box.id = 'lightbox';
    box.className = 'closeable';
    const img = document.createElement('img');
    box.appendChild(img);
    document.body.appendChild(box);
  }
  const big = box.querySelector('img');
  imgs.forEach(el=>el.addEventListener('click', ()=>{
    big.src = el.src;
    box.style.display = 'flex';
  }));
  box.addEventListener('click', ()=> box.style.display='none');
})();