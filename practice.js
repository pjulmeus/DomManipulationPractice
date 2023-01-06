
let footer = document.querySelector('.footer');
let container = document.getElementById("#container");
container.innerText = 'HELLO!'
let qContainer = document.querySelector('section');
let newto = document.createElement('li');
let second = document.querySelectorAll('.second')
let third = document.querySelector('ol .third')
newto = newto.textContent = 'Four';

let liAll = document.querySelectorAll('ol li')
for (let lis of liAll){
    lis.style.backgroundColor ='green'
}

footer.classList.add('main')
footer.classList.remove('footer')
footer.classList.remove('footer')
