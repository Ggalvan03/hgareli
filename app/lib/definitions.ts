export interface Producto {
    id: string;
    nombre: string;
    precio: number;
    tipo: string;
    image_URL: string;
}

export interface Servicio  {
    tipo:  'mantenimiento' | 'bespoke';
    presencial: boolean;
    contacto: string;
}