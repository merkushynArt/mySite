let mobBtn = document.querySelector('.mobile-menu__btn');
let mobMenu = document.querySelector('.mobile-menu');

mobBtn.onclick = function() {
   mobBtn.classList.toggle('active');
   mobMenu.classList.toggle('active');
}


