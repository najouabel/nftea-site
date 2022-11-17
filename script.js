$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    console.log("  test ");
    });




    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };
    
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    };