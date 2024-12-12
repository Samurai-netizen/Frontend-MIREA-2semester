function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    changeBackgroundColor('lightblue');
    console.log("changeBackgroundColor('red')");
    console.log("toggleVisibility('video')");
    console.log("showMessage('amogus sus')");
    console.log("getUtmSource()");
    console.log("replaceH1Text()");
    console.log("logCurrentTime()");
    console.log("resetBackgroundColor()");
    console.log("-----------------------------");
});

function getUtmSource() {
    let url = new URL(window.location.href);
    return url.searchParams.get('utm_source');
}

function replaceH1Text() {
    let h1 = document.querySelector('h1');
    let utmSource = getUtmSource();
    if (utmSource) {
        h1.innerHTML = utmSource;
    }
}

function logCurrentTime() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}