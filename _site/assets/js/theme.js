(() => {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const storageKey = 'atheistdad-theme';

  function applyTheme(t){
    if(t === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
  }

  const saved = localStorage.getItem(storageKey);
  if(saved) applyTheme(saved);

  toggle && toggle.addEventListener('click', ()=>{
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(storageKey, next);
  });
})();
