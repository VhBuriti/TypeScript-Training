/*
    Is used to create graphics
    and animations directly in our browser using
    the <canvas> element
*/

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);