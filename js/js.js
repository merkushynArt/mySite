let mobBtn = document.querySelector('.mobile-menu__btn');
let mobMenu = document.querySelector('.mobile-menu');

mobBtn.onclick = function() {
   mobMenu.classList.toggle('active');
}