const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const CANVAS_WIDTH = canvas.width = 288;
const CANVAS_HEIGHT = canvas.height = 512;

const BIRD_HEIGHT = 56;
const BIRD_WIDTH = 56;

const PIPE_HEIGHT = 320;
const PIPE_WIDTH = 56;

const GROUND_HEIGHT = 112;
const GROUND_WIDTH = 336;

const sprites = new Image();
sprites.src = 'spr/flappy-bird-1024.png';

// Gate -> space between the top and bottom pipes
var gateHeight = 100;
var gateY = 60;

var stageX = 0;
var birdY = 0;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

    // Background
    ctx.drawImage(sprites, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Pipes
    ctx.drawImage(sprites, PIPE_WIDTH*3, sprites.height-2-PIPE_HEIGHT-BIRD_HEIGHT, PIPE_WIDTH, PIPE_HEIGHT, CANVAS_WIDTH - stageX%(CANVAS_WIDTH+PIPE_WIDTH), CANVAS_HEIGHT-PIPE_HEIGHT-GROUND_HEIGHT+gateHeight/2+120+gateY, PIPE_WIDTH, PIPE_HEIGHT);
    ctx.drawImage(sprites, PIPE_WIDTH*2, sprites.height-2-PIPE_HEIGHT-BIRD_HEIGHT, PIPE_WIDTH, PIPE_HEIGHT, CANVAS_WIDTH - stageX%(CANVAS_WIDTH+PIPE_WIDTH), gateY-120-gateHeight/2, PIPE_WIDTH, PIPE_HEIGHT);

    // Ground
    ctx.drawImage(sprites, (CANVAS_WIDTH+4)*2 + stageX%48, 0, CANVAS_WIDTH, GROUND_HEIGHT, 0, CANVAS_HEIGHT-GROUND_HEIGHT, CANVAS_WIDTH, GROUND_HEIGHT);

    // Bird
    ctx.drawImage(sprites, BIRD_WIDTH*0, sprites.height-2-BIRD_HEIGHT, BIRD_WIDTH, BIRD_HEIGHT, (CANVAS_WIDTH-BIRD_WIDTH)/2, (CANVAS_HEIGHT-BIRD_HEIGHT)/2 + birdY, BIRD_WIDTH, BIRD_HEIGHT);
    
    stageX += 2;
    birdY = parseInt(Math.sin(stageX/16)*6);

    requestAnimationFrame(animate);
};
animate();