const carrito = document.querySelector('#carrito');
const contendorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCurso = document.querySelector('#lista-cursos');
let articulosCarritos = [];


cargarEvenListeners();
function cargarEvenListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCurso.addEventListener('click', agregarCurso);
    // Elimina cursos del carrito del
    carrito.addEventListener('click', eliminarCurso );
    
    // Muestra los curso del localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarritos = JSON.parse( localStorage.getItem('carrito') ) || [];
        carritoHTML();
    });

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarritos = [];
        // Limpiar el HTML 
        limpiarHTML();
    } );
};

// Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    };
};

// Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute('data-id');
        // Elimina del arreglo de articulosCarritos por el data-id
        articulosCarritos = articulosCarritos.filter( curso => curso.id !== cursoId );
       carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML al que le dimos click y extraer informacion del curso
function leerDatosCurso(curso) {
    // Crear un objeto con el contenido del curso actualizado
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), 
        cantidad: 1
    };

    // Revisa si un elemento ya existe en el carrito

    const existe = articulosCarritos.some( curso => curso.id === infoCurso.id );
    if(existe){
        //Actualizamos la cantidad
        const curso = articulosCarritos.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            }else{
                return curso; // retorna los objetos que no son los duplicados
            };
        } );
        articulosCarritos = [...curso];
    }else{
        //Agregar elemento al arreglo del carrito de compra 
        //utilizando Spread Operator
        articulosCarritos = [...articulosCarritos, infoCurso];
        
    };
    console.log(articulosCarritos);
    carritoHTML();
};

// Muestra el carrito de compra en el HTML

function carritoHTML() {

    // Limpiar el HTML 
    limpiarHTML();
    //Recorre el carrito y genera un HTML
    articulosCarritos.forEach( curso =>{

        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100" >  
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        // Agrega el HTML del carrito en el tbody
        contendorCarrito.appendChild(row);
    });

    // Agregar el carrito de compra al storagen del
    sincronizarStorage();

};


function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarritos) );
};


// Elimina los cursos del tbody

function limpiarHTML(){
    // Forma lenta
    // contendorCarrito.innerHTML = '';
    // Forma rapida
    while(contendorCarrito.firstChild){
        contendorCarrito.removeChild(contendorCarrito.firstChild);
    };

};
