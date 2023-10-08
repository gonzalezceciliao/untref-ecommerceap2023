let codigo = location.search;
let codigoProducto = new URLSearchParams(codigo);
let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);


let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');

let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);


codigoFinal.innerHTML = `Código del Producto: ${codigoSeleccionado}`;
nombre.innerHTML = `Nombre del producto : ${arrayDetalle.nombre}`;
imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>`


let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    localStorage.clear()
    location.href = 'index.html'
})