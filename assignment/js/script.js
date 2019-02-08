// document.documentElement.style.setProperty('--cssvar', '60deg');

document.addEventListener('mousemove', function (e) {
    let x = e.pageX / 120 - 5;
    let y = e.pageY / 120 - 5;

    console.log('x= ' + x);
    console.log('y= ' + y);

    document.documentElement.style.setProperty('--pos-mouse-x', x + 'deg');
    document.documentElement.style.setProperty('--pos-mouse-y', y + 'deg');
});