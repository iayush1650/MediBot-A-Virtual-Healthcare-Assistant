// MediBot AI with Full Symptom Set Integration

function navigate(section) {
  const app = document.getElementById('app');
  app.innerHTML = '';

  if (section === 'home') {
    app.innerHTML = `
      <h2>Welcome to MediBot AI</h2>
      <p>Your AI-powered virtual health assistant.</p>
    `;
  }

  if (section === 'symptom') {
    app.innerHTML = `
      <h2>🩺 Symptom Checker</h2>
      <p style="margin-bottom: 1rem; color: #555;">Enter your symptoms below and get an instant suggestion.</p>
      <input id="symptomInput" type="text" placeholder="e.g. fever, headache, sore throat" />
      <br><button onclick="checkSymptom()">🔍 Check</button>
      <p id="symptomResult"></p>
    `;
  }

  if (section === 'reminder') {
    app.innerHTML = `
      <h2>Medicine Reminder</h2>
      <input id="medName" type="text" placeholder="Medicine Name" />
      <input id="medTime" type="time" />
      <br><button onclick="addReminder()">Add Reminder</button>
      <ul id="reminderList"></ul>
    `;
  }

  if (section === 'emergency') {
    app.innerHTML = `
      <h2>Emergency Info</h2>
      <p>📞 <strong>Ambulance:</strong> 102</p>
      <p>🏥 <strong>Nearest Hospital:</strong> Use GPS locator</p>
      <p>💊 <strong>First Aid:</strong> Clean wounds, apply antiseptic, seek help</p>
    `;
  }
}

// Inserted full 48 symptom logic from textdoc

function checkSymptom() {
  const input = document.getElementById('symptomInput').value.toLowerCase();
  let response = '';

  if (!input.trim()) {
    response = 'Please enter a symptom.';
  } else {
    // Common Everyday Symptoms
    if (input.includes('cold') || input.includes('sardi')) {
      response = 'Cold: Cetirizine, Steam Inhalation, Vitamin C';
    } else if (input.includes('cough') || input.includes('khansi')) {
      response = 'Cough: Benadryl, Honitus, Warm water gargle';
    } else if (input.includes('fever') || input.includes('bukhar')) {
      response = 'Fever: Paracetamol (Dolo 650), stay hydrated';
    } else if (input.includes('headache') || input.includes('sar dard')) {
      response = 'Headache: Saridon, Paracetamol, rest in a dark room';
    } else if (input.includes('throat') || input.includes('gala dard')) {
      response = 'Throat Pain: Betadine gargle, Strepsils';
    } else if (input.includes('fatigue') || input.includes('thakan')) {
      response = 'Fatigue: Revital, Vitamin B12, proper rest';
    } else if (input.includes('stomach') || input.includes('pet dard')) {
      response = 'Stomach Pain: Meftal Spas, Cyclopam';
    } else if (input.includes('gas') || input.includes('acidity')) {
      response = 'Gas/Acidity: Eno, Digene, Pantoprazole';
    } else if (input.includes('nausea') || input.includes('vomit') || input.includes('ulti')) {
      response = 'Nausea/Vomiting: Ondem, Domstal';
    } else if (input.includes('diarrhea') || input.includes('loose motion')) {
      response = 'Diarrhea: ORS, Norflox-TZ, hydration is key';
    } else if (input.includes('constipation')) {
      response = 'Constipation: Isabgol, Lactulose syrup';
    } else if (input.includes('body pain') || input.includes('muscle ache')) {
      response = 'Body Pain: Dolo 650, Volini spray';
    } else if (input.includes('rash') || input.includes('itching')) {
      response = 'Skin: Cetrizine, Calamine lotion';
    } else if (input.includes('dizziness') || input.includes('chakkar')) {
      response = 'Dizziness: ORS, rest, Vertin if prescribed';
    } else if (input.includes('eye') || input.includes('aankh')) {
      response = 'Eye Burning: Refresh Tears, Itone eye drops';
    } else if (input.includes('insomnia') || input.includes('neend')) {
      response = 'Insomnia: Melatonin (only if needed), avoid screens';
    } else if (input.includes('allergy')) {
      response = 'Allergy: Allegra, Montair LC';
    } else if (input.includes('burning pee') || input.includes('uti')) {
      response = 'UTI: Norflox-TZ, drink cranberry juice & water';

    // Moderate to Serious
    } else if (input.includes('high fever')) {
      response = 'High Fever: Doctor consult, may need antibiotics';
    } else if (input.includes('chest pain')) {
      response = 'Chest Pain: Emergency – Sorbitrate, ECG check needed';
    } else if (input.includes('breathing') || input.includes('shortness')) {
      response = 'Breathing Issues: Use Asthalin Inhaler, see doctor';
    } else if (input.includes('palpitations')) {
      response = 'Palpitations: Check BP, ECG. Use Metoprolol (if prescribed)';
    } else if (input.includes('dehydration')) {
      response = 'Dehydration: ORS, Electral powder, IV if severe';
    } else if (input.includes('persistent cough')) {
      response = 'Persistent Cough: TB/COVID test advised';
    } else if (input.includes('weight loss')) {
      response = 'Weight Loss: High protein diet, see physician';
    } else if (input.includes('swelling')) {
      response = 'Swelling: Check kidney/liver, reduce salt, Lasix';
    } else if (input.includes('blood in')) {
      response = 'Blood in stool/urine: Doctor consult urgently';
    } else if (input.includes('sugar') || input.includes('diabetes')) {
      response = 'Diabetes: Metformin, Insulin if high sugar';
    } else if (input.includes('joint pain')) {
      response = 'Joint Pain: Calcium, D3, painkillers';
    } else if (input.includes('vision')) {
      response = 'Vision Issues: Get eyes tested, eye drops if dry';
    } else if (input.includes('hearing')) {
      response = 'Hearing Loss: ENT consult, hearing test';
    } else if (input.includes('mental') || input.includes('depression')) {
      response = 'Mental Health: Escitalopram, Counseling';
    } else if (input.includes('seizure')) {
      response = 'Seizures: Levetiracetam, doctor consultation';
    } else if (input.includes('jaundice') || input.includes('yellow skin')) {
      response = 'Jaundice: Liv 52, proper liver rest';

    // Women
    } else if (input.includes('irregular period')) {
      response = 'Irregular Periods: Track cycle, consult gynecologist';
    } else if (input.includes('pcos') || input.includes('pcod')) {
      response = 'PCOS/PCOD: Lifestyle changes, hormonal tests';
    } else if (input.includes('lower abdomen')) {
      response = 'Lower Abdomen Pain: Meftal Spas, see gyne';
    } else if (input.includes('pregnancy')) {
      response = 'Pregnancy Symptoms: Take folic acid, consult doctor';
    } else if (input.includes('menopause')) {
      response = 'Menopause: Hot flashes – Vit E, HRT (if needed)';

    // Children
    } else if (input.includes('teething')) {
      response = 'Teething Pain: Zytee Gel, cold teether';
    } else if (input.includes('fever') && input.includes('rash')) {
      response = 'Measles/Chickenpox: Paracetamol, calamine lotion, doctor check';
    } else if (input.includes('worms')) {
      response = 'Worms: Albendazole (Zentel) after food';
    } else if (input.includes('vomiting') && input.includes('diarrhea')) {
      response = 'Vomit & Diarrhea: ORS, Zinc syrup, doctor consult';
    } else if (input.includes('asthma')) {
      response = 'Asthma: Inhaler, doctor supervision';
    } else {
      response = '❓ Symptom not recognized. Please consult a doctor';
    }
  }

  document.getElementById('symptomResult').innerText = `🔍 Result: ${response}`;
}

document.addEventListener('DOMContentLoaded', () => navigate('home'));

function addReminder() {
  const med = document.getElementById('medName').value;
  const time = document.getElementById('medTime').value;
  const list = document.getElementById('reminderList');
  const item = document.createElement('li');
  item.innerText = `${med} at ${time}`;
  list.appendChild(item);

  const now = new Date();
  const [hours, minutes] = time.split(":").map(Number);
  const reminderTime = new Date();
  reminderTime.setHours(hours);
  reminderTime.setMinutes(minutes);
  reminderTime.setSeconds(0);
  reminderTime.setMilliseconds(0);

  const timeDiff = reminderTime - now;
  if (timeDiff > 0) {
    setTimeout(() => {
      showNotification(`Time to take your medicine: ${med}`);
    }, timeDiff);
  } else {
    alert("Reminder time must be in the future.");
  }
}

function requestNotificationPermission() {
  if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      if (permission !== "granted") {
        alert("You must enable notifications to receive medicine reminders.");
      }
    });
  }
}

function showNotification(message) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("MediBot AI Reminder", {
      body: message,
      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
    });
  } else {
    alert(message);
  }
}

// Load default section
navigate('home');

