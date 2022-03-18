/*mask-phone==============================================================================================================*/
//https://imask.js.org/guide.html
let element = document.getElementById('phone');
let maskOptions = {
   mask: '+38(000)000-00-00',
   lazy: false
};
let mask = new IMask(element, maskOptions);