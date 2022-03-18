let teamSelected = document.querySelector('.team-person-active');
let teamSelection = document.querySelectorAll('.team-person');
let infoSelection = document.querySelectorAll('.team-info');
let cardSelection = document.querySelectorAll('.team-card');
let imageSelection = document.querySelectorAll('.team-image img');


for (let i = 0; i < teamSelection.length; i++) {
    if (teamSelection[i] == teamSelected) {
        infoSelection[i].style.color = 'var(--main-white)';
        cardSelection[i].style.display = 'flex';
        imageSelection[i].style.display = 'block';        
    }
}


teamSelection.forEach((teamName) => {
    teamName.addEventListener('click', () => {
        for (let i = 0; i < teamSelection.length; i++) {
            if (teamSelection[i] == teamName) {
                teamSelection[i].classList.toggle('team-person-active');
                infoSelection[i].style.color = 'var(--main-white)';
                cardSelection[i].style.display = 'flex';
                imageSelection[i].style.display = 'block';
            }
            if (teamSelection[i] == teamSelected) {
                teamSelection[i].classList.toggle('team-person-active');
                infoSelection[i].style.color = 'transparent';
                cardSelection[i].style.display = 'none';
                imageSelection[i].style.display = 'none';
            }            
        }   
        teamSelected = document.querySelector('.team-person-active');
        teamSelection = document.querySelectorAll('.team-person');
    });
});