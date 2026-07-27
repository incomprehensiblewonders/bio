const asciiArt = document.getElementById('asciiArt');

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

function animate(ts) {
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
    asciiArt.style.opacity = brightness;
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
