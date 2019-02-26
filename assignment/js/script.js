// document.documentElement.style.setProperty('--cssvar', '60deg');

document.addEventListener('mousemove', function (e) {
    let x = e.pageX / 120 - 5;
    let y = e.pageY / 120 - 5;

    console.log('x= ' + x);
    console.log('y= ' + y);

    document.documentElement.style.setProperty('--pos-mouse-x', x + 'deg');
    document.documentElement.style.setProperty('--pos-mouse-y', y + 'deg');
});

const input = document.querySelector('input[class="slider"]');


input.addEventListener('input', dimming);

function dimming() {
    let inputValueHigh, inputValueLow, inputValueMedium, inputValue;
    inputValue = input.value;
    inputValueMedium = (input.value / 2) + 25;
    inputValueLow = input.value / 2 + 10;
    inputValueHigh = (input.value / 2) + 50;

    document.documentElement.style.setProperty('--bg', inputValueMedium + '%');
    document.documentElement.style.setProperty('--bg-light', inputValueHigh + '%');
    document.documentElement.style.setProperty('--bg-dark', inputValueLow + '%');
    document.documentElement.style.setProperty('--window-height', inputValue + '%');
}

const inputBat = document.getElementById('battery');
inputBat.addEventListener('input', batteryLvl);

function batteryLvl() {

    if(inputBat.value <= 75) {
        document.querySelector('.beamer__beam-right').setAttribute('id','flicker-r');
        document.querySelector('[datatype="right"]').setAttribute('id','flicker-r')

    } else {
        document.querySelector('.beamer__beam-right').removeAttribute('id');
        document.querySelector('[datatype="right"]').removeAttribute('id');

    }

    if(inputBat.value <= 50) {
        document.querySelector('.beamer__beam-left').setAttribute('id','flicker-l');
        document.querySelector('[datatype="left"]').setAttribute('id','flicker-l')
    } else {
        document.querySelector('.beamer__beam-left').removeAttribute('id');
        document.querySelector('[datatype="left"]').removeAttribute('id');

    }


    if(inputBat.value <= 30) {
        document.querySelector('.beamer__beam-right').style.display = 'none';
        document.querySelector('[datatype="right"]').style.display = 'none';

    } else {
        document.querySelector('.beamer__beam-right').style.display = 'block';
        document.querySelector('[datatype="right"]').style.display = 'block';
    }

    if (inputBat.value <= 15 ){
        document.querySelector('.beamer__beam-left').style.display = 'none';
        document.querySelector('[datatype="left"]').style.display = 'none';
    } else {
        document.querySelector('.beamer__beam-left').style.display = 'block';
        document.querySelector('[datatype="left"]').style.display = 'block';

    }

}

dimming();