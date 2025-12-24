/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
// DATA TREATMENT
const treatments = [
  {
    name: "Basic Manicure",
    price: "Rp60,000",
    desc: "Perawatan dasar kuku untuk membersihkan dan merapikan kuku tangan.",
    img: "assets/img/basicmanicure.jpg"
  },
  {
    name: "Russian Manicure",
    price: "Rp180,000",
    desc: "Manicure presisi dengan teknik khusus untuk hasil rapi dan tahan lama.",
    img: "assets/img/russianmanicure.jpg"
  },
  {
    name: "Nail Extension",
    price: "Rp200,000",
    desc: "Penambahan panjang dan pembentukan kuku menggunakan gel atau acrylic.",
    img: "assets/img/nailextension.jpg"
  },
  {
    name: "Pedicure Spa",
    price: "Rp100,000",
    desc: "Perawatan kaki menyeluruh dengan spa untuk relaksasi.",
    img: "assets/img/pedicurespa.jpg"
  }
];

// AMBIL CONTAINER
const container = document.getElementById("treatmentList");

// CEK BIAR GA ERROR
if (container) {
  treatments.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button onclick="alert('${item.desc}')">Detail</button>
        <button onclick="alert('${item.name} ditambahkan ke keranjang')">
          Tambah ke Keranjang
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}
});
