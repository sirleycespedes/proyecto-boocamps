import { useCarrito } from '../context/CarritoContext';

import Cart from '../assets/img/cart.png';
const Carrito = () => {
  const { articulosCarrito, eliminarCurso, vaciarCarrito } = useCarrito();


  return (
        <div className="two columns u-pull-right">
            <ul>
                <li className="submenu">
                        <img src={Cart} alt="Carrito de compras"/>
                        <div id="carrito">
                                <table id="lista-carrito">
                                    <thead>
                                        <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {articulosCarrito.map(curso => (
                                        <tr key={curso.id}>
                                            <td>
                                            <img src={curso.imagen} width="100" />
                                            </td>
                                            <td>{curso.titulo}</td>
                                            <td>{curso.precio}</td>
                                            <td>{curso.cantidad}</td>
                                            <td>
                                            <a 
                                                href="#" 
                                                className="borrar-curso" 
                                                onClick={(e) => {
                                                e.preventDefault();
                                                eliminarCurso(curso.id);
                                                }}
                                            >
                                                X
                                            </a>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                    <button 
                                    className="button u-full-width"
                                    onClick={vaciarCarrito}
                                    >
                                    Vaciar Carrito
                                    </button>
                        </div>
                </li>
            </ul>
        </div>
  )
}

export default Carrito

