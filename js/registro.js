// Hemos omitido los acentos en los comentarios por compatibilidad


function validar(formulario) 
{
  var valido = true;
  
  if (formulario.nombres.value.trim().length == 0) 
  {
    $("#errornombres").text(" El Nombre Completo es obligatorio");
    valido=false;
  };

    //Expresion regular del correo
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(formulario.mail.value.trim().length == 0){
    $("#errorEmail").text(" El E-mail NO puede estar vacio");
    valido=false;
  }else if (!re.test(formulario.mail.value)) {
    $("#errorEmail").text(" El E-mail ingresado es inválido");
    valido=false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    $("#errorContrasena").text(" Contraseña obligatoria");
    valido=false;
  }else if (formulario.contrasena.value.trim().length < 7) {
    $("#errorContrasena").text(" La Contraseña debe tener 7 caracteres como mínimo");
    valido=false;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    $("#errorConfirmacion").text(" Confirmación no coincide con la contraseña");
    valido=false;
  }
  
  if (formulario.tipo.value == "-1") 
  {
    $("#errorTipo").text(" Debe seleccionar el Tipo de Usuario");
    valido=false;
  };
  
  if (!formulario.acepto.checked) {
    $("#errorAcepto").text(" Debe aceptar los términos y condiciones");
    valido=false;
  }
  
  if(valido==false){
    return false;
  }
};




