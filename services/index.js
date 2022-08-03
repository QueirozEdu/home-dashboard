document.onreadystatechange = clock();

function clock() {
    const time = new Date();
    document.getElementById("time").innerText = time.toLocaleTimeString();
    var hour = time.getHours();
}
setInterval(clock, 1000);