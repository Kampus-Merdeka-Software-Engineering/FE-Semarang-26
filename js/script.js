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
  