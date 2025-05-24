


import { useState } from "react"


interface FormData {
  nombre: string
  telefono: string
  correo: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  telefono?: string
  correo?: string
  mensaje?: string
}

export default function Formulario() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido"
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s/g, ""))) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos"
    }

    if (!formData.correo.trim()) {
      newErrors.correo = "El correo es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = "El correo no es válido"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Datos del formulario:", formData)
      setSubmitMessage("¡Mensaje enviado correctamente!")

      // Limpiar formulario
      setFormData({
        nombre: "",
        telefono: "",
        correo: "",
        mensaje: "",
      })
    } catch (error) {
      console.error(error)
      setSubmitMessage("Error al enviar el mensaje. Inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2 className="form-title">Contáctanos</h2>
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">
                Nombre *
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Tu nombre completo"
              />
              {errors.nombre && <p className="error-message">{errors.nombre}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="telefono" className="form-label">
                Teléfono *
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleInputChange}
                className="form-input"
                placeholder="1234567890"
              />
              {errors.telefono && <p className="error-message">{errors.telefono}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="correo" className="form-label">
                Correo Electrónico *
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleInputChange}
                className="form-input"
                placeholder="tu@email.com"
              />
              {errors.correo && <p className="error-message">{errors.correo}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="mensaje" className="form-label">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
              />
              {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className={`submit-button ${isSubmitting ? "loading" : ""}`}>
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {submitMessage && (
              <p className={`submit-message ${submitMessage.includes("Error") ? "error" : "success"}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
