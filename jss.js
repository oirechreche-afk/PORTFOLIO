const menu=document.getElementById("menus");//yhmel l3ondsoor li baasm menu ll page w regestries f variable menu
const action=document.getElementById("actions");
menu.addEventListener("click",()=>{
handlemenu();
})
function handlemenu(){
menu.classList.toggle("is-active");
action.classList.toggle("is-active");
}
