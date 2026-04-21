/* ============================================================
   DATA – Static mock frameworks
   ============================================================ */

const frameworks = [
  {
    id: 1,
    name: 'מרכז תעסוקה יצירה',
    category: 'תעסוקה',
    frameworkType: 'מפעל מוגן',
    provider: 'עמותת שיקום יחד',
    short_description: 'מתאים לאנשים המעוניינים במסגרת תעסוקתית תומכת בסביבה מוגנת',
    service_summary: 'כולל עבודה בסדנאות יצירה כמו נגרות וקרמיקה בליווי צוות מקצועי במסגרת קבוצתית קבועה',
    processInfo: 'נדרש אישור ועדת סל שיקום',
    serviceCode: '11111',
    branches: [
      {
        branch_type: 'meeting_place',
        city: 'ירושלים',
        region: 'ירושלים',
        address: 'שדרות שז"ר 1, ירושלים',
        phone: '02-1234567',
        location_description: 'הפעילות מתקיימת במרכז תעסוקה בירושלים',
        transport_summary_card: 'נגישות בתחבורה ציבורית: קו ישיר, כ־15–20 דקות נסיעה',
        transport_details_full: 'ברכב פרטי: נסיעה של כ־15 דקות\nבתחבורה ציבורית: קו 186 ממבשרת ציון\nזמן הגעה משוער: כ־15–20 דקות\nקו ישיר',
        waze_url: 'https://waze.com/ul?ll=31.7897,35.2036&navigate=yes',
        moovit_url: 'moovit://directions?dest_lat=31.7897&dest_lon=35.2036&dest_name=שדרות שז"ר 1, ירושלים&orig_lat=31.8014&orig_lon=35.1506&orig_name=מבשרת ציון&auto_run=true&partner_id=shikum_demo'
      },
      {
        branch_type: 'meeting_place',
        city: 'תל אביב',
        region: 'תל אביב',
        address: 'שדרות הרצל 23, תל אביב',
        phone: '03-7654321',
        location_description: 'הפעילות מתקיימת במרכז תעסוקה בתל אביב',
        transport_summary_card: 'נגישות בתחבורה ציבורית: דורש החלפה, כ־50–60 דקות נסיעה',
        transport_details_full: 'ברכב פרטי: כ־45 דקות נסיעה\nבתחבורה ציבורית: קו 480 ממבשרת ציון לתל אביב + קו עירוני\nזמן הגעה משוער: כ־50–60 דקות\nדורש החלפה',
        waze_url: 'https://waze.com/ul?ll=32.0656,34.7773&navigate=yes',
        moovit_url: 'moovit://directions?dest_lat=32.0656&dest_lon=34.7773&dest_name=שדרות הרצל 23, תל אביב&orig_lat=31.8014&orig_lon=35.1506&orig_name=מבשרת ציון&auto_run=true&partner_id=shikum_demo'
      }
    ]
  },
  {
    id: 2,
    name: 'עובדים בקהילה',
    category: 'תעסוקה',
    frameworkType: 'תעסוקה נתמכת',
    provider: 'נתיב לעבודה',
    short_description: 'מתאים לאנשים המעוניינים להשתלב בשוק העבודה הפתוח עם ליווי מקצועי',
    service_summary: 'כולל השמה בעבודה רגילה בשוק החופשי וליווי אישי של מדריך תעסוקתי לאורך זמן',
    processInfo: 'נדרש אישור ועדת סל שיקום',
    serviceCode: '22222',
    branches: [
      {
        branch_type: 'service_area',
        city: 'ירושלים',
        region: 'ירושלים',
        location_description: 'פועל באזור ירושלים; המפגשים מתקיימים בבית המשתמש או במקום העבודה'
      },
      {
        branch_type: 'service_area',
        city: 'חיפה',
        region: 'חיפה',
        location_description: 'פועל באזור חיפה; המפגשים מתקיימים בבית המשתמש, בקהילה או במקום העבודה'
      }
    ]
  },
  {
    id: 3,
    name: 'דיור מוגן – דלת לעצמאות',
    category: 'דיור',
    frameworkType: 'דיור מוגן',
    provider: 'דלת לעצמאות',
    short_description: 'מתאים לאנשים המעוניינים לגור בקהילה עם ליווי שיקומי',
    service_summary: 'כולל מגורים בדירה עצמאית בליווי צוות שיקומי המסייע בהתנהלות יומיומית ושילוב בקהילה',
    processInfo: 'נדרש אישור ועדת סל שיקום',
    serviceCode: '33333',
    branches: [
      {
        branch_type: 'residential',
        city: 'ירושלים',
        region: 'ירושלים',
        location_description: 'מסגרת מגורים בעיר ירושלים; הכתובת המדויקת אינה מפורסמת'
      },
      {
        branch_type: 'residential',
        city: 'נתניה',
        region: 'מרכז',
        location_description: 'מסגרת מגורים באזור השרון; הכתובת המדויקת אינה מפורסמת'
      }
    ]
  }
];


/* ============================================================
   CATEGORY → FRAMEWORK TYPE MAPPING (full)
   All categories and types are always selectable.
   Types without matching data show the empty state when chosen.
   ============================================================ */

const FRAMEWORK_MAP = {
  'תעסוקה':                              ['מפעל מוגן', 'תעסוקה נתמכת', 'צרכנים נותני שירות', 'מיזמים תעסוקתיים', 'מועדון תעסוקתי'],
  'דיור':                                ['דיור מוגן', 'הוסטל', 'קהילה תומכת', 'סיוע ברכישת ציוד ראשוני'],
  'ליווי בהשכלה':                        ['חונכות אקדמית', 'ליווי בלימודים מקצועיים', 'השלמת השכלה'],
  'פנאי':                                ['פרויקטים קהילתיים', 'סבסוד חוגים', 'מועדונים חברתיים', 'חונכות חברתית'],
  'מרכז ייעוץ למשפחות':                 ['מרכז ייעוץ למשפחות'],
  'תיאום טיפול':                         ['תיאום טיפול'],
  'סומכות שיקומית':                      ['סומכות שיקומית'],
  'טיפולי שיניים':                       ['טיפולי שיניים'],
  'ליווי ושילוב בשירות צבאי/לאומי':     ['ליווי לשירות צבאי', 'ליווי לשירות לאומי']
};


/* ============================================================
   LOCATION AUTOCOMPLETE – predefined suggestions only
   ============================================================ */

const locationSuggestions = [
  'מבשרת ציון'
];


/* ============================================================
   STATE
   Empty arrays = "all" (no filter applied).
   ============================================================ */

const state = {
  searchQuery:        '',
  locationQuery:      localStorage.getItem('userLocation') || '',
  selectedCategories: [],
  selectedFrameworksByCategory: {},
  selectedIds:        []
};


/* ============================================================
   DOM REFERENCES
   ============================================================ */

const searchInput     = document.getElementById('search-input');
const locationInput   = document.getElementById('location-input');
const suggestionsList = document.getElementById('location-suggestions');
const cardsContainer  = document.getElementById('cards-container');
const resultsCount    = document.getElementById('results-count');
const compareBar      = document.getElementById('compare-bar');
const categoryChips   = document.getElementById('category-chips');
const frameworkChips  = document.getElementById('framework-chips');
const frameworkGroup  = document.getElementById('framework-filter-group');


/* ============================================================
   HELPERS
   ============================================================ */

function getFrameworkTypesWithData(category) {
  return frameworks
    .filter(function(fw) { return fw.category === category; })
    .map(function(fw) { return fw.frameworkType; });
}

function getAllFrameworkTypesWithData() {
  return frameworks.map(function(fw) { return fw.frameworkType; });
}


/* ============================================================
   INIT – mark categories with no data as chip--hint (softer,
   but still clickable)
   ============================================================ */

function initCategoryChips() {
  const categoriesWithData = frameworks.map(function(fw) { return fw.category; });
  categoryChips.querySelectorAll('.chip').forEach(function(chip) {
    const value = chip.dataset.value;
    if (value === 'all') return;
    if (!categoriesWithData.includes(value)) {
      chip.classList.add('chip--hint');
    }
  });
}


/* ============================================================
   RENDER FRAMEWORK CHIPS
   Accepts an array of selected categories.
   Shows types grouped by category when multiple are selected.
   All chips are clickable – no disabled state.
   ============================================================ */

function renderFrameworkChips(categories) {
  const fwPlaceholder = document.getElementById('fw-type-placeholder');

  const mappedCategories = categories.filter(function(c) { return FRAMEWORK_MAP[c]; });
  if (mappedCategories.length === 0) {
    // No category selected – show helper text, hide chips
    if (fwPlaceholder) fwPlaceholder.hidden = false;
    frameworkChips.innerHTML = '';
    frameworkChips.hidden = true;
    return;
  }

  // Category(ies) selected – hide helper text, show chips
  if (fwPlaceholder) fwPlaceholder.hidden = true;
  frameworkChips.hidden = false;
  frameworkChips.innerHTML = '';

  const typesWithData = getAllFrameworkTypesWithData();
  const showGroups    = mappedCategories.length > 1;

  mappedCategories.forEach(function(category) {
    const types = FRAMEWORK_MAP[category];
    const selectedForCategory = state.selectedFrameworksByCategory[category] || [];

    // Group label when multiple categories are selected
    if (showGroups) {
      const label = document.createElement('p');
      label.className = 'fw-group-label';
      label.textContent = category;
      frameworkChips.appendChild(label);
    }

    // Per-category "הכל" chip
    const allChip = document.createElement('button');
    allChip.className = 'chip' + (selectedForCategory.length === 0 ? ' chip--active' : '');
    allChip.dataset.value = 'all';
    allChip.dataset.category = category;
    allChip.textContent = 'הכל';
    frameworkChips.appendChild(allChip);

    types.forEach(function(type) {
      const hasData = typesWithData.includes(type);
      const isActive = selectedForCategory.includes(type);
      const chip = document.createElement('button');
      chip.className = 'chip' +
        (isActive  ? ' chip--active' : '') +
        (!hasData  ? ' chip--hint'   : '');
      chip.dataset.value = type;
      chip.dataset.category = category;
      chip.textContent = type;
      frameworkChips.appendChild(chip);
    });
  });
}


/* ============================================================
   FILTERING – word-based search, OR logic for multi-select
   ============================================================ */

function getFilteredFrameworks() {
  return frameworks.filter(function(fw) {

    // Word-based search: every word in query must appear somewhere
    if (state.searchQuery) {
      const words = state.searchQuery.split(/\s+/);
      const hay   = fw.name + ' ' + fw.short_description + ' ' + fw.frameworkType + ' ' + fw.category;
      const allMatch = words.every(function(w) { return hay.includes(w); });
      if (!allMatch) return false;
    }

    // Category – any selected category is a match (OR)
    if (state.selectedCategories.length > 0) {
      if (!state.selectedCategories.includes(fw.category)) return false;
    }

    // Framework type – per-category: if specific types selected for this category, filter by them
    const typesForCategory = state.selectedFrameworksByCategory[fw.category];
    if (typesForCategory && typesForCategory.length > 0) {
      if (!typesForCategory.includes(fw.frameworkType)) return false;
    }

    return true;
  });
}


/* ============================================================
   CARD RENDERING
   ============================================================ */

function buildCard(fw) {
  const isSelected = state.selectedIds.includes(fw.id);
  const hasLocation = state.locationQuery.length > 0;
  const firstBranch = fw.branches[0];
  const isMeetingPlace = firstBranch.branch_type === 'meeting_place';

  // Build location/transport block based on whether user entered a location
  var branchHtml = '';
  if (hasLocation) {
    // Show recommended branch and transport (transport only for meeting_place)
    branchHtml += '<p class="card__branch">📍 ' + firstBranch.city + ' (הסניף הקרוב אליך)</p>';
    if (isMeetingPlace && firstBranch.transport_summary_card) {
      branchHtml += '<p class="card__transport">🚌 ' + firstBranch.transport_summary_card + '</p>';
    } else if (!isMeetingPlace && firstBranch.location_description) {
      branchHtml += '<p class="card__transport">' + firstBranch.location_description + '</p>';
    }
  } else {
    // No location: show cities (meeting_place) or location_description, no transport
    if (isMeetingPlace) {
      var cities = fw.branches.map(function(b) { return b.city; });
      var uniqueCities = cities.filter(function(c, i) { return cities.indexOf(c) === i; });
      branchHtml += '<p class="card__branch">📍 ' + uniqueCities.join(', ') + '</p>';
    } else {
      branchHtml += '<p class="card__branch">📍 ' + (firstBranch.location_description || firstBranch.city) + '</p>';
    }
  }

  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = fw.id;
  card.style.cursor = 'pointer';

  card.addEventListener('click', function(e) {
    if (e.target.closest('.card__compare-row')) return;
    window.location.href = 'framework.html?id=' + fw.id;
  });

  card.innerHTML = `
    <div class="card__header">
      <h3 class="card__title">${fw.name}</h3>
      <span class="card__badge">${fw.frameworkType}</span>
    </div>

    <p class="card__meta">
      <span class="card__meta-item">${fw.category}</span>
      <span class="card__meta-item">${fw.provider}</span>
    </p>

    <p class="card__description"><strong>למי זה מתאים:</strong> ${fw.short_description}</p>
    <p class="card__description"><strong>תיאור השירות:</strong> ${fw.service_summary}</p>

    ${branchHtml}

    <div class="card__compare-row">
      <label>
        <input
          type="checkbox"
          class="compare-checkbox"
          data-id="${fw.id}"
          ${isSelected ? 'checked' : ''}
          ${!isSelected && state.selectedIds.length >= 2 ? 'disabled' : ''}
        />
        הוסף להשוואה
      </label>
    </div>
  `;

  card.querySelector('.compare-checkbox').addEventListener('change', function() {
    handleCompareToggle(fw.id, this.checked);
  });

  return card;
}

function renderCards() {
  const results = getFilteredFrameworks();

  resultsCount.textContent = results.length + ' שירותים נמצאו';
  cardsContainer.innerHTML = '';

  if (results.length === 0) {
    cardsContainer.innerHTML = `
      <div class="empty-state">
        <p class="empty-state__title">לא נמצאו מסגרות שמתאימות לבחירה שלך כרגע</p>
        <p class="empty-state__hint">נסו לבחור תחום או סוג מסגרת אחר</p>
      </div>
    `;
    return;
  }

  results.forEach(function(fw) {
    cardsContainer.appendChild(buildCard(fw));
  });
}


/* ============================================================
   COMPARE BAR
   ============================================================ */

function updateCompareBar() {
  const count = state.selectedIds.length;

  if (count === 0) {
    compareBar.classList.remove('is-visible');
    compareBar.innerHTML = '';
    return;
  }

  const label = count === 1 ? 'בחרת שירות אחד' : 'בחרת ' + count + ' שירותים';

  compareBar.innerHTML = `
    <span class="compare-bar__label">${label}</span>
    <button class="compare-bar__btn" id="compare-btn">השווה</button>
  `;
  compareBar.classList.add('is-visible');

  document.getElementById('compare-btn').addEventListener('click', function() {
    localStorage.setItem('compareIds', JSON.stringify(state.selectedIds));
    window.location.href = 'compare.html';
  });
}

function handleCompareToggle(id, isChecked) {
  if (isChecked) {
    if (state.selectedIds.length < 2) state.selectedIds.push(id);
  } else {
    state.selectedIds = state.selectedIds.filter(function(i) { return i !== id; });
  }
  renderCards();
  updateCompareBar();
}


/* ============================================================
   CATEGORY CHIP CLICKS – multi-select, event delegation
   ============================================================ */

categoryChips.addEventListener('click', function(e) {
  const chip = e.target.closest('.chip');
  if (!chip) return;

  const value = chip.dataset.value;

  if (value === 'all') {
    state.selectedCategories = [];
    categoryChips.querySelectorAll('.chip').forEach(function(c) {
      c.classList.remove('chip--active');
    });
    chip.classList.add('chip--active');
    state.selectedFrameworksByCategory = {};
    renderFrameworkChips([]);
    return;
  }

  // Toggle
  const idx = state.selectedCategories.indexOf(value);
  if (idx === -1) {
    state.selectedCategories.push(value);
  } else {
    state.selectedCategories.splice(idx, 1);
  }

  // "הכל" active only when nothing selected
  categoryChips.querySelector('[data-value="all"]').classList.toggle(
    'chip--active', state.selectedCategories.length === 0
  );
  chip.classList.toggle('chip--active', state.selectedCategories.includes(value));

  // Show framework chips for all selected categories (grouped if >1)
  state.selectedFrameworksByCategory = {};
  renderFrameworkChips(state.selectedCategories);
});


/* ============================================================
   FRAMEWORK CHIP CLICKS – multi-select, event delegation
   ============================================================ */

frameworkChips.addEventListener('click', function(e) {
  const chip = e.target.closest('.chip');
  if (!chip) return;

  const value    = chip.dataset.value;
  const category = chip.dataset.category;
  if (!category) return; // group label elements have no data-category

  if (!state.selectedFrameworksByCategory[category]) {
    state.selectedFrameworksByCategory[category] = [];
  }
  const arr = state.selectedFrameworksByCategory[category];

  if (value === 'all') {
    // Clear selections for this category; activate its הכל
    state.selectedFrameworksByCategory[category] = [];
    frameworkChips.querySelectorAll('[data-category="' + category + '"]').forEach(function(c) {
      c.classList.remove('chip--active');
    });
    chip.classList.add('chip--active');
    return;
  }

  // Toggle this type within its category
  const idx = arr.indexOf(value);
  if (idx === -1) {
    arr.push(value);
  } else {
    arr.splice(idx, 1);
  }

  // Sync הכל for this category: active only when nothing specific is selected
  frameworkChips.querySelector('[data-value="all"][data-category="' + category + '"]')
    .classList.toggle('chip--active', arr.length === 0);
  chip.classList.toggle('chip--active', arr.includes(value));
});


/* ============================================================
   FILTER BUTTON
   ============================================================ */

document.getElementById('filter-submit-btn').addEventListener('click', function() {
  renderCards();
});


/* ============================================================
   SEARCH INPUT – updates state; render waits for button
   ============================================================ */

searchInput.addEventListener('input', function() {
  state.searchQuery = this.value.trim();
});


/* ============================================================
   LOCATION AUTOCOMPLETE
   ============================================================ */

locationInput.addEventListener('input', function() {
  const typed = this.value.trim();
  state.locationQuery = typed;
  localStorage.setItem('userLocation', typed);

  if (!typed) { closeSuggestions(); return; }

  const matches = locationSuggestions.filter(function(s) { return s.includes(typed); });
  if (matches.length === 0) { closeSuggestions(); return; }

  suggestionsList.innerHTML = '';
  matches.forEach(function(match) {
    const item = document.createElement('li');
    item.className = 'autocomplete-item';
    item.setAttribute('role', 'option');
    item.textContent = match;
    item.addEventListener('click', function() {
      locationInput.value = match;
      state.locationQuery = match;
      localStorage.setItem('userLocation', match);
      closeSuggestions();
    });
    suggestionsList.appendChild(item);
  });

  suggestionsList.classList.add('is-open');
  locationInput.setAttribute('aria-expanded', 'true');
});

document.addEventListener('click', function(e) {
  if (!locationInput.contains(e.target) && !suggestionsList.contains(e.target)) {
    closeSuggestions();
  }
});

function closeSuggestions() {
  suggestionsList.classList.remove('is-open');
  suggestionsList.innerHTML = '';
  locationInput.setAttribute('aria-expanded', 'false');
}


/* ============================================================
   INIT
   ============================================================ */

initCategoryChips();
if (state.locationQuery) {
  locationInput.value = state.locationQuery;
}
renderCards();
