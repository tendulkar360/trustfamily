const menubtn = document.getElementById('menu');
const closebtn = document.getElementById('close');
const ul = document.getElementById('ul');

menubtn.addEventListener("click",function(){
    ul.style.right = "0";
})

closebtn.addEventListener("click",function(){
    ul.style.right = "-260px";
})