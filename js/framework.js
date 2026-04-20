/* ============================================================
   FRAMEWORK DETAIL PAGE – framework.js
   Reads framework id from URL (?id=1) and renders the full
   detail view using the frameworks array from main.js.
   ============================================================ */


/* ---- Resolve which framework to display ---- */

// Read ?id= from the URL. Fall back to the first framework for demo.
function getFrameworkId() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  return isNaN(id) ? frameworks[0].id : id;
}

const fw = frameworks.find(function(f) { return f.id === getFrameworkId(); })
        || frameworks[0];


/* ---- Populate text fields ---- */

document.title = fw.name + ' – פרטי מסגרת';

document.getElementById('fw-name').textContent          = fw.name;
document.getElementById('fw-type').textContent          = fw.frameworkType;
document.getElementById('fw-provider').textContent      = fw.provider;
document.getElementById('fw-category').textContent      = fw.category;
document.getElementById('fw-fit').textContent           = fw.fit;
document.getElementById('fw-what-happens').textContent  = fw.whatHappens;
document.getElementById('fw-how-it-works').textContent  = fw.howItWorks;
document.getElementById('fw-process-info').textContent  = fw.processInfo;
document.getElementById('fw-service-code').textContent  = fw.serviceCode;


/* ---- Branches list ---- */

const branchesList = document.getElementById('fw-branches');

fw.branches.forEach(function(branch) {
  const isRecommended = branch.note && branch.note.includes('מומלץ');

  const li = document.createElement('li');
  li.className = 'branch-item' + (isRecommended ? ' branch-item--recommended' : '');

  // Title: name + note inline in parentheses
  var nameHtml = '<span class="branch-item__name">' + branch.name;
  if (branch.note) {
    nameHtml += ' <span class="branch-item__note">(' + branch.note + ')</span>';
  }
  nameHtml += '</span>';

  // Details: address and phone – text and icon as separate children for RTL flex alignment
  var detailsHtml = '';
  if (branch.address || branch.phone) {
    detailsHtml = '<div class="branch-item__details">';
    if (branch.address) {
      detailsHtml += '<span class="branch-item__address"><span aria-hidden="true">📌</span><span>כתובת: ' + branch.address + '</span></span>';
    }
    if (branch.phone) {
      detailsHtml += '<a class="branch-item__phone" href="tel:' + branch.phone + '"><span aria-hidden="true">📞</span><span>טלפון ליצירת קשר: ' + branch.phone + '</span></a>';
    }
    detailsHtml += '</div>';
  }

  // Arrival subsection – icon after text so it sits at the visual end in RTL
  var transportHtml = '';
  if (branch.transport) {
    var t = branch.transport;
    transportHtml = '<div class="branch-item__transport-detail">';
    transportHtml += '<span class="branch-item__transport-heading">הגעה</span>';
    if (t.carTime) {
      transportHtml += '<span class="branch-item__transport-car"><span aria-hidden="true">🚗</span><span>ברכב פרטי: ' + t.carTime + '</span></span>';
    }
    if (t.lines) {
      transportHtml += '<span class="branch-item__transport-line"><span aria-hidden="true">🚌</span><span>בתחבורה ציבורית: ' + t.lines + '</span></span>';
    }
    if (t.travelTime) {
      transportHtml += '<span class="branch-item__transport-time"><span aria-hidden="true">⏱</span><span>זמן הגעה משוער: ' + t.travelTime + '</span></span>';
    }
    if (t.direct === true) {
      transportHtml += '<span class="branch-item__transport-direct branch-item__transport-direct--yes"><span aria-hidden="true">✓</span><span>קו ישיר</span></span>';
    } else if (t.direct === false) {
      transportHtml += '<span class="branch-item__transport-direct"><span aria-hidden="true">↺</span><span>דורש החלפה</span></span>';
    }
    transportHtml += '</div>';
  }

  li.innerHTML = nameHtml + detailsHtml + transportHtml;

  branchesList.appendChild(li);
});


/* ---- Expandable process section ---- */

const toggle  = document.getElementById('process-toggle');
const content = document.getElementById('process-content');

toggle.addEventListener('click', function() {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';

  if (isOpen) {
    toggle.setAttribute('aria-expanded', 'false');
    content.hidden = true;
  } else {
    toggle.setAttribute('aria-expanded', 'true');
    content.hidden = false;
  }
});


/* ---- Share button ---- */

document.getElementById('share-btn').addEventListener('click', function() {
  // Use the native Web Share API if available (works well on mobile).
  // Falls back to copying the URL.
  if (navigator.share) {
    navigator.share({
      title: fw.name,
      text:  fw.fit,
      url:   window.location.href
    }).catch(function() {
      // User cancelled or share failed – do nothing
    });
  } else {
    // Fallback: copy URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(function() {
      alert('הקישור הועתק ללוח');
    }).catch(function() {
      alert('לא ניתן להעתיק את הקישור');
    });
  }
});
