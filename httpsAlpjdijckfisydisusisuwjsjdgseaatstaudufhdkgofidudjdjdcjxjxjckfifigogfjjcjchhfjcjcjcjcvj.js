(function (_0x394b9f, _0xe38d16) {
  const _0x55bed3 = _0x394b9f();
  while (true) {
    try {
      const _0x6acae5 = -parseInt(_0x294c(497, 0x4e1)) / 0x1 * (-parseInt(_0x294c(507, 0x4a6)) / 0x2) + -parseInt(_0x294c(516, 0x4c5)) / 0x3 * (-parseInt(_0x294c(518, 0x4dc)) / 0x4) + parseInt(_0x294c(524, 0x4da)) / 0x5 + parseInt(_0x294c(521, 0x4c1)) / 0x6 * (parseInt(_0x294c(509, 0x4a9)) / 0x7) + parseInt(_0x294c(534, 0x4bc)) / 0x8 + -parseInt(_0x294c(506, 0x4ea)) / 0x9 + parseInt(_0x294c(555, 0x4f2)) / 0xa * (-parseInt(_0x294c(523, 0x4c5)) / 0xb);
      if (_0x6acae5 === _0xe38d16) {
        break;
      } else {
        _0x55bed3.push(_0x55bed3.shift());
      }
    } catch (_0x3fe42f) {
      _0x55bed3.push(_0x55bed3.shift());
    }
  }
})(_0x4b40, 0xba8a7);
function _0x294c(_0x278a86, _0x1f771c) {
  const _0x4b401b = _0x4b40();
  _0x294c = function (_0x294c55, _0x55cb86) {
    _0x294c55 = _0x294c55 - 0x1d7;
    let _0x44ac0f = _0x4b401b[_0x294c55];
    return _0x44ac0f;
  };
  return _0x294c(_0x278a86, _0x1f771c);
}
const products = [{
  'id': 0x1,
  'name': "Murbug VVIP",
  'description': "Telegram",
  'price': 0xbb8,
  'image': 'https://files.catbox.moe/qrzy3h.jpg',
  'badge': "Terbaru",
  'checkoutPage': "udufsraawudldjjxkckckckkvvkblhlblhogkdkddjdjdysstsrarwsedjdjfkfjdhjcjcjcvjvkvvivibjvhcg.html"
}, {
  'id': 0x2,
  'name': "Nokos Philipina",
  'description': 'WhatsApp',
  'price': 0x1388,
  'image': "https://files.catbox.moe/qrzy3h.jpg",
  'badge': "Terbaru",
  'checkoutPage': "udufsraawudldjjxkckckckkvvkblhlblhogkdkddjdjdysstsrarwsedjdjfkfjdhjcjcjcvjvkvvivibjvhcg.html"
}, {
  'id': 0x3,
  'name': "Nokos Indo",
  'description': "WhatsApp",
  'price': 0xfa0,
  'image': 'https://files.catbox.moe/qrzy3h.jpg',
  'badge': "Terbaru",
  'checkoutPage': "udufsraawudldjjxkckckckkvvkblhlblhogkdkddjdjdysstsrarwsedjdjfkfjdhjcjcjcvjvkvvivibjvhcg.html"
}, {
  'id': 0x4,
  'name': 'Jasbug',
  'description': "1x/Nomor",
  'price': 0x3e8,
  'image': 'https://files.catbox.moe/qrzy3h.jpg',
  'badge': "Terbaru",
  'checkoutPage': 'udufsraawudldjjxkckckckkvvkblhlblhogkdkddjdjdysstsrarwsedjdjfkfjdhjcjcjcvjvkvvivibjvhcg.html'
}, {
  'id': 0x5,
  'name': "Jasa Rename Script Bot",
  'description': "Free Req",
  'price': 0x2710,
  'image': "https://files.catbox.moe/qrzy3h.jpg",
  'badge': "Terbaru",
  'checkoutPage': 'udufsraawudldjjxkckckckkvvkblhlblhogkdkddjdjdysstsrarwsedjdjfkfjdhjcjcjcvjvkvvivibjvhcg.html'
}, {
  'id': 0x6,
  'name': "Jasa Buat Logo",
  'description': "Free Req Foto",
  'price': 0x3e8,
  'image': 'https://files.catbox.moe/qrzy3h.jpg',
  'badge': "Terbaru",
  'checkoutPage': "udufsraawudldjjxkckckckkvvkblhlblhogkdkddjdjdysstsrarwsedjdjfkfjdhjcjcjcvjvkvvivibjvhcg.html"
}, {
  'id': 0x7,
  'name': "Panel Pterodactyl",
  'description': "1-Unli",
  'price': 0x2710,
  'image': "https://files.catbox.moe/qrzy3h.jpg",
  'badge': "Limited Edition",
  'checkoutPage': "ysusgdhxjxbxncnvjvjchdtararaywhwydydutihohohogkfkfkckckckckckcjxjxjfkffjfifjfifjshsaaswetyrfjdsgag.html"
}];
const productList = document.getElementById("product-list");
const allProductsList = document.getElementById('all-products');
function _0x33ab3c(_0x13a44e, _0x48e6da) {
  return _0x294c(_0x48e6da + 0x3d9, _0x13a44e);
}
const menuBtn = document.getElementById('menuBtn');
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const themeSwitcher = document.getElementById('themeSwitcher');
const html = document.documentElement;
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll('.nav-link');
const footerNavLinks = document.querySelectorAll(".footer-nav-link");
const loginBtn = document.getElementById('loginBtn');
function renderProducts(_0x1f5034, _0x1adba6) {
  _0x1f5034.innerHTML = _0x1adba6.map(_0x29c849 => "\n        <div class=\"product-card\">\n          " + (_0x29c849.badge ? "<span class=\"product-badge\">" + _0x29c849.badge + "</span>" : '') + "\n          <div class=\"product-image-container\">\n            <img src=\"" + _0x29c849.image + "\" alt=\"" + _0x29c849.name + "\" class=\"product-image\">\n          </div>\n          <div class=\"product-content\">\n            <h3 class=\"product-title\">" + _0x29c849.name + "</h3>\n            <p class=\"product-description\">" + _0x29c849.description + "</p>\n            <div class=\"product-footer\">\n              <span class=\"product-price\">Rp" + _0x29c849.price.toLocaleString("id-ID") + "</span>\n              <a href=\"" + _0x29c849.checkoutPage + "\" class=\"product-button\">\n                <i class=\"fas fa-cart-plus\"></i>\n                Beli\n              </a>\n            </div>\n          </div>\n        </div>\n      ").join('');
}
function navigateTo(_0x66ed75) {
  pages.forEach(_0x534821 => {
    _0x534821.classList.remove("active");
  });
  document.getElementById(_0x66ed75).classList.add("active");
  sidebar.classList.remove("open");
  navLinks.forEach(_0x4f251b => {
    _0x4f251b.classList.remove("active");
    if (_0x4f251b.getAttribute("data-page") === _0x66ed75) {
      _0x4f251b.classList.add("active");
    }
  });
  footerNavLinks.forEach(_0x4220d2 => {
    _0x4220d2.classList.remove("active");
    if (_0x4220d2.getAttribute("data-page") === _0x66ed75) {
      _0x4220d2.classList.add("active");
    }
  });
  window.scrollTo(0x0, 0x0);
  history.pushState(null, null, '#' + _0x66ed75);
}
function initSPA() {
  const _0x1c40ae = window.location.hash.substring(0x1) || "beranda";
  navigateTo(_0x1c40ae);
  navLinks.forEach(_0x491338 => {
    _0x491338.addEventListener("click", _0x7a825b => {
      _0x7a825b.preventDefault();
      const _0x2b73f0 = _0x491338.getAttribute("data-page");
      navigateTo(_0x2b73f0);
    });
  });
  footerNavLinks.forEach(_0x1c1bbb => {
    _0x1c1bbb.addEventListener('click', _0x24ff7e => {
      _0x24ff7e.preventDefault();
      const _0x234f4b = _0x1c1bbb.getAttribute("data-page");
      navigateTo(_0x234f4b);
    });
  });
  window.addEventListener("popstate", () => {
    const _0x523411 = window.location.hash.substring(0x1) || 'beranda';
    navigateTo(_0x523411);
  });
}
menuBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
loginBtn.addEventListener("click", () => {
  navigateTo('akun');
});
themeSwitcher.addEventListener("click", () => {
  const _0x3cae60 = html.getAttribute("data-theme");
  const _0x5cc4a8 = _0x3cae60 === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", _0x5cc4a8);
  const _0xa4520e = themeSwitcher.querySelector(".theme-icon");
  _0xa4520e.className = _0x5cc4a8 === "dark" ? "fas fa-sun theme-icon" : "fas fa-moon theme-icon";
  localStorage.setItem('theme', _0x5cc4a8);
});
const savedTheme = localStorage.getItem("theme") || 'system';
html.setAttribute("data-theme", savedTheme);
const icon = themeSwitcher.querySelector(".theme-icon");
if (savedTheme === "dark") {
  icon.className = "fas fa-sun theme-icon";
} else {
  icon.className = "fas fa-moon theme-icon";
}
renderProducts(productList, products.slice(0x0, 0x7));
renderProducts(allProductsList, products);
initSPA();
function _0x4b40() {
  const _0x193726 = ['https://files.catbox.moe/qrzy3h.jpg', 'closeSidebar', 'ysusgdhxjxbxncnvjvjchdtararaywhwydydutihohohogkfkfkckckckckckcjxjxjfkffjfifjfifjshsaaswetyrfjdsgag.html', "\n          <div class=\"product-image-container\">\n            <img src=\"", "</h3>\n            <p class=\"product-description\">", 'checkout.html', "setelah bug,jeda 10 menit.", '2014848DCheQY', "</span>\n              <a href=\"", 'price', "\n        <div class=\"product-card\">\n          ", 'theme', 'product-list', '</span>', 'getItem', 'toLocaleString', 'dark', 'image', '.theme-icon', 'querySelectorAll', 'map', 'add', '.page', 'addEventListener', "<span class=\"product-badge\">", 'slice', 'open', 'hash', '365600myHliI', 'scrollTo', 'location', 'popstate', 'Sale', 'light', 'badge', 'preventDefault', "harga dapat berubah tergantung request.", 'description', 'setAttribute', "jasa rename sc", 'Tech', 'remove', 'querySelector', "fas fa-moon theme-icon", 'getAttribute', "jasa buat logo", 'name', 'active', 'data-page', "nokos indo", 'click', '.footer-nav-link', "\" class=\"product-button\">\n                <i class=\"fas fa-cart-plus\"></i>\n                Beli\n              </a>\n            </div>\n          </div>\n        </div>\n      ", 'substring', 'id-ID', 'data-theme', '18277tnWxsH', 'innerHTML', "fas fa-sun theme-icon", "panel petrodactyl", 'classList', 'New', 'pushState', 'Terbaru', 'beranda', '9331515fnBFMx', '6cvSHVY', 'documentElement', '35QEMDAu', "Hello World!", 'sidebar', "sampai akar🫜.", 'WhatsApp', "Best Seller", 'getElementById', '616116wMlfMb', '/nomor.', '4KvYawK', 'forEach', 'join', '1420830kJZIDJ', "\" alt=\"", '407Nysvki', '7287710UWgxJp', 'className', 'udufsraawudldjjxkckckckkvvkblhlblhogkdkddjdjdysstsrarwsedjdjfkfjdhjcjcjcvjvkvvivibjvhcg.html'];
  _0x4b40 = function () {
    return _0x193726;
  };
  return _0x4b40();
}
function hi() {
  console.log("Hello World!");
}
hi();
