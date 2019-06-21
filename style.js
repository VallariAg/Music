// const audi = document.querySelectorAll('audio');


// audi.addEventListener('play', function(e) {
//     // audio.innerHTML = '<i class="fas fa-play-circle" style="position: absolute; margin: 90% 90% 90% 90%; "></i>';
//     // window.alert('musiccc');
//     console.log('song');
//     setTimeout(() => form.remove(), 3000); 
// });
// audi.onplay = (event) => {
//     console.log('The Boolean paused property is now false. Either the ' + 
//     'play() method was called or the autoplay attribute was toggled.');
//   };
console.log('hvdh');

const at = document.querySelector('.at');
const msg = document.querySelector('.msg');

at.addEventListener('click',(e) => {
    msg.innerHTML = '<div style="color:white;">VallariAg</div>';
    console.log('click');
    setTimeout(() => msg.remove(), 3000); 
});




