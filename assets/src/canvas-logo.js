// Canvas Logo Renderer

const B = 10;
const CW = 7 * B;
const CH = 8 * B;
const SEP = B;
const PX = 20;
const PY = 10;
const SPACE_W = 30;

const LOGO_PATTERNS = {
    '.': [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0]],
    'a': [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0],
        [0,0,0,0,0,1,1],
        [0,1,1,1,1,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,1],
        [0,0,0,0,0,0,0]],
    'l': [
        [0,0,1,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,1,1,1,1,1,1],
        [0,0,0,0,0,0,0]],
    'o': [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0],
        [0,0,0,0,0,0,0]],
    'n': [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [1,1,0,1,1,0,0],
        [1,1,1,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,0,0]],
    'g': [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,1,1,1],
        [0,0,1,1,0,1,1],
        [0,0,0,0,0,1,1],
        [0,1,1,1,1,1,0]],
    ' ': [
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0]],
    'w': [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [1,1,0,0,0,1,1],
        [1,1,0,1,0,1,1],
        [1,1,1,1,1,1,1],
        [1,1,1,0,1,1,1],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,0,0]],
    'y': [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,1,1,1],
        [0,0,1,1,0,1,1],
        [0,0,0,0,0,1,1],
        [0,1,1,1,1,1,0]],
    '?': [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,1,1,1,0],
        [0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0]],
};

const LOGO_TEXT = ['.', 'a', ' ', 'l', 'o', 'n', 'g', ' ', 'w', 'a', 'y', '?', '?', '?'];
const TOTAL_W = LOGO_TEXT.reduce((sum, ch) =>
    sum + (ch === ' ' ? SPACE_W : CW) + SEP, 0) - SEP + PX * 2;
const TOTAL_H = CH + PY * 2;

const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio || 1;

canvas.width = TOTAL_W * dpr;
canvas.height = TOTAL_H * dpr;
canvas.style.width = TOTAL_W + 'px';
canvas.style.height = TOTAL_H + 'px';
ctx.scale(dpr, dpr);

const blocks = [];
let curX = PX;
LOGO_TEXT.forEach((ch) => {
    const grid = LOGO_PATTERNS[ch];
    const cellW = ch === ' ' ? SPACE_W : CW;
    if (grid) {
        const colCount = grid[0].length;
        const offsetX = Math.floor((cellW - colCount * B) / 2);
        grid.forEach((row, ri) => {
            row.forEach((v, col) => {
                if (!v) return;
                blocks.push({x: curX + offsetX + col * B, y: PY + ri * B});
            });
        });
    } // аывашцпзщщшм бляяяяяяяяяяяяя зайбал
    curX += cellW + SEP;
});

let lastFlickerEventTime = 0;
let nextFlickerTime = 4000 + Math.random() * 10000;
let flickerPattern = [];

function generateFlickerPattern() {
    const count = 2 + Math.floor(Math.random() * 4);
    flickerPattern = [];
    for (let i = 0; i < count; i++) {
        flickerPattern.push({onTime: 30 + Math.random() * 40, offTime: 50 + Math.random() * 80});
    }
}

function drawBg() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, TOTAL_W, TOTAL_H);
}

function drawBlock(x, y, brightness) {
    const val = Math.floor(brightness * 255);
    ctx.fillStyle = `rgb(${val},${val},${val})`;
    ctx.fillRect(x, y, B, B);
}

function animate(ts) {
    drawBg();

    let brightness = 0.85 + Math.sin(ts * 0.0001) * 0.03 + Math.random() * 0.02 - 0.01;

    if (ts - lastFlickerEventTime > nextFlickerTime) {
        lastFlickerEventTime = ts;
        nextFlickerTime = 4000 + Math.random() * 11000;
        generateFlickerPattern();
    }

    const timeSinceFlickerStart = ts - lastFlickerEventTime;

    if (timeSinceFlickerStart < 800) {
        const dimProgress = timeSinceFlickerStart / 800;
        const dimCurve = Math.pow(dimProgress, 1.5);
        brightness = 0.85 - dimCurve * 0.5 + (Math.random() - 0.5) * 0.05;
    }
    else if (timeSinceFlickerStart < 1500) {
        let totalFlickerTime = 0;
        flickerPattern.forEach(f => totalFlickerTime += f.onTime + f.offTime);
        const timeInFlickers = (timeSinceFlickerStart - 800) % totalFlickerTime;
        let currentTime = 0;
        brightness = 0.15;
        for (let f of flickerPattern) {
            if (timeInFlickers < currentTime + f.onTime) {
                brightness = 0.4 + Math.random() * 0.2;
                break;
            }
            currentTime += f.onTime + f.offTime;
        }
    }
    else if (timeSinceFlickerStart < 1600) {
        const recoverProgress = (timeSinceFlickerStart - 1500) / 100;
        brightness = 0.35 + Math.pow(recoverProgress, 3) * 0.5;
    }
    else {
        brightness = 0.85 + Math.sin(ts * 0.0001) * 0.03;
    }

    brightness = Math.max(Math.min(brightness, 1.0), 0.05);
    blocks.forEach(b => drawBlock(b.x, b.y, brightness));
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);