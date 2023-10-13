document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const loginForm = document.getElementById("login-form");
  const welcomeMessage = document.getElementById("welcome-message");
  const formBook = document.getElementById("form-book");
  const formContact = document.getElementById("contact-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const apiUrl = "https://indigo-beaver-wrap.cyclic.app/login";

      const requestData = {
        email: email,
        password: password,
      };

      const options = {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(apiUrl, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Berhasil login") {
            welcomeMessage.textContent = `Selamat datang, ${email}!`;
          } else {
            welcomeMessage.textContent =
              "Login gagal. Periksa kembali username dan password Anda.";
          }
        });
    });
  }

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          date: date,
          select: select,
          message: message,
        }),
      })
        .then((res) => {
          if (res.ok) {
            alert("Successfully booked an appointment!");
          } else {
            alert("Failed to book an appointment!");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }

  if (formContact) {
    formContact.addEventListener("submit", function (event) {
      event.preventDefault();

      const id = document.getElementById("id").value;
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      fetch("https://indigo-beaver-wrap.cyclic.app/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          name: name,
          email: email,
          message: message,
        }),
      })
        .then((res) => {
          if (res.ok) {
            alert("Successfully to sent message");
             window.location.href =
              "https://formspree.io/f/xrgwoaoe";
          } else {
            alert("Failed to send message");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }

  hamburgerMenu.onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
  };

  document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
