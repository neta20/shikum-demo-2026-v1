/* ============================================================
   COMPARE PAGE – compare.js
   Reads selected IDs from localStorage, finds matching
   frameworks from main.js data, and renders the comparison.
   ============================================================ */

const compareMain = document.getElementById('compare-main');

/* ---- Fields to compare (in display order) ---- */

const COMPARE_FIELDS = [
  { key: 'frameworkType',     label: 'סוג מסגרת' },
  { key: 'provider',          label: 'מופעל על ידי' },
  { key: 'fit',               label: 'למי זה מתאים' },
  { key: 'whatHappens',       label: 'מה עושים בפועל' },
  { key: 'howItWorks',        label: 'איך זה עובד' },
  { key: 'nearestBranchLabel',label: 'הסניף הקרוב / אזור הליווי' },
  { key: 'transportSummary',  label: 'נגישות והגעה' }
];


/* ---- Load selected IDs from localStorage ---- */

function getSelectedFrameworks() {
  try {
    const raw = localStorage.getItem('compareIds');
    const ids  = raw ? JSON.parse(raw) : [];
    return ids
      .map(function(id) { return frameworks.find(function(f) { return f.id === id; }); })
      .filter(Boolean); // remove any unmatched
  } catch (e) {
    return [];
  }
}

const selected = getSelectedFrameworks();


/* ---- Render: not enough selected ---- */

function renderEmpty() {
  compareMain.innerHTML = `
    <div class="compare-empty">
      <span class="compare-empty__icon">🔍</span>
      <p class="compare-empty__title">לא נבחרו שירותים להשוואה</p>
      <p class="compare-empty__text">
        כדי להשוות, חזרו לרשימה ובחרו שירות אחד או שניים באמצעות תיבת הסימון "הוסף להשוואה".
      </p>
      <a href="index.html" class="compare-empty__link">חזרה לרשימה</a>
    </div>
  `;
}


/* ---- Render: one framework only ---- */

function renderSingle(fw) {
  // Show a card-style summary with a note to add a second framework
  compareMain.innerHTML = `
    <div class="compare-empty">
      <span class="compare-empty__icon">↕️</span>
      <p class="compare-empty__title">בחרת שירות אחד</p>
      <p class="compare-empty__text">
        ניתן להשוות עד שני שירותים. חזרו לרשימה והוסיפו שירות נוסף.
      </p>
      <a href="index.html" class="compare-empty__link">הוסיפו שירות נוסף</a>
    </div>
  `;
}


/* ---- Render: full comparison of 2 frameworks ---- */

function renderComparison(fwA, fwB) {
  const fragment = document.createDocumentFragment();

  // -- Name badges --
  const names = document.createElement('div');
  names.className = 'compare-names';
  names.innerHTML = `
    <div class="compare-name-badge fw-a">
      <span class="compare-name-badge__dot"></span>
      <span>${fwA.name}</span>
    </div>
    <div class="compare-name-badge fw-b">
      <span class="compare-name-badge__dot"></span>
      <span>${fwB.name}</span>
    </div>
  `;
  fragment.appendChild(names);

  // -- One topic block per field --
  COMPARE_FIELDS.forEach(function(field) {
    const topic = document.createElement('div');
    topic.className = 'compare-topic';

    const title = document.createElement('p');
    title.className = 'compare-topic__title';
    title.textContent = field.label;
    topic.appendChild(title);

    [fwA, fwB].forEach(function(fw, index) {
      const entry = document.createElement('div');
      entry.className = 'compare-entry ' + (index === 0 ? 'fw-a' : 'fw-b');

      entry.innerHTML =
        '<span class="compare-entry__label">' + fw.name + '</span>' +
        '<span class="compare-entry__text">'  + (fw[field.key] || '—') + '</span>';

      topic.appendChild(entry);
    });

    fragment.appendChild(topic);
  });

  compareMain.appendChild(fragment);
}


/* ---- Init ---- */

if (selected.length === 0) {
  renderEmpty();
} else if (selected.length === 1) {
  renderSingle(selected[0]);
} else {
  renderComparison(selected[0], selected[1]);
}
