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

// mengubah teks
const elemenUbahTeks = document.getElementById(
  "teksBerubah"
);
const kataKunci = [
  "Karena Sehat Itu Mahal",
  "Jangan Sampai Gigi Kalian Berlubang",
  "Jangan Sampai Menyesal",
  "Jangan Nunggu Sakit Dulu",
  "Karena Sehat Itu Segalanya",
];
let indeksKataSaatIni = 0;
function ubahKata() {
  elemenUbahTeks.textContent = kataKunci[indeksKataSaatIni];
  indeksKataSaatIni = (indeksKataSaatIni + 1) % kataKunci.length;
}
setInterval(ubahKata, 3000);


window.onbeforeunload = ()=>{
  for (const form of document.getElementsByTagName("form")){
    form.reset();
  }
};

document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
  
    // Lakukan permintaan GET ke backend
    fetch('https://indigo-beaver-wrap.cyclic.app/login')
      .then(response => response.json())
      .then(data => {
        // Tampilkan data pengguna di halaman
        data.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  

  const formBook = document.getElementById("formBook")
    formBook.addEventListener("submitBook", (event) =>{
        event.preventDefault();
        const first_name = document.getElementById("first_name").value;
        const last_name = document.getElementById("last_name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value;

        console.log(first_name, last_name, email, date);

        fetch("https://indigo-beaver-wrap.cyclic.app/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email: email,
                date: date,
                message: message
            })
        }).then( (res) =>{
            if (res.ok){
                alert("Booking an appointment Successfully!")
            }else{
                alert("Add Customer Not Successfully!")
            }
            console.log(res);
        }).catch((error) =>{
            alert(`Error messages: ${error.messages}`)
        })
    })