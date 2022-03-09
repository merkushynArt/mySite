//timer

const timerEl = document.querySelector('.timer');

let time = 7200;

let timeId = setInterval(timerStart, 1000);

function timerStart() {
   let seconds = time % 60;

   if(seconds < 10) {
      seconds = '0' + seconds;
   }

   let minutes = Math.floor(time / 60);
   if(minutes > 59) {
      minutes = minutes % 60;
      if(minutes < 10) {
         minutes = '0' + minutes;
      } else {minutes = minutes};
   } else if(minutes < 10) {
      minutes = '0' + minutes;
   }

   let hours = Math.floor(time / 60 / 60);
   if(hours < 10) {
      hours = '0' + hours;
   };

   timerEl.innerHTML = `${hours}:${minutes}:${seconds}`;

   if(time === 0){
      clearInterval(timeId)
   }
   time--
}



//текст из частиц
