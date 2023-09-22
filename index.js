var menulinks =document.querySelector('#navbar-menu');
var navmenu=()=>{
    menulinks.classList.toggle('active')
}
menulinks.addEventListener('click',navmenu)
