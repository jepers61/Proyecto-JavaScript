// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var pasados = [];
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
      if (eventos[i].fecha < hoy){
        pasados.push(eventos[i]);
      }else{
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
    for(var j = 0; j < 2; j++){
        futuro[j]= `
            <a class="enlace" href="proximos.html">${futuros[j].nombre}</a>
            <p>${futuros[j].fecha}</p>
            <p>Descripción: ${futuros[j].descripcion}</p>
            `
    }
    //console.log(futuro[1]);
//Modifica el DOM agregando el html generado
    
    for(var i=0;i<2; i++){
      var a = $("<div id='pr0' class='col col-lg-5'></div>");
      a.append(futuro[i]);
      $("#proximos").append(a);  
      //document.getElementById(pr0).innerHTML = futuro[i];
    }
//Ordena los eventos segun la fecha (los mas cercanos primero)
    pasados = pasados.sort(function(x,y){
      if(x.fecha < y.fecha){
        return 1;
      }
      return -1
    });
//Crea un string que contenga el HTML que describe el detalle del evento
    var pasado = [];
//Extrae solo dos eventos
    for(var j = 0; j < 2; j++){
      pasado[j]= `
              <a class="enlace" href="pasados.html">${pasados[j].nombre}</a>
              <p>${pasados[j].fecha}</p>
              <p>Descripción: ${pasados[j].descripcion}</p>
              `
    }
    //Modifica el DOM agregando el html generado
    for(var i=0;i<2;i++){
      var a = $("<div id='pa0' class='col col-lg-5'></div>");
      a.append(pasado[i]);
      $("#pasados").append(a);  
      //document.getElementById("pa"+i).innerHTML = pasado[i];
      //console.log(i);
    }
    /*document.getElementById("pa2").innerHTML = pasado[1];*/
  })
});
