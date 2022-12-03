var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');
var logo = document.getElementById('logo');


// apply sticky class on scroll
window.onscroll = function(){
    if (window.pageYOffset >= menu.offsetTop){
        navbar.classList.add('sticky');
        
        console.log('stick')
    }
    else{
        navbar.classList.remove('sticky');
    }
}
