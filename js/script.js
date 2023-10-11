// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu diklik
document.querySelector('#hamburger-menu').onclick = (e) =>{
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

//klik luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
    }
})

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const welcomeMessage = document.getElementById("welcome-message");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Ganti URL dengan URL API yang sesuai
      const apiUrl = "https://indigo-beaver-wrap.cyclic.app/login"; // Contoh URL API

      const requestData = {
          email: email,
          password: password
      };

      // Ubah metode HTTP menjadi POST
      const options = {
          method: "POST",
          body: JSON.stringify(requestData),
          headers: {
              "Content-Type": "application/json"
          }
      };

      // Kirim permintaan ke API
      fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => {
          // Periksa apakah login berhasil
          if (data.success) {
              welcomeMessage.textContent = `Selamat datang, ${data.username}!`;
              // Tambahkan kode ini untuk mengarahkan pengguna ke index.html
              window.location.href = "https://kampus-merdeka-software-engineering.github.io/FE-Semarang-26/index.html";
            } else {
              welcomeMessage.textContent = "Login gagal. Periksa kembali username dan password Anda.";
          }
      })
      .catch(error => {
          console.error("Terjadi kesalahan: " + error);
          welcomeMessage.textContent = "Terjadi kesalahan. Silakan coba lagi nanti.";
      });
    });
});




 
// document.addEventListener("DOMContentLoaded", function () {
//     var formBook = document.getElementById("formBook");
//     if (formBook) {
//         // Akses properti 'value' dari elemen formulir di sini
//         var value = formBook.value;
//         console.log(value);
//     } else {
//         console.error("Elemen formulir tidak ditemukan.");
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
  const formBook = document.getElementById("formBook");
  formBook.addEventListener("submit", function (event) {
    event.preventDefault();

    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const select = document.getElementById("select").value;
    const message = document.getElementById("message").value;

    console.log(first_name, last_name, email, date, select, message);

    fetch("https://indigo-beaver-wrap.cyclic.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        date: date,
        select: select,
        message: message
      })
    }).then((res) => {
      if (res.ok) {
        alert("Add Book an appointment Successfully!")
      } else {
        alert("Add Book an appointment Not Successfully!")
      }
      console.log(res);
    }).catch((error) => {
      alert(`Error messages: ${error.messages}`)
    });
  });
});

