import { Canvas } from './modules/canvas.js';
import * as utils from './modules/shapes.js';
var canvasPanel = document.querySelector('.canvas-panel');
var myCanvas = new Canvas(canvasPanel, 1000, 600); // parent, width, height
myCanvas.create();
var COUNT = 1000;
var blocks = utils.makeBlocks(COUNT);
var prevTime;
var init = function (timestamp) {
    prevTime = timestamp;
    requestAnimationFrame(step);
};
requestAnimationFrame(init);
var step = function (timestamp) {
    var elapsed = timestamp - prevTime;
    prevTime = timestamp;
    utils.moveBlocks(blocks, elapsed * 0.1);
    utils.paintBackground(myCanvas.ctx, myCanvas.width, myCanvas.height);
    var centerX = myCanvas.width / 2;
    var centerY = myCanvas.height / 2;
    for (var i = 0; i < COUNT; i++) {
        var block = blocks[i];
        var x = centerX + block.x / (block.z * 0.001);
        var y = centerY + block.y / (block.z * 0.001);
        var rgbArr = block.color;
        if (x < 0 || x >= myCanvas.width || y < 0 || y >= myCanvas.height) {
            continue;
        }
        var d = block.z / 1000;
        var a = 1 - d * d;
        utils.paintBlock(myCanvas, x, y, a, rgbArr, block.shapeName, block.random);
    }
    requestAnimationFrame(step);
};
//# sourceMappingURL=main.js.map