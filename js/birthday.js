document.addEventListener('DOMContentLoaded', () => {
  const daySelect = document.getElementById('dob-day');
  const monthSelect = document.getElementById('dob-month');
  const yearSelect = document.getElementById('dob-year');

  // 1. Yılları Dinamik Doldur (Bugünün yılından 100 yıl geriye)
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 100; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }

  // Varsayılan olarak 31 günü doldur
  populateDays(31);

  function populateDays(daysInMonth) {
    const currentSelectedDay = daySelect.value;
    daySelect.innerHTML = '<option value="" disabled selected>Gün</option>';

    for (let day = 1; day <= daysInMonth; day++) {
      const option = document.createElement('option');
      option.value = day;
      option.textContent = day;

      if (day == currentSelectedDay) {
        option.selected = true;
      }

      daySelect.appendChild(option);
    }
  }

  // 2. Ay ve Yıla Göre Gün Sayısını Hesaplayan Fonksiyon
  function updateDays() {
    const selectedMonth = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);

    if (!selectedMonth) return;

    // Şubat ve artık yıl hesabı
    const yearToUse = selectedYear || 2024;
    const daysInMonth = new Date(yearToUse, selectedMonth, 0).getDate();

    populateDays(daysInMonth);
  }

  // 3. Etkinlik Dinleyicileri
  monthSelect.addEventListener('change', updateDays);
  yearSelect.addEventListener('change', updateDays);
});