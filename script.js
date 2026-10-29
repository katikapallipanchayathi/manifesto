(function(){
  var links=[].slice.call(document.querySelectorAll('.top nav a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
  function onScroll(){
    var y=window.scrollY+120,cur=-1;
    secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});
    links.forEach(function(a,i){a.classList.toggle('on',i===cur)});
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  var sh=document.getElementById('share');
  if(sh)sh.addEventListener('click',function(){
    var data={title:document.title,text:'కటికపల్లి గ్రామ పంచాయతీ — ఎన్నికల ప్రణాళిక',url:location.href};
    if(navigator.share){navigator.share(data).catch(function(){})}
    else if(navigator.clipboard){navigator.clipboard.writeText(location.href).then(function(){sh.textContent='✓ లింక్ కాపీ అయ్యింది'})}
  });
})();
