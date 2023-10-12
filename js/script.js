const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

document.addEventListener('click', function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const welcomeMessage = document.getElementById("welcome-message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const apiUrl = "https://indigo-beaver-wrap.cyclic.app/login";

    const requestData = {
      email: email,
      password: password
    };

    const options = {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => {
        if (data.message === "Berhasil login") {
          welcomeMessage.textContent = `Selamat datang, ${data.username}!`;
          window.location.href = "https://kampus-merdeka-software-engineering.github.io/FE-Semarang-26/index.html";
        } else {
          welcomeMessage.textContent = "Login gagal. Periksa kembali username dan password Anda.";
        }
      });
  });

  const formBook = document.getElementById("form-book");
  if (formBook) {
    formBook.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("first_name").value;
      const lastName = document.getElementById("last_name").value;
      const email = document.getElementById("email").value;
      const date = document.getElementById("date").value;
      const select = document.getElementById("select").value;
      const message = document.getElementById("message").value;

      fetch("https://indigo-beaver-wrap.cyclic.app/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          date: date,
          select: select,
          message: message
        })
      }).then((res) => {
        if (res.ok) {
          alert("Successfully booked an appointment!");
        } else {
          alert("Failed to book an appointment!");
        }
      }).catch((error) => {
        console.error("Error:", error);
      });
    });
  } else {
    console.error("Element with ID 'form-book' not found.");
  }
});
