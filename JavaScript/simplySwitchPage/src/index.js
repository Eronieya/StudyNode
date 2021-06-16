const context = document.querySelector('#myCanvas').getContext('2d');

const math = {
    // 获取线性关系两点直线上任一点 x 对应的 点
    getLinearY(startPoint, endPoint, x) {
        let a = (startPoint.y - endPoint.y) / (startPoint.x - endPoint.x)
        let b = startPoint.y - a * startPoint.x

        return { x: x, y: a * x + b };
    }
}

const pen = {
    // 描一个点
    drawPoint(context, point, width = 0.5) {
        context.strokeStyle = '#000000';
        context.beginPath();
        context.arc(point.x, point.y, width, 0, 360);
        context.closePath();
        context.fill();
    },
    // 画一条线, 
    drawLine(context, startPoint, endPoint, delay = 1000) {
        let a = Math.pow(startPoint.x - endPoint.x, 2);
        let b = Math.pow(startPoint.y - endPoint.y, 2);
        let c = Math.pow(a + b, 1 / 2);
        let cos = Math.abs(startPoint.x - endPoint.x) / c;

        let pointNum = Math.floor(c);

        let xStep = 1 * cos;
        let tmpX = startPoint.x;
        let stepNum = 0;

        let stepDelay = delay / pointNum;

        let draw = () => {
            this.drawPoint(context, math.getLinearY(startPoint, endPoint, tmpX))
            tmpX += xStep
            stepNum++
            if (stepNum < pointNum) {
                requestAnimationFrame(draw)
            }
        }

        requestAnimationFrame(draw)
    }
}

// context.strokeStyle = "#000000";
// context.rect(0, 0, 500, 500)
// context.stroke();
// context.fillStyle = "#FF5D43";
// context.beginPath();
// context.moveTo(500, 500);
// context.quadraticCurveTo(250, 250, 500, 0);
// context.fill();
// context.globalCompositeOperation = 'source-over';

var beginPoint = { x: 750, y: 0 };
var controlPoint = { x: 750, y: 812 };
var endPoint = { x: 750, y: 1624 };
var xSpeed = 15
var ySpeed = 5

function init() {
    window.requestAnimationFrame(bezierCurveMove);
}

function bezierCurveMove() {
    // ctx.globalCompositeOperation = 'destination-over';
    context.clearRect(0, 0, 750, 1624); // clear canvas

    controlPoint.x -= xSpeed > 35 ? xSpeed-- : xSpeed++;
    beginPoint.y -= ySpeed > 10 ? ySpeed-- : ySpeed++;
    endPoint.y += ySpeed > 10 ? ySpeed-- : ySpeed++;

    context.beginPath();
    context.fillStyle = '#FF5D43';
    context.moveTo(beginPoint.x, beginPoint.y);
    context.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
    context.fill();

    console.log(controlPoint);
    if (controlPoint.x < -2000) {
        document.querySelector('#myCanvas').style.opacity = 0
    } else {
        window.requestAnimationFrame(bezierCurveMove);
    }
}

init();



// context.strokeStyle = '#f0f';
// context.beginPath();
// context.moveTo(75, 50);
// context.lineTo(0, 200);
// context.moveTo(75, 50);
// context.lineTo(300, 200);
// context.stroke();
// pen.drawPoint(context, { x: 0, y: 200 }, 1);
// pen.drawPoint(context, { x: 75, y: 50 }, 1);
// pen.drawPoint(context, { x: 300, y: 200 }, 1);
// pen.drawLine(context, { x: 0, y: 0 }, { x: 300, y: 200 }, 2000)