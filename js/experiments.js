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
      clearInterval(timeId);
   }
   time--;
}



//дождь
function rain() {
   let amount = 80;
   let body = document.querySelector('.rain');
   let i = 0;
   while(i < amount) {
      let drop = document.createElement('i');

      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;
      let duration = Math.random() * 5;

      drop.style.width = 0.2 + size + 'px';
      drop.style.left = posX + 'px';
      drop.style.animationDelay = delay + 's';
      drop.style.animationDuration = 1 + duration + 's';

      body.appendChild(drop);
      i++;
   }
}

rain();
