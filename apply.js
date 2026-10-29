// Applications stay closed until after the election. Change to true to open.
var APPLICATIONS_OPEN = false;
var PHONE = '919036047478';
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var send = $('send'), err = $('err');
  if (!APPLICATIONS_OPEN) {
    $('closed').hidden = false;
    send.disabled = true; send.textContent = 'ఎన్నికల తర్వాత ప్రారంభం';
    $('copy').disabled = true;
    document.querySelectorAll('#f input, #f textarea').forEach(function (e) { e.disabled = true; });
  }
  function val(id) { return ($(id).value || '').trim(); }
  function build() {
    var reasonEl = document.querySelector('input[name=reason]:checked');
    var missing = [];
    if (!val('name')) missing.push('పేరు');
    if (!val('father')) missing.push('తండ్రి / భర్త పేరు');
    if (!val('village')) missing.push('గ్రామం');
    if (!/^[6-9]\d{9}$/.test(val('phone'))) missing.push('సరైన 10 అంకెల ఫోన్ నంబర్');
    if (!reasonEl) missing.push('కారణం');
    if (!val('issue')) missing.push('సమస్య వివరణ');
    if (!/^\d+$/.test(val('amount').replace(/,/g, ''))) missing.push('కోరే మొత్తం (అంకెల్లో)');
    if (!$('decl').checked) missing.push('ప్రకటనకు ఆమోదం');
    if (missing.length) { err.hidden = false; err.textContent = 'దయచేసి నింపండి: ' + missing.join(', '); err.scrollIntoView({behavior:'smooth',block:'center'}); return null; }
    err.hidden = true;
    return [
      'పంచాయతీ నిధి — దరఖాస్తు',
      'పేరు: ' + val('name'),
      'తండ్రి / భర్త: ' + val('father'),
      'వయస్సు: ' + (val('age') || '-'),
      'కుటుంబ సభ్యులు: ' + (val('members') || '-'),
      'గ్రామం / చిరునామా: ' + val('village'),
      'ఫోన్: ' + val('phone'),
      'కారణం: ' + reasonEl.value,
      'సమస్య: ' + val('issue'),
      'కోరే మొత్తం: ₹' + val('amount'),
      'ఎప్పటిలోగా: ' + (val('when') || '-'),
      'నేను ఇచ్చిన వివరాలన్నీ నిజమని ప్రకటిస్తున్నాను.'
    ].join('\n');
  }
  $('f').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!APPLICATIONS_OPEN) return;
    var m = build(); if (!m) return;
    window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(m), '_blank', 'noopener');
  });
  $('copy').addEventListener('click', function () {
    if (!APPLICATIONS_OPEN) return;
    var m = build(); if (!m) return;
    var b = $('copy');
    var ok = function () { b.textContent = '✓ కాపీ అయ్యింది'; };
    if (navigator.clipboard) navigator.clipboard.writeText(m).then(ok, function () {});
  });
})();
