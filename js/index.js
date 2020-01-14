// Your code goes here


// 1 - 2. mouseenter / mouseleave
const navLink = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.color = 'orange';
        el.style.transform = 'scale(1.2)';
    })      

    el.addEventListener('mouseleave', () => {
        el.style.color = 'red';
        el.style.transform = 'scale(1)';
    })  
})

// 3-4. click / dblclick
const button = document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.color = 'orange';
        el.style.transform = 'scale(0.8)';
    })      

    el.addEventListener('mouseleave', () => {
        el.style.color = 'red';
        el.style.transform = 'scale(1)';
    })  

    el.addEventListener('click', () => {
        el.style.color = 'red';
        el.style.backgroundColor = 'black';
        el.style.transform = 'scale(1)';
    })  

    el.addEventListener('dblclick', () => {
        el.style.color = 'blue';
        el.style.backgroundColor = 'white';
        el.style.transform = 'scale(1)';
    })  
})

// 5-7. mouseover, mousedown, mouseup
const crazyBus = document.querySelector('.intro img');
crazyBus.addEventListener('mouseover', e => 
        e.target.src = 'img/funny-bus-images02.jpg'
    )      
crazyBus.addEventListener('mouseleave', e => 
    e.target.src = 'img/fun-bus.jpg'
    )
crazyBus.addEventListener('mousedown', e => 
    e.target.src = 'img/lion_bus.jpg'    
    )      
crazyBus.addEventListener('mouseup', e =>
    e.target.src = 'img/short_bus.jpg')    

// const headers = document.querySelectorAll('h2').forEach( el => {
//     el.addEventListener('scroll', () => {
//     el.style.color= 'yellow';
//   })
// })

// 8-10. contextmenu, resize, scroll
const uglyBlue = document.querySelector('body');
uglyBlue.addEventListener('contextmenu', () => {
  uglyBlue.style.backgroundColor = 'blue';
})

const picsPoP = document.querySelectorAll('img').forEach(el => {
    el.addEventListener('resize', () => {
        el.style.transform = 'scale(1.2)';
    })      
})

const resizeClown = document.querySelector('.intro img');
window.addEventListener('resize', () => {
    resizeClown.src = 'img/evil_clown.png';
});

const redact = document.querySelector('p');
window.addEventListener('scroll', () => {
    redact.style.backgroundColor = 'black';
});

