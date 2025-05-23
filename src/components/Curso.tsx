import { useCarrito } from '../context/CarritoContext';
import type { ICurso } from '../interface/interface.curso';
import estrellas from '../assets/img/estrellas.png'



interface CursoProps {
  curso: ICurso;
}


const Curso: React.FC<CursoProps> = ({ curso }) => {
 const { agregarCurso } = useCarrito();
 const { id, titulo, profesor, precio, precioDescuento, imagen } = curso; 

   const handleAgregarCurso = (e: React.MouseEvent) => {
    e.preventDefault();
    agregarCurso(curso);
  };

  return (
    <div className="four columns">
        <div className="card">
            <img src={imagen} className="imagen-curso u-full-width" />
            <div className="info-card">
                <h4>{titulo}</h4>
                <p>{profesor}</p>
                <img src={estrellas} />
                <p className="precio">{precio}  <span className="u-pull-right ">{precioDescuento}</span></p>
                <a 
                    href="#" 
                    className="u-full-width button-primary button input agregar-carrito" 
                    data-id={id}
                    onClick={handleAgregarCurso}
                >
                    Agregar Al Carrito
                </a>
            </div>
        </div> 
    </div>    
  )
}

export default Curso