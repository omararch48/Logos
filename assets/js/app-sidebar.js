(() => {


    'use strict'

    
    let navBar = document.querySelector('.sidebar-menu');
    const buttonClicked = document.querySelector('.icon-align-justify');


    buttonClicked.addEventListener('click', () => {
        
        navBar.classList.toggle('active');
    });
    
    
    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && navBar.classList.contains('active')) {
            navBar.classList.toggle('active');
        }
    });


})();