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

function mostrarResultados() {
    var duration = (endTime - startTime) / 1000; //Math.round()
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    modificarDiv("#resultado-velocidad", speedMbps, "Tu velocidad de conexion es: ", " Mbps")
    modificarDiv("#resultado-tiempo", duration, "Ha tardado: ", " segundos")
}

function modificarDiv(selector, parametro, mensajePre, mensajePost){
    info = document.querySelector(selector)
    info.textContent = mensajePre + parametro + mensajePost;
}