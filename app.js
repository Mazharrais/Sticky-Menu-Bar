window.addEventListener('scroll', function(){

  var navBar = document.getElementById("menu-bar")



    if(window.pageYOffset >= 190){
     navBar.classList.add('sticky');
    }else{
        navBar.classList.remove('sticky')
    }
} );