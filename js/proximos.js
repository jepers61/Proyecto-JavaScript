// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var futuros = [];
var hoy;
var eventos;

$(document).ready(function () {
  
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
 
     //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos=resultado.eventos;
 
//Clasifica los eventos segun la fecha actual del JSON
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha > hoy){
        futuros.push(eventos[i]);
      }
    }
//Ordena los eventos segun la fecha (los mas cercanos primero)
    futuros = futuros.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });

//Crea un string que contenga el HTML que describe el detalle del evento
    var futuro = [];
//Extrae solo dos eventos
    for(var j = 0; j < futuros.length; j++){
      futuro[j]= `
            <a class="enlace" href="detalle.html?id=${futuros[j].id}">${futuros[j].nombre}</a>
            <p>${futuros[j].fecha}</p>
            <p>Descripción: ${futuros[j].descripcion}</p>
            `
    }
//Modifica el DOM agregando el html generado
    for(var i=0;i<futuro.length;i++){
      var a = $("<div id='pr0' class='colp col-lg-7'></div>");
      a.append(futuro[i]);
      $("#proximos").append(a);  


    }

  })

});
