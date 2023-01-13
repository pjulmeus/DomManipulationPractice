let sumbit = document.querySelector("#errand");
const form = document.querySelector('#add-todo');
const input = document.querySelector('#todo');
const list = document.querySelector('#todo-list')
const button = document.querySelector('button')
// for(let choice of submit){
//  choice.addEventListener("click", function(e){
// console.log("bts is the best");
//  })
// }
list.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    } else if (e.target === "INPUT"){
     e.target.parentElement.classList.toggle('finish')
    }
})



form.addEventListener('submit', function(e){
e.preventDefault();
const newToDo = document.createElement('input')
const p = document.createElement('br')
newToDo.type = "checkbox"
newToDo.id = "love "
const label = document.createElement('label')
const removebutton = document.createElement('button');
removebutton.innerText = 'Finished With Task';
removebutton.addEventListener('click', function(e){
    e.target.parentElement.remove()
})
label.innerText = input.value;
label.classList.add("subtitle")
list.appendChild(newToDo);
list.appendChild(label)
list.appendChild(removebutton);
list.appendChild(p)
input.value = "";
})
