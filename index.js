const hero = document.querySelector('header'); 
const left = document.querySelector('.left'); 
const right = document.querySelector('.right'); 
const logo = document.querySelector('.logo'); 
const navLi = document.querySelectorAll('nav li'); 

logo.addEventListener('click', () => {
    left.style.setProperty('--left', 50); 
    right.style.setProperty('--right', -50); 
})

navLi.forEach(li => {
    li.addEventListener('click', () => {
        left.style.setProperty('--left', -200); 
        right.style.setProperty('--right', -100); 
    })
})

hero.addEventListener('wheel', function( e ) {
    let heroHeight = hero.offsetHeight; 
    let percentScroll =  (window.pageYOffset * 200)/ heroHeight;
    // console.log((window.pageYOffset / heroHeight*150) + 25);
    // console.log("top", (window.pageYOffset / heroHeight) + 25); 




    let leftPos = getComputedStyle(left).getPropertyValue('--left'); 
    let rightPos = getComputedStyle(right).getPropertyValue('--right'); 
    leftPos = 50 +  (1 - (percentScroll * 2)); 
    rightPos = -50 +  (1 + (percentScroll)); 

    console.log("Left:", leftPos);
    console.log("right:", rightPos);
     

    left.style.setProperty('--left', leftPos); 
    right.style.setProperty('--right', rightPos); 
    // left.style.setProperty('--top', (window.pageYOffset / heroHeight) + 25); 
})

window.addEventListener('change', () => {
    if (window.pageYOffset > hero.offsetHeight) {
        console.log("hide left/right"); 
    }
})