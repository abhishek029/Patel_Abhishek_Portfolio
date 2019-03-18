// menu code
function show(){
    document.querySelector("#sidebar").classList.toggle('active');
}

// Promo Text code
const text = baffle(".data");
text.set({
    characters: '▓>▒ ▓▒█░> /░░▓░ ▒▒▒ >▒▒█< █>▓░ <>▓ █░▒▒ █░<>',
    speed: 120
});
text.start();
text.reveal(4000);