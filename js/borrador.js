class Servicio{
  constructor(nombreServicio, valorServicio, nombreNivel, valorNivel){
    this.nombreServicio=nombreServicio;
    this.valorServicio=valorServicio;
    this.nombreNivel=nombreNivel;
    this.valorNivel=valorNivel;
  }
}

const eleccionDelCliente= new Servicio();

//variable globales
let vNivel;
let vServicio;
let cantidades;
let precioUnitario = 0;
let precioFinalNivel = 0;
let precioFinalServicio = 0;
let total=0;
let servicioSeleccionado;
let nivelSeleccionado;

//primer boton
function enviarDatos() {
  titulo();
  mostrarOcultos();

  cantidades = cantidadInvitados();
  vServicio = valorServicio();
  vNivel = valorNivel();

  mostrarTituloPresupuesto();

  precioFinalServicio = switchServicios();
  precioFinalNivel = switchNivel();

  mostrarTitulos();
  cssPrecioFinal();
  precioFinalCatering();
  agregarOpcionesCuotas();

  eleccionDelCliente.nombreServicio=servicioSeleccionado;
  eleccionDelCliente.valorServicio=precioFinalServicio;
  eleccionDelCliente.nombreNivel=nivelSeleccionado;
  eleccionDelCliente.valorNivel=precioFinalNivel;
  
  Datos();
}
function Datos(){
  document.querySelector("#datos-servicio").innerHTML = `Servicio requerido: ${eleccionDelCliente.nombreServicio}`;
  document.querySelector("#datos-nivel").innerHTML = `Nivel del servicio: ${eleccionDelCliente.nombreNivel}`;
}
function titulo() {
  document.querySelector("#titulo").innerHTML = "Datos seleccionados";
}
//modifico el color de los bloques
function mostrarOcultos(){
  document.querySelector("#bloque2").style.backgroundColor ="rgba(113, 230, 230, 0.479)";
  document.querySelector("#bloquePresupuesto").style.backgroundColor="rgba(113, 230, 230, 0.479)";
  document.querySelector("#bloque3").style.backgroundColor ="rgba(113, 230, 230, 0.479)";
  document.querySelector("body").style.overflow="auto";
}
//extraigo la cant de invitados
function cantidadInvitados() {
  let cantidades = Number(document.querySelector("#cantidadInvitados").value);
  document.querySelector(
    "#datos-cantidad"
  ).innerHTML = `Cantidad de invitados: ${cantidades} personas`;
  return cantidades;
}
//retorno la posicion del servicio seleccionado. servicioseleccionado guarda el nombre del servicio
function valorServicio() {
  let servicio = document.getElementsByName("servicio");
  for (i = 0; i <= servicio.length; i++) {
    if (servicio[i].checked) {
      servicioSeleccionado=servicio[i].value;
      return i;
    }
  }
}
//retorno la posicion del nivel seleccionado. nivelseleccionado guarda el nombre del nivel
function valorNivel() {
  let nivel = document.getElementsByName("nivel");
  for (i = 0; i <= nivel.length; i++) {
    if (nivel[i].checked) {
      nivelSeleccionado=nivel[i].value;
      return i;
    }
  }
}

function mostrarTitulos() {
  document.querySelector("#descripcion-tabla").innerHTML = "Descripcion";
  document.querySelector("#precio-invitado-tabla").innerHTML =
    "Por invitado";
  document.querySelector("#precio-final-tabla").innerHTML = "Precio final";
}

function mostrarTituloPresupuesto() {
  document.querySelector("#presupuesto-titulo").innerHTML = "Presupuesto";
}

function switchServicios() {
  let presupuestoDescipcion=document.querySelector("#presupuesto-descripcion1");
  let presupuestoPrecio=document.querySelector("#presupuesto-precio");
  let presupuestoPrecio2=document.querySelector("#presupuesto-precio2")
  switch (vServicio) {
    case 0:
      precioUnitario = 300;
      precioFinal = precioUnitario * cantidades;
      presupuestoDescipcion.innerHTML = `Valor del servicio "mesa dulce"`;
      presupuestoPrecio.innerHTML = precioUnitario;
      presupuestoPrecio2.innerHTML = precioFinal;
      break;
    case 1:
      precioUnitario = 300;
      precioFinal = precioUnitario * cantidades;
      presupuestoDescipcion.innerHTML = `Valor del servicio "salado"`;
      presupuestoPrecio.innerHTML.innerHTML = precioUnitario;
      presupuestoPrecio2.innerHTML = precioFinal;
      break;
    case 2:
      precioUnitario = 525;
      precioFinal = precioUnitario * cantidades;
      presupuestoDescipcion.innerHTML = `Valor del servicio completo`;
      presupuestoPrecio.innerHTML = precioUnitario;
      presupuestoPrecio2.innerHTML = precioFinal;

      break;
    default:
      break;
  }
  return precioFinal;
}

function switchNivel() {
  let invitadoNivel = 0;
  let final = 0;
  let presupuestoDescipcion=document.querySelector("#presupuesto-descripcion3");
  let presupuestoNivel=document.querySelector("#presupuesto-nivel");
  let presupuestoNivel2=document.querySelector("#presupuesto-nivel2");
  switch (vNivel) {
    case 0:
      invitadoNivel = 100;
      final = cantidades * invitadoNivel;
      presupuestoDescipcion.innerHTML = `El precio extra nivel basico `;
      presupuestoNivel.innerHTML = invitadoNivel;
      presupuestoNivel2.innerHTML = final;

      break;
    case 1:
      invitadoNivel = 125;
      final = cantidades * invitadoNivel;
      presupuestoDescipcion.innerHTML = `El precio extra nivel medio `;
      presupuestoNivel.innerHTML = invitadoNivel;
      presupuestoNivel2.innerHTML = cantidades;

      break;
    case 2:
      invitadoNivel = 200;
      final = cantidades * invitadoNivel;
      presupuestoDescipcion.innerHTML = `El precio extra nivel premium `;
      presupuestoNivel.innerHTML = invitadoNivel;
      presupuestoNivel2.innerHTML = final;

      break;
    default:
      break;
  }
  return final;
}
function cssPrecioFinal(){
  let finalFinal=document.querySelector("#final-final");
  finalFinal.style.fontSize = "2rem";
  finalFinal.style.textAlign = "center";
  finalFinal.style.margin = "1rem";
}
function precioFinalCatering() {
  total = precioFinalNivel + precioFinalServicio;
  document.querySelector("#final-final").innerHTML = `Total: $${total}`;
}

function agregarOpcionesCuotas(){
  document.querySelector("#titulo-cuotas").style.opacity = 1;
  document.querySelector("#cuotas").style.opacity = 1;

}
//BOTON CUOTAS
function calcularRecargo() {
  mostrarOcultosFinalizar();
  let interes = interesCuotas();
  let conInteres=sumarInteres(interes);
  detalleCuotas(conInteres, interes);
}
function interesCuotas() {
  let interes = Number(document.querySelector("#cantidadCuotas").value);
  return interes;
}
function sumarInteres(interes) {
  let pretotal=(interes/100+1);
  let conInteres= total*pretotal;
  return conInteres;
}
function detalleCuotas(conInteres, interes){
  let precioCuota= conInteres / interes;
  document.querySelector("#precioInteres").innerHTML = `El precio final con los intereses es de: $${conInteres.toFixed(2)}`;
  document.querySelector("#precioCuota").innerHTML = `El precio de cada cuota será de: $${precioCuota.toFixed(2)}`;
}
function mostrarOcultosFinalizar(){
  document.querySelector("#terminarReserva").style.opacity=1;
}
/*TERMINAR COMPRA*/
function terminarCompra(){
  cartelTerminada();
}

function cartelTerminada(){
  swal("Reserva realizada", "Nos contactaremos con usted!", "success")
}
/*envio de formulario*/
