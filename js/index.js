//inicializamos el estilo https://michalsnik.github.io/aos/

AOS.init();

let menu =document.getElementById('menu');
let menu_bar =document.getElementById('menu-bar');
menu_bar.addEventListener('click',function (){
    menu.classList.toggle('menu-toggle')
})

function incluir_alumno() {
    var dato_no_aceptado="La Ubicacion esta fuera de Quito o no Existe"

    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("apellido").value;
    var tipo_camion1 = document.getElementById("tipo").value;
    var detalle_vehiculo = document.getElementById("detalle_del_estado_del_vehiculo").value;
    var ubicacion_letras = document.getElementById("ubicacion").value;



   document.getElementById("resultado_nombre_completos").innerHTML = nombre + " " +apellido+ " ";
   document.getElementById("resultado_tipo_camion1").innerHTML = tipo_camion1+ " ";
   document.getElementById("resultado_detalles_automotor").innerHTML = detalle_vehiculo+" ";
  document.getElementById("ubicacion_quito").innerHTML = ubicacion_letras+" ";



    document.getElementById("name").value="";
    document.getElementById("apellido").value="";
    document.getElementById("tipo").value="";
    document.getElementById("detalle_del_estado_del_vehiculo").value="";
    document.getElementById("ubicacion").value="";

    if (ubicacion_letras=="Norte"){
        var coord = {lat:-0.1256741 ,lng: -78.5028764};
        var map = new google.maps.Map(document.getElementById('map'),{
            zoom: 10,
            center: coord
        });
        var marker = new google.maps.Marker({
            position: coord,
            map: map
        });
    }else{ if(ubicacion_letras=="Sur"){
        var coord = {lat:-0.2610323 ,lng: -78.5329123};
        var map = new google.maps.Map(document.getElementById('map'),{
            zoom: 10,
            center: coord
        });
        var marker = new google.maps.Marker({
            position: coord,
            map: map
        });
    }else {
        if(ubicacion_letras=="Centro"){
            var coord = {lat:-0.2187872,lng: -78.5166102};
            var map = new google.maps.Map(document.getElementById('map'),{
                zoom: 10,
                center: coord
            });
            var marker = new google.maps.Marker({
                position: coord,
                map: map
            });
        }else{
            document.getElementById("map").innerHTML = dato_no_aceptado+" ";
        }
    }



    }





}
function informacion_del_servicio(){
    let numero= 1;
    let conductor=" Leonel Campos";
    let tiempo_de_espera="20-40 minutos";

    document.getElementById("numero").innerHTML = numero+ " " ;
    document.getElementById("grua").innerHTML = conductor+ " ";
    document.getElementById("time").innerHTML = tiempo_de_espera+" ";

}








