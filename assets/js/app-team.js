const teamSelected = document.querySelectorAll('.team-person');


teamSelected.forEach((teamName) => {

    teamName.addEventListener('click', () => {

        console.log(teamName);

    });


    // document.querySelector('.sidebar-menu').classList.toggle('active');

    // document.querySelector('sidebar-menu').classList.toggle('.hidden');

});