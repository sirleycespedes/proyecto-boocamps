import { useState } from 'react'
import type { FormEvent } from 'react'

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}

const formTitleStyles: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333'
};

const formStyles: React.CSSProperties = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '30px',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
};

const Formulario = () => {

    const [error, setError] = useState<string | null>(null);// Estado para almacenar los datos del formulario
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
        const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''

    });


    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        // Validar nombre
        if (formData.nombre.trim().length < 3) {
            newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Ingresa un email válido';
        }

        // Validar teléfono
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.telefono)) {
            newErrors.telefono = 'Ingresa un número de 10 dígitos';
        }

        // Validar mensaje
        if (formData.mensaje.trim().length < 10) {
            newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //Función para manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };
    //Función para manejar el envío del formulario
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        console.log("Formulario")

        const isValid = validateForm();
        console.log("Validación del formulario:", isValid);
        console.log("Datos del formulario:", formData);

        if (isValid) {
            try {
                // Simulamos una llamada a API
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Mostramos mensaje de éxito
                setSubmitSuccess(true);
                
                // Limpiamos el formulario
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    mensaje: ''
                });

                // Ocultamos el mensaje de éxito después de 3 segundos
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 3000);

            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
                setError(errorMessage);
                
                setTimeout(() => {
                    setError(null);
                }, 3000);
            } finally {
                setIsSubmitting(false);
            }
        } else {
              console.log("Errores de validación:", errors);
              setIsSubmitting(false);
        }
    };

  return (
        <div style={formStyles}>
          <h2 style={formTitleStyles}>Contáctanos</h2>
          {submitSuccess && (
                <div style={successMessageStyles}>
                    ¡Mensaje enviado con éxito!
                </div>
            )}
            {error && (
                <div style={errorMessageStyles}>
                    {error}
                </div>
            )}
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="row">
              <div className="six columns">
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input 
                      className={`u-full-width ${errors.nombre ? 'error-input' : ''}`}
                      type="text" 
                      placeholder="Tu nombre" 
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                  />
                  {errors.nombre && <span className="error-message">{errors.nombre}</span>}
              </div>
              <div className="six columns">
                <label htmlFor="email">Correo Electrónico</label>
                <input 
                  className="u-full-width" 
                  type="email" 
                  placeholder="tu@email.com" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="six columns">
                <label htmlFor="telefono">Teléfono</label>
                <input 
                  className="u-full-width" 
                  type="tel" 
                  placeholder="Tu teléfono" 
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
              className="u-full-width" 
              placeholder="Tu mensaje" 
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>

            <input 
                    type="submit" 
                    value={isSubmitting ? "Enviando..." : "Enviar Mensaje"} 
                    className="button-primary u-full-width"
                    disabled={isSubmitting}
            />
          </form>
        </div>
  )
}

const successMessageStyles: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    textAlign: 'center'
};

const errorMessageStyles: React.CSSProperties = {
    backgroundColor: '#ff4444',
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    textAlign: 'center'
};

export default Formulario