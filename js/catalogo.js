const productos = [
  {
    nombre: "Cupcakes OREO",
    imagen: "./img/dulce/categoria1b.jpg",
    tipo: "dulce",
    precio: 999,
    stock: 10,
    codigo: 001,
  },
  {
    nombre: "Torta mouse de OREO",
    imagen: "./img/dulce/categoria2.jpeg",
    tipo: "dulce",
    precio: 999,
    stock: 10,
    codigo: 002,
  },
  {
    nombre: "Cheesecake",
    imagen: "./img/dulce/categoria3.jpeg",
    tipo: "dulce",
    precio: 999,
    stock: 10,
    codigo: 003,
  },
  {
    nombre: "Alfajores bomba",
    imagen: "./img/dulce/categoria4.jpeg",
    tipo: "dulce",
    precio: 999,
    stock: 10,
    codigo: 004,
  },
  {
    nombre: "Carrot cake",
    imagen: "./img/dulce/categoria7.jpeg",
    tipo: "dulce",
    precio: 999,
    stock: 10,
    codigo: 05,
  },
  {
    nombre: "Cupcakes glaseados",
    imagen: "./img/dulce/categoria6.jpeg",
    tipo: "dulce",
    precio: 999,
    stock: 10,
    codigo: 06,
  },
  {
    nombre: "Pizza",
    imagen: "./img/salado/categoria1.jpeg",
    tipo: "salado",
    precio: 999,
    stock: 10,
    codigo: 07,
  },
  {
    nombre: "Empanadas",
    imagen: "./img/salado/categoria2.jpeg",
    tipo: "salado",
    precio: 999,
    stock: 10,
    codigo: 08,
  },
  {
    nombre: "Canapé",
    imagen: "./img/salado/categoria3.jpeg",
    tipo: "salado",
    precio: 999,
    stock: 10,
    codigo: 09,
  },
  {
    nombre: "Miga",
    imagen: "./img/salado/categoria4.jpeg",
    tipo: "salado",
    precio: 999,
    stock: 10,
    codigo: 10,
  },
  {
    nombre: "Bocaditos",
    imagen: "./img/salado/categoria5.jpeg",
    tipo: "salado",
    precio: 999,
    stock: 10,
    codigo: 11,
  },
  {
    nombre: "Medialunas",
    imagen: "./img/salado/categoria6.jpeg",
    tipo: "salado",
    precio: 999,
    stock: 10,
    codigo: 12,
  },
  {
    nombre: "Dessert Cups",
    imagen: "./img/extras/extra3.jpeg",
    tipo: "extra",
    stock: 10,
    codigo: 13,
  },
  {
    nombre: "Dragon Fruit Panna",
    imagen: "./img/extras/extra6.jpeg",
    tipo: "extra",
    precio: 999,
    stock: 10,
    codigo: 14,
  },
  {
    nombre: "Meyer Lemon Parfaits",
    imagen: "./img/extras/extra5.jpeg",
    tipo: "extra",
    precio: 999,
    stock: 10,
    codigo: 15,
  },
  {
    nombre: "Dessert Shooters",
    imagen: "./img/extras/extra4.jpeg",
    tipo: "extra",
    stock: 10,
    codigo: 16,
  },
  {
    nombre: "Cheesecake parfaits",
    imagen: "./img/extras/extra2.jpeg",
    tipo: "extra",
    precio: 999,
    stock: 10,
    codigo: 17,
  },
  {
    nombre: "cheesecake caramel",
    imagen: "./img/extras/extra1.jpeg",
    tipo: "extra",
    precio: 999,
    stock: 10,
    codigo: 18,
  },
];
let contenedor=document.getElementById("contenedor");
let contadorCarrito=document.getElementById("contadorCarrito");
let precioFinal=document.getElementById("precioFinal");
let modal=document.getElementById("modal");

let carritoDeCompras = JSON.parse(localStorage.getItem('carritoDeCompras') || '[]');
// cargo los productos
function cargarProductos() {
  limpiarPantalla();
  productos.forEach((producto) => {
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
            <button id="${producto.codigo}" onclick="botonCarrito()">Agregar al carrito</button>
            </div>
        </div>
    </div>`;
    document.querySelector("#main-app").appendChild(div);
    let boton = document.getElementById(`${producto.codigo}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(`${producto.codigo}`);
    })
  });
}

function mostrarFiltrado(filtro) {
  limpiarPantalla();

  productos.forEach((producto) => {
    const div = document.createElement(`div`);
    if (producto.tipo == filtro) {
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
                    <button id="${producto.codigo}" onclick="botonCarrito()">Agregar al carrito</button>
                </div>
            </div>
        </div>`;
      document.querySelector("#main-app").appendChild(div);

      let boton = document.getElementById(`${producto.codigo}`);
      boton.addEventListener("click", () => {
        agregarAlCarrito(`${producto.codigo}`);
      });
      
    }
  });
}
/*CARRITO---------------------------------*/

function inicializarCarrito() {
  const items = carritoDeCompras.filter(articulo => articulo);
  items.forEach(articulo => {
    agregarItemAlCarrito(articulo);
    contadorCarrito.innerHTML= items.length;
  });
} 
inicializarCarrito();

function verCarrito(){
  modal.style.display="block";
 document.querySelector("body").style.overflow="hidden";
 sinProductos();

}
function sinProductos(){
  if(contadorCarrito.innerHTML==0){
    document.querySelector(".sinProductos").style.display="block";
  }else{
    document.querySelector(".sinProductos").style.display="none";
  }
}
function closeModal(){
  modal.style.display="none";
  document.querySelector("body").style.overflow="auto";
}
function agregarAlCarrito(id) {
    let validar = carritoDeCompras.some(x=> x.codigo == id);
    if(validar){
        contadorCarrito.innerHTML=carritoDeCompras.filter(articulo => articulo).length++;
    }else{
 //Agregar producto al carrito
  let productoAgregar = productos.filter(elemento => elemento.codigo == id)[0];
  carritoDeCompras.push(productoAgregar);
  actualizarCarrito();
  agregarItemAlCarrito(productoAgregar);
  let botoneliminar=document.getElementById(`${productoAgregar.codigo}b`)
  botoneliminar.addEventListener(`click`,()=>{
        botoneliminar.parentElement.remove()
        carritoDeCompras= carritoDeCompras.filter((elemento)=>elemento.codigo != productoAgregar.codigo);
        actualizarCarrito();
  
  })}
}

function agregarItemAlCarrito(productoAgregar) {
  if (!productoAgregar) return;

  let div = document.createElement(`div`);
  div.classList.add("contenedor-carrito-productos");
  div.innerHTML += `
        <p>Producto: ${productoAgregar.nombre} </p>
        <p>Precio: ${productoAgregar.precio}  </p>
        <button id="${productoAgregar.codigo}b" class="eliminar-producto">eliminar</button>
        `;
  contenedor.appendChild(div);
}

function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.length;
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras))
    //precioFinal.innerHTML = carritoDeCompras.reduce((acc, el)=> acc + el.precio, 0)
}
function limpiarPantalla() {
  document.querySelector("#main-app").innerHTML = "";
}
function botonCarrito() {
 swal("Agregado al carrito", "", "success");
}

const contenedorCarrito = document.getElementById("contenedorCarrito");

function verDulce() {
  let tipo = "dulce";
  mostrarFiltrado(tipo);
}
function verSalado() {
  let tipo = "salado";
  mostrarFiltrado(tipo);
}
function verExtras() {
  let tipo = "extra";
  mostrarFiltrado(tipo);
}
function verTodo() {
  cargarProductos();
}
cargarProductos();
