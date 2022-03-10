const buttonClicked = document.querySelector('.button-clicked');
console.log(buttonClicked);




buttonClicked.addEventListener('click', () => {

    document.querySelector('.sidebar-menu').classList.toggle('active');

    // document.querySelector('sidebar-menu').classList.toggle('.hidden');
});



