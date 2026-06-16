(async () => {
  const saved = localStorage.getItem('attendance_user');
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
      render(); // 👈 مهم: يعرض الواجهة فوراً قبل جلب البيانات
      await refreshEmployees(true);
      startAccountCheck();
    } catch (e) {
      console.log(e);
      currentUser = null;
    }
  } else {
    render();
  }
})();