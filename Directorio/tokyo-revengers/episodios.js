//Declaracion e Iniciacion de Variables
const boton1 = document.getElementById('server1');
const boton2 = document.getElementById('server2');

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

const botonAnterior = document.getElementById('anterior');
const botonAnteriorO = document.getElementById('anteriorO');

const botonSiguiente = document.getElementById('siguiente');
const botonSiguienteO = document.getElementById('siguienteO');

const link1 = video1.getAttribute('src');
const link2 = video2.getAttribute('src');

const id = document.getElementById('id').textContent;
//Declaracion e Iniciacion de Variables

//inicializacion de metodos botones
boton1.onclick = mostrarServer1;
boton2.onclick = mostrarServer2;

botonAnterior.onclick = anteriorEpisodio;
botonSiguiente.onclick = siguienteEpisodio;
//inicializacion de metodos botones

//Ocultar boton anterior
ocultarAnterior();

function ocultarAnterior(){
    if (id == 1) {
        botonAnteriorO.style.display = "none";
    }
}
//Ocultar boton anterior

//Ocultar boton siguiente
ocultarSiguiente();

function ocultarSiguiente(){
    if (id == 15) {
        botonSiguienteO.style.display = "none";
    }
}
//Ocultar boton siguiente



function mostrarServer1(){
    video2.src = link1;
    video1.src = link1;
    video2.style.display = 'none';
    video1.style.display = 'block';

}

function mostrarServer2(){
    video1.src = link2;
    video2.src= link2;
    video2.style.display = 'block';
    video1.style.display = 'none';
}

function siguienteEpisodio(){
    let epi = parseInt(id, 10) + 1;
    window.location="https://www.animefree.ga/Directorio/tokyo-revengers/Episodio" + epi;
}

function anteriorEpisodio(){
    let epi = parseInt(id, 10) - 1;
    window.location="https://www.animefree.ga/Directorio/tokyo-revengers/Episodio" + epi;
}
