const dulce=[{
    nombre:"Cupcakes OREO",
    imagen: "categoria1.jpeg",
},{
    nombre:"Torta mouse de OREO",
    imagen: "categoria2.jpeg",
},
{
    nombre:"Cheesecake",
    imagen: "categoria3.jpeg",
},{
    nombre:"Alfajores bomba",
    imagen: "categoria4.jpeg",
},{
    nombre:"Carrot cake",
    imagen: "categoria7.jpeg",
},{
    nombre:"Cupcakes glaseados",
    imagen: "categoria6.jpeg",
}];

 const salado=[{
    nombre:"Pizza",
    imagen: "categoria1.jpeg",
},{
    nombre:"Empanadas",
    imagen: "categoria2.jpeg",
},
{
    nombre:"Canapé",
    imagen: "categoria3.jpeg",
},{
    nombre:"Miga",
    imagen: "categoria4.jpeg",
},{
    nombre:"Bocaditos",
    imagen: "categoria5.jpeg",
},{
    nombre:"Medialunas",
    imagen: "categoria6.jpeg",
}]; 
const extras=[{
    nombre:"Dessert Cups",
    imagen: "extra3.jpeg",
},{
    nombre:"Dragon Fruit Panna",
    imagen: "extra6.jpeg",
},
{
    nombre:"Meyer Lemon Parfaits",
    imagen: "extra5.jpeg",
},{
    nombre:"Dessert Shooters",
    imagen: "extra4.jpeg",
},{
    nombre:"Cheesecake parfaits",
    imagen: "extra2.jpeg",
},{
    nombre:"cheesecake caramel",
    imagen: "extra1.jpeg",
}]; 
document.getElementById("dulce1").style.display="inline-grid";
    let d="Dulce"
    mostrarElementos(d, dulce);
function verDulce(){
    document.getElementById("dulce1").style.display="inline-grid";
    let d="Dulce"
    mostrarElementos(d, dulce);

}
function verSalado(){
    document.getElementById("salado").style.display="inline-grid";
    let s= "Salado"
   mostrarElementos(s, salado);
}
function verExtras(){
    document.getElementById("extras").style.display="inline-grid";
    let e= "Extras"
   mostrarElementos(e, extras);
}
function mostrarElementos(elemento, array){
document.querySelector("#titulo").innerHTML=elemento;
for(let i = 0 ; i <= array.length ; i ++){
    document.querySelector(".img"+[i+1]).innerHTML= `<img src=./img/${elemento}/${array[i].imagen}>` + array[i].nombre;
}
}
function ocultarExtras(){
    document.getElementById("extra").style.display="none"
}
function ocultarSalado(){
    document.getElementById("salado").style.display="none"
}function ocultarDulce(){
    document.getElementById("dulce1").style.display="none"
}