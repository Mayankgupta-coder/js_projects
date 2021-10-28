let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let c=0;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        c++;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
            c=0;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue=eval(screenValue);
            console.log(c);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    });
}

