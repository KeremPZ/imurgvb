// 1. DOM Elemanlarını Yakalama
const signUpForm = document.getElementById("signUpForm");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const dobDaySelect = document.getElementById("dob-day");
const dobMonthSelect = document.getElementById("dob-month");
const dobYearSelect = document.getElementById("dob-year");
const genderSelect = document.getElementById("gender-select");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// 2. Form Gönderim Dinleyicisi
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Sayfanın yenilenmesini engeller

  // 3. Değerleri Alma ve Temizleme
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const dobDay = dobDaySelect.value;
  const dobMonth = dobMonthSelect.value;
  const dobYear = dobYearSelect.value;
  const gender = genderSelect.value;
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // 4. Temel Ön Kontroller (Validation)
  if (!firstName || !lastName || !dobDay || !dobMonth || !dobYear || !gender || !email || !password) {
    alert("Lütfen tüm alanları eksiksiz doldurun!");
    return;
  }

  if (password.length < 6) {
    alert("Şifreniz en az 6 karakter olmalıdır!");
    return;
  }

  // 5. Doğum Tarihini Veritabanı Formatına Çevirme (YYYY-MM-DD)
  // Ay ve gün tek haneliyse başına '0' ekler (Örn: 2005-05-09)
  const formattedMonth = dobMonth.padStart(2, "0");
  const formattedDay = dobDay.padStart(2, "0");
  const birthDate = `${dobYear}-${formattedMonth}-${formattedDay}`;

  // 6. Back-End'e Gönderilecek Paket
  const registerData = {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    gender: gender,
    email: email,
    password: password
  };

  // Konsolda kontrol etme (Back-end bağlayınca buraya fetch() gelecek)
  console.log("Kayıt Paketi Hazır:", registerData);
  alert("Form başarıyla doğrulandı! Konsolu kontrol edebilirsin kanki.");
});