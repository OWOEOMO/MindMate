// 主題切換與表單示範
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const yearEl = document.getElementById('year');

function applyTheme(mode){
  if(mode === 'light'){
    root.style.setProperty('--bg', '#f7f7fb');
    root.style.setProperty('--panel', '#ffffff');
    root.style.setProperty('--ink', '#0b1020');
    root.style.setProperty('--muted', '#4b5563');
  }else{
    root.style.setProperty('--bg', '#0b1020');
    root.style.setProperty('--panel', '#111827');
    root.style.setProperty('--ink', '#e5e7eb');
    root.style.setProperty('--muted', '#9ca3af');
  }
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
