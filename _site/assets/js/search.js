// Minimal client-side search: fetch /search.json and filter
(function(){
  async function loadIndex(){
    try{ const res = await fetch('/search.json'); if(!res.ok) return; const data = await res.json(); window._searchIndex = data; }
    catch(e){ console.warn('search index not available'); }
  }
  loadIndex();
  // You can add UI to query window._searchIndex when ready.
})();
