import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import Alerta from './Alerta';

interface AlertaProps {
  msg?: string;
  error?: boolean;
}

const FormularioContacto = () => {

  const [ nombre, setNombre ] = useState("");
  const [ telefono, setTelefono ] = useState("");
  const [ correo, setCorreo ] = useState("");
  const [ mensaje, setMensaje ] = useState("");
  
  const [alerta, setAlerta] = useState<AlertaProps>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if([nombre,telefono,correo,mensaje].includes('')){
        setAlerta({
                    msg: "Todos los Campos son Obligatorios",
                    error: true
                  });
        return;
    };

    setAlerta({
                msg: "Enviando Informacion"
              });        

  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    switch(name) {
        case 'nombre':
        setNombre(value);
        break;
        case 'telefono':
        setTelefono(value);
        break;
        case 'correo':
        setCorreo(value);
        break;
        case 'mensaje':
        setMensaje(value);
        break;
    }
  };

  const { msg } = alerta;   


  return (
    <>
      <section>   
        <h2>Contactos</h2>
        <form 
          className="formulario"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend>Contactenos llenado todos los campos</legend>
            <div className="contenedor-campos">
              <div className="campos">
                <label>Nombre</label> 
                <input 
                  id="nombre" 
                  name="nombre" 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="input-text"
                  value={nombre} 
                  onChange={handleChange} 
                />
              </div>
              <div className="campos">
                <label>Telefono</label>
                <input 
                  id="telefono" 
                  name="telefono"
                  type="tel" 
                  placeholder="Tu telefono" 
                  className="input-text"
                  value={telefono} 
                  onChange={handleChange}
                />
              </div>
              <div className="campos">
                <label>Correo</label>
                <input 
                  id="correo" 
                  name="correo"
                  type="email" 
                  placeholder="Tu Email" 
                  className="input-text" 
                  value={correo} 
                  onChange={handleChange}
                />
              </div>
              <div className="campos">
                <label>Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  className="input-text"
                  value={mensaje} 
                  onChange={handleChange}
                />
              </div>
            </div>    

            <div className="alinear-derecha flex">
              <input className="boton w-100" type="submit" value="Enviar" />
            </div>
          </fieldset>

          {msg && <Alerta alerta={alerta} setAlerta={setAlerta} />}   
        </form>
      </section>
    </>
  )
}

export default FormularioContacto