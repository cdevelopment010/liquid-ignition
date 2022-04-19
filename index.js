const pageHeight = window.innerHeight; 
// const video = document.getElementById('video');
// const showVideoEl = document.querySelectorAll('.show-video')[0]; 
const sections = document.querySelectorAll('.scroll-section');
// const addVideo = document.querySelector('.scroll-up-add-video');



// sections.forEach(section => {
//     section.addEventListener('wheel', function(e) {
//         let scrollTo;
//         //scrollup 
//         if (e.deltaY < 0) {
//             scrollTo = window.scrollY - pageHeight > 0 ? window.scrollY - pageHeight : 0;
//             getPosition(scrollTo); 
//             // hideShowVideo(); 
//         }
//         // scroll down
//         if (e.deltaY > 0) {

//             scrollTo = window.scrollY + pageHeight < document.body.clientHeight ? window.scrollY + pageHeight : document.body.clientHeight;
//             getPosition(scrollTo); 
//         }
//         return; 
//     })
// })

// showVideoEl.addEventListener('wheel', function(e){
//     if (e.deltaY > 0) {
//         setTimeout(() => {
//             video.classList.remove('fixed-position');
//         }, 300)
//     }
// })
// addVideo.addEventListener('wheel', function(e){
//     if (e.deltaY < 0) {
//         video.classList.add('fixed-position');
//     }
// })

// function getPosition(pos) {
//     window.scrollTo({ top: pos, behavior: 'smooth'});
// }