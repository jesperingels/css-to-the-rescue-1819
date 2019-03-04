// document.documentElement.style.setProperty('--cssvar', '60deg');

document.addEventListener('mousemove', function (e) {
    let x = e.pageX / 120 - 5;
    let y = e.pageY / 120 - 5;

    // console.log('x= ' + x);
    // console.log('y= ' + y);

    document.documentElement.style.setProperty('--pos-mouse-x', x + 'deg');
    document.documentElement.style.setProperty('--pos-mouse-y', y + 'deg');
});

const input = document.querySelector('input[class="slider"]');


input.addEventListener('input', dimming);

function dimming() {
    let inputValueHigh, inputValueLow, inputValueMedium, inputValue;

    let time = new Date();
    let hours = time.getHours();

    console.log(hours);

    const checkDayLight = (h) => {
        if (h >= 9 && h <= 15) {
            return ((h-9)/6)
        } if (h >= 16 && h <= 22) {
            return 1-((h-16)/6)
        }else {
            return 0
        }
    };



    inputValue = input.value * checkDayLight(hours);

    console.log(inputValue);

    inputValueMedium = (inputValue / 2) + 25;
    inputValueLow = inputValue / 2 + 10;
    inputValueHigh = (inputValue / 2) + 50;

    document.documentElement.style.setProperty('--bg', inputValueMedium + '%');
    document.documentElement.style.setProperty('--bg-light', inputValueHigh + '%');
    document.documentElement.style.setProperty('--bg-dark', inputValueLow + '%');

    document.querySelector('[data-window]').style.setProperty('background','hsl(192, 100%,'+ checkDayLight(hours)*72 +'%)');

    document.documentElement.style.setProperty('--window-height', input.value + '%');
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

// document.getElementById('start-mobile').addEventListener('click', setInterval(function unCheck() { return document.getElementById('start-mobile').checked = false;} , 3000));

// Doe dit in CSS, checkbox hack
// document.getElementById('button-bad').addEventListener('click', () => {
//     document.getElementById('popup1').style.display = 'block';
// });
//
// document.getElementById('pop1-no').addEventListener('click', () => {
//     document.getElementById('popup1').style.display = 'none';
// });
//
// document.getElementById('pop1-yes').addEventListener('click', () => {
//     document.getElementById('popup1').style.display = 'none';
//     document.getElementById('popup2').style.display = 'block';
// });
//
// document.getElementById('pop2-no').addEventListener('click', () => {
//     document.getElementById('popup2').style.display = 'none';
// });
//
// document.getElementById('pop2-yes').addEventListener('click', () => {
//     document.getElementById('popup2').style.display = 'none';
//     document.getElementById('popup3').style.display = 'block';
// });
//
// document.getElementById('pop3-ok').addEventListener('click', () => {
//     document.getElementById('popup3').style.display = 'none';
// });


dimming();






