// ===================== 1. الثوابت والمتغيرات =====================
const API_BASE = 'https://...';
let currentUser = null;
let employeesList = [];

// ===================== 2. الدوال المساعدة (تعريف قبل الاستخدام) =====================
function showToast(msg, isError) { /*...*/ }
const statusColors = { /*...*/ };
function hasPermission(perm) { /*...*/ }
async function refreshEmployees() { /*...*/ }
// ... باقي الدوال

// ===================== 3. دوال النوافذ المنبثقة =====================
function showEmployeeModal() { /*...*/ }
// ...

// ===================== 4. دالة العرض الرئيسية =====================
function render() {
  // كل كود الواجهة هنا
}

// ===================== 5. دوال إضافية =====================
function startAccountCheck() { /*...*/ }

// ===================== 6. بدء التطبيق =====================
(async () => {
  const saved = localStorage.getItem('attendance_user');
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
      render(); // عرض وهمي سريع
      await refreshEmployees(true);
      startAccountCheck();
      render(); // إعادة عرض بعد تحميل البيانات
    } catch (e) {
      console.error(e);
      currentUser = null;
      render();
    }
  } else {
    render();
  }
})();
