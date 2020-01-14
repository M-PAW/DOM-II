// Your code goes here

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
