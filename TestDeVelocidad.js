var startTime, endTime;
var downloadSize = 5616998;
var download = new Image();

function EjecutarPrueba(){
    var imageAddr = "http://www.tranquilmusic.ca/images/cats/Cat2.JPG" + "?n=" + Math.random();
    download.src = imageAddr;
    console.log("He comenzado")
    startTime = (new Date()).getTime();
    download.onload = function () {
        endTime = (new Date()).getTime();
        mostrarResultados();
    }
}

function ajustarTiempo(time){
    let segundos = time/1
    return (segundos + " sec")
}

function mostrarResultados() {
    var duration = (endTime - startTime) / 1000; //Math.round()
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    alert("Tu velocidad de conexion es: \n" +
        speedBps + " bps\n" +
        speedKbps + " kbps\n" +
        speedMbps + " Mbps\n"
    );
    console.log(ajustarTiempo(duration))
}