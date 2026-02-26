const formulario = document
getElementById("forulario");

formulario.addEventListener(
 submit, function(event){
  event.preventDefaut();

  const nombre = document.getElementById
  ("name").value.trim();
  const edad = document.getElementById
  ("age").value.trim();
  const email = document.getElementById
  ("email").value.trim();
  const telefono = document.getElementById
  ("phone").value.trim();
   
  // Elementos de error
  const errorNombre = document.getElementById("errorName");
  const errorAge = document.getElementById("errorAge");
  const errorEmail = document.getElementById("errorEmail");
  const errorPhone = document.getElementById("errorPhone");

  const mensaje = document.getElementById
  ("mensaje");

  // Tecnica del centinela 
  if(nombre === ""){
    errorName.textContent = "El nombre es obligatorio."
    valido = false;

  }else{
    errorName.textContent = "";

  }

  if(valido)
{
  mensaje.textContent = "Registro correcto";
}else{
  mensaje.textContent = "";
}
}
);