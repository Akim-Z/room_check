/* ============================================================
== РЕДАГУЙТЕ ЦЕЙ БЛОК ==
*/
const UNI_START = "08:00";
const UNI_END = "22:00"; 

/* ============================================================
   == !!! ЗАЛИШТЕ ВАШ ВЕЛИКИЙ МАСИВ RAUMDATEN ТУТ !!! ==
   ============================================================
*/
// Приклад, щоб файл працював (замініть це вашим великим об'єктом)
const raumDaten = {
  // === SI.0001 (з фото, прив'язано до сітки) ===
  "SI.0001": {
    "Montag": [
      {"fach": "Programmierung 1", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "14:30", "ende": "16:00"},
      {"fach": "Programmierung 1", "start": "16:30", "ende": "18:00"}
    ],
    "Dienstag": [
      {"fach": "Informatik für Maschinenbau", "start": "10:00", "ende": "11:30"},
      {"fach": "Informatik für Maschinenbau", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "16:30", "ende": "18:00"}
    ],
    "Mittwoch": [
      {"fach": "Programmierung 1", "start": "10:00", "ende": "11:30"},
      {"fach": "Tutorium: Programmierung 1", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "18:30", "ende": "20:00"}
    ],
    "Donnerstag": [
      {"fach": "Software Architektur", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "16:30", "ende": "18:00"}
    ],
    "Freitag": [
      {"fach": "Tutorium: Programmierung 1", "start": "08:00", "ende": "09:30"},
      {"fach": "Programmierung 1", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "14:30", "ende": "16:00"}
    ]
  },
  
  // === SI.0002 (з фото, прив'язано до сітки) ===
  "SI.0002": {
    "Montag": [
      {"fach": "Programmierung 1", "start": "14:30", "ende": "16:00"}
    ],
    "Dienstag": [
      {"fach": "Informatik für Maschinenbau", "start": "12:15", "ende": "13:45"}
    ],
    "Mittwoch": [
      {"fach": "Tutorium: Programmierung 1", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "18:30", "ende": "20:00"}
    ],
    "Donnerstag": [
      {"fach": "Höhere Regelungstechnik", "start": "10:00", "ende": "11:30"},
      {"fach": "Software Architektur", "start": "14:30", "ende": "16:00"},
      {"fach": "Programmierung 1", "start": "16:30", "ende": "18:00"}
    ],
    "Freitag": [
      {"fach": "Tutorium: Programmierung 1", "start": "08:00", "ende": "09:30"},
      {"fach": "Programmierung 1", "start": "10:00", "ende": "11:30"},
      {"fach": "Programmierung 1", "start": "14:30", "ende": "16:00"}
    ]
  },
  
  // === SI.0003 (з фото, прив'язано до сітки) ===
  "SI.0003": {
    "Montag": [
      {"fach": "Programmierung 1", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "16:30", "ende": "18:00"},
      {"fach": "Programmierung 1", "start": "18:30", "ende": "20:00"}
    ],
    "Dienstag": [
      {"fach": "Informatik für Maschinenbau", "start": "10:00", "ende": "11:30"},
      {"fach": "Informatik für Maschinenbau", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "16:30", "ende": "18:00"}
    ],
    "Mittwoch": [
      {"fach": "Seminar", "start": "10:00", "ende": "11:30"},
      {"fach": "Programmierung 1", "start": "14:30", "ende": "16:00"}
    ],
    "Donnerstag": [
      {"fach": "Programmierung 1", "start": "12:15", "ende": "13:45"},
      {"fach": "Programmierung 1", "start": "14:30", "ende": "16:00"}
    ],
    "Freitag": [
      {"fach": "Programmierung 1", "start": "12:15", "ende": "13:45"}
    ]
  },
  
  // === SI.0024 (з фото, прив'язано до сітки) ===
  "SI.0024": {
    "Montag": [],
    "Dienstag": [
      {"fach": "Parallele u. verteilte Algorithmen", "start": "14:30", "ende": "16:00"},
      {"fach": "Parallele u. verteilte Algorithmen", "start": "16:30", "ende": "18:00"}
    ],
    "Mittwoch": [
      {"fach": "Interaktive grafische Systeme", "start": "08:00", "ende": "09:30"},
      {"fach": "Interaktive grafische Systeme", "start": "10:00", "ende": "11:30"},
      {"fach": "Systemnahe Programme", "start": "12:15", "ende": "13:45"}
    ],
    "Donnerstag": [
      {"fach": "Verteilte Systeme", "start": "12:15", "ende": "13:45"}
    ],
    "Freitag": [
      {"fach": "Verteilte Systeme", "start": "12:15", "ende": "13:45"}
    ]
  },
  
  // === SI.0025 (з фото, прив'язано до сітки) ===
  "SI.0025": {
    "Montag": [],
    "Dienstag": [
      {"fach": "Betriebssysteme", "start": "10:00", "ende": "11:30"},
      {"fach": "Mobile Application Development", "start": "14:30", "ende": "16:00"},
      {"fach": "Mobile Application Development", "start": "16:30", "ende": "18:00"}
    ],
    "Mittwoch": [
      {"fach": "Embedded Systems", "start": "10:00", "ende": "11:30"},
      {"fach": "Systems Engineering", "start": "14:30", "ende": "16:00"}
    ],
    "Donnerstag": [
      {"fach": "Betriebssysteme", "start": "10:00", "ende": "11:30"},
      {"fach": "Betriebssysteme", "start": "14:30", "ende": "16:00"},
      {"fach": "Internet of Things", "start": "16:30", "ende": "18:00"}
    ],
    "Freitag": [
      {"fach": "Embedded Systems", "start": "12:15", "ende": "13:45"}
    ]
  },
  
  // === SI.0201 (з фото, прив'язано до сітки) ===
  "SI.0201": {
    "Montag": [
      {"fach": "Softwareentwicklung II", "start": "10:00", "ende": "11:30"},
      {"fach": "WebEngineering", "start": "12:15", "ende": "13:45"}
    ],
    "Dienstag": [
      {"fach": "Embedded Systems", "start": "10:00", "ende": "11:30"},
      {"fach": "Entwurf v. Sozio-Techn. Sys.", "start": "12:15", "ende": "13:45"},
      {"fach": "Rechnernetze", "start": "16:30", "ende": "18:00"},
      {"fach": "Rechnernetze", "start": "18:30", "ende": "20:00"}
    ],
    "Mittwoch": [
      {"fach": "WebEngineering", "start": "08:00", "ende": "09:30"},
      {"fach": "Mobile Application Development", "start": "12:15", "ende": "13:45"},
      {"fach": "WebEngineering", "start": "16:30", "ende": "18:00"},
      {"fach": "Systemnahe Programmierung", "start": "18:30", "ende": "20:00"}
    ],
    "Donnerstag": [
      {"fach": "Embedded Systems", "start": "08:00", "ende": "09:30"},
      {"fach": "IT-Sicherheit", "start": "10:00", "ende": "11:30"},
      {"fach": "IT-Sicherheit", "start": "12:15", "ende": "13:45"}
    ],
    "Freitag": [
      {"fach": "Compilerbau", "start": "10:00", "ende": "11:30"},
      {"fach": "IT für Maschinenbauer", "start": "12:15", "ende": "13:45"}
    ]
  },
  
  // === SI.0202 (з фото, прив'язано до сітки) ===
  "SI.0202": {
    "Montag": [
      {"fach": "Digitale Welten", "start": "10:00", "ende": "11:30"},
      {"fach": "Agile Entwicklung", "start": "12:15", "ende": "13:45"}
    ],
    "Dienstag": [
      {"fach": "Embedded Systems", "start": "08:00", "ende": "09:30"},
      {"fach": "Wiss. Arbeiten", "start": "12:15", "ende": "13:45"},
      {"fach": "Digitalisierung v. Geschäftsproz.", "start": "16:30", "ende": "18:00"}
    ],
    "Mittwoch": [
      {"fach": "KI-Systeme", "start": "10:00", "ende": "11:30"}
    ],
    "Donnerstag": [],
    "Freitag": [
      {"fach": "Aktive Bauelemente", "start": "12:15", "ende": "13:45"},
      {"fach": "Grundlagen Elektrotechnik", "start": "14:30", "ende": "16:00"}
    ]
  },
  
  // === SI.0203 (з фото, прив'язано до сітки) ===
  "SI.0203": {
    "Montag": [
      {"fach": "Informationsmanagement", "start": "12:15", "ende": "13:45"},
      {"fach": "Grundlagen agiler Entwicklung", "start": "14:30", "ende": "16:00"}
    ],
    "Dienstag": [
      {"fach": "Kameratechnik", "start": "14:30", "ende": "16:00"}
    ],
    "Mittwoch": [
      {"fach": "Systemzeit", "start": "10:00", "ende": "11:30"}
    ],
    "Donnerstag": [],
    "Freitag": [
      {"fach": "Begleitete Praxisphase", "start": "10:00", "ende": "11:30"},
      {"fach": "Seminar DKE", "start": "12:15", "ende": "13:45"}
    ]
  },
};

// Карта днів тижня
const wochentagMap = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

// Елементи DOM
const suchfeld = document.getElementById('raumSuche');
const tagesWahlButtons = document.querySelectorAll('.day-btn'); 
const ergebnisBox = document.getElementById('ergebnisAnzeige');
const raumListeBox = document.getElementById('raumListe');
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

let gewaehlterTagKey = "Montag"; 

// --- 0. Логіка: Перемикання теми (Без змін) ---
function setzeTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
        themeLabel.textContent = "Helles Design"; 
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.checked = false;
        themeLabel.textContent = "Dunkles Design"; 
    }
}
themeToggle.addEventListener('change', () => {
    const theme = themeToggle.checked ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    setzeTheme(theme);
});


// --- 1. Логіка: Визначення поточного статусу 
function getRaumStatusJetzt(raumName) {
  const jetzt = new Date();
  const heuteIndex = jetzt.getDay();
  if (heuteIndex === 0 || heuteIndex === 6) return 'frei'; 
  const heuteKey = wochentagMap[heuteIndex];
  
  const jetztString = jetzt.getHours().toString().padStart(2, '0') + ':' + 
                     jetzt.getMinutes().toString().padStart(2, '0');

  if (!raumDaten[raumName] || !raumDaten[raumName][heuteKey]) return 'frei'; 
  
  const tagesPlan = raumDaten[raumName][heuteKey];
  for (const termin of tagesPlan) {
    if (jetztString >= termin.start && jetztString < termin.ende) {
      return 'besetzt';
    }
  }
  return 'frei'; 
}

// --- 2. Логіка: Оновлення статусів в реальному часі 
function updateAlleStatusPunkte() {
    const alleEintrage = document.querySelectorAll('.listen-eintrag');
    alleEintrage.forEach(eintrag => {
        const raumName = eintrag.dataset.raumName;
        const status = getRaumStatusJetzt(raumName);
        const punkt = eintrag.querySelector('.status-punkt');
        
        if (punkt) {
            punkt.classList.remove('frei', 'besetzt');
            punkt.classList.add(status);
        }
    });
}

// --- 3. Логіка: Генерація списку кімнат 
function populateRaumListe() {
  let htmlOutput = '';
  const alleRaume = Object.keys(raumDaten).sort();

  for (const raumName of alleRaume) {
    const status = getRaumStatusJetzt(raumName);
    htmlOutput += `
      <div class="listen-eintrag" data-raum-name="${raumName}">
        <span class="status-punkt ${status}"></span>
        <span class="listen-eintrag-name">${raumName}</span>
      </div>
    `;
  }
  raumListeBox.innerHTML = htmlOutput;
  
  document.querySelectorAll('.listen-eintrag').forEach(eintrag => {
    eintrag.addEventListener('click', () => {
      const raumName = eintrag.dataset.raumName;
      suchfeld.value = raumName; 
      showRaumSchedule(); 
      filterRaumListe(); 
      ergebnisBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// --- 4. Логіка: Фільтрація списку 
function filterRaumListe() {
  const anfrage = suchfeld.value.trim().toUpperCase();
  const alleEintrage = document.querySelectorAll('.listen-eintrag');
  let found = false;

  alleEintrage.forEach(eintrag => {
    const raumName = eintrag.dataset.raumName.toUpperCase();
    if (raumName.includes(anfrage)) {
      eintrag.style.display = 'flex';
      found = true;
    } else {
      eintrag.style.display = 'none';
    }
  });

  const placeholderText = "Raum aus der Liste wählen oder Suche starten.";
  const errorText = '<p class="placeholder" style="color: var(--status-besetzt-text);">Raum nicht gefunden.</p>';

  if (!found && anfrage.length > 0) {
     ergebnisBox.innerHTML = errorText;
     ergebnisBox.classList.remove('expanded');
  } else if (anfrage.length === 0) {
     ergebnisBox.innerHTML = `<p class="placeholder">${placeholderText}</p>`;
     ergebnisBox.classList.remove('expanded');
  } else if (found && anfrage.length > 0) {
      const firstVisible = document.querySelector('.listen-eintrag[style="display: flex;"]');
      if (firstVisible) {
          suchfeld.value = firstVisible.dataset.raumName;
          showRaumSchedule();
          suchfeld.value = anfrage; 
      }
  }
}

// --- 5. НОВІ ДОПОМІЖНІ ФУНКЦІЇ ---

/**
 * Перетворює рядок "HH:MM" у об'єкт Date для сьогодні.
 * @param {string} zeitString - Час у форматі "HH:MM".
 * @returns {Date} - Об'єкт Date.
 */
function parseZeit(zeitString) {
    const [stunde, minute] = zeitString.split(':').map(Number);
    const datum = new Date();
    datum.setHours(stunde, minute, 0, 0);
    return datum;
}

/**
 * Форматує загальну кількість хвилин у рядок "X Std. Y Min.".
 * @param {number} totalMinuten - Загальна кількість хвилин.
 * @returns {string} - Відформатований рядок.
 */
function formatMinuten(totalMinuten) {
    if (isNaN(totalMinuten) || totalMinuten < 0) return "";
    
    const std = Math.floor(totalMinuten / 60);
    const min = Math.round(totalMinuten % 60);
    
    let parts = [];
    if (std > 0) parts.push(`${std} Std.`);
    if (min > 0) parts.push(`${min} Min.`);
    if (parts.length === 0) return "weniger als 1 Min."; // Менше хвилини
    
    return parts.join(' ');
}

// --- 6. Логіка: Відображення розкладу 
function showRaumSchedule() {
  const raumAnfrage = suchfeld.value.trim().toUpperCase();
  const tagAnfrage = gewaehlterTagKey;

  // Очищуємо класи перед початком
  ergebnisBox.classList.remove('expanded', 'no-details');

  if (raumAnfrage.length === 0) {
    ergebnisBox.innerHTML = '<p class="placeholder">Raum aus der Liste wählen oder Suche starten.</p>';
    return;
  }
  if (!raumDaten.hasOwnProperty(raumAnfrage)) {
    ergebnisBox.innerHTML = '<p class="placeholder" style="color: var(--status-besetzt-text);">Raum nicht gefunden.</p>';
    return;
  }

  const tagesPlan = raumDaten[raumAnfrage][tagAnfrage];
  let headerHTML = '';
  let contentHTML = '';
  
  const jetzt = new Date();
  const heuteIndex = jetzt.getDay();
  const heuteKey = (heuteIndex >= 1 && heuteIndex <= 5) ? wochentagMap[heuteIndex] : null;

  // === A. Генеруємо заголовок 
  let statusText = '';
  let statusClass = 'neutral';
  let statusPunkt = '';

  if (tagAnfrage === heuteKey) {
    // === ЛОГІКА ДИНАМІЧНОГО ЧАСУ ===
    let aktuellerStatus = 'frei';
    let aktuellerTermin = null;
    let naechsterTermin = null;

    // 1. Знаходимо поточний та наступний термін
    for (const termin of tagesPlan) {
        const startZeit = parseZeit(termin.start);
        const endeZeit = parseZeit(termin.ende);

        if (jetzt >= startZeit && jetzt < endeZeit) {
            aktuellerStatus = 'besetzt';
            aktuellerTermin = termin;
        } else if (startZeit > jetzt && naechsterTermin === null) {
            naechsterTermin = termin;
        }
    }
    
    // 2. Формуємо текстовий рядок
    if (aktuellerStatus === 'besetzt') {
        const endeZeit = parseZeit(aktuellerTermin.ende);
        const diffMinuten = (endeZeit - jetzt) / (1000 * 60);
        statusText = `Besetzt. Frei in ${formatMinuten(diffMinuten)}`;
        statusClass = 'besetzt';
        statusPunkt = '<span class="status-punkt besetzt"></span>';
    } else { // Статус 'frei'
        statusClass = 'frei';
        statusPunkt = '<span class="status-punkt frei"></span>';
        if (naechsterTermin) {
            const startZeit = parseZeit(naechsterTermin.start);
            const diffMinuten = (startZeit - jetzt) / (1000 * 60);
            statusText = `Frei. Besetzt in ${formatMinuten(diffMinuten)}`;
        } else {
            const uniEndeZeit = parseZeit(UNI_END);
            const diffMinuten = (uniEndeZeit - jetzt) / (1000 * 60);
            statusText = (diffMinuten > 0) ? `Frei für ${formatMinuten(diffMinuten)}` : `Frei für heute`;
        }
    }
  } else {
    // Статус для іншого дня
    statusText = `Zeitplan für: ${tagAnfrage}`;
    statusClass = 'neutral';
    statusPunkt = ''; // Немає точки для майбутніх днів
  }

  // Збираємо HTML заголовка
  headerHTML = `
    <div class="status-header details-trigger">
      <div class="status-info">
        ${statusPunkt}
        <span class="status-text ${statusClass}">${statusText}</span>
      </div>
      <span class="toggle-icon">▼</span> 
    </div>
  `;

  // === B. Генеруємо прихований контент (Розклад) ===
  if (!tagesPlan || tagesPlan.length === 0) {
    // Якщо кімната вільна весь день
    ergebnisBox.classList.add('no-details'); // Додаємо клас, щоб приховати стрілку
    // Переписуємо заголовок на простіший
    headerHTML = `
      <div class="status-header">
        <div class="status-info">
          <span class="status-punkt frei"></span>
          <span class="status-text frei">Raum ganztägig frei</span>
        </div>
      </div>
    `;
  } else {
    // Якщо розклад є, генеруємо його (логіка інвертування)
    const vollerPlan = [];
    let letztesEnde = UNI_START;
    for (const termin of tagesPlan) {
      if (termin.start > letztesEnde) {
        vollerPlan.push({ type: 'frei', start: letztesEnde, ende: termin.start });
      }
      vollerPlan.push({ type: 'besetzt', ...termin });
      letztesEnde = termin.ende;
    }
    if (letztesEnde < UNI_END) {
      vollerPlan.push({ type: 'frei', start: letztesEnde, ende: UNI_END });
    }

    // Генеруємо HTML для контенту
    let planHTML = '<ul class="stundenplan">';
    for (const slot of vollerPlan) {
      if (slot.type === 'frei') {
        planHTML += `
          <li class="slot-frei">
            <span>🟢 Frei</span>
            <span class="zeit">${slot.start} - ${slot.ende}</span>
          </li>
        `;
      } else { 
        planHTML += `
          <li class="slot-besetzt">
            <span>${slot.fach}</span>
            <strong>${slot.start} - ${slot.ende}</strong>
          </li>
        `;
      }
    }
    planHTML += '</ul>';
    contentHTML = `<div class="details-content">${planHTML}</div>`;
  }
  
  // === C. Збираємо все разом ===
  ergebnisBox.innerHTML = headerHTML + contentHTML;
}


// --- 7. Ініціалізація сторінки ---
function init() {
  // Завантажуємо тему
  const currentTheme = localStorage.getItem('theme') || 'dark';
  setzeTheme(currentTheme);

  // Встановлюємо день
  const heuteIndex = new Date().getDay();
  const tagKey = (heuteIndex >= 1 && heuteIndex <= 5) ? wochentagMap[heuteIndex] : "Montag";
  gewaehlterTagKey = tagKey;
  tagesWahlButtons.forEach(btn => btn.classList.remove('selected'));
  const startBtn = document.querySelector(`.day-btn[data-day-key="${tagKey}"]`);
  if (startBtn) startBtn.classList.add('selected');

  // Генеруємо список
  populateRaumListe();
  
  // Очищуємо поля
  suchfeld.value = "";
  ergebnisBox.innerHTML = `<p class="placeholder">Raum aus der Liste wählen oder Suche starten.</p>`;
  
  // --- Додаємо слухачі ---
  suchfeld.addEventListener('input', filterRaumListe); 
  
  tagesWahlButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          tagesWahlButtons.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          gewaehlterTagKey = btn.dataset.dayKey;
          showRaumSchedule(); 
          ergebnisBox.classList.remove('expanded'); // Згортаємо при зміні дня
      });
  });

  // НОВИЙ СЛУХАЧ для розгортання
  ergebnisBox.addEventListener('click', (e) => {
      // Перевіряємо, чи клікнули на заголовок, і чи є що розгортати
      if (e.target.closest('.details-trigger') && !ergebnisBox.classList.contains('no-details')) {
          ergebnisBox.classList.toggle('expanded');
      }
  });

  // Запускаємо оновлення в реальному часі
  setInterval(updateAlleStatusPunkte, 30000); // 30 секунд
}

// Запускаємо
init();