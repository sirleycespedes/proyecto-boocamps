
const ImagenPrincipal = () => {
  return (
    <>  
        <div id="hero">
            <div className="container">
                <div className="row">
                        <div className="six columns">
                            <div className="contenido-hero">
                                    <h2>Aprende algo nuevo</h2>
                                    <p>Todos los cursos con descuentos</p>
                                    <form action="#" id="busqueda" method="post" className="formulario">
                                        <input className="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador"/>
                                        <input type="submit" id="submit-buscador" className="submit-buscador"/>
                                    </form>
                            </div>
                        </div>
                </div> 
            </div>
        </div>
    </>
  )
}

export default ImagenPrincipal
