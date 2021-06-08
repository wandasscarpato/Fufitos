const productos = [
  {
    nombre: "Cupcakes OREO",
    imagen: "./img/dulce/categoria1b.jpg",
    tipo: "dulce",
    precio: 999,
    stock: 9,
    codigo: 001,
  },
  {
    nombre: "Torta mouse de OREO",
    imagen: "./img/dulce/categoria2.jpeg",
    tipo: "dulce",
    precio: 999,
    stock: 6,
    codigo: 002,
  },
  {
    nombre: "Cheesecake",
    imagen: "./img/dulce/categoria3.jpeg",
    tipo: "dulce",
    precio: 999,
    stock: 4,
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
    precio: 999,
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
    precio: 999,
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
  }
];
/*Carga de productos*/
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
  mostrarTodo();
}
mostrarTodo();
let contenedor=document.getElementById("contenedor");
let contadorCarrito=document.getElementById("contadorCarrito");
let precioFinal=document.getElementById("precioFinal");
let modal=document.getElementById("modal");
let cantidadDeProductos=document.querySelector(".sinProductos");

function limpiarProductos() {
  document.querySelector("#main-app").innerHTML = "";
}

let carritoDeCompras = JSON.parse(localStorage.getItem('carritoDeCompras') || '[]');
// cargo los productos
function mostrarTodo() {
  limpiarProductos();
  productos.forEach((producto) => {
    //  CREO ESTRUCTURA DEL PRODUCTO
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
            <div id="${producto.codigo}cantidadDisponible">
            </div>
            <div><button id="${producto.codigo}" onclick="botonCarrito(${producto.codigo})">Agregar al carrito</button>
            </div>
        </div>
    </div>`;
    // AGREGO EL DIV DEL PRODUCTO A LA APP
    document.querySelector("#main-app").appendChild(div);
    // SI YA TENGO UN CARRITO CALCULO EL STOCK MENOS EL CARRITO
    let stockAjustadoAlCarro = Number(ajustarStock(producto.stock,producto.codigo));
    // CARGO EL SELECT CON LAS OPCIONES DE STOCK
    cantidadXStock(stockAjustadoAlCarro,producto.codigo);
    //AGREGO EVENTO AL BOTON
    let boton = document.getElementById(`${producto.codigo}`);
    boton.addEventListener("click", () => {
      //,e fijo si esta deshabilitado el select
      if(!(document.getElementById(`${producto.codigo}cantidadDisponibleb`).disabled)){
        agregarAlCarrito(`${producto.codigo}`);
      } else {
        swal("El producto seleccionado no se encuentra disponible", "", "error");
      }
    })
  });
}

function devolverStock(id) {
  // LIMPIO TODO
  limpiarProductos();
  // NUEVAMENTE CARGO CADA PRODUCTO
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
            <div id="${producto.codigo}cantidadDisponible">
            </div>
            <div><button id="${producto.codigo}" onclick="botonCarrito(${producto.codigo})">Agregar al carrito</button>
            </div>
        </div>
    </div>`;
    document.querySelector("#main-app").appendChild(div);
    cantidadXStock(producto.stock,producto.codigo);
    let boton = document.getElementById(`${producto.codigo}`);
    boton.addEventListener("click", () => {
      if(!(document.getElementById(`${producto.codigo}cantidadDisponibleb`).disabled)){
        agregarAlCarrito(`${producto.codigo}`);
      } else {
        swal("El producto seleccionado no se encuentra disponible", "", "error");
      }
    })
  });
}

function mostrarFiltrado(filtro) {
  limpiarProductos();
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
        <div id="${producto.codigo}cantidadDisponible">
        </div>
        <div>
        <button id="${producto.codigo}" onclick="botonCarrito(${producto.codigo})">Agregar al carrito</button>
        </div>
            </div>
        </div>`;
      document.querySelector("#main-app").appendChild(div);
    let stockAjustadoAlCarro = Number(ajustarStock(producto.stock,producto.codigo));
    cantidadXStock(stockAjustadoAlCarro,producto.codigo);
    let boton = document.getElementById(`${producto.codigo}`);
    boton.addEventListener("click", () => {
      if(!(document.getElementById(`${producto.codigo}cantidadDisponibleb`).disabled)){
        agregarAlCarrito(`${producto.codigo}`);
      } else {
        swal("El producto seleccionado no se encuentra disponible", "", "error");
      }
      
    })
    }
  });
}

function ajustarStock(stock, id){
  // INTENTO VER SI HAY ALGO EN EL CARRO, SI HAY BUSCO EL ID QUE LE PASO
  // Y AL STOCK TOTAL DEL PRODUCTO DEL ARRAY LE SACO LO QUE TENGO EN EL
  // CARRITO Y DEVUELVO EL STOCK PARA LA PAGINA
  try{
    //cargo en la constante el carrito
    const productosEnCarro =  JSON.parse(localStorage.carritoDeCompras);

    productosEnCarro.forEach(articulo => {

        if(articulo.codigo == id){

          productos.forEach(producto => {

            if(producto.codigo == id){

              producto.stock = producto.stock - articulo.stock;
              stock = producto.stock;

            }
        });
      }
    });
    return stock;
  }
  catch{
    return stock;
  }
}

function cantidadXStock(stock, id){
  // OBTENGO EL DIV PARA EL SELECT DEL PRODUCTO
  let dispo=document.getElementById(`${id}cantidadDisponible`);
  let opciones;
  //Me fijo el stock disponible
  if(stock != 0){
    // POR CADA NUMERO DEL STOCK AGREGO UN OPTION
    for(let i=0; i<stock; i++){
      opciones+=`<option  value="${i+1}"> ${i+1} </option>`
    }
    // CARGO EL SELECT CON LOS OPTION AL DIV
    dispo.innerHTML=`<select id="${id}cantidadDisponibleb" > ${opciones} </select>`
  }else{
    opciones+=`<option  value="${0}"> ${0} </option>`
    dispo.innerHTML=`<select id="${id}cantidadDisponibleb" disabled> ${opciones} </select>`
  }
}

function TomarSeleccionado(cod){
  var combo = document.getElementById(`${cod}cantidadDisponibleb`);
  combo.options[combo.selectedIndex].text;
  cartelCarrito(); 
}

function botonCarrito(cod) {
 TomarSeleccionado(cod);
 swal("Agregado al carrito", "", "success");
}
/*CARRITO---------------------------------*/
inicializarCarrito();

function inicializarCarrito() {
  // ABRO EL CARRITO Y REVISO LO QUE TENGA CARGADO
  let contador=0;
  const items = carritoDeCompras.filter(articulo => articulo);
  let tipo = "inicio";
  items.forEach(articulo => {

    agregarItemAlCarrito(articulo,tipo);
    // PONGO NUMERO AL LADO DEL CARRO
      contador+=Number(articulo.stock);
    cartelCarrito();
  });
  contadorCarrito.innerText = contador;
} 

function verCarrito(){
 modal.style.display="block";
 cartelCarrito()
}
function cartelCarrito(){
  if(carritoDeCompras.length==0){
    cantidadDeProductos.style.display="block";
    cantidadDeProductos.style.top="120px"
    document.querySelector(".precio").style.display="none";
  }else{
    cantidadDeProductos.style.top="200px"
    cantidadDeProductos.style.display="none";
    document.querySelector(".precio").style.display="block";
  } 
}
function closeModal(){
  modal.style.display="none";
}
function agregarAlCarrito(id) {
  // ME FIJO SI EL CARRO YA TIENE UN PRODUCTO CON EL ID QUE LE PASO
  let validar = carritoDeCompras.some(x=> x.codigo == id);

  if(validar){
    // SI YA TIENE BUSCO EL ARTICULO Y LE SUMO STOCK
    const items = carritoDeCompras.filter(articulo => articulo);
    items.forEach(articulo => {
      if(articulo.codigo == id){
        // ME FIJO LO QUE SELECCIONO
        let unidades=cantidadSeleccionada(articulo);
        // SE LO SUMO A LO QUE YA TENIA
        let stock = articulo.stock+Number(unidades);
        articulo.stock = Number(stock);
        carritoDeCompras = items;
        // AJUSTO EL STOCK DEL SELECT
        // VOY A TENER QUE BUSCAR EL STOCK ACTUAL Y SACARLE EL CARRO
        productos.forEach((producto) => {
          if(producto.codigo==id){
            producto.stock  = Number(producto.stock-unidades);
            cantidadXStock(producto.stock,id);
          }
        });
        actualizarItemCarrito(id);
        actualizarCarrito();
      }
    });
    //contadorCarrito.innerHTML=carritoDeCompras.filter(articulo => articulo).length++;
  }else{
    //Agregar producto al carrito
    let productoAgregar = productos.filter(elemento => elemento.codigo == id)[0];
    let unidades=cantidadSeleccionada(productoAgregar);
    const productoParaCarrito =
      {
        nombre: productoAgregar.nombre,
        imagen: productoAgregar.imagen,
        tipo: productoAgregar.tipo,
        precio: productoAgregar.precio,
        stock: productoAgregar.stock,
        codigo: productoAgregar.codigo,
      };
    let tipo = "nuevo";
    agregarItemAlCarrito(productoAgregar, tipo);
    let stockTotal = productoAgregar.stock;
    productoParaCarrito.stock = Number(unidades);
    carritoDeCompras.push(productoParaCarrito);
    actualizarCarrito();
    //productoParaCarrito.stock = Number(stockTotal);
    //eliminarProductoDelCarrito(productoAgregar);
  }
}

function actualizarItemCarrito(id) {

  let botoneliminar=document.getElementById(`${id}b`)
  botoneliminar.parentElement.remove();

  const items = carritoDeCompras.filter(articulo => articulo);
  items.forEach(articulo => {
    if(articulo.codigo == id){
      let div = document.createElement(`div`);
      div.classList.add("contenedor-carrito-productos");
      div.innerHTML += `
            <p>${articulo.nombre} </p>
            <p>Precio: $${articulo.precio}  </p>
            <p>Unidades:${articulo.stock}</p>
            <button id="${id}b" onclick="eliminarYRefrescar(${id})" class="eliminar-producto">Eliminar</button>
            `;
      contenedor.appendChild(div);
    }
  });
  // ACTUALIZO EL CARRO PARA REFLEJAR LOS CAMBIOS
  actualizarCarrito();
}

function eliminarProductoDelCarrito(id) {
  // OBTENGO LOS PRODUCTOS DEL CARRO
  const productosEnCarro =  JSON.parse(localStorage.carritoDeCompras);
  productosEnCarro.forEach(productoEnCarro => {
    // CUANDO EL ID  COINCIDE CON LO QUE TENGO EN EL CARRO
      if(productoEnCarro.codigo == id){
        productos.forEach(producto => {
          // SUMO AL STOCK LO DEL CARRO
          if(producto.codigo == id){
            producto.stock = productoEnCarro.stock + producto.stock;
          }
      });
    }
  });
  // ELIMINO DEL CARRO LO VISUAL
  let botoneliminar=document.getElementById(`${id}b`)
  botoneliminar.parentElement.remove();
  // GUARDO EL CARRO DE NUEVO CON TODO EXCEPTO EL ID QUE SAQUE RECIEN
  carritoDeCompras = carritoDeCompras.filter((elemento) => elemento.codigo != id);
  devolverStock(id);
  //});
}
function eliminarYRefrescar(id){
  eliminarProductoDelCarrito(id);
  actualizarCarrito();
}
function agregarItemAlCarrito(productoAgregar, tipo) {
  if (!productoAgregar) return;
  // CREO UN DIV PARA METER EL ITEM DEL CARRITO
  let div = document.createElement(`div`);

  if(tipo=="nuevo"){
    // ESTOY AGREGANDO UN PRODUCTO NUEVO ENTONCES TENGO QUE AJUSTAR EL STOCK
    // UNIDADES TIENE EL NUMERO DEL SELECT
    var unidades=cantidadSeleccionada(productoAgregar);
    // LE SACO DEL STOCK LO QUE ESTA EN EL CARRITO
    disminuirStock(productoAgregar, unidades);
  } else if (tipo=="inicio"){
    // SI RECARGO LA PAGINA NO TENGO QUE RESTAR STOCK PORQUE YA LO HICE CUANDO INICIO
    var unidades=productoAgregar.stock;
  }
  // AGREGO CLASES Y DATOS AL ITEM DEL CARRITO
  div.classList.add("contenedor-carrito-productos");
  div.innerHTML += `
        <p>${productoAgregar.nombre} </p>
        <p>Precio: $${productoAgregar.precio}  </p>
        <p>Unidades:${unidades}</p>
        <button id="${productoAgregar.codigo}b" onclick="eliminarYRefrescar(${productoAgregar.codigo})" class="eliminar-producto">Eliminar</button>
        `;
  contenedor.appendChild(div);
  // ACTUALIZO EL CARRO PARA REFLEJAR LOS CAMBIOS
  actualizarCarrito();
}
function disminuirStock(productoAgregar, unidades){
  // RECORRO EL ARRAY BUSCO EL PRODUCTO Y LE RESTO LAS UNIDADES QUE AGREGUE AL CARRITO RECIEN
  var nuevoStock;
  productos.forEach(producto => {
    if(producto.codigo == productoAgregar.codigo){
      producto.stock = producto.stock - unidades;
      nuevoStock = producto.stock;
    }
  });
  // UNA VEZ QUE RESTE EL STOCK CARGO DE NUEVO EL SELECT
  cantidadXStock(nuevoStock, productoAgregar.codigo)
}
function cantidadSeleccionada(productoAgregar){
  var combo = document.getElementById(`${productoAgregar.codigo}cantidadDisponibleb`);
  var unidades=combo.options[combo.selectedIndex].text;
  return unidades;
}
function actualizarCarrito(){
  let preciof=0;
let contador=0;
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
   // precioFinal.innerHTML = carritoDeCompras.reduce((acc, el)=> acc + el.precio, 0);
    carritoDeCompras.forEach(producto=>{
      preciof+=Number(producto.precio)*Number(producto.stock);
      contador+=Number(producto.stock);
    })
    precioFinal.innerHTML =preciof;
    contadorCarrito.innerText = contador;
    cartelCarrito();
}

