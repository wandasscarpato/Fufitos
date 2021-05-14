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
  document.getElementById("datos-servicio").innerHTML = `Servicio requerido: ${eleccionDelCliente.nombreServicio}`;
  document.getElementById("datos-nivel").innerHTML = `Nivel del servicio: ${eleccionDelCliente.nombreNivel}`;
}
function titulo() {
  document.getElementById("titulo").innerHTML = "Datos seleccionados";
}
//modifico el color de los bloques
function mostrarOcultos(){
  document.getElementById("bloque2").style.backgroundColor ="rgba(113, 230, 230, 0.479)";
  document.getElementById("bloquePresupuesto").style.backgroundColor="rgba(113, 230, 230, 0.479)";
  document.getElementById("bloque3").style.backgroundColor ="rgba(113, 230, 230, 0.479)";
}
//extraigo la cant de invitados
function cantidadInvitados() {
  let cantidades = Number(document.getElementById("cantidadInvitados").value);
  document.getElementById(
    "datos-cantidad"
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
  document.getElementById("descripcion-tabla").innerHTML = "Descripcion";
  document.getElementById("precio-invitado-tabla").innerHTML =
    "Por invitado";
  document.getElementById("precio-final-tabla").innerHTML = "Precio final";
}

function mostrarTituloPresupuesto() {
  document.getElementById("presupuesto-titulo").innerHTML = "Presupuesto";
}

function switchServicios() {
  switch (vServicio) {
    case 0:
      precioUnitario = 300;
      precioFinal = precioUnitario * cantidades;
      document.getElementById(
        "presupuesto-descripcion1"
      ).innerHTML = `Valor del servicio "mesa dulce"`;
      document.getElementById("presupuesto-precio").innerHTML = precioUnitario;
      document.getElementById("presupuesto-precio2").innerHTML = precioFinal;
      break;
    case 1:
      precioUnitario = 300;
      precioFinal = precioUnitario * cantidades;
      document.getElementById(
        "presupuesto-descripcion1"
      ).innerHTML = `Valor del servicio "salado"`;
      document.getElementById("presupuesto-precio").innerHTML = precioUnitario;
      document.getElementById("presupuesto-precio2").innerHTML = precioFinal;
      break;
    case 2:
      precioUnitario = 525;
      precioFinal = precioUnitario * cantidades;
      document.getElementById(
        "presupuesto-descripcion1"
      ).innerHTML = `Valor del servicio completo`;
      document.getElementById("presupuesto-precio").innerHTML = precioUnitario;
      document.getElementById("presupuesto-precio2").innerHTML = precioFinal;

      break;
    default:
      break;
  }
  return precioFinal;
}

function switchNivel() {
  let invitadoNivel = 0;
  let final = 0;
  switch (vNivel) {
    case 0:
      invitadoNivel = 100;
      final = cantidades * invitadoNivel;
      document.getElementById(
        "presupuesto-descripcion3"
      ).innerHTML = `El precio extra nivel basico `;
      document.getElementById("presupuesto-nivel").innerHTML = invitadoNivel;
      document.getElementById("presupuesto-nivel2").innerHTML = final;

      break;
    case 1:
      invitadoNivel = 125;
      final = cantidades * invitadoNivel;
      document.getElementById(
        "presupuesto-descripcion3"
      ).innerHTML = `El precio extra nivel medio `;
      document.getElementById("presupuesto-nivel").innerHTML = invitadoNivel;
      document.getElementById("presupuesto-nivel2").innerHTML = cantidades;

      break;
    case 2:
      invitadoNivel = 200;
      final = cantidades * invitadoNivel;
      document.getElementById(
        "presupuesto-descripcion3"
      ).innerHTML = `El precio extra nivel premium `;
      document.getElementById("presupuesto-nivel").innerHTML = invitadoNivel;
      document.getElementById("presupuesto-nivel2").innerHTML = final;

      break;
    default:
      break;
  }
  return final;
}
function cssPrecioFinal(){
  document.getElementById("final-final").style.fontSize = "2rem";
  document.getElementById("final-final").style.textAlign = "center";
  document.getElementById("final-final").style.margin = "1rem";
}
function precioFinalCatering() {
  total = precioFinalNivel + precioFinalServicio;
  document.getElementById("final-final").innerHTML = `Total: $${total}`;
}

function agregarOpcionesCuotas(){
  document.getElementById("titulo-cuotas").style.opacity = 1;
  document.getElementById("cuotas").style.opacity = 1;
}
//BOTON CUOTAS
function calcularRecargo() {
  let interes = interesCuotas();
  let conInteres=sumarInteres(interes);
  detalleCuotas(conInteres, interes);
}
function interesCuotas() {
  let interes = Number(document.getElementById("cantidadCuotas").value);
  return interes;
}
function sumarInteres(interes) {
  let pretotal=(interes/100+1);
  let conInteres= total*pretotal;
  return conInteres;
}
function detalleCuotas(conInteres, interes){
  let precioCuota= conInteres / interes;
  document.getElementById("precioInteres").innerHTML = `El precio final con los intereses es de: $${conInteres}`;
  document.getElementById("precioCuota").innerHTML = `El precio de cada cuota será de: $${precioCuota.toFixed(2)}`;
  
}


