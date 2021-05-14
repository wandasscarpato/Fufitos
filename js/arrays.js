const dulce=[ "Mouse de chocolate", "Brownie de limon", "Brownie clasico", "Lemon pie","Chocotorta"];
const salado=["Picadita", "Ravioles", "Asado", "Tartas veggie", "Sushi"];
const extra=["Pizza","Empanadas","Canapés"];

function verDulce(){
    let array=ordenarAlfabeticamente(dulce)
    swal("Incluido en Mesa dulce", functionPlatos(array) )
}

function verSalado(){
    let array=ordenarAlfabeticamente(salado)
    swal("Incluido en los platos salados", functionPlatos(array))
}

function verCompleto(){
    let plato;
    plato=functionFusion(dulce,salado)
    let array=ordenarAlfabeticamente(plato)
    swal("Incluido en el servicio completo", functionPlatos(array) + functionPlatos(extra))
}

function functionPlatos(array){
    let  mesa=" ";
    for (let i=0; i<array.length; i+=1){
        mesa+=array[i]+"\n \n";
    }
    return mesa;
}
function functionFusion(array1,array2){
    const array3 = array1.concat(array2);
    return array3;
}
function ordenarAlfabeticamente(array){
    array.sort()
    return array;
}

