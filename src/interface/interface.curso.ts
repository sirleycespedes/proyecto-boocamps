export interface ICurso {
    id: number;
    titulo: string;
    profesor: string;
    precio: number;
    precioDescuento: number;
    imagen: string;
    cantidad?: number;
}