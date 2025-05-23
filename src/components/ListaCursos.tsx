import { useState, useEffect  }  from 'react'

import Spinner from '../components/Spinner';
import Curso from '../components/Curso';
import type { ICurso } from '../interface/interface.curso';

import cursos from '../assets/data/cursos.json'

const ListaCursos = () => {
  
  const [ listaCursos, setlistaCursos] = useState<ICurso[]>([]);
  const [ spinner, setSpinner ] = useState(true);  

  useEffect(() => {

    const cargarCursos = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setlistaCursos(cursos.cursos as ICurso[]);
      } finally {
        setSpinner(false); 
      }
    };

    cargarCursos();
  }, []);



  return (

    <>
              {

            spinner 
                    ?
                        <div id="lista-cursos" className="container">
                            <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
                            <Spinner/>
                        </div>
                    :
                    
                    listaCursos.length > 0
                                        ?

                                        <div id="lista-cursos" className="container">
                                            <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
                                              {Array.from({ length: Math.ceil(listaCursos.length / 3) }).map((_, index) => (
                                                    <div className="row" key={index}>
                                                        {listaCursos.slice(index * 3, (index + 1) * 3).map(curso => (
                                                            <Curso 
                                                                key={curso.id}
                                                                curso={curso}
                                                            />
                                                        ))}
                                                    </div>
                                                ))}
                                        </div>     
                                        :

                                        <p>Cargando el listado de productos...</p>  
        }
    
    </>


    // <div id="lista-cursos" className="container">
    //     <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
    //     <div className="row">
    //         <div className="four columns">
    //             <div className="card">
    //                 <img src={curso1}  className="imagen-curso u-full-width"/>
    //                 <div className="info-card">
    //                     <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
    //                     <p>Juan Perez</p>
    //                     <img src={estrellas}/>
    //                     <p className="precio">$200.000 <span className="u-pull-right ">$150.000</span></p>
    //                     <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
    //                 </div>
    //             </div> 
    //         </div>
    //         <div className="four columns">
    //                 <div className="card">
    //                     <img src={curso2} className="imagen-curso u-full-width"/>
    //                     <div className="info-card">
    //                         <h4>Curso de Comida Vegetariana</h4>
    //                         <p>Luis Garcia</p>
    //                         <img src={estrellas}/>
    //                         <p className="precio">$150.000  <span className="u-pull-right ">$95.000</span></p>
    //                         <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
    //                     </div>
    //                 </div>
    //         </div>
    //         <div className="four columns">
    //                 <div className="card">
    //                     <img src={curso3}  className="imagen-curso u-full-width"/>
    //                     <div className="info-card">
    //                         <h4>Guitarra para Principiantes</h4>
    //                         <p>Julian Becerra</p>
    //                         <img src={estrellas}/>
    //                         <p className="precio">$180.000  <span className="u-pull-right ">$150.000</span></p>
    //                         <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
    //                     </div>
    //                 </div> 
    //         </div>

    //     </div> 
    //     <div className="row">
    //         <div className="four columns">
    //             <div className="card">
    //                 <img src={curso4} className="imagen-curso u-full-width"/>
    //                 <div className="info-card">
    //                     <h4>Huerto en tu casa</h4>
    //                     <p>Juan Garcia</p>
    //                     <img src={estrellas}/>
    //                     <p className="precio">$250.000  <span className="u-pull-right ">$120.000</span></p>
    //                     <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar Al Carrito</a>
    //                 </div>
    //             </div> 
    //         </div>
    //         <div className="four columns">
    //                 <div className="card">
    //                     <img src={curso5}  className="imagen-curso u-full-width"/>
    //                     <div className="info-card">
    //                         <h4>Decoración con productos de tu hogar</h4>
    //                         <p>Juan Perez</p>
    //                         <img src={estrellas}/>
    //                         <p className="precio">$100.000  <span className="u-pull-right ">$80.000</span></p>
    //                         <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar Al Carrito</a>
    //                     </div>
    //                 </div> 
    //         </div>
    //         <div className="four columns">
    //                 <div className="card">
    //                     <img src={curso2} className="imagen-curso u-full-width"/>
    //                     <div className="info-card">
    //                         <h4>Diseño Web para Principiantes</h4>
    //                         <p>Juliana vasquez</p>
    //                         <img src={estrellas}/>
    //                         <p className="precio">$300.000  <span className="u-pull-right ">$150.000</span></p>
    //                         <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="6">Agregar Al Carrito</a>
    //                     </div>
    //                 </div> 
    //         </div>
    //     </div> 
    //     <div className="row">
    //         <div className="four columns">
    //             <div className="card">
    //                 <img src={curso2}  className="imagen-curso u-full-width"/>
    //                 <div className="info-card">
    //                     <h4>Comida Mexicana para principiantes</h4>
    //                     <p>jimena alvarez</p>
    //                     <img src={estrellas}/>
    //                     <p className="precio">$200.000  <span className="u-pull-right ">$15.000</span></p>
    //                     <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar Al Carrito</a>
    //                 </div>
    //             </div> 
    //         </div>
    //         <div className="four columns">
    //                 <div className="card">
    //                     <img src={curso3}  className="imagen-curso u-full-width"/>
    //                     <div className="info-card">
    //                         <h4>Estudio Musical en tu casa</h4>
    //                         <p>Juan Pedro</p>
    //                         <img src={estrellas}/>
    //                         <p className="precio">$350.000  <span className="u-pull-right ">$200.000</span></p>
    //                         <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="8">Agregar Al Carrito</a>
    //                     </div>
    //                 </div> 
    //         </div>
    //         <div className="four columns">
    //                 <div className="card">
    //                     <img src={curso4} className="imagen-curso u-full-width"/>
    //                     <div className="info-card">
    //                         <h4>Cosecha tus propias frutas y verduras</h4>
    //                         <p>Juan Perez</p>
    //                         <img src={estrellas}/>
    //                         <p className="precio">$150.000  <span className="u-pull-right ">$80.0000</span></p>
    //                         <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="9">Agregar Al Carrito</a>
    //                     </div>
    //                 </div> 
    //         </div>
    //     </div> 
    //     <div className="row">
    //             <div className="four columns">
    //                 <div className="card">
    //                     <img src={curso5} className="imagen-curso u-full-width"/>
    //                     <div className="info-card">
    //                         <h4>Prepara galletas caseras</h4>
    //                         <p>Maria barrios</p>
    //                         <img src={estrellas}/>
    //                         <p className="precio">$200.000  <span className="u-pull-right ">$150.000</span></p>
    //                         <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="10">Agregar Al Carrito</a>
    //                     </div>
    //                 </div> 
    //             </div>
    //             <div className="four columns">
    //                     <div className="card">
    //                         <img src={curso3}  className="imagen-curso u-full-width"/>
    //                         <div className="info-card">
    //                             <h4>JavaScript Moderno con ES6</h4>
    //                             <p>Jean Pineda</p>
    //                             <img src={estrellas}/>
    //                             <p className="precio">$180.000  <span className="u-pull-right ">$150.000</span></p>
    //                             <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="11">Agregar Al Carrito</a>
    //                         </div>
    //                     </div> 
    //             </div>
    //             <div className="four columns">
    //                     <div className="card">
    //                         <img src={curso4} className="imagen-curso u-full-width"/>
    //                         <div className="info-card">
    //                             <h4>100 Recetas de Comida Natural</h4>
    //                             <p>Laura Garcia</p>
    //                             <img src={estrellas}/>
    //                             <p className="precio">$80.000 <span className="u-pull-right ">$50.000</span></p>
    //                             <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
    //                         </div>
    //                     </div> 
    //             </div>
    //     </div> 
    // </div>  
  )
}

export default ListaCursos