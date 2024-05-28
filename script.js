// Отримуємо модальне вікно
const modal = document.getElementById("registrationModal");

// Отримуємо кнопку, яка відкриває модальне вікно
const openModalBtn = document.getElementById("openModalBtn");

// Отримуємо елемент <span>, який закриває модальне вікно
const closeBtn = document.getElementsByClassName("close")[0];

// Коли користувач клікає кнопку, відкриваємо модальне вікно
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Коли користувач клікає на <span> (x), закриваємо модальне вікно
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Коли користувач клікає будь-де поза модальним вікном, закриваємо його
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Валідація та відправка форми реєстрації
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Запобігаємо стандартній відправці форми
  
  // Отримуємо значення з форми
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Проводимо валідацію
  if (!isValidEmail(email)) {
    console.log("Неправильний формат електронної адреси");
    return;
  }

  if (password !== confirmPassword) {
    console.log("Паролі не співпадають");
    return;
  }

  // Якщо всі перевірки пройшли успішно, виводимо повідомлення про успішну реєстрацію
  console.log("Реєстрація успішна!");
});

// Функція для перевірки формату електронної адреси
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
