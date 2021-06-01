const productos = [{
    nombre:"Cupcakes OREO",
    imagen: "/img/dulce/categoria1b.jpg",
    tipo:"dulce",
    precio: 999,
    codigo:001
},{
    nombre:"Torta mouse de OREO",
    imagen: "./img/dulce/categoria2.jpeg",
    tipo:"dulce",
    precio: 999,
    codigo:002
},
{
    nombre:"Cheesecake",
    imagen: "./img/dulce/categoria3.jpeg",
    tipo:"dulce",
    precio: 999,
    codigo:003
},{
    nombre:"Alfajores bomba",
    imagen: "./img/dulce/categoria4.jpeg",
    tipo:"dulce",
    precio: 999,
    codigo:004
},{
    nombre:"Carrot cake",
    imagen: "./img/dulce/categoria7.jpeg",
    tipo:"dulce",
    precio: 999,
    codigo:05
},{
    nombre:"Cupcakes glaseados",
    imagen: "./img/dulce/categoria6.jpeg",
    tipo:"dulce",
    precio: 999,
    codigo:06
},
{
    nombre:"Pizza",
    imagen: "./img/salado/categoria1.jpeg",
    tipo:"salado",
    precio: 999,
    codigo:07
},{
    nombre:"Empanadas",
    imagen: "./img/salado/categoria2.jpeg",
    tipo:"salado",
    precio: 999,
    codigo:08
},
{
    nombre:"Canapé",
    imagen: "./img/salado/categoria3.jpeg",
    tipo:"salado",
    precio: 999,
    codigo:09
},{
    nombre:"Miga",
    imagen: "./img/salado/categoria4.jpeg",
    tipo:"salado",
    precio: 999,
    codigo:10
},{
    nombre:"Bocaditos",
    imagen: "./img/salado/categoria5.jpeg",
    tipo:"salado",
    precio: 999,
    codigo:11
},{
    nombre:"Medialunas",
    imagen: "./img/salado/categoria6.jpeg",
    tipo:"salado",
    precio: 999,
    codigo:12
},{
    nombre:"Dessert Cups",
    imagen: "./img/extras/extra3.jpeg",
    tipo:"extra",
    codigo:13
},{
    nombre:"Dragon Fruit Panna",
    imagen: "./img/extras/extra6.jpeg",
    tipo:"extra",
    precio: 999,
    codigo:14
},
{
    nombre:"Meyer Lemon Parfaits",
    imagen: "./img/extras/extra5.jpeg",
    tipo:"extra",
    precio: 999,
    codigo:15
},{
    nombre:"Dessert Shooters",
    imagen: "./img/extras/extra4.jpeg",
    tipo:"extra",
    codigo:16
},{
    nombre:"Cheesecake parfaits",
    imagen: "./img/extras/extra2.jpeg",
    tipo:"extra",
    precio: 999,
    codigo:17
},{
    nombre:"cheesecake caramel",
    imagen: "./img/extras/extra1.jpeg",
    tipo:"extra",
    precio: 999,
    codigo:18
}];

function verDulce(){
    let tipo="dulce"
    mostrarFiltrado(tipo)
}
function verSalado(){
    let tipo="salado"
    mostrarFiltrado(tipo)
}
function verExtras(){
    let tipo="extra"
    mostrarFiltrado(tipo);
}
function verTodo(){
    cargarProductos();
}
cargarProductos();

function cargarProductos(){
    limpiarPantalla()
    productos.forEach(producto => {
    const div = document.createElement(`div`);
    div.innerHTML = `
    <div class="productos">
        <div class="productos-producto">
            <div>
                ${producto.nombre}
            </div>
            <div>
            <img class="img-productos" src="
                ${producto.imagen}">
            </div>
            <div>
                ${producto.precio}
            </div>
            <div>
                <input type="button" class="botonCarrito" onClick="botonCarrito()" value="Agregar al carrito">
            </div>
        </div>
    </div>`;
    document.querySelector("#main-app").appendChild(div);
})
}

function mostrarFiltrado(filtro){
        limpiarPantalla();

        productos.forEach(producto => {
        const div = document.createElement(`div`);
        if(producto.tipo==filtro){
        div.innerHTML = `
        <div class="productos">
            <div class="productos-producto">
                <div>
                    ${producto.nombre}
                </div>
                <div>
                    <img class="img-productos" src="
                    ${producto.imagen}">
                </div>
                <div>
                    ${producto.precio}
                </div>
                <div>
                    <input type="button" class="botonCarrito" onClick="botonCarrito()" value="Agregar al carrito">
                </div>
            </div>
        </div>`;
        document.querySelector("#main-app").appendChild(div);
        }
    })
}

function limpiarPantalla(){
    document.querySelector("#main-app").innerHTML="";

}
function botonCarrito(){
    swal("Agregado al carrito","","success")
}