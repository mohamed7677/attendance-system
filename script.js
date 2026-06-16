// -------------------- الرابط الثابت --------------------
const API_BASE = 'https://script.google.com/macros/s/AKfycbyLhFD_71tOiWmIh-mh_UdcEluFctt777gN9dXTeIr0HB622lIu2q8GzJROrtx7i-Ylvg/exec';

let currentUser = null;
let employeesList = [];
let unitsList = [];
// ... باقي المتغيرات والدوال كما هي، بدون $(document).ready أو window.onload
// في نهاية الملف، اترك فقط استدعاء بدء التطبيق:

(async () => {
  const saved = localStorage.getItem('attendance_user');
  if (saved) {
    try { currentUser = JSON.parse(saved); await refreshEmployees(true); startAccountCheck(); } catch(e) { currentUser = null; }
  }
  render();
})();