const buttonClicked = document.querySelector('.icon-align-justify');
console.log(buttonClicked);




buttonClicked.addEventListener('click', () => {

    document.querySelector('.sidebar-menu').classList.toggle('active');

    // document.querySelector('sidebar-menu').classList.toggle('.hidden');
});



