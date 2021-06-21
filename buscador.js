
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
let bandera =  0;

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
    li = box_search.getElementsByTagName("li");
    let no_encontrado = false;

    //Recorriendo elementosa filtrar mediante los li

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        li_no_encontrado.style.display = "none";
        a_no_encontrado = "none";
        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";
            li_no_encontrado.style.display = "none";
            a_no_encontrado = "none";
            if (inputSearch.value === "") {
                box_search.style.display = "none"
            }
        no_encontrado = false;
        } else {
            li[i].style.display = "none";
            no_encontrado = true;

        }
    }
            
}