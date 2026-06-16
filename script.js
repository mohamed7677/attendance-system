(async () => {
  const saved = localStorage.getItem('attendance_user');
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
      render(); // 👈 أضف هذا السطر قبل await
      await refreshEmployees(true);
      startAccountCheck();
    } catch (e) {
      console.log(e);
      currentUser = null;
      render();
    }
  } else {
    render();
  }
})();
