const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const CANVAS_WIDTH = canvas.width = 288;
const CANVAS_HEIGHT = canvas.height = 512;

const BIRD_HEIGHT = 54;
const BIRD_WIDTH = 54;

const playerImage = new Image();
playerImage.src = 'spr/flappy-bird-1024.png';

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, 0, 1024-BIRD_HEIGHT, BIRD_WIDTH, BIRD_HEIGHT, (CANVAS_WIDTH-BIRD_WIDTH)/2, (CANVAS_HEIGHT-BIRD_HEIGHT)/2, BIRD_WIDTH, BIRD_HEIGHT);
    requestAnimationFrame(animate);
};
animate();