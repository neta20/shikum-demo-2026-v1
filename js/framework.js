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

const hasLocation = (localStorage.getItem('userLocation') || '').length > 0;


/* ---- Populate text fields ---- */

document.title = fw.name + ' – פרטי מסגרת';

document.getElementById('fw-name').textContent             = fw.name;
document.getElementById('fw-type').textContent             = fw.frameworkType;
document.getElementById('fw-provider').textContent         = fw.provider;
document.getElementById('fw-category').textContent         = fw.category;
document.getElementById('fw-short-description').textContent = fw.short_description;
document.getElementById('fw-service-summary').textContent  = fw.service_summary;
document.getElementById('fw-process-info').textContent     = fw.processInfo || '—';
document.getElementById('fw-service-code').textContent     = fw.serviceCode || '—';


/* ---- Branches list ---- */

const branchesList = document.getElementById('fw-branches');

fw.branches.forEach(function(branch, index) {
  // Recommended only when user has entered a location
  var isRecommended = hasLocation && index === 0;

  const li = document.createElement('li');
  li.className = 'branch-item' + (isRecommended ? ' branch-item--recommended' : '');

  // City name
  var nameHtml = '<span class="branch-item__name">' + branch.city;
  if (isRecommended) {
    nameHtml += ' <span class="branch-item__note">(מומלץ, הסניף הקרוב אליך)</span>';
  }
  nameHtml += '</span>';

  var detailsHtml = '';
  var transportHtml = '';

  if (branch.branch_type === 'meeting_place') {
    // Always show address and phone
    detailsHtml = '<div class="branch-item__details">';
    if (branch.address) {
      detailsHtml += '<span class="branch-item__address"><span aria-hidden="true">📌</span><span>כתובת: ' + branch.address + '</span></span>';
    }
    if (branch.phone) {
      detailsHtml += '<a class="branch-item__phone" href="tel:' + branch.phone + '"><span aria-hidden="true">📞</span><span>טלפון ליצירת קשר: ' + branch.phone + '</span></a>';
    }
    detailsHtml += '</div>';

    // Transport only when user has entered a location
    if (hasLocation && branch.transport_details_full) {
      // Parse transport_details_full into car and public-transport sections
      var carText = '';
      var publicRoute = '';
      var publicTime = '';
      var publicDirect = '';

      branch.transport_details_full.split('\n').forEach(function(line) {
        line = line.trim();
        if (!line) return;
        if (line.startsWith('ברכב פרטי:')) {
          carText = line.replace('ברכב פרטי:', '').trim();
        } else if (line.startsWith('בתחבורה ציבורית:')) {
          publicRoute = line.replace('בתחבורה ציבורית:', '').trim();
        } else if (line.startsWith('זמן הגעה משוער:')) {
          publicTime = line.replace('זמן הגעה משוער:', '').trim();
        } else if (line === 'קו ישיר') {
          publicDirect = 'direct';
        } else if (line === 'דורש החלפה') {
          publicDirect = 'transfer';
        }
      });

      var wazeUrl = branch.waze_url || ('https://waze.com/ul?q=' + encodeURIComponent(branch.address || '') + '&navigate=yes');
      var moovitUrl = branch.moovit_url || 'https://moovitapp.com/';

      transportHtml = '<section class="branch-transport">';
      transportHtml += '<h4 class="branch-transport__title">הגעה</h4>';

      // Car group
      if (carText) {
        transportHtml += '<div class="transport-group">';
        transportHtml += '<div class="transport-subtitle">🚗 ברכב פרטי</div>';
        transportHtml += '<div class="transport-line">' + carText + '</div>';
        transportHtml += '<a class="transport-link" href="' + wazeUrl + '" target="_blank" rel="noopener noreferrer">↗ פתיחה ב-Waze</a>';
        transportHtml += '</div>';
      }

      // Public transport group
      if (publicRoute) {
        transportHtml += '<div class="transport-group">';
        transportHtml += '<div class="transport-subtitle">🚌 בתחבורה ציבורית</div>';
        transportHtml += '<div class="transport-line">' + publicRoute + '</div>';
        if (publicTime) {
          transportHtml += '<div class="transport-line">⏱ זמן הגעה משוער: ' + publicTime + '</div>';
        }
        if (publicDirect === 'direct') {
          transportHtml += '<span class="transport-badge transport-badge--direct">✓ קו ישיר</span>';
        } else if (publicDirect === 'transfer') {
          transportHtml += '<span class="transport-badge transport-badge--transfer">↺ דורש החלפה</span>';
        }
        transportHtml += '<a class="transport-link" href="' + moovitUrl + '" target="_blank" rel="noopener noreferrer">↗ פתיחה ב-Moovit</a>';
        transportHtml += '</div>';
      }

      transportHtml += '</section>';
    }
  } else {
    // service_area or residential: show region + location description, never transport
    detailsHtml = '<div class="branch-item__details">';
    if (branch.region) {
      detailsHtml += '<span class="branch-item__address"><span aria-hidden="true">🗺</span><span>אזור: ' + branch.region + '</span></span>';
    }
    if (branch.location_description) {
      detailsHtml += '<span class="branch-item__address"><span>' + branch.location_description + '</span></span>';
    }
    detailsHtml += '</div>';
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
      text:  fw.short_description,
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
