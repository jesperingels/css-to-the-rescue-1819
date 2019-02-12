// document.documentElement.style.setProperty('--cssvar', '60deg');

document.addEventListener('mousemove', function (e) {
    let x = e.pageX / 120 - 5;
    let y = e.pageY / 120 - 5;

    console.log('x= ' + x);
    console.log('y= ' + y);

    document.documentElement.style.setProperty('--pos-mouse-x', x + 'deg');
    document.documentElement.style.setProperty('--pos-mouse-y', y + 'deg');
});

var input = document.querySelector('input');


input.addEventListener('input', dimming);

function dimming() {
    let inputValueHigh, inputValueLow, inputValueMedium;
    inputValueMedium = (input.value / 2) + 25;
    inputValueLow = input.value / 2 + 10;
    inputValueHigh = (input.value / 2) + 50;

    document.documentElement.style.setProperty('--bg', inputValueMedium + '%');
    document.documentElement.style.setProperty('--bg-light', inputValueHigh + '%');
    document.documentElement.style.setProperty('--bg-dark', inputValueLow + '%');
}

dimming();