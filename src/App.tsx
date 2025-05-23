import { CarritoProvider } from './context/CarritoContext';
//import './App.css'
import Header from '../src/components/Header'
import ImagenPrincipal from '../src/components/ImagenPrincipal'
import  Barra  from '../src/components/Barra'
import ListaCurso from './components/ListaCursos'
import Footer from './components/Footer'
import QuienesSomos from './components/QuienesSomos'
import Formulario from './components/Formulario'
// or, if the file is named 'footer.tsx':
// import Footer from './components/footer'


function App() {

  return (
    <CarritoProvider>
      <body>
        <Header />
        <ImagenPrincipal />
        <Barra />
        <QuienesSomos/>
        <ListaCurso/>
        <Formulario/>
        <Footer/>
      </body>
    </CarritoProvider>
  )
}

export default App
