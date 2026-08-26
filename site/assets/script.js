document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.querySelector(".form-status").textContent =
        "Форма пока не подключена к обработке заявок — нужно указать, куда отправлять данные (email, CRM-вебхук или форма Tilda).";
    });
  }
});
