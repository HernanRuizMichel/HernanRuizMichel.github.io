
                            //Buscador de contenido


//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_ocultar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");
navegacion =        document.getElementById("navegacion");
li_no_encontrado=   document.getElementById("no-encontrado-l");  
a_no_encontrado=    document.getElementById("no-encontrado-a"); 
main=               document.getElementById("main-contenedor");
tipo_de_archivo=    document.getElementById("tipo_de_archivo").textContent;
let bandera =  0;
let animes = [
    {nombre: 'Ijiranaide Nagatoro san', index_ruta:'./Directorio/ijiranaide-nagatorosan/ijiranaide-nagatorosan', directorio_ruta:'./ijiranaide-nagatorosan/ijiranaide-nagatorosan', portada_ruta:'../ijiranaide-nagatorosan/ijiranaide-nagatorosan', episodio_ruta:'../ijiranaide-nagatorosan/ijiranaide-nagatorosan'},

    {nombre: 'Jujutsu Kaisen', index_ruta:'./Directorio/jujutsu-kaisen/jujutsu', directorio_ruta:'./jujutsu-kaisen/jujutsu', portada_ruta:'../jujutsu-kaisen/jujutsu', episodio_ruta:'../jujutsu-kaisen/jujutsu'},

    {nombre: 'Kimetsu no Yaiba', index_ruta:'./Directorio/Demon-Slayer/demon', directorio_ruta:'./Demon-Slayer/demon', portada_ruta:'../Demon-Slayer/demon', episodio_ruta:'../Demon-Slayer/demon'}
];

function mostrar_ocultar_buscador(){
    if(bandera === 0){
        mostrar_buscador();
    } else if (bandera === 1) {
        ocultar_buscador();
    }
}

//Funcion para mostrar el buscador
function mostrar_buscador(){
    inputSearch.style.display = "block";
    cover_ctn_search.style.display = "block";
    navegacion.style.position = "fixed";
    bars_search.style.top = "15vh";
    main.style.position = "relative";
    main.style.top = "15vh"
    inputSearch.value = "";
    inputSearch.focus();
    if (inputSearch.value === "") {
        box_search.style.display = "none"
    }
    bandera = 1;
}

//Funcion para ocultar el buscador
function ocultar_buscador(){
    navegacion.style.position = "static";
    inputSearch.style.display = "none"
    cover_ctn_search.style.display = "none";
    main.style.top = "0vh"
    inputSearch.value = "";
    box_search.style.display = "none"
    bandera = 0;
}

//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    box_search.innerHTML ='';
    if (filter === '') {
        box_search.style.display = 'none';
    } else {
        for(let anime of animes){
            let nombre = anime.nombre.toUpperCase();
            if(nombre.indexOf(filter) !== -1){
                box_search.style.display = 'block';
                if (tipo_de_archivo == 'index') {
                    box_search.innerHTML += `
                <li><a href="${anime.index_ruta}"><i class="fas fa-search"></i>${anime.nombre}</a></li>
                `;
                } else if(tipo_de_archivo == 'directorio'){
                     box_search.innerHTML += `
                <li><a href="${anime.directorio_ruta}"><i class="fas fa-search"></i>${anime.nombre}</a></li>
                `;
                } else if(tipo_de_archivo == 'portada'){
                     box_search.innerHTML += `
                <li><a href="${anime.portada_ruta}"><i class="fas fa-search"></i>${anime.nombre}</a></li>
                `;
                } else if(tipo_de_archivo == 'episodio'){
                     box_search.innerHTML += `
                <li><a href="${anime.episodio_ruta}"><i class="fas fa-search"></i>${anime.nombre}</a></li>
                `;
                }
            } 
        }        
    
        if (box_search.innerHTML === '') {
            box_search.style.display = 'block';
            box_search.innerHTML += `
            <li id="no-encontrado-l"><a id="no-encontrado-a" href="mailto:performandbest@gmail.com?" target="_blank">Anime no encontrado verifica si lo escribiste bien.Es posible que no lo tengamos en nuestro catagolo mandanos un mensaje a: performandbest@gmail.com si quieres que lo añadamos</a></li>
            `;
        }
    }
}












// li = box_search.getElementsByTagName("li");
    // let no_encontrado = false;

    //Recorriendo elementosa filtrar mediante los li

    // for(i = 0; i < li.length; i++){
    //     a = li[i].getElementsByTagName("a")[0];
    //     textValue = a.textContent || a.innerText;
    //     // li_no_encontrado.style.display = "none";
    //     // a_no_encontrado = "none";
    //     if(textValue.toUpperCase().indexOf(filter) > -1){

    //         li[i].style.display = "";
    //         box_search.style.display = "block";
    //         // li_no_encontrado.style.display = "none";
    //         // a_no_encontrado = "none";
    //         if (inputSearch.value === "") {
    //             box_search.style.display = "none"
    //         }
    //     // no_encontrado = false;
    //     } else {
    //         li[i].style.display = "none";
    //         // no_encontrado = true;

    //     }
    // }