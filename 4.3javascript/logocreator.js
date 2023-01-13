let logo = document.querySelector('#logo-form')
let brandName = document.querySelector('input[name="brandname"]')
let color = document.querySelector('input[name="color"]')
let font = document.querySelector('input[name="fontsize"]')
let results = document.querySelector('#results')

logo.addEventListener('submit', function(evt){
evt.preventDefault();
const newLogo = makeLogo(brandName.value, color.value, font.value);
results.appendChild(newLogo)
})

function makeLogo(text, color, size){
const logo1 = document.createElement('h2')
logo1.innerText = text;
logo1.style.color= color;
logo1.style.fontSize = size + 'px';
return logo1
}
