document.onreadystatechange = clock();
// document.onreadystatechange = toggleSwitch();

function clock() {
    const time = new Date();
    document.getElementById("time").innerText = time.toLocaleTimeString();
    document.getElementById("date").innerText = time.toLocaleDateString();
}
setInterval(clock, 1000);

setInterval(random, 3000);
function random() {
    const randomNumber = Math.random();

    const randomTemp = (randomNumber * (40 - (-10)) + (-10)).toFixed(1)
    document.getElementById("temperature_value").innerText = (randomTemp).concat('°C');
    document.getElementById("humidity_value").innerText = ((randomNumber * (100 - 25) + 25).toFixed(1)).concat('%');

    var element = document.getElementById("cold_icon");
    if (randomTemp <= 0) {
        element.classList.add("active");
    }
    else {
        element.classList.remove("active");
    }



    const randomDownload = (randomNumber * (500 - (100)) + (100)).toFixed(0);
    const randomUpload = (randomNumber * (250 - (50)) + (50)).toFixed(0);
    document.getElementById("download_speed").innerText = (randomDownload).concat(" MBps");
    document.getElementById("upload_speed").innerText = (randomUpload).concat(" MBps")

}

let lightSwitch1 = document.getElementById("onSwitch1");
let lightSwitch2 = document.getElementById("onSwitch2");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

function toggleSwitch1() {

    if (lightSwitch1.getAttribute('src') === "/assets/icons/on switch.png") {
        console.log('test')
        lightSwitch1.setAttribute('src', "/assets/icons/off switch.png");
    }
    else {
        lightSwitch1.setAttribute('src', "/assets/icons/on switch.png");
    }
}
function toggleSwitch2() {

    if (lightSwitch2.getAttribute('src') === "/assets/icons/on switch.png") {
        console.log('test')
        lightSwitch2.setAttribute('src', "/assets/icons/off switch.png");
    }
    else {
        lightSwitch2.setAttribute('src', "/assets/icons/on switch.png");
    }
}

button2.addEventListener("click", toggleSwitch1);
button3.addEventListener("click", toggleSwitch2);
