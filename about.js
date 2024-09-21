function start() {
    var interval1, interval2, interval3;
    var seconds1 = 0,
        seconds2 = 0,
        seconds3 = 0;
    interval1 = setInterval(function () {
        seconds1++;
        document.getElementById("num1").innerHTML = seconds1;
        if (seconds1 === 378) {
            clearInterval(interval1);
        }
    }, 58);

    interval2 = setInterval(function () {
        seconds2++;
        document.getElementById("num2").innerHTML = seconds2;
        if (seconds2 === 30) {
            clearInterval(interval2);
        }
    }, 800);

    interval3 = setInterval(function () {
        seconds3++;
        document.getElementById("num3").innerHTML = seconds3;
        if (seconds3 === 2263) {
            clearInterval(interval3);
        }
    }, 8);
}

window.addEventListener("load", start);
