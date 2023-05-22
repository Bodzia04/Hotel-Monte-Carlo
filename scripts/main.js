let btn = document.querySelector('.btn');
let overlay = document.querySelector('.overlay');
let form = document.querySelector('.callback-form');
let body = document.querySelector('body');

btn.addEventListener('click', function(){
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
});

form.addEventListener('click',function(e){
    e.stopPropagation();
})

overlay.addEventListener('click', function(){
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
})


