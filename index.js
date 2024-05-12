const lightBulb = document.getElementById('lightBulb');
const lightSwitch = document.getElementById('lightSwitch');

lightSwitch.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'black') {
       //whitemode
        document.body.style.backgroundColor = 'white';
        lightBulb.src = './img/bulb-on.png';
        lightSwitch.textContent = 'Light On';
    } else {
        // darkmode
        document.body.style.backgroundColor = 'black';
        lightBulb.src = './img/bulb-off.png';
        lightSwitch.textContent = 'Light Off';
    }
});