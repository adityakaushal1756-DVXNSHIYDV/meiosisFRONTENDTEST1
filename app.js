const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.page-section');
const themeToggle = document.getElementById('themeToggle');
const tabs = document.querySelectorAll('.tab');
const doseButtons = document.querySelectorAll('[data-dose-btn]');
const doseCards = document.querySelectorAll('[data-dose-card]');

const detailModal = document.getElementById('detailModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const toastStack = document.getElementById('toastStack');
const appointmentsList = document.getElementById('appointmentsList');
const appointmentFilterUpcomingBtn = document.getElementById('appointmentFilterUpcoming');
const appointmentFilterPastBtn = document.getElementById('appointmentFilterPast');
const appointmentFilterCancelledBtn = document.getElementById('appointmentFilterCancelled');
const appointmentListAllBtn = document.getElementById('appointmentListAllBtn');
const upcomingCount = document.getElementById('upcomingCount');
const homeUpcomingDoctor = document.getElementById('homeUpcomingDoctor');
const homeUpcomingDateTime = document.getElementById('homeUpcomingDateTime');
const homeUpcomingHospital = document.getElementById('homeUpcomingHospital');
const homeUpcomingMeta = document.getElementById('homeUpcomingMeta');
const homeViewDetailsBtn = document.getElementById('homeViewDetailsBtn');
const homeRescheduleBtn = document.getElementById('homeRescheduleBtn');
const homeUpcomingTimeline = document.getElementById('homeUpcomingTimeline');
const healthSlopeGraph = document.getElementById('healthSlopeGraph');
const slopeTooltip = document.getElementById('slopeTooltip');
const nfcCardStatus = document.getElementById('nfcCardStatus');
const nfcEmergencyStatus = document.getElementById('nfcEmergencyStatus');
const nfcToggleCardBtn = document.querySelector('#nfc [data-action="disable-card"]');
const nfcLastUsedEl = document.getElementById('nfcLastUsed');
const nfcLinkedHospitalsEl = document.getElementById('nfcLinkedHospitals');
const nfcLinkedDoctorsEl = document.getElementById('nfcLinkedDoctors');
const nfcCardsStripEl = document.getElementById('nfcCardsStrip');
const nfcIdentityUrlEl = document.getElementById('nfcIdentityUrl');
const nfcCardPasscodeEl = document.getElementById('nfcCardPasscode');

const medsDate = document.getElementById('medsDate');
const medProgressValue = document.getElementById('medProgressValue');
const medProgressBar = document.getElementById('medProgressBar');
const nextDoseText = document.getElementById('nextDoseText');
const medplanSection = document.getElementById('medplan');
const medplanCompletionBanner = document.getElementById('medplanCompletionBanner');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarSearchInput = document.getElementById('sidebarSearchInput');
const sidebarSearchBtn = document.getElementById('sidebarSearchBtn');
const profileNameEl = document.getElementById('profileName');
const profileEmailEl = document.getElementById('profileEmail');
const profilePhoneEl = document.getElementById('profilePhone');
const profileAddressEl = document.getElementById('profileAddress');
const profileLanguageEl = document.getElementById('profileLanguage');
const dashboardGreeting = document.getElementById('dashboardGreeting');
const nfcUniversalCodeEl = document.getElementById('nfcUniversalCode');
const settingsUniversalCodeEl = document.getElementById('settingsUniversalCode');
const editUniversalIdBtn = document.getElementById('editUniversalIdBtn');
const weatherLocateBtn = document.getElementById('weatherLocateBtn');
const weatherRefreshBtn = document.getElementById('weatherRefreshBtn');
const weatherUpdatedAt = document.getElementById('weatherUpdatedAt');
const weatherLocation = document.getElementById('weatherLocation');
const weatherSummary = document.getElementById('weatherSummary');
const weatherIcon = document.getElementById('weatherIcon');
const weatherTemp = document.getElementById('weatherTemp');
const weatherFeelsLike = document.getElementById('weatherFeelsLike');
const weatherCondition = document.getElementById('weatherCondition');
const weatherSunrise = document.getElementById('weatherSunrise');
const weatherSunset = document.getElementById('weatherSunset');
const weatherDaylight = document.getElementById('weatherDaylight');
const weatherUvNow = document.getElementById('weatherUvNow');
const weatherUvMax = document.getElementById('weatherUvMax');
const weatherHumidity = document.getElementById('weatherHumidity');
const weatherWind = document.getElementById('weatherWind');
const weatherPressure = document.getElementById('weatherPressure');
const weatherVisibility = document.getElementById('weatherVisibility');
const weatherPollen = document.getElementById('weatherPollen');
const weatherPm25 = document.getElementById('weatherPm25');
const weatherPm10 = document.getElementById('weatherPm10');
const weatherAdvice = document.getElementById('weatherAdvice');
const weatherHourly = document.getElementById('weatherHourly');
const weatherDaily = document.getElementById('weatherDaily');
const sunTimeline = document.getElementById('sunTimeline');
const sunNowTime = document.getElementById('sunNowTime');
const kpiBp = document.getElementById('kpiBp');
const kpiGlucose = document.getElementById('kpiGlucose');
const kpiWeight = document.getElementById('kpiWeight');
const kpiAdherence = document.getElementById('kpiAdherence');
const bpChart = document.getElementById('bpChart');
const glucoseChart = document.getElementById('glucoseChart');
const weightChart = document.getElementById('weightChart');
const adherencePie = document.getElementById('adherencePie');
const analyticsFocusTitle = document.getElementById('analyticsFocusTitle');
const analyticsFocusText = document.getElementById('analyticsFocusText');
const analyticsTooltip = document.getElementById('analyticsTooltip');
const messagesDoctorList = document.getElementById('messagesDoctorList');
const messagesChatTitle = document.getElementById('messagesChatTitle');
const messagesChatMeta = document.getElementById('messagesChatMeta');
const messagesThread = document.getElementById('messagesThread');
const messagesInput = document.getElementById('messagesInput');
const messagesSendBtn = document.getElementById('messagesSendBtn');
const networkDoctorList = document.getElementById('networkDoctorList');
const networkCareTeamCount = document.getElementById('networkCareTeamCount');
const networkConnectedCount = document.getElementById('networkConnectedCount');

const APPOINTMENTS_STORAGE_KEY = 'meiosis_patient_appointments_v1';
const UNIVERSAL_ID_STORAGE_KEY = 'meiosis_universal_id_v1';
const MEDICATION_STATE_STORAGE_KEY = 'meiosis_medication_state_v1';
const CUSTOM_DOCTORS_STORAGE_KEY = 'meiosis_custom_doctors_v1';

const appointmentDefaults = {
  'apt-000': {
    doctor: 'Dr. Neha Kapoor',
    specialty: 'General Medicine',
    hospital: 'City General',
    mode: 'In-person',
    purpose: 'Post-viral follow-up',
    scheduledDate: '2026-02-24',
    scheduledTime: '09:40 AM',
    status: 'Completed',
    slotId: 'AP-3290',
    slots: []
  },
  'apt-001': {
    doctor: 'Dr. Sarah Mitchell',
    specialty: 'Internal Medicine',
    hospital: 'City General',
    mode: 'In-person',
    purpose: 'Hypertension review',
    scheduledDate: '2026-03-05',
    scheduledTime: '10:30 AM',
    status: 'Confirmed',
    slotId: 'AP-3347',
    slots: [
      { date: '2026-03-06', time: '09:20 AM', mode: 'In-person', wait: '18 mins', location: 'Tower B, Room 204', token: 'AP-4092' },
      { date: '2026-03-06', time: '11:10 AM', mode: 'In-person', wait: '24 mins', location: 'Tower B, Room 204', token: 'AP-4098' },
      { date: '2026-03-07', time: '05:40 PM', mode: 'In-person', wait: '10 mins', location: 'Tower B, Room 208', token: 'AP-4111' },
      { date: '2026-03-08', time: '10:00 AM', mode: 'Teleconsult', wait: '3 mins', location: 'Virtual OPD', token: 'AP-4132' }
    ]
  },
  'apt-002': {
    doctor: 'Dr. Arjun Rao',
    specialty: 'Cardiology',
    hospital: 'City General',
    mode: 'In-person',
    purpose: 'BP variability follow-up',
    scheduledDate: '2026-03-09',
    scheduledTime: '11:00 AM',
    status: 'Confirmed',
    slotId: 'AP-3391',
    slots: [
      { date: '2026-03-10', time: '08:45 AM', mode: 'In-person', wait: '20 mins', location: 'Cardio Block, Room 12', token: 'AP-5071' },
      { date: '2026-03-10', time: '12:30 PM', mode: 'In-person', wait: '12 mins', location: 'Cardio Block, Room 12', token: 'AP-5079' },
      { date: '2026-03-11', time: '04:15 PM', mode: 'Teleconsult', wait: '5 mins', location: 'Virtual OPD', token: 'AP-5093' }
    ]
  },
  'apt-003': {
    doctor: 'Dr. Emily Chen',
    specialty: 'Endocrinology',
    hospital: 'Nova Care',
    mode: 'Teleconsult',
    purpose: 'HbA1c review',
    scheduledDate: '2026-03-12',
    scheduledTime: '06:00 PM',
    status: 'Pending',
    slotId: 'AP-3422',
    slots: [
      { date: '2026-03-13', time: '09:30 AM', mode: 'Teleconsult', wait: '4 mins', location: 'Virtual Endocrine Desk', token: 'AP-6038' },
      { date: '2026-03-13', time: '07:10 PM', mode: 'Teleconsult', wait: '7 mins', location: 'Virtual Endocrine Desk', token: 'AP-6044' },
      { date: '2026-03-14', time: '11:45 AM', mode: 'In-person', wait: '16 mins', location: 'Nova Care, Cabin E3', token: 'AP-6062' }
    ]
  }
};

const appointments = JSON.parse(JSON.stringify(appointmentDefaults));
const doctorDirectory = [
  {
    id: 'doc-001',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Internal Medicine',
    hospital: 'City General',
    consultFee: 700,
    slots: [
      { date: '2026-03-06', time: '09:20 AM', mode: 'In-person', wait: '18 mins', location: 'Tower B, Room 204' },
      { date: '2026-03-06', time: '11:10 AM', mode: 'In-person', wait: '24 mins', location: 'Tower B, Room 204' },
      { date: '2026-03-08', time: '10:00 AM', mode: 'Teleconsult', wait: '3 mins', location: 'Virtual OPD' }
    ]
  },
  {
    id: 'doc-002',
    name: 'Dr. Arjun Rao',
    specialty: 'Cardiology',
    hospital: 'City General',
    consultFee: 950,
    slots: [
      { date: '2026-03-10', time: '08:45 AM', mode: 'In-person', wait: '20 mins', location: 'Cardio Block, Room 12' },
      { date: '2026-03-10', time: '12:30 PM', mode: 'In-person', wait: '12 mins', location: 'Cardio Block, Room 12' },
      { date: '2026-03-11', time: '04:15 PM', mode: 'Teleconsult', wait: '5 mins', location: 'Virtual OPD' }
    ]
  },
  {
    id: 'doc-003',
    name: 'Dr. Emily Chen',
    specialty: 'Endocrinology',
    hospital: 'Nova Care',
    consultFee: 850,
    slots: [
      { date: '2026-03-13', time: '09:30 AM', mode: 'Teleconsult', wait: '4 mins', location: 'Virtual Endocrine Desk' },
      { date: '2026-03-13', time: '07:10 PM', mode: 'Teleconsult', wait: '7 mins', location: 'Virtual Endocrine Desk' },
      { date: '2026-03-14', time: '11:45 AM', mode: 'In-person', wait: '16 mins', location: 'Nova Care, Cabin E3' }
    ]
  },
  {
    id: 'doc-004',
    name: 'Dr. Priya Menon',
    specialty: 'Dermatology',
    hospital: 'Sunrise Clinic',
    consultFee: 600,
    slots: [
      { date: '2026-03-07', time: '03:10 PM', mode: 'In-person', wait: '9 mins', location: 'Cabin D2' },
      { date: '2026-03-09', time: '05:40 PM', mode: 'Teleconsult', wait: '4 mins', location: 'Virtual OPD' }
    ]
  }
];

const addAppointmentFlow = {
  searchTerm: '',
  doctorId: null,
  slotIndex: null
};
let pendingAppointmentFocusId = null;
let isAppointmentsLoading = true;
let appointmentViewMode = 'upcoming';
let appointmentListMode = false;
const shareEmrFlow = {
  selectedDoctorId: null,
  searchTerm: '',
  selectedAppointmentIds: [],
  txId: null
};
const refillCatalog = [
  { id: 'med-amlodipine', name: 'Amlodipine 5mg', doctor: 'Dr. Sarah Mitchell', price: 120 },
  { id: 'med-metformin', name: 'Metformin 500mg', doctor: 'Dr. Emily Chen', price: 160 },
  { id: 'med-rosuvastatin', name: 'Rosuvastatin 10mg', doctor: 'Dr. Arjun Rao', price: 210 },
  { id: 'med-vitd3', name: 'Vitamin D3 60k IU', doctor: 'Dr. Emily Chen', price: 95 }
];
const refillFlow = {
  selectedIds: [],
  quantities: {},
  paymentMethod: 'UPI'
};
const messageState = {
  selectedDoctorId: null,
  threads: {
    'doc-001': [
      { from: 'doctor', text: 'Good evening Aditya. Please share your last 3 BP readings.', time: '09:12 AM' },
      { from: 'user', text: 'Sure doctor, I uploaded them in reports section.', time: '09:15 AM' }
    ],
    'doc-002': [
      { from: 'doctor', text: 'Continue current cardio plan for 2 weeks.', time: 'Yesterday' }
    ],
    'doc-003': [
      { from: 'doctor', text: 'How are your post-meal glucose values this week?', time: '11:04 AM' }
    ],
    'doc-004': [
      { from: 'doctor', text: 'Skin response is improving. Keep hydration high.', time: 'Mon' }
    ]
  }
};
const customDoctorsState = [];
const doctorDiscoveryCatalog = [
  { extId: 'ext-001', name: 'Dr. Neha Kapoor', specialty: 'General Medicine', hospital: 'City Care Clinic', consultFee: 650, rating: 4.5, workingHours: 'Mon-Sat • 09:30 AM - 01:30 PM' },
  { extId: 'ext-002', name: 'Dr. Rohan Iyer', specialty: 'Cardiology', hospital: 'Heartline Hospital', consultFee: 1000, rating: 4.7, workingHours: 'Mon-Fri • 10:00 AM - 05:00 PM' },
  { extId: 'ext-003', name: 'Dr. Meera Nair', specialty: 'Endocrinology', hospital: 'Nova Care', consultFee: 900, rating: 4.6, workingHours: 'Mon-Sat • 11:00 AM - 06:00 PM' },
  { extId: 'ext-004', name: 'Dr. Kunal Deshpande', specialty: 'Neurology', hospital: 'Sunrise Clinic', consultFee: 1100, rating: 4.4, workingHours: 'Tue-Sat • 09:00 AM - 03:00 PM' },
  { extId: 'ext-005', name: 'Dr. Ananya Bose', specialty: 'Dermatology', hospital: 'SkinWell Centre', consultFee: 700, rating: 4.8, workingHours: 'Mon-Sat • 02:00 PM - 08:00 PM' },
  { extId: 'ext-006', name: 'Dr. Vivek Sharma', specialty: 'Internal Medicine', hospital: 'City General', consultFee: 800, rating: 4.5, workingHours: 'Mon-Sat • 08:00 AM - 02:00 PM' }
];
const networkAddFlow = {
  name: '',
  specialty: '',
  hospital: ''
};
let modalLastFocusedElement = null;
let isNfcCardActive = true;
const nfcCards = [
  {
    id: 'CARD-001',
    label: 'Primary Card',
    hospital: 'City General',
    status: 'Active',
    linkedDoctorCount: 5,
    lastUsed: '2 mins ago at City General OPD Gate 2',
    issuedAt: new Date('2026-01-10T10:20:00'),
    identityUrl: 'https://id.meiosis.health/p/PAT-48291374/c/CARD-001',
    passcode: 'PC-739204'
  }
];
let activeNfcCardId = 'CARD-001';
const usedNfcIdentityUrls = new Set(nfcCards.map((card) => card.identityUrl));
const usedNfcPasscodes = new Set(nfcCards.map((card) => card.passcode));
const addNfcFlow = {
  readerConnected: false
};
let medicationCompletionCelebrated = false;
const defaultReminderProfile = {
  breakfast: '08:00',
  lunch: '13:30',
  snacks: '',
  dinner: '20:30',
  wakeUp: '06:30',
  sleep: '22:30',
  reminderLead: 15
};
const medicationState = {
  reminders: { ...defaultReminderProfile },
  prescriptionEndAt: null,
  prescriptionEndedHandled: false
};
let emergencyOverrideActive = false;
let emergencyOverrideUntil = null;
let weatherLoaded = false;
let weatherCoords = null;
let weatherSunState = { sunrise: null, sunset: null };
let weatherSunTimerStarted = false;
const analyticsState = { range: 30, focus: 'bp' };
let nfcAccessToken = `MTK-${Math.floor(100000 + Math.random() * 900000)}`;
let nfcTokenIssuedAt = new Date();
const nfcScanHistory = [
  { time: '2026-03-03 10:20', location: 'City General OPD Gate 2', hospital: 'City General', type: 'Entry Scan', result: 'Granted' },
  { time: '2026-03-02 18:45', location: 'Nova Lab Reception', hospital: 'Nova Care', type: 'Lab Check-in', result: 'Granted' },
  { time: '2026-02-22 09:12', location: 'MedPlus Pharmacy Desk', hospital: 'City General', type: 'Prescription Verify', result: 'Granted' },
  { time: '2026-02-14 08:32', location: 'City General Emergency Desk', hospital: 'City General', type: 'Emergency Read', result: 'Limited Access' },
  { time: '2026-02-08 12:05', location: 'Nova Care Billing Counter', hospital: 'Nova Care', type: 'Identity Verification', result: 'Granted' }
];
const takenUniversalCodes = new Set([
  '12345678',
  '11112222',
  '87654321',
  '90001111',
  '24682468'
]);

const universalIdState = {
  code: '48291374',
  lockDays: 0,
  lastUpdatedAt: null
};
const profileState = {
  name: 'Aditya Sharma',
  email: 'aditya.sharma@example.com',
  phone: '+91-98XXXXXX10',
  address: 'Bengaluru, Karnataka',
  language: 'English'
};

const actionDetails = {
  'open-access-log': {
    title: 'Transparent Access Log',
    body: '<ul><li>2026-03-03 10:20 • Dr. Rao • ECG report viewed</li><li>2026-03-02 09:05 • Nova Lab Admin • Lipid panel viewed</li><li>2026-03-01 16:48 • Dr. Chen • Prescription updated</li></ul>'
  },
  'share-emr': {
    title: 'Share EMR',
    body: '<p>Select sharing scope:</p><ul><li>Full record (time-limited)</li><li>Labs only</li><li>Summary only</li></ul><p>Default expiration: 30 days. Access is fully auditable.</p>'
  },
  'download-summary': { title: 'Health Summary', body: '<p>Generated summary includes diagnoses, medications, lab trends, and latest physician notes for the last 6 months.</p>' },
  'book-appointment': { title: 'Book Appointment', body: '<p>Specialties available: Cardiology, Endocrinology, General Medicine, Dermatology, Neurology.</p><p>Fastest slot: March 4, 2026 • 4:15 PM (Teleconsult).</p>' },
  'upload-report': { title: 'Upload External Report', body: '<p>Accepted formats: PDF, JPG, PNG (max 20MB). OCR auto-extracts test names, values, and dates.</p>' },
  'emergency-qr': { title: 'Emergency Access QR', body: '<p>QR grants 60-minute emergency view of allergies, medications, and critical conditions only.</p>' },
  'set-access-expiry': { title: 'Set Access Expiration', body: '<p>Set access expiry by doctor:</p><ul><li>Dr. Rao: 30 days</li><li>Dr. Chen: 14 days</li><li>Lab Access: One-time use</li></ul>' },
  'preview-shared-data': { title: 'Shared Data Preview', body: '<p>Current share package includes allergies, active medications, recent labs, and diagnosis summary. Imaging is excluded.</p>' },
  'disable-card': { title: 'Disable NFC Card', body: '<p>NFC card will be blocked immediately. Emergency override still possible from app with OTP verification.</p>' },
  'regenerate-token': { title: 'Regenerate Token', body: '<p>New token generated. Previous token will expire in 60 seconds.</p>' },
  'view-scan-history': { title: 'Scan History', body: '<ul><li>10:20 AM • City General OPD Gate 2</li><li>Yesterday 6:45 PM • Nova Lab Reception</li><li>Feb 22 09:12 AM • MedPlus Pharmacy</li></ul>' },
  'emergency-override': { title: 'Emergency Override', body: '<p>Enable one-click emergency release for critical clinicians. This action is logged and alerts your emergency contact.</p>' },
  'show-calendar': { title: 'Calendar View', body: '<p>March 2026: 3 confirmed/pending appointments. Reschedule from each card to pick alternate slots.</p>' },
  'show-list': { title: 'List View', body: '<p>Sorted by date with quick filters by specialty and status.</p>' },
  'chat-doctor': { title: 'Doctor Chat', body: '<p>Secure channel opened. Attach reports, send voice notes, and receive follow-up instructions.</p>' },
  'configure-reminders': { title: 'Medicine Reminders', body: '<p>Reminder mode enabled for 15 mins before each dose and at exact dose time. Sound + push notifications active.</p>' },
  'open-full-plan': { title: 'Full Medication Plan', body: '<p>Weekly plan view:</p><ul><li>Mon-Sat: Amlodipine, Metformin, Rosuvastatin</li><li>Sunday: add Vitamin D3</li><li>Follow-up review due: March 21, 2026</li></ul>' },
  'download-rx-pdf': { title: 'Prescription PDF', body: '<p>Signed digital prescription includes dosage chart, refill limits, and pharmacy validation QR.</p>' },
  'request-refill': { title: 'Refill Request', body: '<p>Refill submitted to doctor and linked pharmacy. Typical approval time: 2-6 hours.</p>' },
  'ask-doctor-rx': { title: 'Ask Doctor', body: '<p>Common questions: missed dose, side effects, medicine interaction, and timing with meals.</p>' },
  'view-lab': { title: 'Lab Report Details', body: '<p>Detailed report includes reference range, trend vs prior test, and doctor annotation with next-step recommendation.</p>' },
  'second-opinion': { title: 'Second Opinion Request', body: '<p>Select target doctor and share subset:</p><ul><li>Cardio + Labs</li><li>Imaging only</li><li>Full summary</li></ul>' },
  'open-chat': { title: 'Message Center', body: '<p>Conversation opened with Dr. Rao. Last response time: 23 mins.</p>' },
  'attach-file': { title: 'Attach File', body: '<p>Upload report, image, or audio note to this consultation thread.</p>' },
  'save-privacy': { title: 'Privacy Controls Saved', body: '<p>Your consent and access expiry settings were updated successfully.</p>' },
  'download-audit': { title: 'Audit Report', body: '<p>Downloading access ledger as encrypted PDF for 2026-01-01 to 2026-03-03.</p>' },
  insights: {
    title: 'MEIOSIS Insights',
    body: `
      <div class="mock-pdf">
        <div class="mock-pdf-header">
          <strong>AI Health Summary (Mock)</strong>
          <span class="hint">Generated: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
        </div>
        <div class="mock-pdf-page">
          <p><strong>Overall Status:</strong> Stable with improving trend.</p>
          <p><strong>Health Score:</strong> 87 (up from 84 last month)</p>
          <p><strong>Key Pattern:</strong> Blood pressure variability reduced after better medication adherence.</p>
          <p><strong>Lab Context:</strong> LDL remains above optimal range; HbA1c is currently within target.</p>
          <p><strong>Medication Insight:</strong> Evening dose misses correlate with next-day fatigue reports.</p>
        </div>
        <div class="mock-pdf-page">
          <p><strong>Risk Flags (Educational):</strong></p>
          <ul>
            <li>Moderate cardiometabolic risk if LDL trend remains elevated.</li>
            <li>Low immediate risk for acute glucose instability.</li>
          </ul>
          <p><strong>Recommended Next Actions:</strong></p>
          <ul>
            <li>Continue current prescriptions and maintain >90% adherence.</li>
            <li>Discuss LDL management plan in next consult.</li>
            <li>Repeat lipid profile in 4-6 weeks.</li>
          </ul>
          <p class="hint">This is a mock AI summary for product demo. Not a diagnosis.</p>
        </div>
      </div>
    `
  }
};

function openModal(title, html) {
  modalLastFocusedElement = document.activeElement;
  modalTitle.textContent = title;
  modalBody.innerHTML = html;
  detailModal.classList.remove('hidden');
  detailModal.setAttribute('aria-hidden', 'false');
  closeModal.focus();
}

function closeDetailModal() {
  detailModal.classList.add('hidden');
  detailModal.setAttribute('aria-hidden', 'true');
  if (modalLastFocusedElement && typeof modalLastFocusedElement.focus === 'function') {
    modalLastFocusedElement.focus();
  }
}

function openSmoothSuccessModal(title, detailsHtml) {
  openModal(
    title,
    `
      <div class="smooth-success">
        <div class="smooth-success-tick" aria-hidden="true">
          <svg viewBox="0 0 80 80">
            <circle class="smooth-tick-ring" cx="40" cy="40" r="34"></circle>
            <path class="smooth-tick-path" d="M23 41 L36 54 L58 28"></path>
          </svg>
        </div>
        <div class="smooth-success-body">
          ${detailsHtml}
        </div>
      </div>
    `
  );
}

function playListButtonTickAnimation() {
  if (!appointmentListAllBtn) return;
  appointmentListAllBtn.classList.remove('list-btn-tick', 'list-btn-updated');
  appointmentListAllBtn.textContent = '✓';
  appointmentListAllBtn.classList.add('list-btn-tick');

  setTimeout(() => {
    if (!appointmentListAllBtn) return;
    appointmentListAllBtn.classList.remove('list-btn-tick', 'list-btn-updated');
    appointmentListAllBtn.textContent = appointmentListMode ? 'Grid' : 'List';
  }, 640);
}

function showToast(message, type = 'success') {
  if (!toastStack) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastStack.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function weatherCodeToText(code) {
  if ([0].includes(code)) return 'Clear sky';
  if ([1, 2].includes(code)) return 'Partly cloudy';
  if ([3].includes(code)) return 'Cloudy';
  if ([45, 48].includes(code)) return 'Fog';
  if ([51, 53, 55, 56, 57].includes(code)) return 'Drizzle';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return 'Rain';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'Snow';
  if ([95, 96, 99].includes(code)) return 'Thunderstorm';
  return 'Weather update';
}

function weatherCodeToIconMode(code) {
  if ([61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) return 'rainy';
  if ([1, 2, 3, 45, 48].includes(code)) return 'cloudy';
  return 'sunny';
}

function computePollenRisk(hourly, idx) {
  const fields = ['alder_pollen', 'birch_pollen', 'grass_pollen', 'mugwort_pollen', 'ragweed_pollen'];
  const values = fields.map((f) => hourly?.[f]?.[idx]).filter((v) => typeof v === 'number');
  if (!values.length) return { level: 'Unavailable', score: null };
  const sum = values.reduce((a, b) => a + b, 0);
  if (sum < 20) return { level: 'Low', score: sum };
  if (sum < 60) return { level: 'Moderate', score: sum };
  return { level: 'High', score: sum };
}

function setWeatherLoadingState(message = 'Loading weather...') {
  if (weatherSummary) weatherSummary.textContent = message;
  if (weatherTemp) weatherTemp.textContent = '--°C';
  if (weatherHourly) weatherHourly.innerHTML = '<div class="hour-chip"><p>--</p><strong>--</strong></div>';
  if (weatherDaily) weatherDaily.innerHTML = '<div class="day-row"><span>--</span><span>--</span><span>--</span><span>--</span></div>';
}

function updateSunTimelineMotion() {
  if (!sunTimeline || !weatherSunState.sunrise || !weatherSunState.sunset) return;
  const nowMs = Date.now();
  const start = weatherSunState.sunrise.getTime();
  const end = weatherSunState.sunset.getTime();
  let pct = 0;
  if (nowMs <= start) pct = 0;
  else if (nowMs >= end) pct = 100;
  else pct = ((nowMs - start) / (end - start)) * 100;

  sunTimeline.style.setProperty('--sun-progress', `${pct.toFixed(1)}%`);
  if (sunNowTime) {
    sunNowTime.textContent = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  }
}

function renderWeather(data, placeLabel) {
  const current = data.current || {};
  const daily = data.daily || {};
  const hourly = data.hourly || {};
  const nowTime = current.time;
  const hourIdx = Array.isArray(hourly.time) ? Math.max(0, hourly.time.indexOf(nowTime)) : 0;

  const code = Number(current.weather_code ?? 0);
  const conditionText = weatherCodeToText(code);
  const iconMode = weatherCodeToIconMode(code);
  if (weatherIcon) weatherIcon.className = `weather-icon ${iconMode}`;

  if (weatherLocation) weatherLocation.textContent = placeLabel || 'Current Location';
  if (weatherSummary) weatherSummary.textContent = 'Real-time local weather context';
  if (weatherTemp) weatherTemp.textContent = `${Math.round(current.temperature_2m ?? 0)}°C`;
  if (weatherFeelsLike) weatherFeelsLike.textContent = `${Math.round(current.apparent_temperature ?? 0)}°C`;
  if (weatherCondition) weatherCondition.textContent = conditionText;
  if (weatherHumidity) weatherHumidity.textContent = `${Math.round(current.relative_humidity_2m ?? 0)}%`;
  if (weatherWind) weatherWind.textContent = `${Math.round(current.wind_speed_10m ?? 0)} km/h`;
  if (weatherPressure) weatherPressure.textContent = `${Math.round(current.surface_pressure ?? 0)} hPa`;
  if (weatherVisibility) weatherVisibility.textContent = current.visibility != null ? `${(current.visibility / 1000).toFixed(1)} km` : '--';
  if (weatherUvNow) weatherUvNow.textContent = `${(current.uv_index ?? 0).toFixed(1)}`;
  if (weatherUvMax) weatherUvMax.textContent = daily.uv_index_max?.[0] != null ? `${Number(daily.uv_index_max[0]).toFixed(1)}` : '--';

  const sunrise = daily.sunrise?.[0] ? new Date(daily.sunrise[0]) : null;
  const sunset = daily.sunset?.[0] ? new Date(daily.sunset[0]) : null;
  if (weatherSunrise) weatherSunrise.textContent = sunrise ? sunrise.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '--';
  if (weatherSunset) weatherSunset.textContent = sunset ? sunset.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '--';
  if (weatherDaylight) {
    if (sunrise && sunset) {
      const mins = Math.max(0, Math.round((sunset - sunrise) / 60000));
      weatherDaylight.textContent = `${Math.floor(mins / 60)}h ${mins % 60}m`;
    } else weatherDaylight.textContent = '--';
  }

  if (sunTimeline) {
    weatherSunState.sunrise = sunrise;
    weatherSunState.sunset = sunset;
    updateSunTimelineMotion();
    if (!weatherSunTimerStarted) {
      weatherSunTimerStarted = true;
      setInterval(updateSunTimelineMotion, 60 * 1000);
    }
  }

  const pollen = computePollenRisk(hourly, hourIdx);
  if (weatherPollen) weatherPollen.textContent = pollen.score == null ? pollen.level : `${pollen.level} (${Math.round(pollen.score)})`;
  if (weatherPm25) weatherPm25.textContent = hourly.pm2_5?.[hourIdx] != null ? `${Number(hourly.pm2_5[hourIdx]).toFixed(1)} ug/m3` : '-- ug/m3';
  if (weatherPm10) weatherPm10.textContent = hourly.pm10?.[hourIdx] != null ? `${Number(hourly.pm10[hourIdx]).toFixed(1)} ug/m3` : '-- ug/m3';

  const uv = Number(current.uv_index ?? 0);
  const advice = uv >= 8 || pollen.level === 'High' ? 'Mask + SPF advised' : uv >= 5 ? 'Carry sun protection' : 'Conditions manageable';
  if (weatherAdvice) weatherAdvice.textContent = advice;

  if (weatherHourly) {
    const times = hourly.time || [];
    const temps = hourly.temperature_2m || [];
    const uvs = hourly.uv_index || [];
    const codes = hourly.weather_code || [];
    const start = Math.max(0, hourIdx);
    const chips = [];
    for (let i = start; i < Math.min(start + 12, times.length); i += 1) {
      const t = new Date(times[i]).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const isNow = i === start ? 'now' : '';
      const cond = weatherCodeToText(Number(codes[i] ?? code)).split(' ')[0];
      chips.push(`
        <div class="hour-chip ${isNow}">
          <div class="hour-head"><p>${t}</p><span class="hour-icon"></span></div>
          <strong>${Math.round(temps[i] ?? 0)}°C</strong>
          <p>${cond}</p>
          <p>UV ${Number(uvs[i] ?? 0).toFixed(1)}</p>
        </div>
      `);
    }
    weatherHourly.innerHTML = chips.join('') || '<div class="hour-chip"><p>No hourly data</p></div>';
  }

  if (weatherDaily) {
    const dates = daily.time || [];
    const maxT = daily.temperature_2m_max || [];
    const minT = daily.temperature_2m_min || [];
    const maxUv = daily.uv_index_max || [];
    const precip = daily.precipitation_probability_max || [];
    const rows = [];
    for (let i = 0; i < Math.min(5, dates.length); i += 1) {
      const day = new Date(`${dates[i]}T00:00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
      rows.push(`<div class="day-row"><span>${day}</span><span>${Math.round(minT[i] ?? 0)}°/${Math.round(maxT[i] ?? 0)}°</span><span>UV ${Number(maxUv[i] ?? 0).toFixed(1)}</span><span>Rain ${Math.round(precip[i] ?? 0)}%</span></div>`);
    }
    weatherDaily.innerHTML = rows.join('') || '<div class="day-row"><span>No forecast data</span></div>';
  }

  weatherLoaded = true;
  if (weatherUpdatedAt) {
    weatherUpdatedAt.textContent = `Last updated: ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`;
  }
}

function getMockWeatherData() {
  const now = new Date();
  const baseTemp = 24 + Math.round((Math.random() * 6) - 3);
  const weatherCodes = [0, 1, 2, 3, 61];
  const weatherCode = weatherCodes[Math.floor(Math.random() * weatherCodes.length)];

  const hourlyTimes = [];
  const hourlyTemp = [];
  const hourlyUv = [];
  const hourlyCode = [];
  const hourlyPm25 = [];
  const hourlyPm10 = [];
  const alder = [];
  const birch = [];
  const grass = [];
  const mugwort = [];
  const ragweed = [];

  for (let i = 0; i < 24; i += 1) {
    const dt = new Date(now.getTime() + i * 60 * 60 * 1000);
    hourlyTimes.push(dt.toISOString().slice(0, 19));
    hourlyTemp.push(baseTemp + Math.round(Math.sin(i / 3) * 3));
    hourlyUv.push(Math.max(0, Number((7 * Math.sin((i - 6) / 8)).toFixed(1))));
    hourlyCode.push(weatherCodes[Math.floor(Math.random() * weatherCodes.length)]);
    hourlyPm25.push(Number((18 + Math.random() * 20).toFixed(1)));
    hourlyPm10.push(Number((30 + Math.random() * 30).toFixed(1)));
    alder.push(Math.round(5 + Math.random() * 20));
    birch.push(Math.round(4 + Math.random() * 20));
    grass.push(Math.round(6 + Math.random() * 30));
    mugwort.push(Math.round(3 + Math.random() * 16));
    ragweed.push(Math.round(2 + Math.random() * 14));
  }

  const dailyDates = [];
  const minT = [];
  const maxT = [];
  const uvMax = [];
  const precip = [];
  const sunrise = [];
  const sunset = [];
  const dailyCode = [];

  for (let d = 0; d < 7; d += 1) {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + d);
    const iso = date.toISOString().slice(0, 10);
    dailyDates.push(iso);
    minT.push(baseTemp - 4 + Math.round(Math.random() * 2));
    maxT.push(baseTemp + 4 + Math.round(Math.random() * 3));
    uvMax.push(Number((6 + Math.random() * 4).toFixed(1)));
    precip.push(Math.round(Math.random() * 65));
    sunrise.push(`${iso}T06:${String(8 + Math.round(Math.random() * 8)).padStart(2, '0')}:00`);
    sunset.push(`${iso}T18:${String(2 + Math.round(Math.random() * 10)).padStart(2, '0')}:00`);
    dailyCode.push(weatherCodes[Math.floor(Math.random() * weatherCodes.length)]);
  }

  return {
    current: {
      time: hourlyTimes[0],
      temperature_2m: baseTemp,
      apparent_temperature: baseTemp - 1 + Math.round(Math.random() * 2),
      weather_code: weatherCode,
      relative_humidity_2m: 55 + Math.round(Math.random() * 30),
      wind_speed_10m: 7 + Math.round(Math.random() * 12),
      surface_pressure: 1002 + Math.round(Math.random() * 12),
      visibility: 6000 + Math.round(Math.random() * 5000),
      uv_index: Number((1 + Math.random() * 7).toFixed(1))
    },
    hourly: {
      time: hourlyTimes,
      temperature_2m: hourlyTemp,
      weather_code: hourlyCode,
      uv_index: hourlyUv,
      pm2_5: hourlyPm25,
      pm10: hourlyPm10,
      alder_pollen: alder,
      birch_pollen: birch,
      grass_pollen: grass,
      mugwort_pollen: mugwort,
      ragweed_pollen: ragweed
    },
    daily: {
      time: dailyDates,
      sunrise,
      sunset,
      uv_index_max: uvMax,
      temperature_2m_max: maxT,
      temperature_2m_min: minT,
      weather_code: dailyCode,
      precipitation_probability_max: precip
    }
  };
}

function requestWeatherByLocation() {
  setWeatherLoadingState('Loading mock weather...');
  weatherCoords = { latitude: 12.97, longitude: 77.59 };
  const mockData = getMockWeatherData();
  renderWeather(mockData, 'Bengaluru (mock)');
  showToast('Mock weather updated.', 'success');
}

function loadWeatherFallback() {
  requestWeatherByLocation();
}

function getAnalyticsDataset(range) {
  if (range === 90) {
    return {
      bp: [58, 61, 63, 66, 67, 69, 72, 70, 73],
      glucose: [48, 52, 56, 61, 64, 68, 70, 74, 76],
      weight: [78, 77, 77, 76, 76, 75, 75, 74, 74],
      adherence: 86
    };
  }
  if (range === 180) {
    return {
      bp: [52, 55, 57, 60, 63, 65, 67, 69, 71],
      glucose: [42, 46, 50, 54, 58, 61, 65, 69, 72],
      weight: [80, 79, 78, 78, 77, 76, 75, 74, 73],
      adherence: 82
    };
  }
  return {
    bp: [62, 64, 61, 67, 71, 73, 75, 77, 79],
    glucose: [50, 54, 57, 63, 67, 70, 74, 78, 81],
    weight: [76, 76, 75, 75, 74, 74, 73, 73, 72],
    adherence: 89
  };
}

function renderAnalyticsBars(container, values, seriesKey) {
  if (!container) return;
  container.innerHTML = values.map((value, index) => `
    <div class="analytics-bar" style="--v:${value}" data-analytics-point data-series="${seriesKey}" data-index="${index}" data-value="${value}"></div>
  `).join('');
}

function updateAnalyticsFocus(seriesKey) {
  analyticsState.focus = seriesKey;
  const labels = {
    bp: {
      title: 'Blood Pressure is gradually stabilizing',
      text: 'Morning and evening readings are narrowing, indicating better control.'
    },
    glucose: {
      title: 'Glucose trend is improving with consistent doses',
      text: 'Post-meal spikes are less severe compared to earlier intervals.'
    },
    weight: {
      title: 'Weight reduction remains steady',
      text: 'Current pace suggests sustainable lifestyle adherence without sharp fluctuations.'
    },
    adherence: {
      title: 'Medication adherence is the strongest positive signal',
      text: 'Higher adherence aligns with better vitals and lower variability this cycle.'
    }
  };
  const entry = labels[seriesKey] || labels.bp;
  if (analyticsFocusTitle) analyticsFocusTitle.textContent = entry.title;
  if (analyticsFocusText) analyticsFocusText.textContent = entry.text;

  document.querySelectorAll('.analytics-card').forEach((card) => {
    card.classList.toggle('active', card.dataset.series === seriesKey);
  });
  document.querySelectorAll('[data-analytics-focus]').forEach((kpi) => {
    kpi.classList.toggle('active', kpi.dataset.analyticsFocus === seriesKey);
  });
}

function renderAnalytics() {
  const data = getAnalyticsDataset(analyticsState.range);
  renderAnalyticsBars(bpChart, data.bp, 'bp');
  renderAnalyticsBars(glucoseChart, data.glucose, 'glucose');
  renderAnalyticsBars(weightChart, data.weight, 'weight');
  if (adherencePie) {
    const miss = Math.max(0, 100 - data.adherence);
    adherencePie.style.setProperty('--pie', `conic-gradient(var(--accent) 0 ${data.adherence}%, #ff5468 ${data.adherence}% 100%)`);
  }

  if (kpiBp) kpiBp.textContent = `${118 + Math.round((100 - data.bp[data.bp.length - 1]) / 2)}/${78 + Math.round((100 - data.bp[data.bp.length - 1]) / 5)}`;
  if (kpiGlucose) kpiGlucose.textContent = `${100 + Math.round((data.glucose[data.glucose.length - 1] - 60) * 0.7)} mg/dL`;
  if (kpiWeight) {
    const delta = (data.weight[0] - data.weight[data.weight.length - 1]).toFixed(1);
    kpiWeight.textContent = `${delta.startsWith('-') ? '' : '-'}${delta} kg`;
  }
  if (kpiAdherence) kpiAdherence.textContent = `${data.adherence}%`;

  updateAnalyticsFocus(analyticsState.focus);
}

function showAnalyticsTooltip(x, y, text) {
  if (!analyticsTooltip) return;
  analyticsTooltip.textContent = text;
  analyticsTooltip.style.left = `${x}px`;
  analyticsTooltip.style.top = `${y}px`;
  analyticsTooltip.classList.remove('hidden');
}

function hideAnalyticsTooltip() {
  if (!analyticsTooltip) return;
  analyticsTooltip.classList.add('hidden');
}

function saveUniversalIdState() {
  try {
    localStorage.setItem(UNIVERSAL_ID_STORAGE_KEY, JSON.stringify(universalIdState));
  } catch (error) {
    // Ignore storage failures in mock mode.
  }
}

function loadUniversalIdState() {
  try {
    const raw = localStorage.getItem(UNIVERSAL_ID_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed?.code && /^\d{8}$/.test(parsed.code)) {
      universalIdState.code = parsed.code;
      universalIdState.lastUpdatedAt = parsed.lastUpdatedAt || null;
    }
  } catch (error) {
    // Ignore bad persisted data and continue defaults.
  }
}

function getDefaultPrescriptionEndIso() {
  const end = new Date();
  end.setDate(end.getDate() + 5);
  end.setHours(23, 59, 0, 0);
  return end.toISOString();
}

function saveMedicationState() {
  try {
    localStorage.setItem(MEDICATION_STATE_STORAGE_KEY, JSON.stringify({
      reminders: medicationState.reminders
    }));
  } catch (error) {
    // Ignore storage failures in mock mode.
  }
}

function loadMedicationState() {
  try {
    const raw = localStorage.getItem(MEDICATION_STATE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.reminders && typeof parsed.reminders === 'object') {
        medicationState.reminders = { ...defaultReminderProfile, ...parsed.reminders };
      }
    }
  } catch (error) {
    // Ignore bad persisted data and continue defaults.
  }

  // Completion state is intentionally session-only:
  // refresh should always restore normal medication view.
  medicationState.prescriptionEndAt = getDefaultPrescriptionEndIso();
  medicationState.prescriptionEndedHandled = false;
}

function getPrescriptionTimerInfo() {
  const endAt = new Date(medicationState.prescriptionEndAt || getDefaultPrescriptionEndIso());
  const msLeft = endAt.getTime() - Date.now();
  if (msLeft <= 0) {
    return { expired: true, shortText: 'Prescription ended', detailText: 'Prescription ended' };
  }

  const totalMinutes = Math.floor(msLeft / (60 * 1000));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  let shortText = '';
  if (days > 0) shortText = `${days}d ${hours}h left`;
  else shortText = `${hours}h ${minutes}m left`;

  return {
    expired: false,
    shortText,
    detailText: `Prescription ends in ${days}d ${hours}h ${minutes}m`
  };
}

function renderDoseTimers() {
  const timer = getPrescriptionTimerInfo();
  const liveDoseCards = Array.from(document.querySelectorAll('[data-dose-card]'));

  liveDoseCards.forEach((card) => {
    let timerEl = card.querySelector('[data-dose-timer]');
    if (!timerEl) {
      timerEl = document.createElement('p');
      timerEl.className = 'hint dose-timer';
      timerEl.setAttribute('data-dose-timer', 'true');
      const button = card.querySelector('[data-dose-btn]');
      if (button) card.insertBefore(timerEl, button);
      else card.appendChild(timerEl);
    }
    timerEl.textContent = timer.expired
      ? 'Doctor timer: prescription ended'
      : `Doctor timer: ${timer.shortText}`;
  });
}

function openConfigureRemindersModal() {
  const reminders = medicationState.reminders;
  const timer = getPrescriptionTimerInfo();
  openModal(
    'Configure Medicine Reminders',
    `
      <p class="hint">Set your routine so reminders are easier to follow.</p>
      <div class="card-grid two-col">
        <label>Breakfast time<input class="add-flow-search" type="time" data-reminder-input="breakfast" value="${reminders.breakfast}" /></label>
        <label>Lunch time<input class="add-flow-search" type="time" data-reminder-input="lunch" value="${reminders.lunch}" /></label>
        <label>Snacks time (optional)<input class="add-flow-search" type="time" data-reminder-input="snacks" value="${reminders.snacks}" /></label>
        <label>Dinner time<input class="add-flow-search" type="time" data-reminder-input="dinner" value="${reminders.dinner}" /></label>
        <label>Wake-up time<input class="add-flow-search" type="time" data-reminder-input="wakeUp" value="${reminders.wakeUp}" /></label>
        <label>Sleep time<input class="add-flow-search" type="time" data-reminder-input="sleep" value="${reminders.sleep}" /></label>
      </div>
      <label>Reminder before dose (minutes)
        <input class="add-flow-search" type="number" min="0" max="120" step="5" data-reminder-input="reminderLead" value="${reminders.reminderLead}" />
      </label>
      <p class="hint">Current doctor timer: ${timer.detailText}</p>
      <div class="button-row">
        <button class="btn" data-action="save-reminders">Save Reminders</button>
        <button class="ghost-btn" data-action="cancel-reminders">Cancel</button>
      </div>
    `
  );
}

function completePrescriptionCycle(silent = false) {
  const scheduleCard = document.querySelector('#medicines .dose-grid')?.closest('.glass.card');
  if (scheduleCard) {
    scheduleCard.innerHTML = `
      <h2>Today's Schedule</h2>
      <div class="meds-all-good">
        <div class="meds-all-good-tick" aria-hidden="true">✓</div>
        <p>Your prescription is over, If not satisfied, please consult your medical councellor.</p>
        <p><strong>All looks good.</strong></p>
      </div>
    `;
  }

  if (medProgressValue) medProgressValue.textContent = '0/0';
  if (medProgressBar) medProgressBar.style.width = '100%';
  if (nextDoseText) nextDoseText.textContent = 'All looks good.';

  if (!silent) {
    openSmoothSuccessModal(
      'Prescription Completed',
      `
        <p>Your prescription is over, If not satisfied, please consult your medical councellor.</p>
        <p><strong>All looks good.</strong></p>
      `
    );
    showToast('Prescription course completed.', 'success');
  }

  medicationState.prescriptionEndedHandled = true;
  saveMedicationState();
  renderMedicationPlanCompletionState();
}

function evaluatePrescriptionTimerState() {
  renderDoseTimers();
  const timer = getPrescriptionTimerInfo();
  if (timer.expired) {
    const hasDoseChecklist = Boolean(document.querySelector('#medicines [data-dose-card]'));
    if (hasDoseChecklist) {
      completePrescriptionCycle(medicationState.prescriptionEndedHandled);
    }
  }
  renderMedicationPlanCompletionState();
}

function renderMedicationPlanCompletionState() {
  if (!medplanCompletionBanner || !medplanSection) return;
  const timer = getPrescriptionTimerInfo();
  const isCompleted = medicationState.prescriptionEndedHandled || timer.expired;
  if (!isCompleted) {
    medplanSection.classList.remove('medplan-complete-only');
    medplanCompletionBanner.classList.remove('active');
    medplanCompletionBanner.innerHTML = '';
    return;
  }

  medplanSection.classList.add('medplan-complete-only');
  medplanCompletionBanner.classList.add('active');
  medplanCompletionBanner.innerHTML = `<span>Your're all set ${profileState.name}</span>`;
}

function getUniversalIdLockInfo() {
  if (!universalIdState.lastUpdatedAt) return { locked: false, remainingText: '' };
  const updated = new Date(universalIdState.lastUpdatedAt);
  const unlockAt = new Date(updated.getTime() + (universalIdState.lockDays * 24 * 60 * 60 * 1000));
  const msLeft = unlockAt.getTime() - Date.now();
  if (msLeft <= 0) return { locked: false, remainingText: '' };

  const days = Math.ceil(msLeft / (24 * 60 * 60 * 1000));
  return { locked: true, remainingText: `${days} day${days > 1 ? 's' : ''}` };
}

function renderUniversalIdState() {
  if (nfcUniversalCodeEl) nfcUniversalCodeEl.textContent = universalIdState.code;
  if (settingsUniversalCodeEl) settingsUniversalCodeEl.textContent = universalIdState.code;

  if (editUniversalIdBtn) {
    const lock = getUniversalIdLockInfo();
    editUniversalIdBtn.disabled = lock.locked;
    editUniversalIdBtn.textContent = lock.locked
      ? `Edit Universal ID (Unavailable ${lock.remainingText})`
      : 'Edit Universal ID';
    editUniversalIdBtn.style.opacity = lock.locked ? '0.55' : '1';
    editUniversalIdBtn.style.cursor = lock.locked ? 'not-allowed' : 'pointer';
  }
}

function openUniversalIdEditModal() {
  const lock = getUniversalIdLockInfo();
  if (lock.locked) {
    openModal(
      'Universal ID Temporarily Locked',
      `<p>You can update your Universal ID again in ${lock.remainingText}.</p>`
    );
    showToast('Universal ID edit is temporarily unavailable.', 'error');
    return;
  }

  openModal(
    'Edit Universal ID (OTP Required)',
    `
      <p>Current Universal ID: <strong>${universalIdState.code}</strong></p>
      <p class="hint">Enter a new 8-digit code and OTP to verify identity.</p>
      <input class="add-flow-search" data-uid-new-code type="text" maxlength="8" placeholder="New 8-digit code" />
      <input class="add-flow-search" data-uid-otp type="text" maxlength="6" placeholder="OTP (demo: 112233)" />
      <p class="validation-text">Mock OTP for this flow: 112233</p>
      <div class="button-row">
        <button class="btn" data-uid-save>Verify & Save</button>
        <button class="ghost-btn" data-uid-cancel>Cancel</button>
      </div>
    `
  );
}

function saveUniversalId(newCode) {
  universalIdState.code = newCode;
  universalIdState.lastUpdatedAt = new Date().toISOString();
  saveUniversalIdState();
  renderUniversalIdState();
}

function renderProfileState() {
  if (profileNameEl) profileNameEl.textContent = profileState.name;
  if (profileEmailEl) profileEmailEl.textContent = profileState.email;
  if (profilePhoneEl) profilePhoneEl.textContent = profileState.phone;
  if (profileAddressEl) profileAddressEl.textContent = profileState.address;
  if (profileLanguageEl) profileLanguageEl.textContent = profileState.language;
  if (dashboardGreeting) {
    const hour = new Date().getHours();
    const salutation = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
    dashboardGreeting.textContent = `${salutation}, ${profileState.name}`;
  }
  renderMedicationPlanCompletionState();
}

function openEditProfileModal() {
  openModal(
    'Edit Profile (Mock)',
    `
      <div class="card-grid two-col">
        <label>Name<input class="add-flow-search" data-profile-input="name" type="text" value="${profileState.name.replace(/"/g, '&quot;')}" /></label>
        <label>Email<input class="add-flow-search" data-profile-input="email" type="email" value="${profileState.email.replace(/"/g, '&quot;')}" /></label>
        <label>Phone<input class="add-flow-search" data-profile-input="phone" type="text" value="${profileState.phone.replace(/"/g, '&quot;')}" /></label>
        <label>Address<input class="add-flow-search" data-profile-input="address" type="text" value="${profileState.address.replace(/"/g, '&quot;')}" /></label>
      </div>
      <label>Language
        <select class="add-flow-search" data-profile-input="language">
          <option ${profileState.language === 'English' ? 'selected' : ''}>English</option>
          <option ${profileState.language === 'Hindi' ? 'selected' : ''}>Hindi</option>
          <option ${profileState.language === 'Kannada' ? 'selected' : ''}>Kannada</option>
        </select>
      </label>
      <div class="button-row">
        <button class="btn" data-profile-save>Save Profile</button>
        <button class="ghost-btn" data-profile-cancel>Cancel</button>
      </div>
    `
  );
}

function getMessageDoctorMeta(doctorId) {
  return doctorDirectory.find((doctor) => doctor.id === doctorId) || null;
}

function renderMessagesDoctorList() {
  if (!messagesDoctorList) return;
  const listHtml = doctorDirectory.map((doctor) => {
    const selected = messageState.selectedDoctorId === doctor.id;
    const thread = messageState.threads[doctor.id] || [];
    const last = thread[thread.length - 1];
    const preview = last ? last.text : 'No messages yet';
    return `
      <div class="doctor-item emr-doctor-item ${selected ? 'selected' : ''}">
        <div>
          <p><strong>${doctor.name}</strong></p>
          <p class="hint">${doctor.specialty}</p>
          <p class="hint">${preview}</p>
        </div>
        <button class="${selected ? 'btn' : 'ghost-btn'}" data-action="messages-open-doctor" data-doctor-id="${doctor.id}">
          ${selected ? 'Opened' : 'Open Chat'}
        </button>
      </div>
    `;
  }).join('');
  messagesDoctorList.innerHTML = listHtml;
}

function renderMessagesThread() {
  if (!messagesThread || !messagesChatTitle || !messagesChatMeta || !messagesInput || !messagesSendBtn) return;
  const doctorId = messageState.selectedDoctorId;
  if (!doctorId) {
    messagesChatTitle.textContent = 'Select a doctor to start chat';
    messagesChatMeta.textContent = 'Encrypted consultation channel (mock)';
    messagesThread.innerHTML = '<p class="hint">No conversation selected.</p>';
    messagesInput.disabled = true;
    messagesSendBtn.disabled = true;
    return;
  }

  const doctor = getMessageDoctorMeta(doctorId);
  const thread = messageState.threads[doctorId] || [];
  messagesChatTitle.textContent = doctor ? doctor.name : 'Doctor Chat';
  messagesChatMeta.textContent = doctor ? `${doctor.specialty} • ${doctor.hospital}` : 'Encrypted consultation channel (mock)';
  messagesInput.disabled = false;
  messagesSendBtn.disabled = false;

  messagesThread.innerHTML = thread.map((msg) => `
    <div class="msg-bubble ${msg.from === 'user' ? 'user' : 'doctor'}">
      <p>${msg.text}</p>
      <span>${msg.time}</span>
    </div>
  `).join('');
  messagesThread.scrollTop = messagesThread.scrollHeight;
}

function openMessagesDoctorChat(doctorId) {
  if (!doctorId) return;
  if (!messageState.threads[doctorId]) messageState.threads[doctorId] = [];
  messageState.selectedDoctorId = doctorId;
  renderMessagesDoctorList();
  renderMessagesThread();
  if (messagesInput) messagesInput.focus();
}

function sendMessagesMockReply() {
  const doctorId = messageState.selectedDoctorId;
  if (!doctorId) return;
  const doctor = getMessageDoctorMeta(doctorId);
  const replies = [
    'Noted. Continue current plan and update me tomorrow.',
    'Thanks. I reviewed this. Please keep tracking your symptoms.',
    'Understood. If this continues, we can adjust dosage in next visit.',
    'Received. Stay hydrated and continue medication as advised.'
  ];
  const reply = replies[Math.floor(Math.random() * replies.length)];
  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  messageState.threads[doctorId].push({
    from: 'doctor',
    text: `${doctor ? doctor.name.split(' ')[1] : 'Doctor'}: ${reply}`,
    time: now
  });
  renderMessagesDoctorList();
  renderMessagesThread();
}

function sendMessagesChat() {
  const doctorId = messageState.selectedDoctorId;
  const text = messagesInput?.value?.trim() || '';
  if (!doctorId) {
    showToast('Select a doctor first.', 'error');
    return;
  }
  if (!text) return;
  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  if (!messageState.threads[doctorId]) messageState.threads[doctorId] = [];
  messageState.threads[doctorId].push({ from: 'user', text, time: now });
  messagesInput.value = '';
  renderMessagesDoctorList();
  renderMessagesThread();
  setTimeout(sendMessagesMockReply, 700);
}

function saveCustomDoctorsState() {
  try {
    localStorage.setItem(CUSTOM_DOCTORS_STORAGE_KEY, JSON.stringify(customDoctorsState));
  } catch (error) {
    // Ignore storage failures in mock mode.
  }
}

function getNextDoctorId() {
  const numbers = doctorDirectory
    .map((doctor) => Number((doctor.id || '').replace('doc-', '')))
    .filter((num) => Number.isFinite(num) && num > 0);
  const next = (numbers.length ? Math.max(...numbers) : 0) + 1;
  return `doc-${String(next).padStart(3, '0')}`;
}

function loadCustomDoctorsState() {
  try {
    const raw = localStorage.getItem(CUSTOM_DOCTORS_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;

    parsed.forEach((doctor) => {
      if (!doctor?.id || !doctor?.name) return;
      const exists = doctorDirectory.some((entry) => entry.id === doctor.id);
      if (exists) return;
      doctorDirectory.push({
        id: doctor.id,
        name: doctor.name,
        specialty: doctor.specialty || 'General Medicine',
        hospital: doctor.hospital || 'Independent Clinic',
        rating: Number.isFinite(Number(doctor.rating)) ? Number(doctor.rating) : 4.6,
        consultFee: Number(doctor.consultFee) || 700,
        slots: Array.isArray(doctor.slots) ? doctor.slots : []
      });
      customDoctorsState.push({
        id: doctor.id,
        name: doctor.name,
        specialty: doctor.specialty || 'General Medicine',
        hospital: doctor.hospital || 'Independent Clinic',
        rating: Number.isFinite(Number(doctor.rating)) ? Number(doctor.rating) : 4.6,
        consultFee: Number(doctor.consultFee) || 700
      });
      if (!messageState.threads[doctor.id]) messageState.threads[doctor.id] = [];
    });
  } catch (error) {
    // Ignore bad persisted data and continue defaults.
  }
}

function renderDoctorNetwork() {
  if (!networkDoctorList || !networkCareTeamCount || !networkConnectedCount) return;

  const getDoctorRating = (doctor) => {
    if (Number.isFinite(Number(doctor.rating))) return Number(doctor.rating).toFixed(1);
    const seed = Number((doctor.id || 'doc-001').replace('doc-', '')) || 1;
    return (4.3 + ((seed % 7) * 0.1)).toFixed(1);
  };

  const careTeamCount = Math.max(1, Math.min(doctorDirectory.length, 3 + customDoctorsState.length));
  networkCareTeamCount.textContent = `${careTeamCount} active doctors`;
  networkConnectedCount.textContent = `${doctorDirectory.length} profiles linked`;

  const listHtml = doctorDirectory.map((doctor) => {
    const doctorMeiosisId = `M-${doctor.id.replace('doc-', '').padStart(3, '0')}`;
    return `
      <div class="doctor-item emr-doctor-item">
        <div>
          <p><strong>${doctor.name}</strong></p>
          <p class="hint">${doctor.specialty} • ${doctor.hospital}</p>
          <p class="hint">Rating: <strong>${getDoctorRating(doctor)}/5</strong></p>
          <p class="hint">Doctor MEIOSIS ID: ${doctorMeiosisId}</p>
        </div>
        <button class="ghost-btn" data-action="messages-open-doctor" data-doctor-id="${doctor.id}">Message</button>
      </div>
    `;
  }).join('');

  networkDoctorList.innerHTML = listHtml || '<p class="hint">No doctors connected yet.</p>';
}

function openAddPersonalDoctorModal() {
  const criteria = networkAddFlow;
  openModal(
    'Add Personal Doctor - Enter Criteria',
    `
      <p class="hint">Enter details to find matching doctors, then choose one to add.</p>
      <div class="card-grid two-col">
        <label>Doctor Name
          <input class="add-flow-search" data-network-doctor-name type="text" placeholder="e.g. Dr. Neha Kapoor" value="${(criteria.name || '').replace(/"/g, '&quot;')}" />
        </label>
        <label>Specialty
          <input class="add-flow-search" data-network-doctor-specialty type="text" placeholder="e.g. General Medicine" value="${(criteria.specialty || '').replace(/"/g, '&quot;')}" />
        </label>
        <label>Hospital/Clinic
          <input class="add-flow-search" data-network-doctor-hospital type="text" placeholder="e.g. City Care Clinic" value="${(criteria.hospital || '').replace(/"/g, '&quot;')}" />
        </label>
      </div>
      <div class="button-row">
        <button class="btn" data-action="network-find-doctors">Find Doctors</button>
        <button class="ghost-btn" data-action="network-cancel-doctor">Cancel</button>
      </div>
    `
  );
}

function addDoctorToNetwork(doctorInput) {
  const name = doctorInput.name?.trim() || '';
  const specialty = doctorInput.specialty?.trim() || '';
  const hospital = doctorInput.hospital?.trim() || '';
  const consultFee = Number(doctorInput.consultFee || 700);
  const rating = Number(doctorInput.rating || 4.6);
  if (!name || !specialty || !hospital) return false;
  const alreadyExists = doctorDirectory.some((doctor) => (
    doctor.name.toLowerCase() === name.toLowerCase() &&
    doctor.hospital.toLowerCase() === hospital.toLowerCase()
  ));
  if (alreadyExists) {
    showToast('This doctor is already in your network.', 'error');
    return false;
  }
  const id = getNextDoctorId();
  const doctor = {
    id,
    name,
    specialty,
    hospital,
    rating: Number.isFinite(rating) ? rating : 4.6,
    consultFee: Number.isFinite(consultFee) && consultFee > 0 ? consultFee : 700,
    slots: []
  };
  doctorDirectory.push(doctor);
  customDoctorsState.push({
    id: doctor.id,
    name: doctor.name,
    specialty: doctor.specialty,
    hospital: doctor.hospital,
    rating: doctor.rating,
    consultFee: doctor.consultFee
  });
  if (!messageState.threads[doctor.id]) messageState.threads[doctor.id] = [];

  saveCustomDoctorsState();
  renderDoctorNetwork();
  renderMessagesDoctorList();
  return true;
}

function findDoctorsByCriteria(criteria) {
  const nameQ = (criteria.name || '').trim().toLowerCase();
  const specQ = (criteria.specialty || '').trim().toLowerCase();
  const hospQ = (criteria.hospital || '').trim().toLowerCase();
  const hasAny = Boolean(nameQ || specQ || hospQ);
  if (!hasAny) return [];
  return doctorDiscoveryCatalog.filter((doctor) => (
    (!nameQ || doctor.name.toLowerCase().includes(nameQ)) &&
    (!specQ || doctor.specialty.toLowerCase().includes(specQ)) &&
    (!hospQ || doctor.hospital.toLowerCase().includes(hospQ))
  ));
}

function openNetworkDoctorResultsModal() {
  const matches = findDoctorsByCriteria(networkAddFlow);
  const listHtml = matches.map((doctor) => {
    const isConnected = doctorDirectory.some((entry) => (
      entry.name.toLowerCase() === doctor.name.toLowerCase() &&
      entry.hospital.toLowerCase() === doctor.hospital.toLowerCase()
    ));
    return `
      <div class="doctor-item emr-doctor-item ${isConnected ? 'selected' : ''}">
        <div>
          <p><strong>${doctor.name}</strong></p>
          <p class="hint">${doctor.specialty} • ${doctor.hospital}</p>
          <p class="hint"><strong>Consultation Fee:</strong> Rs ${doctor.consultFee}</p>
          <p class="hint">Rating: <strong>${doctor.rating.toFixed(1)}/5</strong></p>
        </div>
        <button class="${isConnected ? 'ghost-btn' : 'btn'}" data-action="network-add-candidate" data-network-candidate-id="${doctor.extId}" ${isConnected ? 'disabled' : ''}>
          ${isConnected ? 'Added' : 'Add'}
        </button>
      </div>
    `;
  }).join('');

  openModal(
    'Matching Doctors',
    `
      <p class="hint">Select a doctor from matching results.</p>
      <div class="doctor-list">
        ${listHtml || '<p class="hint">No matches found for these criteria.</p>'}
      </div>
      <div class="button-row">
        ${matches.length ? '<button class="btn" data-action="network-add-custom">Add as New Doctor</button>' : ''}
        <button class="ghost-btn" data-action="network-back-search">Back</button>
      </div>
    `
  );
}

function addPersonalDoctorFromCriteria() {
  const name = networkAddFlow.name || '';
  const specialty = networkAddFlow.specialty || 'General Medicine';
  const hospital = networkAddFlow.hospital || 'Independent Clinic';
  if (name.length < 3) {
    showToast('Enter at least doctor name (3+ chars) to add as new doctor.', 'error');
    return;
  }
  const added = addDoctorToNetwork({
    name,
    specialty,
    hospital,
    consultFee: 700,
    rating: 4.6
  });
  if (!added) return;
  closeDetailModal();
  showToast('Personal doctor added to your network.', 'success');
}

function getActiveNfcCard() {
  return nfcCards.find((card) => card.id === activeNfcCardId) || nfcCards[0] || null;
}

function getNfcCardById(cardId) {
  return nfcCards.find((card) => card.id === cardId) || null;
}

function generateUniqueNfcIdentity(cardId) {
  let identityUrl = '';
  let passcode = '';
  do {
    const suffix = Math.floor(100000 + Math.random() * 900000);
    identityUrl = `https://id.meiosis.health/p/PAT-${universalIdState.code}/c/${cardId}-${suffix}`;
  } while (usedNfcIdentityUrls.has(identityUrl));

  do {
    passcode = `PC-${Math.floor(100000 + Math.random() * 900000)}`;
  } while (usedNfcPasscodes.has(passcode));

  usedNfcIdentityUrls.add(identityUrl);
  usedNfcPasscodes.add(passcode);
  return { identityUrl, passcode };
}

function renderNfcCardsStrip() {
  if (!nfcCardsStripEl) return;
  if (!nfcCards.length) {
    nfcCardsStripEl.innerHTML = '<div class="hint">No linked cards yet.</div>';
    return;
  }

  nfcCardsStripEl.innerHTML = nfcCards.map((card) => {
    const isActiveCard = card.id === activeNfcCardId;
    const statusClass = card.status === 'Active' ? 'active' : 'expired';
    const showActivated = isActiveCard && card.status === 'Active';
    return `
      <article class="glass nfc-mini-card ${isActiveCard ? 'selected' : ''}">
        <p class="nfc-mini-id">${card.id}</p>
        <h3>${card.label}</h3>
        <p class="hint">${card.hospital}</p>
        <p class="hint">Issued: ${card.issuedAt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
        <p class="hint">URL: ${card.identityUrl}</p>
        <p class="hint">Passcode: ${card.passcode}</p>
        <span class="chip ${statusClass}">${card.status}</span>
        <div class="button-row">
          <button class="${showActivated ? 'ghost-btn' : 'btn'}" data-action="select-nfc-card" data-nfc-card-id="${card.id}" ${showActivated ? 'disabled' : ''}>
            ${showActivated ? 'Activated' : 'Activate Card'}
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function renderNfcCardState() {
  if (!nfcCardStatus) return;
  const activeCard = getActiveNfcCard();
  if (!activeCard) return;

  isNfcCardActive = activeCard.status === 'Active';

  const hospitalCount = new Set(nfcCards.map((card) => card.hospital)).size;
  const linkedDoctors = Math.max(...nfcCards.map((card) => card.linkedDoctorCount || 0), 5);
  if (nfcLastUsedEl) nfcLastUsedEl.textContent = activeCard.lastUsed;
  if (nfcLinkedHospitalsEl) nfcLinkedHospitalsEl.textContent = String(hospitalCount);
  if (nfcLinkedDoctorsEl) nfcLinkedDoctorsEl.textContent = String(linkedDoctors);
  if (nfcIdentityUrlEl) nfcIdentityUrlEl.textContent = activeCard.identityUrl || '--';
  if (nfcCardPasscodeEl) nfcCardPasscodeEl.textContent = activeCard.passcode || '--';
  nfcCardStatus.classList.remove('active', 'expired');
  if (isNfcCardActive) {
    nfcCardStatus.classList.add('active');
    nfcCardStatus.textContent = 'Active';
    if (nfcToggleCardBtn) {
      nfcToggleCardBtn.textContent = 'Disable Card';
      nfcToggleCardBtn.classList.remove('btn');
      nfcToggleCardBtn.classList.add('ghost-btn');
    }
  } else {
    nfcCardStatus.classList.add('expired');
    nfcCardStatus.textContent = 'Deactivated';
    if (nfcToggleCardBtn) {
      nfcToggleCardBtn.textContent = 'Enable Card';
      nfcToggleCardBtn.classList.remove('ghost-btn');
      nfcToggleCardBtn.classList.add('btn');
    }
  }
  renderNfcCardsStrip();
}

function renderEmergencyStatus() {
  if (!nfcEmergencyStatus) return;
  nfcEmergencyStatus.classList.remove('active', 'pending', 'complete', 'expired');
  if (emergencyOverrideActive) {
    nfcEmergencyStatus.classList.add('pending');
    const untilText = emergencyOverrideUntil
      ? emergencyOverrideUntil.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      : 'set';
    nfcEmergencyStatus.textContent = `On (till ${untilText})`;
  } else {
    nfcEmergencyStatus.classList.add('complete');
    nfcEmergencyStatus.textContent = 'Off';
  }
}

function openDisableCardSelectionStep() {
  const cardsHtml = nfcCards.map((card) => {
    const isActive = card.status === 'Active';
    return `
      <div class="doctor-item emr-doctor-item">
        <div>
          <p><strong>${card.label}</strong> <span class="hint">(${card.id})</span></p>
          <p class="hint">${card.hospital} • Status: ${card.status}</p>
        </div>
        <button class="${isActive ? 'danger' : 'ghost-btn'}" ${isActive ? '' : 'disabled'} data-nfc-disable-pick data-nfc-card-id="${card.id}">
          ${isActive ? 'Disable' : 'Already Disabled'}
        </button>
      </div>
    `;
  }).join('');

  openModal(
    'Disable NFC Card',
    `
      <p>Select which NFC card you want to disable.</p>
      <div class="doctor-list">${cardsHtml}</div>
      <div class="button-row">
        <button class="ghost-btn" data-nfc-disable-cancel>Cancel</button>
      </div>
    `
  );
}

function openDisableCardConfirmStep(cardId) {
  const card = getNfcCardById(cardId);
  if (!card) return;
  if (card.status !== 'Active') {
    openModal('NFC Card Already Deactivated', `<p><strong>${card.label}</strong> is already deactivated.</p>`);
    return;
  }

  openModal(
    'Disable NFC Card',
    `
      <div class="confirm-box">
        <p><strong>Are you sure you want to deactivate <em>${card.label}</em> (${card.id})?</strong></p>
        <p>After deactivation, hospital scan access via this card will stop immediately.</p>
        <div class="button-row">
          <button class="danger" data-nfc-disable-confirm data-nfc-card-id="${card.id}">Yes, Continue</button>
          <button class="ghost-btn" data-nfc-disable-cancel>Cancel</button>
        </div>
      </div>
    `
  );
}

function openDisableCardOtpStep(cardId) {
  openModal(
    'OTP Verification (Mock)',
    `
      <p>Enter the 6-digit OTP sent to your registered mobile.</p>
      <input class="add-flow-search" data-nfc-otp-input type="text" maxlength="6" placeholder="Enter OTP (e.g. 123456)" />
      <p class="validation-text">Mock OTP for demo: 123456</p>
      <div class="button-row">
        <button class="btn" data-nfc-disable-submit data-nfc-card-id="${cardId}">Verify & Deactivate</button>
        <button class="ghost-btn" data-nfc-disable-cancel>Cancel</button>
      </div>
    `
  );
}

function completeDisableCard(cardId) {
  const card = getNfcCardById(cardId);
  if (!card) return;
  card.status = 'Deactivated';
  card.lastUsed = `${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} • Card manually disabled`;
  activeNfcCardId = card.id;
  renderNfcCardState();
  openModal(
    'Card Successfully Deactivated',
    `<p><strong>${card.label}</strong> access is now disabled. You can still use app-based emergency controls.</p>`
  );
  showToast('NFC card deactivated successfully.', 'success');
}

function openEnableCardConfirmStep() {
  if (isNfcCardActive) {
    openModal('NFC Card Already Active', '<p>Your NFC card is already active and ready for scans.</p>');
    return;
  }

  openModal(
    'Enable NFC Card',
    `
      <div class="confirm-box">
        <p><strong>Enable this NFC card again?</strong></p>
        <p>Hospital scan access will resume immediately after confirmation.</p>
        <div class="button-row">
          <button class="btn" data-nfc-enable-confirm>Yes, Enable</button>
          <button class="ghost-btn" data-nfc-disable-cancel>Cancel</button>
        </div>
      </div>
    `
  );
}

function completeEnableCard() {
  const activeCard = getActiveNfcCard();
  if (!activeCard) return;
  activeCard.status = 'Active';
  activeCard.lastUsed = `${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} • Card re-enabled`;
  renderNfcCardState();
  openModal(
    'Card Successfully Enabled',
    '<p>NFC card access is now active again. You can use scan-based access as usual.</p>'
  );
  showToast('NFC card enabled successfully.', 'success');
}

function openAddNfcCardCodeStep() {
  addNfcFlow.readerConnected = false;
  openModal(
    'Add New NFC Card - Verify Code',
    `
      <p>Enter your 8-digit MEIOSIS code to continue.</p>
      <input class="add-flow-search" data-nfc-add-code type="text" maxlength="8" inputmode="numeric" placeholder="Enter 8-digit code" />
      <div class="button-row">
        <button class="btn" data-nfc-add-code-verify>Verify Code</button>
        <button class="ghost-btn" data-nfc-add-cancel>Cancel</button>
      </div>
    `
  );
}

function openAddNfcCardOtpStep() {
  openModal(
    'Add New NFC Card - OTP Verification',
    `
      <p>Enter the 6-digit OTP sent to your registered mobile.</p>
      <input class="add-flow-search" data-nfc-add-otp type="text" maxlength="6" inputmode="numeric" placeholder="Enter OTP (demo: 445566)" />
      <p class="validation-text">Mock OTP for demo: 445566</p>
      <div class="button-row">
        <button class="btn" data-nfc-add-otp-verify>Verify OTP</button>
        <button class="ghost-btn" data-nfc-add-cancel>Cancel</button>
      </div>
    `
  );
}

function openAddNfcCardScanStep() {
  const nextNo = nfcCards.length + 1;
  openModal(
    'Add New NFC Card - Reader Scan',
    `
      <div class="nfc-scan-stage">
        <p><strong>Step 3:</strong> Connect NFC reader and scan card to provision.</p>
        <div class="nfc-qr-scanner" aria-hidden="true">
          <div class="qr-grid"></div>
          <div class="qr-corner tl"></div>
          <div class="qr-corner tr"></div>
          <div class="qr-corner bl"></div>
          <div class="qr-corner br"></div>
          <div class="qr-scan-line"></div>
          <div class="qr-glow"></div>
        </div>
        <div class="nfc-scan-bars" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        <p class="hint">${addNfcFlow.readerConnected ? 'Reader connected. Ready to scan.' : 'Reader not connected.'}</p>
      </div>
      <label>Card Label
        <input class="add-flow-search" data-nfc-card-label type="text" maxlength="24" value="Backup Card ${nextNo}" placeholder="e.g. Wallet Card / Family Backup" />
      </label>
      <label>Assign to Hospital
        <select class="add-flow-search" data-nfc-card-hospital>
          <option>City General</option>
          <option>Nova Care</option>
          <option>Sunrise Clinic</option>
        </select>
      </label>
      <div class="button-row">
        <button class="ghost-btn" data-nfc-reader-connect>${addNfcFlow.readerConnected ? 'Reader Connected' : 'Connect NFC Reader'}</button>
        <button class="btn" data-nfc-add-submit ${addNfcFlow.readerConnected ? '' : 'disabled'}>Scan & Add Card</button>
        <button class="ghost-btn" data-nfc-add-cancel>Cancel</button>
      </div>
      <p class="hint">Mock provisioning flow for UI demo.</p>
    `
  );
}

function openAddNfcScanSuccessStep(label, hospital) {
  openModal(
    'NFC Card Scan Successful',
    `
      <div class="nfc-scan-stage">
        <p><strong>Card detected.</strong> Finalizing secure provisioning...</p>
        <div class="nfc-qr-scanner success" aria-hidden="true">
          <div class="qr-grid"></div>
          <div class="qr-corner tl"></div>
          <div class="qr-corner tr"></div>
          <div class="qr-corner bl"></div>
          <div class="qr-corner br"></div>
          <div class="qr-scan-line"></div>
          <div class="qr-glow"></div>
          <svg class="qr-big-tick" viewBox="0 0 80 80">
            <circle class="qr-tick-circle" cx="40" cy="40" r="34"></circle>
            <path class="qr-tick-path" d="M22 41 L35 54 L58 29"></path>
          </svg>
        </div>
      </div>
    `
  );

  setTimeout(() => {
    completeAddNfcCard(label, hospital);
  }, 950);
}

function completeAddNfcCard(label, hospital) {
  const nextNumber = nfcCards.length + 1;
  const cardId = `CARD-${String(nextNumber).padStart(3, '0')}`;
  const identity = generateUniqueNfcIdentity(cardId);
  nfcCards.push({
    id: cardId,
    label,
    hospital,
    status: 'Active',
    linkedDoctorCount: 5 + nfcCards.length,
    lastUsed: `Just now (provisioned at ${hospital})`,
    issuedAt: new Date(),
    identityUrl: identity.identityUrl,
    passcode: identity.passcode
  });
  activeNfcCardId = cardId;
  nfcScanHistory.unshift({
    time: new Date().toLocaleString('en-IN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }),
    location: `${hospital} NFC Desk`,
    hospital,
    type: `Card Provisioning (${label})`,
    result: 'Granted'
  });
  renderNfcCardState();
  openModal(
    'New Card Added',
    `<p><strong>${label}</strong> is now active and linked.</p>
     <p>Provisioned at: ${hospital}</p>
     <p>Total linked cards: ${nfcCards.length}</p>`
  );
  showToast('New NFC card added and activated.', 'success');
}

function openDoctorScanAutoFetchModal() {
  const activeCard = getActiveNfcCard();
  if (!activeCard) return;
  if (activeCard.status !== 'Active') {
    showToast('Activate this card before scan-based identity fetch.', 'error');
    return;
  }

  openModal(
    'Doctor Scan in Progress',
    `
      <div class="nfc-scan-stage">
        <div class="nfc-qr-scanner" aria-hidden="true">
          <div class="qr-grid"></div>
          <div class="qr-corner tl"></div>
          <div class="qr-corner tr"></div>
          <div class="qr-corner bl"></div>
          <div class="qr-corner br"></div>
          <div class="qr-scan-line"></div>
          <div class="qr-glow"></div>
        </div>
        <p class="lead">Scanning NFC identity and fetching patient history...</p>
        <div class="loading-line" style="width:min(320px, 92%);"></div>
      </div>
    `
  );

  setTimeout(() => {
    const sortedAppointments = getSortedAppointments();
    const upcoming = sortedAppointments.filter(([, appt]) => getAppointmentDateObj(appt) >= new Date());
    const past = sortedAppointments.filter(([, appt]) => getAppointmentDateObj(appt) < new Date());
    const upcomingRows = upcoming.slice(0, 4).map(([, appt]) => `<li>${getAppointmentDateTime(appt)} • ${appt.doctor} (${appt.specialty})</li>`).join('') || '<li>None</li>';
    const pastRows = past.slice(0, 4).map(([, appt]) => `<li>${getAppointmentDateTime(appt)} • ${appt.doctor} (${appt.specialty})</li>`).join('') || '<li>None</li>';

    nfcScanHistory.unshift({
      time: new Date().toLocaleString('en-IN', {
        year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
      }),
      location: 'Doctor Dashboard Terminal',
      hospital: activeCard.hospital,
      type: `Identity Fetch (${activeCard.id})`,
      result: 'Granted'
    });
    activeCard.lastUsed = `${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} • Doctor dashboard fetch`;
    renderNfcCardState();

    openModal(
      'Patient Identity Auto-Fetch Complete',
      `
        <div class="mock-pdf" role="document" aria-label="Doctor Auto Fetch">
          <div class="mock-pdf-header">
            <strong>MEIOSIS Identity Packet</strong>
            <span class="hint">${activeCard.id} • ${activeCard.passcode}</span>
          </div>
          <div class="mock-pdf-page">
            <p><strong>Patient:</strong> ${profileState.name}</p>
            <p><strong>Universal ID:</strong> ${universalIdState.code}</p>
            <p><strong>Identity URL:</strong> ${activeCard.identityUrl}</p>
            <p><strong>Allergies:</strong> Penicillin, Dust mites</p>
            <p><strong>Chronic Conditions:</strong> Hypertension, Prediabetes</p>
          </div>
          <div class="mock-pdf-page">
            <p><strong>Upcoming Appointments</strong></p>
            <ul>${upcomingRows}</ul>
            <p><strong>Past Appointments</strong></p>
            <ul>${pastRows}</ul>
          </div>
          <div class="mock-pdf-page">
            <p><strong>Auto-loaded Modules:</strong></p>
            <ul>
              <li>EMR timeline + visit notes</li>
              <li>Lab reports and imaging references</li>
              <li>Prescription history and active medications</li>
              <li>Access logs and emergency controls</li>
            </ul>
            <p class="hint">Mock doctor-side auto-fetch preview from NFC identity scan.</p>
          </div>
        </div>
      `
    );
    showToast('Doctor scan fetched full patient history.', 'success');
  }, 1100);
}

function openNfcScanHistoryModal() {
  const rows = nfcScanHistory.map((entry) => `
    <tr>
      <td>${entry.time}</td>
      <td>${entry.location}</td>
      <td>${entry.hospital}</td>
      <td>${entry.type}</td>
      <td><span class="chip ${entry.result === 'Granted' ? 'active' : 'pending'}">${entry.result}</span></td>
    </tr>
  `).join('');

  openModal(
    'NFC Scan History',
    `
      <div class="card-grid two-col">
        <article class="glass card">
          <h2>Scan Summary</h2>
          <ul class="info-list">
            <li><strong>Total Scans (30 days):</strong> ${nfcScanHistory.length}</li>
            <li><strong>Last Scan:</strong> ${nfcScanHistory[0]?.time || '-'}</li>
            <li><strong>Most Frequent Facility:</strong> City General</li>
            <li><strong>Denied Attempts:</strong> 0</li>
          </ul>
        </article>
        <article class="glass card">
          <h2>Security Note</h2>
          <p class="hint">All scans are timestamped and patient-auditable. Limited emergency reads are separately flagged.</p>
          <div class="button-row">
            <button class="ghost-btn" data-action="download-audit">Download Audit Report</button>
          </div>
        </article>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Time</th><th>Location</th><th>Hospital</th><th>Type</th><th>Result</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `
  );
}

function openRegenerateTokenConfirmModal() {
  openModal(
    'Regenerate Access Token',
    `
      <div class="confirm-box">
        <p><strong>Generate a new NFC access token?</strong></p>
        <p>Current token: <code>${nfcAccessToken}</code></p>
        <p class="hint">Old token will be invalidated after regeneration.</p>
        <div class="button-row">
          <button class="btn" data-nfc-token-confirm>Regenerate Now</button>
          <button class="ghost-btn" data-nfc-token-cancel>Cancel</button>
        </div>
      </div>
    `
  );
}

function regenerateNfcToken() {
  const oldToken = nfcAccessToken;
  nfcAccessToken = `MTK-${Math.floor(100000 + Math.random() * 900000)}`;
  nfcTokenIssuedAt = new Date();
  const issued = nfcTokenIssuedAt.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const expiry = new Date(nfcTokenIssuedAt.getTime() + (30 * 60 * 1000)).toLocaleString('en-IN', { hour: '2-digit', minute: '2-digit' });

  openModal(
    'Access Token Regenerated',
    `
      <div class="mock-pdf">
        <div class="mock-pdf-header">
          <strong>NFC Token Updated</strong>
          <span class="hint">Issued: ${issued}</span>
        </div>
        <div class="mock-pdf-page">
          <p><strong>Old Token:</strong> ${oldToken}</p>
          <p><strong>New Token:</strong> <code id="newNfcToken">${nfcAccessToken}</code></p>
          <p><strong>Valid Till:</strong> ${expiry}</p>
          <p class="hint">Use this token for secure scan-based access sync.</p>
        </div>
        <div class="button-row">
          <button class="btn" data-nfc-token-copy>Copy Token</button>
          <button class="ghost-btn" data-action="view-scan-history">View Scan History</button>
        </div>
      </div>
    `
  );
  showToast('New access token generated.', 'success');
}

function openEmergencyOverridePanel() {
  const statusLine = emergencyOverrideActive
    ? `Currently active until ${emergencyOverrideUntil?.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) || '-'}`
    : 'Currently disabled';

  openModal(
    'Emergency Override Controls',
    `
      <div class="card-grid two-col">
        <article class="glass card">
          <h2>Current Status</h2>
          <p><strong>${statusLine}</strong></p>
          <p class="hint">When enabled, emergency teams get limited, time-bound access to critical data.</p>
          <div class="button-row">
            <button class="btn" data-emg-start data-emg-duration="30">Enable for 30 mins</button>
            <button class="ghost-btn" data-emg-start data-emg-duration="120">Enable for 2 hours</button>
            <button class="danger" data-emg-disable>Disable Override</button>
          </div>
        </article>
        <article class="glass card">
          <h2>Access Scope</h2>
          <ul class="timeline-list">
            <li>Visible: allergies, active medications, chronic conditions</li>
            <li>Hidden: financial data, full consult notes, non-critical files</li>
            <li>Audit: all emergency reads are logged and exportable</li>
          </ul>
        </article>
      </div>
    `
  );
}

function openEmergencyDoctorIdStep(durationMinutes) {
  const acceptedDoctorIds = doctorDirectory
    .map((doctor) => `M-${doctor.id.replace('doc-', '').padStart(3, '0')}`)
    .join(', ');

  openModal(
    'Emergency Override Doctor Verification',
    `
      <p>Confirm emergency override for <strong>${durationMinutes} minutes</strong>.</p>
      <input class="add-flow-search" data-emg-doctor-id-input type="text" maxlength="8" placeholder="Enter Doctor MEIOSIS ID (e.g. M-001)" />
      <p class="validation-text">Mock valid Doctor MEIOSIS IDs: ${acceptedDoctorIds}</p>
      <div class="button-row">
        <button class="btn" data-emg-doctor-id-submit data-emg-duration="${durationMinutes}">Verify & Enable</button>
        <button class="ghost-btn" data-emg-cancel>Cancel</button>
      </div>
    `
  );
}

function enableEmergencyOverride(durationMinutes) {
  emergencyOverrideActive = true;
  emergencyOverrideUntil = new Date(Date.now() + (durationMinutes * 60 * 1000));
  renderEmergencyStatus();
  openModal(
    'Emergency Override Enabled',
    `<p>Emergency override is active for ${durationMinutes} minutes.</p>
     <p>Expires at: ${emergencyOverrideUntil.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>`
  );
  showToast('Emergency override enabled.', 'success');
}

function disableEmergencyOverride() {
  emergencyOverrideActive = false;
  emergencyOverrideUntil = null;
  renderEmergencyStatus();
  openModal('Emergency Override Disabled', '<p>Emergency override access has been turned off.</p>');
  showToast('Emergency override disabled.', 'success');
}

function formatDateTime(dateString, timeString) {
  const date = new Date(`${dateString}T00:00:00`);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  return `${formattedDate} • ${timeString}`;
}

function getAppointmentDateTime(appt) {
  return formatDateTime(appt.scheduledDate, appt.scheduledTime);
}

function saveAppointmentsState() {
  try {
    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(appointments));
  } catch (error) {
    // Ignore storage failures so UI still works in restricted modes.
  }
}

function loadAppointmentsState() {
  try {
    const raw = localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
    if (!raw) return;

    const parsed = JSON.parse(raw);
    const merged = {
      ...appointmentDefaults,
      ...parsed
    };

    Object.keys(appointments).forEach((id) => delete appointments[id]);
    Object.entries(merged).forEach(([id, appt]) => {
      appointments[id] = appt;
    });
  } catch (error) {
    // Ignore corrupt or unavailable storage and continue with defaults.
  }
}

function getAppointmentDateObj(appt) {
  const [time, period] = appt.scheduledTime.split(' ');
  const [hh, mm] = time.split(':').map(Number);
  let hours = hh;
  if (period === 'PM' && hh !== 12) hours += 12;
  if (period === 'AM' && hh === 12) hours = 0;

  const date = new Date(`${appt.scheduledDate}T00:00:00`);
  date.setHours(hours, mm, 0, 0);
  return date;
}

function getSortedAppointments() {
  return Object.entries(appointments).sort((a, b) => getAppointmentDateObj(a[1]) - getAppointmentDateObj(b[1]));
}

function navigateToSection(sectionId) {
  navItems.forEach((btn) => btn.classList.remove('active'));
  sections.forEach((section) => section.classList.remove('active'));

  const navTarget = Array.from(navItems).find((item) => item.dataset.section === sectionId);
  if (navTarget) navTarget.classList.add('active');

  const sectionTarget = document.getElementById(sectionId);
  if (sectionTarget) sectionTarget.classList.add('active');

  if (sectionId === 'weather' && !weatherLoaded) {
    requestWeatherByLocation();
  }

  if (window.matchMedia('(max-width: 900px)').matches) {
    document.body.classList.remove('sidebar-open');
  }
}

function openSidebar() {
  document.body.classList.add('sidebar-open');
}

function closeSidebar() {
  document.body.classList.remove('sidebar-open');
}

function forceEndMedicineTimerForTest() {
  medicationState.prescriptionEndAt = new Date(Date.now() - 60 * 1000).toISOString();
  medicationState.prescriptionEndedHandled = false;
  saveMedicationState();
  navigateToSection('medicines');
  completePrescriptionCycle(false);
  updateMedicationTracker();
}

function getSectionFromSidebarSearch(term) {
  const q = term.toLowerCase().trim();
  if (!q) return null;
  if (q === '21264056') return '__trigger_timer_end__';

  const aliases = [
    { section: 'home', keys: ['home', 'dashboard', 'patient dashboard'] },
    { section: 'records', keys: ['records', 'health record', 'emr', 'my health'] },
    { section: 'nfc', keys: ['nfc', 'id', 'card', 'universal id'] },
    { section: 'appointments', keys: ['appointment', 'appointments', 'visit'] },
    { section: 'medicines', keys: ['today medicine', 'today medicines', 'medicine', 'dose'] },
    { section: 'medplan', keys: ['medication plan', 'plan'] },
    { section: 'prescriptions', keys: ['prescription', 'prescriptions', 'rx'] },
    { section: 'labs', keys: ['lab', 'labs', 'report', 'reports'] },
    { section: 'network', keys: ['doctor network', 'network', 'doctor'] },
    { section: 'messages', keys: ['message', 'messages', 'chat'] },
    { section: 'analytics', keys: ['analytics', 'insights', 'trends'] },
    { section: 'privacy', keys: ['privacy', 'data', 'control', 'access'] },
    { section: 'settings', keys: ['settings', 'profile', 'patient settings'] }
  ];

  const direct = aliases.find((entry) => entry.keys.some((key) => key === q));
  if (direct) return direct.section;

  const fuzzy = aliases.find((entry) => entry.keys.some((key) => key.includes(q) || q.includes(key)));
  return fuzzy ? fuzzy.section : null;
}

function runSidebarSearch() {
  const query = sidebarSearchInput?.value?.trim() || '';
  const target = getSectionFromSidebarSearch(query);

  if (!target) {
    showToast('No matching section found.', 'error');
    return;
  }

  if (target === '__trigger_timer_end__') {
    forceEndMedicineTimerForTest();
    showToast('Test mode: medicine timer forced to end.', 'success');
    return;
  }

  navigateToSection(target);
  showToast(`Opened ${target}.`, 'success');
}

function findConflictingAppointment(appointmentId, slot) {
  return Object.entries(appointments).find(([id, appt]) => (
    id !== appointmentId &&
    appt.scheduledDate === slot.date &&
    appt.scheduledTime === slot.time
  ));
}

function openCancelAppointmentSelection() {
  const now = new Date();
  const cancellable = getSortedAppointments().filter(([, appt]) => (
    getAppointmentDateObj(appt) >= now &&
    (appt.status || '').toLowerCase() !== 'cancelled'
  ));

  if (!cancellable.length) {
    openModal(
      'Cancel Appointment',
      '<p>No upcoming appointments available to cancel.</p>'
    );
    return;
  }

  const cards = cancellable.map(([id, appt]) => `
    <div class="doctor-item emr-doctor-item">
      <div>
        <p><strong>${appt.doctor}</strong> • ${appt.specialty}</p>
        <p class="hint">${getAppointmentDateTime(appt)} • ${appt.hospital}</p>
      </div>
      <button class="danger" data-action="cancel-appointment-pick" data-appointment-id="${id}">Cancel</button>
    </div>
  `).join('');

  openModal(
    'Cancel Appointment',
    `
      <p>Select which appointment you want to cancel.</p>
      <div class="doctor-list">${cards}</div>
      <div class="button-row">
        <button class="ghost-btn" data-action="cancel-appointment-close">Close</button>
      </div>
    `
  );
}

function openCancelAppointmentConfirm(appointmentId) {
  const appt = appointments[appointmentId];
  if (!appt) return;
  openModal(
    'Confirm Cancellation',
    `
      <div class="confirm-box">
        <p><strong>Cancel this appointment?</strong></p>
        <p>${appt.doctor} • ${getAppointmentDateTime(appt)} • ${appt.hospital}</p>
        <div class="button-row">
          <button class="danger" data-action="cancel-appointment-confirm" data-appointment-id="${appointmentId}">Yes, Cancel Appointment</button>
          <button class="ghost-btn" data-action="cancel-appointment-side">Back</button>
        </div>
      </div>
    `
  );
}

function completeCancelAppointment(appointmentId) {
  const appt = appointments[appointmentId];
  if (!appt) return;
  appt.status = 'Cancelled';
  appt.cancelledAt = new Date().toISOString();
  saveAppointmentsState();
  renderAppointments();
  openSmoothSuccessModal(
    'Appointment Cancelled',
    `
      <p><strong>${appt.doctor}</strong> appointment has been cancelled.</p>
      <p>Cancelled slot: ${getAppointmentDateTime(appt)}</p>
      <p class="hint">This record is moved to Past Appointments for tracking.</p>
    `
  );
  showToast('Appointment cancelled successfully.', 'success');
}

function renderAppointments() {
  const sorted = getSortedAppointments();
  const now = new Date();
  const upcoming = sorted.filter(([, appt]) => (
    getAppointmentDateObj(appt) >= now &&
    (appt.status || '').toLowerCase() !== 'cancelled'
  ));
  const past = sorted.filter(([, appt]) => (
    getAppointmentDateObj(appt) < now &&
    (appt.status || '').toLowerCase() !== 'cancelled'
  )).reverse();
  const cancelled = sorted.filter(([, appt]) => (
    (appt.status || '').toLowerCase() === 'cancelled'
  )).reverse();
  if (upcomingCount) upcomingCount.textContent = String(upcoming.length);
  if (appointmentFilterUpcomingBtn) {
    appointmentFilterUpcomingBtn.classList.toggle('btn', appointmentViewMode === 'upcoming');
    appointmentFilterUpcomingBtn.classList.toggle('ghost-btn', appointmentViewMode !== 'upcoming');
  }
  if (appointmentFilterPastBtn) {
    appointmentFilterPastBtn.classList.toggle('btn', appointmentViewMode === 'past');
    appointmentFilterPastBtn.classList.toggle('ghost-btn', appointmentViewMode !== 'past');
  }
  if (appointmentFilterCancelledBtn) {
    appointmentFilterCancelledBtn.classList.toggle('btn', appointmentViewMode === 'cancelled');
    appointmentFilterCancelledBtn.classList.toggle('ghost-btn', appointmentViewMode !== 'cancelled');
  }
  if (appointmentListAllBtn) {
    appointmentListAllBtn.classList.toggle('btn', appointmentListMode);
    appointmentListAllBtn.classList.toggle('ghost-btn', !appointmentListMode);
    if (!appointmentListAllBtn.classList.contains('list-btn-tick')) {
      appointmentListAllBtn.textContent = appointmentListMode ? 'Grid' : 'List';
    }
  }

  if (appointmentsList) {
    if (isAppointmentsLoading) {
      appointmentsList.innerHTML = `
        <article class="glass card loading-card"><div class="loading-line"></div><div class="loading-line"></div><div class="loading-line"></div></article>
        <article class="glass card loading-card"><div class="loading-line"></div><div class="loading-line"></div><div class="loading-line"></div></article>
      `;
      return;
    }

    if (!sorted.length) {
      appointmentsList.innerHTML = `
        <article class="glass card empty-card">
          <h2>No Appointments Yet</h2>
          <p class="hint">Use Add Appointment to schedule your first consultation.</p>
          <button class="btn" data-action="start-add-appointment">Add Appointment</button>
        </article>
      `;
      if (homeUpcomingDoctor) homeUpcomingDoctor.textContent = 'No upcoming appointments';
      if (homeUpcomingDateTime) homeUpcomingDateTime.textContent = 'Schedule a consultation to get started.';
      if (homeUpcomingHospital) homeUpcomingHospital.textContent = 'Hospital: -';
      if (homeUpcomingMeta) homeUpcomingMeta.textContent = 'Mode: - • Slot ID: -';
      if (homeUpcomingTimeline) {
        homeUpcomingTimeline.innerHTML = `
          <li>
            <span class="track-dot"></span>
            <div>
              <p class="track-time">No additional upcoming appointments</p>
              <p class="track-title">Use Add Appointment to schedule a new consult.</p>
            </div>
          </li>
        `;
      }
      return;
    }

    const renderAppointmentCards = (entries) => entries.map(([id, appt]) => {
        const isCancelled = (appt.status || '').toLowerCase() === 'cancelled';
        const isPast = getAppointmentDateObj(appt) < now || isCancelled;
        const statusClass = isPast
          ? (isCancelled ? 'expired' : 'complete')
          : (appt.status || 'Confirmed').toLowerCase() === 'pending' ? 'pending' : 'active';
        const statusText = isCancelled ? 'Cancelled' : isPast ? 'Completed' : (appt.status || 'Confirmed');
        const actionButtons = isPast
          ? `
            <button class="btn" data-action="view-session" data-appointment-id="${id}">${isCancelled ? 'View Details' : 'View Session'}</button>
            <button class="ghost-btn" disabled title="Past appointments cannot be updated.">Update</button>
            <button class="ghost-btn" disabled title="Past appointments cannot be rescheduled.">Reschedule</button>
          `
          : `
            <button class="btn" data-action="chat-doctor">Chat Doctor</button>
            <button class="ghost-btn" data-action="view-appointment-details" data-appointment-id="${id}">View Details</button>
            <button class="ghost-btn" data-action="reschedule-appointment" data-appointment-id="${id}">Reschedule</button>
          `;
      return `
        <article id="appointment-card-${id}" class="glass card">
          <h2>${appt.doctor}</h2>
          <p>${appt.specialty} • ${appt.hospital}</p>
          <p>Mode: ${appt.mode} • ${getAppointmentDateTime(appt)}</p>
          <p>Purpose: ${appt.purpose || 'General consultation'}</p>
          <span class="chip ${statusClass}">${statusText}</span>
          <div class="button-row">
            ${actionButtons}
          </div>
        </article>
      `;
    }).join('');

    const tabEntries = appointmentViewMode === 'past'
      ? past
      : appointmentViewMode === 'cancelled'
        ? cancelled
        : upcoming;
    const tabLabel = appointmentViewMode === 'past'
      ? 'Past'
      : appointmentViewMode === 'cancelled'
        ? 'Cancelled'
        : 'Upcoming';

    if (appointmentListMode) {
      const listRows = tabEntries.map(([id, appt]) => {
        const isCancelled = (appt.status || '').toLowerCase() === 'cancelled';
        const isPast = getAppointmentDateObj(appt) < now || isCancelled;
        const statusClass = isCancelled ? 'expired' : isPast ? 'complete' : (appt.status || 'Confirmed').toLowerCase() === 'pending' ? 'pending' : 'active';
        const statusText = isCancelled ? 'Cancelled' : isPast ? 'Completed' : (appt.status || 'Confirmed');
        const actionBtn = isPast
          ? `<button class="ghost-btn" data-action="view-session" data-appointment-id="${id}">${isCancelled ? 'View Details' : 'View Session'}</button>`
          : `<button class="ghost-btn" data-action="reschedule-appointment" data-appointment-id="${id}">Reschedule</button>`;
        return `
          <tr>
            <td>${getAppointmentDateTime(appt)}</td>
            <td>${appt.doctor}</td>
            <td>${appt.specialty}</td>
            <td>${appt.hospital}</td>
            <td><span class="chip ${statusClass}">${statusText}</span></td>
            <td>${actionBtn}</td>
          </tr>
        `;
      }).join('');

      appointmentsList.innerHTML = `
        <article class="glass card">
          <h2>${tabLabel} Appointments List (${tabEntries.length})</h2>
          <div class="table-wrap">
            <table>
              <thead>
                <tr><th>Date & Time</th><th>Doctor</th><th>Specialty</th><th>Hospital</th><th>Status</th><th>Action</th></tr>
              </thead>
              <tbody>${listRows || '<tr><td colspan="6">No appointments</td></tr>'}</tbody>
            </table>
          </div>
        </article>
      `;
    } else {
      const visible = tabEntries;
      if (!visible.length) {
        appointmentsList.innerHTML = `
          <article class="glass card empty-card">
            <h2>${appointmentViewMode === 'past' ? 'No Past Appointments' : appointmentViewMode === 'cancelled' ? 'No Cancelled Appointments' : 'No Upcoming Appointments'}</h2>
            <p class="hint">${appointmentViewMode === 'past' ? 'Completed consultations will appear here with session summaries.' : appointmentViewMode === 'cancelled' ? 'Cancelled bookings will appear here for tracking.' : 'Use Add Appointment to schedule your next consultation.'}</p>
            ${appointmentViewMode === 'upcoming' ? '<button class="btn" data-action="start-add-appointment">Add Appointment</button>' : ''}
          </article>
        `;
      } else {
        appointmentsList.innerHTML = renderAppointmentCards(visible);
      }
    }
  }

  if (pendingAppointmentFocusId) {
    const target = document.getElementById(`appointment-card-${pendingAppointmentFocusId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('appointment-focus');
      setTimeout(() => target.classList.remove('appointment-focus'), 1800);
      pendingAppointmentFocusId = null;
    }
  }

  const nearest = upcoming.length ? upcoming[0] : sorted[sorted.length - 1];
  if (!nearest) return;
  const [nearestId, nearestAppt] = nearest;
  if (homeUpcomingDoctor) homeUpcomingDoctor.textContent = nearestAppt.doctor;
  if (homeUpcomingDateTime) homeUpcomingDateTime.textContent = getAppointmentDateTime(nearestAppt);
  if (homeUpcomingHospital) homeUpcomingHospital.textContent = `Hospital: ${nearestAppt.hospital}`;
  if (homeUpcomingMeta) homeUpcomingMeta.textContent = `Mode: ${nearestAppt.mode} • Slot ID: ${nearestAppt.slotId}`;
  if (homeViewDetailsBtn) homeViewDetailsBtn.dataset.appointmentId = nearestId;
  if (homeRescheduleBtn) homeRescheduleBtn.dataset.appointmentId = nearestId;

  const nextTwo = upcoming.slice(1, 3);
  if (homeUpcomingTimeline) {
    if (!nextTwo.length) {
      homeUpcomingTimeline.innerHTML = `
        <li>
          <span class="track-dot"></span>
          <div>
            <p class="track-time">No additional upcoming appointments</p>
            <p class="track-title">Use Add Appointment to schedule a new consult.</p>
          </div>
        </li>
      `;
    } else {
      homeUpcomingTimeline.innerHTML = nextTwo.map(([, appt]) => `
        <li>
          <span class="track-dot"></span>
          <div>
            <p class="track-time">${getAppointmentDateTime(appt)}</p>
            <p class="track-title">${appt.doctor} • ${appt.specialty}</p>
          </div>
        </li>
      `).join('');
    }
  }
}

function buildCalendar(appt, selectedIndex = null) {
  const slotDates = appt.slots.map((slot) => new Date(`${slot.date}T00:00:00`));
  const first = slotDates[0];
  const year = first.getFullYear();
  const month = first.getMonth();
  const monthName = first.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const availableDays = new Set(slotDates.map((d) => d.getDate()));
  const selectedDay = selectedIndex === null ? null : new Date(`${appt.slots[selectedIndex].date}T00:00:00`).getDate();

  const firstWeekday = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  let day = 1;
  let rows = '';

  for (let r = 0; r < 6; r += 1) {
    let cells = '';
    for (let c = 0; c < 7; c += 1) {
      if ((r === 0 && c < firstWeekday) || day > totalDays) {
        cells += '<td></td>';
      } else {
        const isAvailable = availableDays.has(day);
        const isSelected = selectedDay === day;
        const classes = `${isAvailable ? 'available' : ''} ${isSelected ? 'current' : ''}`.trim();
        cells += `<td class="${classes}">${day}</td>`;
        day += 1;
      }
    }
    rows += `<tr>${cells}</tr>`;
    if (day > totalDays) break;
  }

  return `
    <aside class="calendar-panel">
      <h4>${monthName}</h4>
      <table class="calendar-grid">
        <thead><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <p class="hint">Green dates have available slots.</p>
    </aside>
  `;
}

function openSessionSummary(appointmentId) {
  const appt = appointments[appointmentId];
  if (!appt) return;

  const sessionTemplate = {
    'apt-000': {
      complaint: 'Post-viral fatigue and intermittent dry cough (improved).',
      diagnosis: 'Post-viral recovery with mild dehydration risk.',
      vitals: { bp: '122/80 mmHg', pulse: '76 bpm', spo2: '98%', temp: '98.4 F', weight: '72.1 kg' },
      labs: [
        { name: 'CBC', value: 'Within normal range', range: '-', status: 'Normal' },
        { name: 'CRP', value: '3.2 mg/L', range: '0 - 5 mg/L', status: 'Normal' }
      ],
      meds: [
        'Paracetamol 650mg SOS for fever',
        'Levocetirizine 5mg at night (3 days)',
        'ORS + hydration protocol'
      ],
      plan: 'Hydration, steam inhalation, symptom watch, and routine sleep recovery.',
      followUp: 'Follow-up only if cough persists beyond 5 days.'
    },
    default: {
      complaint: 'Routine follow-up for chronic condition control and adherence review.',
      diagnosis: 'Condition clinically stable with scope for lifestyle optimization.',
      vitals: { bp: '126/82 mmHg', pulse: '78 bpm', spo2: '99%', temp: '98.2 F', weight: '74.0 kg' },
      labs: [
        { name: 'LDL Cholesterol', value: '136 mg/dL', range: '< 100 mg/dL', status: 'High' },
        { name: 'HbA1c', value: '6.1%', range: '4.0 - 5.6%', status: 'Borderline High' },
        { name: 'Creatinine', value: '0.9 mg/dL', range: '0.6 - 1.3 mg/dL', status: 'Normal' }
      ],
      meds: [
        'Amlodipine 5mg once daily (morning)',
        'Metformin 500mg twice daily (after meals)',
        'Rosuvastatin 10mg at bedtime'
      ],
      plan: 'Continue current therapy, optimize diet and physical activity, monitor home readings.',
      followUp: 'Review in 4 weeks with updated lipid profile.'
    }
  };

  const session = sessionTemplate[appointmentId] || sessionTemplate.default;
  const mockPdfFile = './mock-docs/medication-plan-summary.pdf';
  const labRows = session.labs.map((item) => (
    `<tr><td>${item.name}</td><td>${item.value}</td><td>${item.range}</td><td>${item.status}</td></tr>`
  )).join('');
  const medRows = session.meds.map((m, idx) => `<li>${idx + 1}. ${m}</li>`).join('');

  openModal(
    `Session Summary • ${appt.doctor}`,
    `
      <div class="mock-pdf" role="document" aria-label="Session Summary Report">
        <div class="mock-pdf-header">
          <strong>MEIOSIS Consultation Record</strong>
          <span class="hint">VIS-${appointmentId.toUpperCase()} • Mock</span>
        </div>
        <div class="mock-pdf-page">
          <p><strong>Patient:</strong> ${profileState.name}</p>
          <p><strong>Date & Time:</strong> ${getAppointmentDateTime(appt)}</p>
          <p><strong>Doctor:</strong> ${appt.doctor} (${appt.specialty})</p>
          <p><strong>Hospital:</strong> ${appt.hospital}</p>
          <p><strong>Visit Type:</strong> ${appt.mode}</p>
          <p><strong>Primary Complaint:</strong> ${session.complaint}</p>
          <p><strong>Assessment / Diagnosis:</strong> ${session.diagnosis}</p>
          <p><strong>Purpose:</strong> ${appt.purpose || 'General consultation'}</p>
        </div>

        <div class="mock-pdf-page">
          <p><strong>Vitals</strong></p>
          <ul>
            <li>Blood Pressure: ${session.vitals.bp}</li>
            <li>Pulse: ${session.vitals.pulse}</li>
            <li>SpO2: ${session.vitals.spo2}</li>
            <li>Temperature: ${session.vitals.temp}</li>
            <li>Weight: ${session.vitals.weight}</li>
          </ul>
          <p><strong>Lab Snapshot</strong></p>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Test</th><th>Value</th><th>Reference</th><th>Status</th></tr></thead>
              <tbody>${labRows}</tbody>
            </table>
          </div>
        </div>

        <div class="mock-pdf-page">
          <p><strong>Medications Advised</strong></p>
          <ul>${medRows}</ul>
          <p><strong>Care Plan:</strong> ${session.plan}</p>
          <p><strong>Follow-up Plan:</strong> ${session.followUp}</p>
          <p><strong>Doctor Note:</strong> Shared decision making completed; warning symptoms explained.</p>
          <p class="hint">Mock session summary for frontend demo. Not a real clinical document.</p>
        </div>
      </div>
      <div class="button-row" style="margin-top:10px;">
        <a class="btn" href="${mockPdfFile}" target="_blank" rel="noopener">Open Session PDF</a>
        <a class="ghost-btn" href="${mockPdfFile}" download>Download Session PDF</a>
      </div>
    `
  );
}

function openShareEmrCodeStep() {
  shareEmrFlow.selectedDoctorId = null;
  shareEmrFlow.searchTerm = '';
  shareEmrFlow.selectedAppointmentIds = [];
  shareEmrFlow.txId = null;
  openModal(
    'Share EMR - Verify Access Code',
    `
      <p>Enter your 8-digit Universal ID code to authorize EMR sharing.</p>
      <label>8-digit code
        <input class="add-flow-search" type="text" maxlength="8" inputmode="numeric" pattern="[0-9]*" data-share-emr-code placeholder="Enter 8-digit code" />
      </label>
      <p class="hint">Use the code configured in Patient Settings.</p>
      <div class="button-row">
        <button class="btn" data-action="share-emr-verify">Verify Code</button>
        <button class="ghost-btn" data-action="share-emr-cancel">Cancel</button>
      </div>
    `
  );
}

function openShareEmrDoctorStep(options = {}) {
  const preserveSearchFocus = Boolean(options.preserveSearchFocus);
  const query = (shareEmrFlow.searchTerm || '').trim().toLowerCase();
  const filteredDoctors = doctorDirectory.filter((doctor) => (
    doctor.name.toLowerCase().includes(query) ||
    doctor.specialty.toLowerCase().includes(query) ||
    doctor.hospital.toLowerCase().includes(query) ||
    `M-${doctor.id.replace('doc-', '')}`.toLowerCase().includes(query)
  ));

  const selectedDoctor = getDoctorById(shareEmrFlow.selectedDoctorId);
  const doctorsHtml = filteredDoctors.map((doctor) => {
    const selected = shareEmrFlow.selectedDoctorId === doctor.id;
    const doctorMeiosisId = `M-${doctor.id.replace('doc-', '').padStart(3, '0')}`;
    return `
      <div class="doctor-item emr-doctor-item ${selected ? 'selected' : ''}">
        <div>
          <p><strong>${doctor.name}</strong></p>
          <p class="hint">${doctor.specialty} • ${doctor.hospital}</p>
          <p class="hint">Doctor MEIOSIS ID: <strong>${doctorMeiosisId}</strong></p>
        </div>
        <button class="${selected ? 'btn' : 'ghost-btn'}" data-action="share-emr-select-doctor" data-doctor-id="${doctor.id}">
          ${selected ? 'Selected' : 'Select'}
        </button>
      </div>
    `;
  }).join('');

  openModal(
    'Share EMR - Select Doctor',
    `
      <p>Choose the doctor who should receive your health records.</p>
      <label>Search doctor or MEIOSIS ID
        <input class="add-flow-search" type="text" data-share-emr-search value="${shareEmrFlow.searchTerm.replace(/"/g, '&quot;')}" placeholder="e.g. Sarah, Cardiology, City General, M-001" />
      </label>
      <div class="doctor-list">
        ${doctorsHtml || '<p class="hint">No doctors found for this search.</p>'}
      </div>
      <div class="confirm-box">
        <p><strong>EMR Package:</strong> Summary, active medications, recent labs, allergies, and visit notes.</p>
        <p><strong>Recipient:</strong> ${selectedDoctor ? `${selectedDoctor.name} (${selectedDoctor.specialty})` : 'Not selected'}</p>
      </div>
      <div class="button-row">
        <button class="btn" data-action="share-emr-next" ${selectedDoctor ? '' : 'disabled'}>Next</button>
        <button class="ghost-btn" data-action="share-emr-back">Back</button>
      </div>
    `
  );

  if (preserveSearchFocus) {
    const input = modalBody.querySelector('[data-share-emr-search]');
    if (input) {
      input.focus();
      const end = input.value.length;
      input.setSelectionRange(end, end);
    }
  }
}

function openShareEmrRecordsStep() {
  const doctor = getDoctorById(shareEmrFlow.selectedDoctorId);
  if (!doctor) {
    openShareEmrDoctorStep();
    return;
  }

  const sortedAppointments = getSortedAppointments().slice().reverse();
  const selectedSet = new Set(shareEmrFlow.selectedAppointmentIds);
  const selectedCount = shareEmrFlow.selectedAppointmentIds.length;
  const allSelected = sortedAppointments.length > 0 && selectedCount === sortedAppointments.length;
  const hasAny = selectedCount > 0;

  const itemsHtml = sortedAppointments.map(([id, appt]) => {
    const selected = selectedSet.has(id);
    const isPast = getAppointmentDateObj(appt) < new Date();
    const statusText = isPast ? 'Completed' : (appt.status || 'Confirmed');
    const statusClass = isPast ? 'complete' : ((appt.status || 'Confirmed').toLowerCase() === 'pending' ? 'pending' : 'active');
    return `
      <div class="doctor-item emr-doctor-item emr-record-item ${selected ? 'selected' : ''}">
        <div>
          <p><strong>${appt.doctor}</strong> • ${appt.specialty}</p>
          <p class="hint">${getAppointmentDateTime(appt)} • ${appt.hospital}</p>
          <p class="hint">Purpose: ${appt.purpose || 'General consultation'}</p>
          <span class="chip ${statusClass}">${statusText}</span>
        </div>
        <button class="${selected ? 'btn' : 'ghost-btn'}" data-action="share-emr-toggle-appointment" data-appointment-id="${id}">
          ${selected ? 'Selected' : 'Select'}
        </button>
      </div>
    `;
  }).join('');

  openModal(
    'Share EMR - Select Appointment Records',
    `
      <p>Choose one or more appointment EMRs to share with <strong>${doctor.name}</strong>.</p>
      <div class="button-row">
        <button class="ghost-btn" data-action="share-emr-toggle-all">${allSelected ? 'Unselect All' : 'Select All'}</button>
        <span class="hint">Selected: ${selectedCount}</span>
      </div>
      <div class="doctor-list">
        ${itemsHtml || '<p class="hint">No appointment records available.</p>'}
      </div>
      <div class="confirm-box">
        <p><strong>Recipient:</strong> ${doctor.name} (${doctor.specialty})</p>
        <p><strong>Records to share:</strong> ${selectedCount}</p>
      </div>
      <div class="button-row">
        <button class="btn" data-action="share-emr-send" ${hasAny ? '' : 'disabled'}>Send Selected EMRs</button>
        <button class="ghost-btn" data-action="share-emr-records-back">Back</button>
      </div>
    `
  );
}

function openShareEmrSendingStep() {
  const doctor = getDoctorById(shareEmrFlow.selectedDoctorId);
  if (!doctor || !shareEmrFlow.selectedAppointmentIds.length) return;
  shareEmrFlow.txId = `TX-${Math.floor(100000 + Math.random() * 900000)}`;
  openModal(
    'Sending EMR Package',
    `
      <div class="emr-share-success">
        <div class="loading-line" style="width:100%; max-width:300px;"></div>
        <p class="lead">Securely transmitting records...</p>
        <p class="hint">Recipient: ${doctor.name}</p>
        <p class="hint">Transaction: ${shareEmrFlow.txId}</p>
      </div>
    `
  );
  setTimeout(() => {
    if (!detailModal.classList.contains('hidden')) {
      openShareEmrSuccessStep();
    }
  }, 900);
}

function openShareEmrSuccessStep() {
  const doctor = getDoctorById(shareEmrFlow.selectedDoctorId);
  if (!doctor || !shareEmrFlow.selectedAppointmentIds.length) return;
  const sharedRows = shareEmrFlow.selectedAppointmentIds.map((id) => {
    const appt = appointments[id];
    if (!appt) return '';
    return `<li>${getAppointmentDateTime(appt)} • ${appt.doctor} (${appt.specialty})</li>`;
  }).join('');

  openModal(
    'EMR Shared Successfully',
    `
      <div class="emr-share-success">
        <div class="emr-success-tick" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <circle class="tick-circle" cx="32" cy="32" r="28"></circle>
            <path class="tick-mark" d="M18 33 L28 43 L46 24"></path>
          </svg>
        </div>
        <p class="lead">EMR package sent to ${doctor.name}</p>
        <p class="hint">${doctor.specialty} • ${doctor.hospital}</p>
        <p class="hint">Shared records: ${shareEmrFlow.selectedAppointmentIds.length}</p>
        <p class="hint">Transaction ID: ${shareEmrFlow.txId || 'TX-MOCK'}</p>
        <ul>${sharedRows}</ul>
        <p class="hint">Access is time-logged and visible in your Data & Privacy section.</p>
      </div>
      <div class="button-row">
        <button class="btn" data-action="share-emr-done">Done</button>
      </div>
    `
  );
  showToast(`EMR package shared with ${doctor.name}.`, 'success');
}

function getSelectedRefillItems() {
  return refillCatalog.filter((item) => refillFlow.selectedIds.includes(item.id));
}

function getRefillTotalAmount() {
  return getSelectedRefillItems().reduce((sum, item) => {
    const qty = Number(refillFlow.quantities[item.id] || 1);
    return sum + (item.price * qty);
  }, 0);
}

function openRefillMedicineStep() {
  const listHtml = refillCatalog.map((item) => {
    const selected = refillFlow.selectedIds.includes(item.id);
    return `
      <div class="doctor-item emr-doctor-item refill-item ${selected ? 'selected' : ''}">
        <div class="button-row" style="justify-content: space-between;">
          <div>
            <h4>${item.name}</h4>
            <p class="hint">Prescribed by ${item.doctor}</p>
          </div>
          <span class="chip">Rs ${item.price}</span>
        </div>
        <button class="${selected ? 'btn' : 'ghost-btn'} refill-select-btn" data-action="refill-toggle-item" data-refill-id="${item.id}">
          ${selected ? 'Selected' : 'Select'}
        </button>
      </div>
    `;
  }).join('');

  openModal(
    'Request Refill - Select Medicines',
    `
      <p class="hint">Choose one or more medicines to refill.</p>
      <p class="hint">Selected: ${refillFlow.selectedIds.length}</p>
      <div class="doctor-list">${listHtml}</div>
      <div class="button-row">
        <button class="btn" data-action="refill-next-order">Continue</button>
        <button class="ghost-btn" data-action="refill-cancel">Cancel</button>
      </div>
    `
  );
}

function openRefillOrderStep() {
  const items = getSelectedRefillItems();
  if (!items.length) {
    showToast('Select at least one medicine for refill.', 'error');
    return;
  }

  const rows = items.map((item) => {
    const qty = Number(refillFlow.quantities[item.id] || 1);
    return `
      <div class="doctor-item">
        <div class="button-row" style="justify-content: space-between;">
          <strong>${item.name}</strong>
          <span class="chip">Rs ${item.price} / strip</span>
        </div>
        <div class="refill-qty-row">
          <span class="hint">Quantity</span>
          <div class="refill-qty-stepper">
            <button class="ghost-btn refill-qty-btn" data-action="refill-qty-dec" data-refill-id="${item.id}" ${qty <= 1 ? 'disabled' : ''}>-</button>
            <input class="refill-qty-value" data-refill-qty="${item.id}" type="text" value="${qty}" readonly />
            <button class="btn refill-qty-btn" data-action="refill-qty-inc" data-refill-id="${item.id}" ${qty >= 6 ? 'disabled' : ''}>+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  openModal(
    'Refill Order',
    `
      <p class="hint">Adjust quantity and continue to payment.</p>
      <div class="doctor-list">${rows}</div>
      <p><strong>Estimated total: Rs ${getRefillTotalAmount()}</strong></p>
      <div class="button-row">
        <button class="btn" data-action="refill-next-payment">Continue to Payment</button>
        <button class="ghost-btn" data-action="refill-back-select">Back</button>
      </div>
    `
  );
}

function openRefillPaymentStep() {
  const total = getRefillTotalAmount();
  if (!total) {
    showToast('Select refill items first.', 'error');
    openRefillMedicineStep();
    return;
  }

  openModal(
    'Payment Confirmation (Mock)',
    `
      <p><strong>Order total:</strong> Rs ${total}</p>
      <label>Payment method</label>
      <div class="refill-payment-select-wrap">
        <select class="add-flow-search refill-payment-select" data-refill-payment>
          <option ${refillFlow.paymentMethod === 'UPI' ? 'selected' : ''}>UPI</option>
          <option ${refillFlow.paymentMethod === 'Card' ? 'selected' : ''}>Card</option>
          <option ${refillFlow.paymentMethod === 'Credit Card' ? 'selected' : ''}>Credit Card</option>
          <option ${refillFlow.paymentMethod === 'Debit Card' ? 'selected' : ''}>Debit Card</option>
          <option ${refillFlow.paymentMethod === 'Net Banking' ? 'selected' : ''}>Net Banking</option>
          <option ${refillFlow.paymentMethod === 'Wallet' ? 'selected' : ''}>Wallet</option>
          <option ${refillFlow.paymentMethod === 'EMI' ? 'selected' : ''}>EMI</option>
          <option ${refillFlow.paymentMethod === 'Insurance Claim' ? 'selected' : ''}>Insurance Claim</option>
          <option ${refillFlow.paymentMethod === 'Pay Later' ? 'selected' : ''}>Pay Later</option>
          <option ${refillFlow.paymentMethod === 'Cash on Delivery' ? 'selected' : ''}>Cash on Delivery</option>
        </select>
        <span class="refill-payment-chevron" aria-hidden="true">▾</span>
      </div>
      <p class="hint">Mock flow only. No real payment is processed.</p>
      <div class="button-row">
        <button class="btn" data-action="refill-confirm">Confirm & Order</button>
        <button class="ghost-btn" data-action="refill-back-order">Back</button>
      </div>
    `
  );
}

function completeRefillOrder() {
  const items = getSelectedRefillItems();
  const total = getRefillTotalAmount();
  const orderId = `RF-${Math.floor(100000 + Math.random() * 900000)}`;
  const lineItems = items.map((item) => {
    const qty = Number(refillFlow.quantities[item.id] || 1);
    return `<li>${item.name} x ${qty}</li>`;
  }).join('');

  openSmoothSuccessModal(
    'Refill Order Confirmed',
    `
      <p>Your refill request is confirmed.</p>
      <p><strong>Order ID:</strong> ${orderId}</p>
      <p><strong>Payment:</strong> ${refillFlow.paymentMethod}</p>
      <p><strong>Total:</strong> Rs ${total}</p>
      <ul>${lineItems}</ul>
    `
  );
  showToast('Refill order placed successfully.', 'success');

  refillFlow.selectedIds = [];
  refillFlow.quantities = {};
}

function openAppointmentDetails(appointmentId) {
  const appt = appointments[appointmentId] || appointments['apt-001'];
  openModal(
    `Appointment Details - ${appt.doctor}`,
    `
      <p><strong>Doctor:</strong> ${appt.doctor} (${appt.specialty})</p>
      <p><strong>Date & Time:</strong> ${getAppointmentDateTime(appt)}</p>
      <p><strong>Hospital:</strong> ${appt.hospital}</p>
      <p><strong>Mode:</strong> ${appt.mode}</p>
      <p><strong>Purpose:</strong> ${appt.purpose}</p>
      <p><strong>Slot ID:</strong> ${appt.slotId}</p>
    `
  );
}

function openRescheduleModal(appointmentId) {
  const appt = appointments[appointmentId];
  if (!appt) return;

  const slotsHtml = appt.slots
    .map((slot, index) => {
      const conflict = findConflictingAppointment(appointmentId, slot);
      const conflictText = conflict ? `Conflict: already booked with ${conflict[1].doctor}` : '';
      return `
      <div class="slot-item">
        <p><strong>${formatDateTime(slot.date, slot.time)}</strong></p>
        <p class="slot-meta">${slot.mode} • ${slot.location}</p>
        <p class="slot-meta">Estimated wait: ${slot.wait} • Token: ${slot.token}</p>
        ${conflictText ? `<p class="slot-meta">${conflictText}</p>` : ''}
        <button class="btn" data-reschedule-choose data-appointment-id="${appointmentId}" data-slot-index="${index}" ${conflict ? 'disabled' : ''}>
          ${conflict ? 'Unavailable' : 'Choose'}
        </button>
      </div>
    `;
    })
    .join('');

  openModal(
    `Reschedule - ${appt.doctor}`,
    `
      <div class="reschedule-layout">
        ${buildCalendar(appt)}
        <div>
          <h4>Available Slots</h4>
          <div class="slot-list">${slotsHtml}</div>
        </div>
      </div>
    `
  );
}

function confirmReschedule(appointmentId, slotIndex) {
  const appt = appointments[appointmentId];
  const slot = appt?.slots?.[slotIndex];
  if (!appt || !slot) return;

  const conflicting = findConflictingAppointment(appointmentId, slot);
  if (conflicting) {
    showToast('Reschedule blocked due to schedule conflict.', 'error');
    openModal(
      'Reschedule Blocked',
      `<p>This slot conflicts with your existing appointment with <strong>${conflicting[1].doctor}</strong> on ${formatDateTime(slot.date, slot.time)}.</p>`
    );
    return;
  }

  const oldDateTime = getAppointmentDateTime(appt);
  appt.scheduledDate = slot.date;
  appt.scheduledTime = slot.time;
  appt.mode = slot.mode;
  appt.slotId = slot.token;
  saveAppointmentsState();
  renderAppointments();

  openSmoothSuccessModal(
    'Appointmnent Successfully Rescheduled',
    `
      <p><strong>${appt.doctor}</strong> has been rescheduled successfully.</p>
      <p>Old slot: ${oldDateTime}</p>
      <p>Updated slot: ${getAppointmentDateTime(appt)}</p>
      <p>New token: ${appt.slotId}</p>
    `
  );
  showToast('Appointment rescheduled successfully.', 'success');
}

function getDoctorById(doctorId) {
  return doctorDirectory.find((doctor) => doctor.id === doctorId);
}

function getYourDoctorIdsForBooking() {
  const customIds = new Set(customDoctorsState.map((doctor) => doctor.id));
  const consultedNames = new Set(
    Object.values(appointments).map((appt) => (appt.doctor || '').trim().toLowerCase()).filter(Boolean)
  );
  const ids = new Set(customIds);
  doctorDirectory.forEach((doctor) => {
    if (consultedNames.has((doctor.name || '').trim().toLowerCase())) ids.add(doctor.id);
  });
  return ids;
}

function openAddAppointmentDoctorStep(searchTerm = addAppointmentFlow.searchTerm, options = {}) {
  const preserveSearchFocus = Boolean(options.preserveSearchFocus);
  addAppointmentFlow.searchTerm = searchTerm;
  addAppointmentFlow.doctorId = null;
  addAppointmentFlow.slotIndex = null;

  const lowered = searchTerm.trim().toLowerCase();
  const filteredDoctors = doctorDirectory.filter((doctor) => (
    doctor.name.toLowerCase().includes(lowered) ||
    doctor.specialty.toLowerCase().includes(lowered) ||
    doctor.hospital.toLowerCase().includes(lowered)
  ));

  const yourDoctorIds = getYourDoctorIdsForBooking();
  const yourDoctors = filteredDoctors.filter((doctor) => yourDoctorIds.has(doctor.id));
  const otherDoctors = filteredDoctors.filter((doctor) => !yourDoctorIds.has(doctor.id));

  const renderDoctorCards = (doctors) => doctors.map((doctor) => `
      <div class="doctor-item">
        <h4>${doctor.name}</h4>
        <p>${doctor.specialty} • ${doctor.hospital}</p>
        <p class="slot-meta">Fee: Rs ${doctor.consultFee}</p>
        <button class="btn" data-add-select-doctor data-doctor-id="${doctor.id}">Select</button>
      </div>
    `).join('');

  const doctorCards = filteredDoctors.length
    ? `
      <div class="doctor-list-group">
        <p class="hint"><strong>Your Doctors</strong></p>
        <div class="doctor-list doctor-list-inline">
          ${yourDoctors.length ? renderDoctorCards(yourDoctors) : '<p class="hint">No matches in your doctors.</p>'}
        </div>
      </div>
      <div class="doctor-list-group">
        <p class="hint"><strong>Other Doctors</strong></p>
        <div class="doctor-list doctor-list-inline">
          ${otherDoctors.length ? renderDoctorCards(otherDoctors) : '<p class="hint">No matches in other doctors.</p>'}
        </div>
      </div>
    `
    : '<p class="hint">No doctors found for this search.</p>';
  const validation = searchTerm.trim().length > 0 && filteredDoctors.length === 0
    ? '<p class="validation-text">No matching doctor found. Try different keywords.</p>'
    : '';

  openModal(
    'Add Appointment - Select Doctor',
    `
      <input class="add-flow-search" data-doctor-search-input type="text" placeholder="Search doctor, specialty, hospital..." value="${searchTerm.replace(/"/g, '&quot;')}" />
      ${validation}
      ${doctorCards}
    `
  );

  if (preserveSearchFocus) {
    const input = modalBody.querySelector('[data-doctor-search-input]');
    if (input) {
      input.focus();
      const end = input.value.length;
      input.setSelectionRange(end, end);
    }
  }
}

function openAddAppointmentSlotsStep(doctorId, selectedIndex = null) {
  const doctor = getDoctorById(doctorId);
  if (!doctor) return;

  addAppointmentFlow.doctorId = doctorId;
  addAppointmentFlow.slotIndex = selectedIndex;

  const slotCards = doctor.slots.map((slot, index) => `
    <div class="slot-item">
      <p><strong>${formatDateTime(slot.date, slot.time)}</strong></p>
      <p class="slot-meta">${slot.mode} • ${slot.location}</p>
      <p class="slot-meta">Estimated wait: ${slot.wait}</p>
      <button class="btn" data-add-choose-slot data-doctor-id="${doctorId}" data-slot-index="${index}">Choose</button>
    </div>
  `).join('');

  const confirmBlock = selectedIndex === null ? '' : `
    <div class="confirm-box">
      <p><strong>Confirm this slot?</strong></p>
      <p>${formatDateTime(doctor.slots[selectedIndex].date, doctor.slots[selectedIndex].time)} • ${doctor.slots[selectedIndex].mode}</p>
      <div class="button-row">
        <button class="btn" data-add-confirm-slot data-doctor-id="${doctorId}" data-slot-index="${selectedIndex}">Confirm</button>
        <button class="ghost-btn" data-add-back-doctors>Change Doctor</button>
      </div>
    </div>
  `;

  openModal(
    `Add Appointment - ${doctor.name}`,
    `
      <p class="hint">${doctor.specialty} • ${doctor.hospital} • Fee: Rs ${doctor.consultFee}</p>
      <div class="slot-list">${slotCards}</div>
      ${confirmBlock}
      <button class="ghost-btn" data-add-back-doctors>Back to Doctor Search</button>
    `
  );
}

function openAddAppointmentPaymentStep(doctorId, slotIndex) {
  const doctor = getDoctorById(doctorId);
  const slot = doctor?.slots?.[slotIndex];
  if (!doctor || !slot) return;
  addAppointmentFlow.doctorId = doctorId;
  addAppointmentFlow.slotIndex = slotIndex;

  openModal(
    'Payment (Mockup)',
    `
      <div class="payment-mock">
        <div class="payment-row"><span>Doctor</span><strong>${doctor.name}</strong></div>
        <div class="payment-row"><span>Specialty</span><strong>${doctor.specialty}</strong></div>
        <div class="payment-row"><span>Appointment Slot</span><strong>${formatDateTime(slot.date, slot.time)}</strong></div>
        <div class="payment-row"><span>Mode</span><strong>${slot.mode}</strong></div>
        <div class="payment-row"><span>Consultation Fee</span><strong>Rs ${doctor.consultFee}</strong></div>
        <div class="payment-row"><span>Platform Fee</span><strong>Rs 20</strong></div>
        <div class="payment-row"><span>Total</span><strong>Rs ${doctor.consultFee + 20}</strong></div>
        <div class="payment-card">
          <p><strong>Payment Method</strong></p>
          <p>UPI / Card / NetBanking mock preview</p>
          <p class="hint">This is a UI mockup only. No real payment is processed.</p>
        </div>
        <div class="button-row">
          <button class="btn" data-add-payment-done>Pay & Confirm (Mock)</button>
          <button class="ghost-btn" data-add-back-slots data-doctor-id="${doctorId}" data-slot-index="${slotIndex}">Back</button>
        </div>
      </div>
    `
  );
}

function addNewAppointmentFromFlow(doctorId, slotIndex) {
  const doctor = getDoctorById(doctorId);
  const slot = doctor?.slots?.[slotIndex];
  if (!doctor || !slot) {
    showToast('Please select a valid doctor and slot first.', 'error');
    return null;
  }

  const id = `apt-${Date.now()}`;
  const token = `AP-${Math.floor(1000 + Math.random() * 9000)}`;

  appointments[id] = {
    doctor: doctor.name,
    specialty: doctor.specialty,
    hospital: doctor.hospital,
    mode: slot.mode,
    purpose: 'New consultation',
    scheduledDate: slot.date,
    scheduledTime: slot.time,
    status: 'Confirmed',
    slotId: token,
    slots: doctor.slots.map((s, index) => ({
      ...s,
      token: `AP-${Math.floor(2000 + Math.random() * 7000)}${index}`
    }))
  };

  saveAppointmentsState();
  renderAppointments();
  showToast('New appointment added to your schedule.', 'success');
  return id;
}

function initSlopeGraph() {
  if (!healthSlopeGraph || !slopeTooltip) return;

  const points = healthSlopeGraph.querySelectorAll('.slope-point');

  points.forEach((point) => {
    point.addEventListener('mouseenter', (event) => {
      const month = point.dataset.month || 'Unknown';
      const score = point.dataset.score || 'NA';
      slopeTooltip.textContent = `${month} • Health Score ${score}`;
      slopeTooltip.classList.remove('hidden');

      const graphRect = healthSlopeGraph.getBoundingClientRect();
      const pointRect = event.target.getBoundingClientRect();
      const x = pointRect.left - graphRect.left + (pointRect.width / 2);
      const y = pointRect.top - graphRect.top;
      slopeTooltip.style.left = `${x}px`;
      slopeTooltip.style.top = `${y}px`;
    });

    point.addEventListener('mouseleave', () => {
      slopeTooltip.classList.add('hidden');
    });
  });

  const toggleExpand = () => {
    healthSlopeGraph.classList.toggle('expanded');
  };

  healthSlopeGraph.addEventListener('click', (event) => {
    if (event.target.closest('.slope-point')) return;
    toggleExpand();
  });

  healthSlopeGraph.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExpand();
    }
  });
}

function updateMedicationTracker() {
  if (!medProgressValue || !medProgressBar || !nextDoseText) return;

  evaluatePrescriptionTimerState();

  const liveDoseCards = Array.from(document.querySelectorAll('[data-dose-card]'));
  if (!liveDoseCards.length) {
    medProgressValue.textContent = '0/0';
    medProgressBar.style.width = '100%';
    nextDoseText.textContent = 'All looks good.';
    return;
  }

  const takenCards = liveDoseCards.filter((card) => card.classList.contains('taken'));
  const total = liveDoseCards.length;
  const done = takenCards.length;
  const percent = Math.round((done / total) * 100);

  medProgressValue.textContent = `${done}/${total}`;
  medProgressBar.style.width = `${percent}%`;

  const nextPending = liveDoseCards.find((card) => !card.classList.contains('taken'));
  if (nextPending) {
    const time = nextPending.dataset.time || 'Upcoming';
    const medicine = nextPending.querySelector('p:nth-child(2)')?.textContent ?? 'medicine';
    nextDoseText.textContent = `Next dose: ${time} - ${medicine}`;
    medicationCompletionCelebrated = false;
  } else {
    nextDoseText.textContent = 'All doses completed for today. Great adherence.';
    if (!medicationCompletionCelebrated) {
      medicationCompletionCelebrated = true;
      openSmoothSuccessModal(
        'All Medicines Taken',
        `
          <p>You have completed all scheduled doses for today.</p>
          <p><strong>${done}/${total}</strong> doses marked as taken.</p>
          <p class="hint">Great adherence. Keep this consistency for better outcomes.</p>
        `
      );
      showToast('Medication plan completed for today.', 'success');
    }
  }
}

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navigateToSection(item.dataset.section);
  });
});

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]');
  if (!button) return;

  const key = button.dataset.action;
  if (!key) return;

  if (key === 'start-add-appointment' || key === 'book-appointment') {
    openAddAppointmentDoctorStep('');
    return;
  }

  if (key === 'cancel-appointment-side') {
    openCancelAppointmentSelection();
    return;
  }

  if (key === 'cancel-appointment-pick') {
    openCancelAppointmentConfirm(button.dataset.appointmentId);
    return;
  }

  if (key === 'cancel-appointment-confirm') {
    completeCancelAppointment(button.dataset.appointmentId);
    return;
  }

  if (key === 'cancel-appointment-close') {
    closeDetailModal();
    return;
  }

  if (key === 'appointments-upcoming') {
    appointmentViewMode = 'upcoming';
    renderAppointments();
    return;
  }

  if (key === 'appointments-past') {
    appointmentViewMode = 'past';
    renderAppointments();
    return;
  }

  if (key === 'appointments-cancelled') {
    appointmentViewMode = 'cancelled';
    renderAppointments();
    return;
  }

  if (key === 'appointments-list-all' || key === 'show-list') {
    appointmentListMode = !appointmentListMode;
    playListButtonTickAnimation();
    renderAppointments();
    return;
  }

  if (key === 'show-calendar') {
    appointmentListMode = false;
    renderAppointments();
    return;
  }

  if (key === 'go-section') {
    const sectionId = button.dataset.targetSection;
    if (sectionId) navigateToSection(sectionId);
    return;
  }

  if (key === 'go-appointments') {
    navigateToSection('appointments');
    return;
  }

  if (key === 'messages-open-doctor') {
    openMessagesDoctorChat(button.dataset.doctorId || '');
    return;
  }

  if (key === 'messages-send') {
    sendMessagesChat();
    return;
  }

  if (key === 'open-chat') {
    navigateToSection('messages');
    if (!messageState.selectedDoctorId) {
      openMessagesDoctorChat(doctorDirectory[0]?.id || '');
    }
    return;
  }

  if (key === 'ask-doctor-rx') {
    const doctorId = button.dataset.doctorId || messageState.selectedDoctorId || doctorDirectory[0]?.id || '';
    navigateToSection('messages');
    if (doctorId) {
      openMessagesDoctorChat(doctorId);
      showToast('Opened doctor chat from prescription.', 'success');
    }
    return;
  }

  if (key === 'add-personal-doctor') {
    openAddPersonalDoctorModal();
    return;
  }

  if (key === 'network-find-doctors') {
    networkAddFlow.name = modalBody.querySelector('[data-network-doctor-name]')?.value?.trim() || '';
    networkAddFlow.specialty = modalBody.querySelector('[data-network-doctor-specialty]')?.value?.trim() || '';
    networkAddFlow.hospital = modalBody.querySelector('[data-network-doctor-hospital]')?.value?.trim() || '';
    if (!networkAddFlow.name && !networkAddFlow.specialty && !networkAddFlow.hospital) {
      showToast('Enter at least one criteria to find doctors.', 'error');
      return;
    }
    openNetworkDoctorResultsModal();
    return;
  }

  if (key === 'network-add-candidate') {
    const candidateId = button.dataset.networkCandidateId || '';
    const candidate = doctorDiscoveryCatalog.find((entry) => entry.extId === candidateId);
    if (!candidate) {
      showToast('Doctor entry not found.', 'error');
      return;
    }
    const added = addDoctorToNetwork(candidate);
    if (!added) return;
    closeDetailModal();
    showToast('Doctor added to your network.', 'success');
    return;
  }

  if (key === 'network-add-custom') {
    const matches = findDoctorsByCriteria(networkAddFlow);
    if (!matches.length) {
      showToast('No matching doctors found. Update criteria and try again.', 'error');
      openAddPersonalDoctorModal();
      return;
    }
    addPersonalDoctorFromCriteria();
    return;
  }

  if (key === 'network-back-search') {
    openAddPersonalDoctorModal();
    return;
  }

  if (key === 'network-cancel-doctor') {
    closeDetailModal();
    return;
  }

  if (key === 'open-full-plan') {
    navigateToSection('medplan');
    return;
  }

  if (key === 'configure-reminders') {
    openConfigureRemindersModal();
    return;
  }

  if (key === 'cancel-reminders') {
    closeDetailModal();
    return;
  }

  if (key === 'save-reminders') {
    const getValue = (field, fallback = '') => (
      modalBody.querySelector(`[data-reminder-input="${field}"]`)?.value?.trim() || fallback
    );
    const leadValue = Number(getValue('reminderLead', String(defaultReminderProfile.reminderLead)));
    if (!Number.isFinite(leadValue) || leadValue < 0 || leadValue > 120) {
      showToast('Reminder lead time should be between 0 and 120 minutes.', 'error');
      return;
    }

    medicationState.reminders = {
      breakfast: getValue('breakfast', defaultReminderProfile.breakfast),
      lunch: getValue('lunch', defaultReminderProfile.lunch),
      snacks: getValue('snacks', ''),
      dinner: getValue('dinner', defaultReminderProfile.dinner),
      wakeUp: getValue('wakeUp', defaultReminderProfile.wakeUp),
      sleep: getValue('sleep', defaultReminderProfile.sleep),
      reminderLead: leadValue
    };
    saveMedicationState();
    closeDetailModal();
    showToast('Reminder schedule updated successfully.', 'success');
    updateMedicationTracker();
    return;
  }

  if (key === 'request-refill') {
    refillFlow.selectedIds = [];
    refillFlow.quantities = {};
    openRefillMedicineStep();
    return;
  }

  if (key === 'refill-cancel') {
    closeDetailModal();
    return;
  }

  if (key === 'refill-toggle-item') {
    const refillId = button.dataset.refillId;
    if (!refillId) return;
    if (refillFlow.selectedIds.includes(refillId)) {
      refillFlow.selectedIds = refillFlow.selectedIds.filter((id) => id !== refillId);
    } else {
      refillFlow.selectedIds.push(refillId);
      if (!refillFlow.quantities[refillId]) refillFlow.quantities[refillId] = 1;
    }
    openRefillMedicineStep();
    return;
  }

  if (key === 'refill-next-order') {
    if (!refillFlow.selectedIds.length) {
      showToast('Select at least one medicine for refill.', 'error');
      return;
    }
    refillFlow.selectedIds.forEach((id) => {
      if (!refillFlow.quantities[id]) refillFlow.quantities[id] = 1;
    });
    openRefillOrderStep();
    return;
  }

  if (key === 'refill-back-select') {
    openRefillMedicineStep();
    return;
  }

  if (key === 'refill-qty-inc' || key === 'refill-qty-dec') {
    const refillId = button.dataset.refillId;
    if (!refillId) return;
    const current = Number(refillFlow.quantities[refillId] || 1);
    const next = key === 'refill-qty-inc'
      ? Math.min(6, current + 1)
      : Math.max(1, current - 1);
    refillFlow.quantities[refillId] = next;
    openRefillOrderStep();
    return;
  }

  if (key === 'refill-next-payment') {
    const qtyInputs = Array.from(modalBody.querySelectorAll('[data-refill-qty]'));
    if (!qtyInputs.length) {
      showToast('No medicines selected for refill.', 'error');
      openRefillMedicineStep();
      return;
    }
    for (const input of qtyInputs) {
      const value = Number(input.value);
      if (!Number.isFinite(value) || value < 1 || value > 6) {
        showToast('Quantity must be between 1 and 6.', 'error');
        return;
      }
      refillFlow.quantities[input.dataset.refillQty] = Math.floor(value);
    }
    openRefillPaymentStep();
    return;
  }

  if (key === 'refill-back-order') {
    const paymentInput = modalBody.querySelector('[data-refill-payment]');
    if (paymentInput) refillFlow.paymentMethod = paymentInput.value;
    openRefillOrderStep();
    return;
  }

  if (key === 'refill-confirm') {
    const paymentInput = modalBody.querySelector('[data-refill-payment]');
    refillFlow.paymentMethod = paymentInput?.value || 'UPI';
    if (!getSelectedRefillItems().length) {
      showToast('Select medicines before confirming order.', 'error');
      openRefillMedicineStep();
      return;
    }
    completeRefillOrder();
    return;
  }

  if (key === 'share-emr') {
    openShareEmrCodeStep();
    return;
  }

  if (key === 'share-emr-verify') {
    const entered = modalBody.querySelector('[data-share-emr-code]')?.value?.trim() || '';
    if (!/^\d{8}$/.test(entered)) {
      showToast('Enter a valid 8-digit code.', 'error');
      return;
    }
    if (entered !== universalIdState.code) {
      showToast('Invalid code. Please enter your configured Universal ID.', 'error');
      return;
    }
    openShareEmrDoctorStep();
    return;
  }

  if (key === 'share-emr-select-doctor') {
    shareEmrFlow.selectedDoctorId = button.dataset.doctorId || null;
    openShareEmrDoctorStep();
    return;
  }

  if (key === 'share-emr-next') {
    if (!shareEmrFlow.selectedDoctorId) {
      showToast('Select a doctor first.', 'error');
      return;
    }
    openShareEmrRecordsStep();
    return;
  }

  if (key === 'share-emr-toggle-appointment') {
    const appointmentId = button.dataset.appointmentId;
    if (!appointmentId) return;
    const selected = new Set(shareEmrFlow.selectedAppointmentIds);
    if (selected.has(appointmentId)) selected.delete(appointmentId);
    else selected.add(appointmentId);
    shareEmrFlow.selectedAppointmentIds = Array.from(selected);
    openShareEmrRecordsStep();
    return;
  }

  if (key === 'share-emr-toggle-all') {
    const sortedAppointments = getSortedAppointments().slice().reverse();
    if (shareEmrFlow.selectedAppointmentIds.length === sortedAppointments.length) {
      shareEmrFlow.selectedAppointmentIds = [];
    } else {
      shareEmrFlow.selectedAppointmentIds = sortedAppointments.map(([id]) => id);
    }
    openShareEmrRecordsStep();
    return;
  }

  if (key === 'share-emr-send') {
    if (!shareEmrFlow.selectedDoctorId || !shareEmrFlow.selectedAppointmentIds.length) {
      showToast('Select doctor and at least one appointment EMR.', 'error');
      return;
    }
    openShareEmrSendingStep();
    return;
  }

  if (key === 'share-emr-back') {
    openShareEmrCodeStep();
    return;
  }

  if (key === 'share-emr-records-back') {
    openShareEmrDoctorStep();
    return;
  }

  if (key === 'share-emr-cancel' || key === 'share-emr-done') {
    closeDetailModal();
    return;
  }

  if (key === 'open-mock-pdf') {
    const title = button.dataset.docTitle || 'Prescription Document';
    const code = button.dataset.docCode || 'DOC-2026';
    const file = button.dataset.docFile || './mock-docs/medication-plan-summary.pdf';
    openModal(
      title,
      `
        <div class="mock-pdf" role="document" aria-label="${title}">
          <div class="mock-pdf-header">
            <strong>${title}</strong>
            <span class="hint">${code}</span>
          </div>
          <div class="mock-pdf-page">
            <p><strong>MEIOSIS Clinical Document</strong></p>
            <p>Patient: Aditya Sharma</p>
            <p>Issued: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
            <p>Doctor instructions and prescription details appear here in the real PDF.</p>
            <p class="hint">Mock PDF preview for UI flow only.</p>
          </div>
          <div class="button-row">
            <a class="btn" href="${file}" target="_blank" rel="noopener">Open PDF</a>
            <a class="ghost-btn" href="${file}" download>Download PDF</a>
          </div>
        </div>
      `
    );
    showToast('Opened document preview.', 'success');
    return;
  }

  if (key === 'edit-universal-id') {
    openUniversalIdEditModal();
    return;
  }

  if (key === 'view-lab') {
    const title = button.dataset.docTitle || 'Lab Report';
    const code = button.dataset.docCode || 'LAB-2026';
    const file = button.dataset.docFile || './mock-docs/lab-ldl-report.pdf';
    openModal(
      title,
      `
        <div class="mock-pdf" role="document" aria-label="${title}">
          <div class="mock-pdf-header">
            <strong>${title}</strong>
            <span class="hint">${code}</span>
          </div>
          <div class="mock-pdf-page">
            <p><strong>MEIOSIS Lab Report Preview</strong></p>
            <p>Use Open PDF to inspect the full sample report.</p>
            <p class="hint">This report is a sample document for realistic UI behavior.</p>
          </div>
          <div class="button-row">
            <a class="btn" href="${file}" target="_blank" rel="noopener">Open PDF</a>
            <a class="ghost-btn" href="${file}" download>Download PDF</a>
          </div>
        </div>
      `
    );
    showToast('Lab report preview opened.', 'success');
    return;
  }

  if (key === 'edit-profile') {
    openEditProfileModal();
    return;
  }

  if (key === 'disable-card') {
    if (isNfcCardActive) openDisableCardSelectionStep();
    else openEnableCardConfirmStep();
    return;
  }

  if (key === 'add-nfc-card') {
    openAddNfcCardCodeStep();
    return;
  }

  if (key === 'simulate-doctor-scan') {
    openDoctorScanAutoFetchModal();
    return;
  }

  if (key === 'select-nfc-card') {
    const cardId = button.dataset.nfcCardId;
    if (!cardId) return;
    const card = getNfcCardById(cardId);
    if (!card) return;
    activeNfcCardId = cardId;
    if (card.status !== 'Active') {
      card.status = 'Active';
      card.lastUsed = `${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} • Card activated from dashboard`;
    }
    renderNfcCardState();
    showToast('Active NFC card switched.', 'success');
    return;
  }

  if (key === 'view-scan-history') {
    openNfcScanHistoryModal();
    return;
  }

  if (key === 'regenerate-token') {
    openRegenerateTokenConfirmModal();
    return;
  }

  if (key === 'emergency-override') {
    openEmergencyOverridePanel();
    return;
  }

  if (key === 'reschedule-appointment') {
    openRescheduleModal(button.dataset.appointmentId || 'apt-001');
    return;
  }

  if (key === 'view-appointment-details') {
    openAppointmentDetails(button.dataset.appointmentId || 'apt-001');
    return;
  }

  if (key === 'view-session') {
    openSessionSummary(button.dataset.appointmentId || 'apt-001');
    return;
  }

  const entry = actionDetails[key];
  if (entry) {
    openModal(entry.title, entry.body);
    if (key === 'request-refill') showToast('Refill request submitted (demo).', 'success');
    if (key === 'open-chat') showToast('Secure chat opened.', 'success');
    if (key === 'save-settings') showToast('Settings saved successfully.', 'success');
    if (key === 'manage-devices') showToast('Device manager opened.', 'success');
    if (key === 'change-password') showToast('Password reset flow opened (demo).', 'success');
    if (key === 'export-data') showToast('Data export started (demo).', 'success');
    if (key === 'delete-account') showToast('Account deletion request submitted (demo).', 'error');
  }
});

document.addEventListener('click', (event) => {
  const rangeBtn = event.target.closest('[data-analytics-range]');
  if (rangeBtn) {
    analyticsState.range = Number(rangeBtn.dataset.analyticsRange || 30);
    document.querySelectorAll('[data-analytics-range]').forEach((btn) => {
      btn.classList.toggle('active', btn === rangeBtn);
    });
    renderAnalytics();
    showToast(`Analytics updated to ${analyticsState.range} day view.`, 'success');
    return;
  }

  const focusKpi = event.target.closest('[data-analytics-focus]');
  if (focusKpi) {
    updateAnalyticsFocus(focusKpi.dataset.analyticsFocus);
    return;
  }

  const focusCard = event.target.closest('.analytics-card');
  if (focusCard?.dataset.series) {
    updateAnalyticsFocus(focusCard.dataset.series);
  }
});

document.addEventListener('mouseover', (event) => {
  const point = event.target.closest('[data-analytics-point]');
  if (!point || !analyticsTooltip) return;
  const rect = point.getBoundingClientRect();
  const hostRect = analyticsFocusText?.parentElement?.getBoundingClientRect();
  const x = hostRect ? rect.left - hostRect.left + (rect.width / 2) : rect.left;
  const y = hostRect ? rect.top - hostRect.top : rect.top;
  showAnalyticsTooltip(x, y, `Point ${Number(point.dataset.index) + 1}: ${point.dataset.value}`);
});

document.addEventListener('mouseout', (event) => {
  const point = event.target.closest('[data-analytics-point]');
  if (!point) return;
  hideAnalyticsTooltip();
});

modalBody.addEventListener('click', (event) => {
  const selectDoctorBtn = event.target.closest('[data-add-select-doctor]');
  if (selectDoctorBtn) {
    openAddAppointmentSlotsStep(selectDoctorBtn.dataset.doctorId);
    return;
  }

  const chooseSlotBtn = event.target.closest('[data-add-choose-slot]');
  if (chooseSlotBtn) {
    openAddAppointmentSlotsStep(chooseSlotBtn.dataset.doctorId, Number(chooseSlotBtn.dataset.slotIndex));
    return;
  }

  const confirmSlotBtn = event.target.closest('[data-add-confirm-slot]');
  if (confirmSlotBtn) {
    openAddAppointmentPaymentStep(confirmSlotBtn.dataset.doctorId, Number(confirmSlotBtn.dataset.slotIndex));
    return;
  }

  const backDoctorsBtn = event.target.closest('[data-add-back-doctors]');
  if (backDoctorsBtn) {
    openAddAppointmentDoctorStep(addAppointmentFlow.searchTerm);
    return;
  }

  const backSlotsBtn = event.target.closest('[data-add-back-slots]');
  if (backSlotsBtn) {
    openAddAppointmentSlotsStep(backSlotsBtn.dataset.doctorId, Number(backSlotsBtn.dataset.slotIndex));
    return;
  }

  const paymentDoneBtn = event.target.closest('[data-add-payment-done]');
  if (paymentDoneBtn) {
    const createdId = addNewAppointmentFromFlow(addAppointmentFlow.doctorId, addAppointmentFlow.slotIndex);
    if (!createdId) return;
    const created = appointments[createdId];
    pendingAppointmentFocusId = createdId;
    navigateToSection('appointments');
    renderAppointments();
    openSmoothSuccessModal(
      'Appointment Successfully Booked',
      `<p>Your appointment is now added to Upcoming Appointments and My Appointments.</p>
       <p><strong>${created.doctor}</strong> • ${getAppointmentDateTime(created)}</p>
       <p>Slot ID: ${created.slotId}</p>`
    );
    showToast('Appointment booked successfully.', 'success');
    return;
  }

  const chooseBtn = event.target.closest('[data-reschedule-choose]');
  if (chooseBtn) {
    confirmReschedule(chooseBtn.dataset.appointmentId, Number(chooseBtn.dataset.slotIndex));
    return;
  }

  const nfcDisableConfirmBtn = event.target.closest('[data-nfc-disable-confirm]');
  if (nfcDisableConfirmBtn) {
    openDisableCardOtpStep(nfcDisableConfirmBtn.dataset.nfcCardId);
    return;
  }

  const nfcDisablePickBtn = event.target.closest('[data-nfc-disable-pick]');
  if (nfcDisablePickBtn) {
    openDisableCardConfirmStep(nfcDisablePickBtn.dataset.nfcCardId);
    return;
  }

  const nfcDisableCancelBtn = event.target.closest('[data-nfc-disable-cancel]');
  if (nfcDisableCancelBtn) {
    closeDetailModal();
    return;
  }

  const nfcDisableSubmitBtn = event.target.closest('[data-nfc-disable-submit]');
  if (nfcDisableSubmitBtn) {
    const otpInput = modalBody.querySelector('[data-nfc-otp-input]');
    const otp = otpInput?.value?.trim() || '';
    if (!/^\d{6}$/.test(otp)) {
      showToast('Enter a valid 6-digit OTP.', 'error');
      return;
    }
    if (otp !== '123456') {
      showToast('Invalid OTP. Try 123456 for demo.', 'error');
      return;
    }
    completeDisableCard(nfcDisableSubmitBtn.dataset.nfcCardId);
    return;
  }

  const nfcEnableConfirmBtn = event.target.closest('[data-nfc-enable-confirm]');
  if (nfcEnableConfirmBtn) {
    completeEnableCard();
    return;
  }

  const nfcAddCancelBtn = event.target.closest('[data-nfc-add-cancel]');
  if (nfcAddCancelBtn) {
    addNfcFlow.readerConnected = false;
    closeDetailModal();
    return;
  }

  const nfcAddCodeVerifyBtn = event.target.closest('[data-nfc-add-code-verify]');
  if (nfcAddCodeVerifyBtn) {
    const code = modalBody.querySelector('[data-nfc-add-code]')?.value?.trim() || '';
    if (!/^\d{8}$/.test(code)) {
      showToast('Enter a valid 8-digit code.', 'error');
      return;
    }
    if (code !== universalIdState.code) {
      showToast('Code mismatch. Please enter your MEIOSIS code.', 'error');
      return;
    }
    openAddNfcCardOtpStep();
    return;
  }

  const nfcAddOtpVerifyBtn = event.target.closest('[data-nfc-add-otp-verify]');
  if (nfcAddOtpVerifyBtn) {
    const otp = modalBody.querySelector('[data-nfc-add-otp]')?.value?.trim() || '';
    if (!/^\d{6}$/.test(otp) || otp !== '445566') {
      showToast('Invalid OTP. Try 445566 for demo.', 'error');
      return;
    }
    openAddNfcCardScanStep();
    return;
  }

  const nfcReaderConnectBtn = event.target.closest('[data-nfc-reader-connect]');
  if (nfcReaderConnectBtn) {
    addNfcFlow.readerConnected = true;
    openAddNfcCardScanStep();
    return;
  }

  const nfcAddSubmitBtn = event.target.closest('[data-nfc-add-submit]');
  if (nfcAddSubmitBtn) {
    if (!addNfcFlow.readerConnected) {
      showToast('Connect NFC reader before scanning.', 'error');
      return;
    }
    const label = modalBody.querySelector('[data-nfc-card-label]')?.value?.trim() || '';
    const hospital = modalBody.querySelector('[data-nfc-card-hospital]')?.value?.trim() || 'City General';
    if (label.length < 3) {
      showToast('Card label must be at least 3 characters.', 'error');
      return;
    }
    openAddNfcScanSuccessStep(label, hospital);
    addNfcFlow.readerConnected = false;
    return;
  }

  const nfcTokenConfirmBtn = event.target.closest('[data-nfc-token-confirm]');
  if (nfcTokenConfirmBtn) {
    regenerateNfcToken();
    return;
  }

  const nfcTokenCancelBtn = event.target.closest('[data-nfc-token-cancel]');
  if (nfcTokenCancelBtn) {
    closeDetailModal();
    return;
  }

  const nfcTokenCopyBtn = event.target.closest('[data-nfc-token-copy]');
  if (nfcTokenCopyBtn) {
    const tokenText = nfcAccessToken;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(tokenText).then(() => {
        showToast('Token copied to clipboard.', 'success');
      }).catch(() => {
        showToast('Copy failed. Please copy manually.', 'error');
      });
    } else {
      showToast('Clipboard not supported in this browser.', 'error');
    }
    return;
  }

  const emgStartBtn = event.target.closest('[data-emg-start]');
  if (emgStartBtn) {
    openEmergencyDoctorIdStep(Number(emgStartBtn.dataset.emgDuration));
    return;
  }

  const emgDisableBtn = event.target.closest('[data-emg-disable]');
  if (emgDisableBtn) {
    if (!emergencyOverrideActive) {
      showToast('Emergency override is already off.', 'error');
      return;
    }
    disableEmergencyOverride();
    return;
  }

  const emgCancelBtn = event.target.closest('[data-emg-cancel]');
  if (emgCancelBtn) {
    closeDetailModal();
    return;
  }

  const emgDoctorIdSubmitBtn = event.target.closest('[data-emg-doctor-id-submit]');
  if (emgDoctorIdSubmitBtn) {
    const idInput = modalBody.querySelector('[data-emg-doctor-id-input]');
    const doctorId = (idInput?.value?.trim() || '').toUpperCase();
    if (!/^M-\d{3}$/.test(doctorId)) {
      showToast('Enter a valid Doctor MEIOSIS ID (format: M-001).', 'error');
      return;
    }
    const isValidDoctorId = doctorDirectory.some((doctor) => (
      `M-${doctor.id.replace('doc-', '').padStart(3, '0')}` === doctorId
    ));
    if (!isValidDoctorId) {
      showToast('Doctor MEIOSIS ID not found. Try M-001, M-002, M-003 or M-004.', 'error');
      return;
    }
    enableEmergencyOverride(Number(emgDoctorIdSubmitBtn.dataset.emgDuration));
    return;
  }

  const profileSaveBtn = event.target.closest('[data-profile-save]');
  if (profileSaveBtn) {
    const read = (key) => modalBody.querySelector(`[data-profile-input="${key}"]`)?.value?.trim() || '';
    const nextProfile = {
      name: read('name'),
      email: read('email'),
      phone: read('phone'),
      address: read('address'),
      language: read('language')
    };

    if (!nextProfile.name || !nextProfile.email || !nextProfile.phone) {
      showToast('Name, email and phone are required.', 'error');
      return;
    }
    if (!nextProfile.email.includes('@')) {
      showToast('Enter a valid email address.', 'error');
      return;
    }

    Object.assign(profileState, nextProfile);
    renderProfileState();
    closeDetailModal();
    showToast('Profile updated successfully (mock).', 'success');
    return;
  }

  const profileCancelBtn = event.target.closest('[data-profile-cancel]');
  if (profileCancelBtn) {
    closeDetailModal();
    return;
  }

  const uidCancelBtn = event.target.closest('[data-uid-cancel]');
  if (uidCancelBtn) {
    closeDetailModal();
    return;
  }

  const uidSaveBtn = event.target.closest('[data-uid-save]');
  if (uidSaveBtn) {
    const newCode = modalBody.querySelector('[data-uid-new-code]')?.value?.trim() || '';
    const otp = modalBody.querySelector('[data-uid-otp]')?.value?.trim() || '';

    if (!/^\d{8}$/.test(newCode)) {
      showToast('Universal ID must be exactly 8 digits.', 'error');
      return;
    }
    if (newCode === universalIdState.code) {
      showToast('New Universal ID must be different from current one.', 'error');
      return;
    }
    if (takenUniversalCodes.has(newCode)) {
      showToast('This Universal ID is already taken by another user.', 'error');
      return;
    }
    if (!/^\d{6}$/.test(otp) || otp !== '112233') {
      showToast('Invalid OTP. Try 112233 for demo.', 'error');
      return;
    }

    takenUniversalCodes.add(universalIdState.code);
    saveUniversalId(newCode);
    closeDetailModal();
    openModal(
      'Universal ID Updated',
      `<p>Your new Universal ID is <strong>${newCode}</strong>.</p>
       <p>For security, editing is unavailable for the next ${universalIdState.lockDays} days.</p>`
    );
    showToast('Universal ID updated and saved.', 'success');
    return;
  }
});

modalBody.addEventListener('input', (event) => {
  const searchInput = event.target.closest('[data-doctor-search-input]');
  if (searchInput) {
    openAddAppointmentDoctorStep(searchInput.value, { preserveSearchFocus: true });
    return;
  }

  const emrSearchInput = event.target.closest('[data-share-emr-search]');
  if (emrSearchInput) {
    shareEmrFlow.searchTerm = emrSearchInput.value || '';
    openShareEmrDoctorStep({ preserveSearchFocus: true });
  }
});

doseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('[data-dose-card]');
    if (!card) return;

    const isTaken = card.classList.toggle('taken');
    button.classList.toggle('taken', isTaken);
    button.textContent = isTaken ? 'Taken' : 'Mark as Taken';
    updateMedicationTracker();
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');

    const key = tab.dataset.tab;
    const tabSectionMap = {
      medications: 'medplan',
      'labs-tab': 'labs',
      visits: 'appointments',
      access: 'privacy',
      files: 'medplan'
    };

    const targetSection = tabSectionMap[key];
    if (targetSection) {
      navigateToSection(targetSection);
      showToast(`${tab.textContent.trim()} opened.`, 'success');
      return;
    }

    const info = {
      overview: 'Showing demographics, care team, insurance, and emergency profile.',
      conditions: 'Condition list: Hypertension, Prediabetes with severity and control markers.',
      medications: 'Medication list with active doses, start date, and adherence scores.',
      'labs-tab': 'Lab records sorted by date with trend-aware indicators.',
      imaging: 'Imaging records: ECG, Echo, MRI with finding summaries.',
      visits: 'Chronological doctor visits with diagnosis and treatment decisions.',
      files: 'Uploaded documents including discharge slips and external lab PDFs.',
      access: 'Auditable access entries by doctor, lab, insurer, and emergency pathway.'
    };

    openModal(`Records Tab: ${tab.textContent}`, `<p>${info[key] ?? 'No details available.'}</p>`);
  });
});

themeToggle.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  document.body.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
});

closeModal.addEventListener('click', closeDetailModal);

detailModal.addEventListener('click', (event) => {
  if (event.target === detailModal) closeDetailModal();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeDetailModal();
    closeSidebar();
  }
  if (event.key === 'Tab' && !detailModal.classList.contains('hidden')) {
    const focusable = detailModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    if (document.body.classList.contains('sidebar-open')) closeSidebar();
    else openSidebar();
  });
}

if (sidebarClose) {
  sidebarClose.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', closeSidebar);
}

if (sidebarSearchBtn) {
  sidebarSearchBtn.addEventListener('click', runSidebarSearch);
}

if (sidebarSearchInput) {
  sidebarSearchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      runSidebarSearch();
    }
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeSidebar();
});

if (weatherLocateBtn) {
  weatherLocateBtn.addEventListener('click', requestWeatherByLocation);
}

if (weatherRefreshBtn) {
  weatherRefreshBtn.addEventListener('click', requestWeatherByLocation);
}

if (messagesInput) {
  messagesInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessagesChat();
    }
  });
}

if (!document.body.getAttribute('data-theme')) {
  document.body.setAttribute('data-theme', 'dark');
}

if (medsDate) {
  const now = new Date();
  medsDate.textContent = `Today: ${now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}`;
}

loadAppointmentsState();
loadUniversalIdState();
loadMedicationState();
loadCustomDoctorsState();
saveMedicationState();
renderAppointments();
updateMedicationTracker();
initSlopeGraph();
renderNfcCardState();
renderEmergencyStatus();
renderProfileState();
renderUniversalIdState();
renderAnalytics();
renderDoctorNetwork();
renderMessagesDoctorList();
renderMessagesThread();
setInterval(updateMedicationTracker, 60 * 1000);
setTimeout(() => {
  isAppointmentsLoading = false;
  renderAppointments();
}, 500);
