import { createContext, useContext, useState, useEffect } from 'react';
import type { ICurso } from '../interface/interface.curso';

interface CarritoContextType {
  articulosCarrito: ICurso[];
  agregarCurso: (curso: ICurso) => void;
  eliminarCurso: (id: number) => void;
  vaciarCarrito: () => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export const CarritoProvider = ({ children }: { children: React.ReactNode }) => {
  const [articulosCarrito, setArticulosCarrito] = useState<ICurso[]>([]);

  useEffect(() => {
    const carritoLS = localStorage.getItem('carrito');
    if (carritoLS) {
      setArticulosCarrito(JSON.parse(carritoLS));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
  }, [articulosCarrito]);

  const agregarCurso = (infoCurso: ICurso) => {
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
      const nuevosArticulos = articulosCarrito.map(curso => 
        curso.id === infoCurso.id 
          ? { ...curso, cantidad: (curso.cantidad || 1) + 1 }
          : curso
      );
      setArticulosCarrito(nuevosArticulos);
    } else {
      setArticulosCarrito([...articulosCarrito, { ...infoCurso, cantidad: 1 }]);
    }
  };

  const eliminarCurso = (id: number) => {
    setArticulosCarrito(articulosCarrito.filter(curso => curso.id !== id));
  };

  const vaciarCarrito = () => {
    setArticulosCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{
      articulosCarrito,
      agregarCurso,
      eliminarCurso,
      vaciarCarrito
    }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (context === undefined) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider');
  }
  return context;
};