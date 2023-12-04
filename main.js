
const CanvasLite = require('./dependencies/CanvasLite/build/CanvasLite.js');
const img2svg = require('./dependencies/img2svg/build/img2svg.js');
const img = new CanvasLite.Image(), canvas = new CanvasLite();
img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);
    const imgData = canvas.getContext('2d').getImageData(0, 0, img.width, img.height);
    console.log(img2svg(imgData, { mode: "color", depth: 16, turdsize: 50 }));
};
img.src = process.argv[2];
