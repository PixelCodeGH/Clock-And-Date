function setTheme() {
    let now = new Date();
    let hour = now.getHours();
    let themeClass;

    if (hour >= 6 && hour < 12) {
        themeClass = 'theme-day';
    } else if (hour >= 12 && hour < 18) {
        themeClass = 'theme-afternoon';
    } else {
        themeClass = 'theme-night';
    }

    document.body.className = themeClass;
}

function updateDigit(digitElement, newValue) {
    const currentSpan = digitElement.querySelector('.current');
    const nextSpan = digitElement.querySelector('.next');
    
    if (currentSpan.textContent === newValue) return;
    
    nextSpan.textContent = newValue;
    nextSpan.classList.add('slide-in');
    currentSpan.classList.add('slide-out');
    
    setTimeout(() => {
        currentSpan.textContent = newValue;
        currentSpan.classList.remove('slide-out');
        nextSpan.classList.remove('slide-in');
        nextSpan.textContent = '';
    }, 300);
}

function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    
    const hourDigits = document.querySelectorAll('.hours .digit');
    const minuteDigits = document.querySelectorAll('.minutes .digit');
    const secondDigits = document.querySelectorAll('.seconds .digit');
    
    updateDigit(hourDigits[0], hours[0]);
    updateDigit(hourDigits[1], hours[1]);
    updateDigit(minuteDigits[0], minutes[0]);
    updateDigit(minuteDigits[1], minutes[1]);
    updateDigit(secondDigits[0], seconds[0]);
    updateDigit(secondDigits[1], seconds[1]);
}

function updateDate() {
    let dateElement = document.getElementById('date');
    let now = new Date();
    let dateString = now.toLocaleDateString();
    
    if (dateElement.innerText !== dateString) {
        dateElement.innerText = dateString;
    }
}

setInterval(setTheme, 3600000);
setInterval(updateClock, 1000);
setInterval(updateDate, 60000);

setTheme();
updateClock();
updateDate(); 