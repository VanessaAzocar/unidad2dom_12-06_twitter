const boton = document.getElementById("btn");
/*if (comment.lenght === 0){
  return btn.disabled = "true"*/

boton.addEventListener("click", () =>{
//acá guardo el comentario ingresado por el usuario
  let comments = document.getElementById("comment").value;

//limpiar el textarea
document.getElementById("comment").value = " ";

//contenedor donde dejare mis comentarios en html
const cont = document.getElementById("cont");

//crear un div contenedor // createElement : crea un nuevo elemento 
//sera el PADRE de todos los JS
const newComments = document.createElement("div");

//nodos de texto del textarea
let textNewComment = document.createTextNode(comments);
const contenedorElemento = document.createElement("p");
contenedorElemento.appendChild(textNewComment);
newComments.appendChild(contenedorElemento);

cont.appendChild(newComments);
})
