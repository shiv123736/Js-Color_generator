'use strict';
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colors = ['red', 'green', 'blue', 'yellow'];
const hex_colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', () => {
    // let randomNo = getRandomNo();
    // document.body.style.backgroundColor = colors[randomNo];
    // color.textContent = colors[randomNo];
    getHexColors();
});


function getRandomNo() {
    let num = Math.floor(Math.random() * Math.floor(4));
    return num;
}

function getHexColors() {
    let hexCode = '#';
    let randomNo = 0;
    for( let i = 0; i < 6; i++) {
        randomNo = Math.floor(Math.random() * Math.floor(16));
        hexCode += hex_colors[randomNo];
    }
    document.body.style.backgroundColor = hexCode;
    color.textContent = hexCode;
}