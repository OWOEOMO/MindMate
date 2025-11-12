// ---- Delta: lightbox for UI samples ----
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