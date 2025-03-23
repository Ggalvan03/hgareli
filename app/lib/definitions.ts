export interface Producto {
    id: string;
    nombre: string;
    variantes: Variante[];
    precio: number;
    tipo: string; // Anillo | Collar | Charm
    thumbnail_URL: string; 
}

export interface Variante {
    sub_id: string;
    material: 'oro' | 'plata';
    descripcion: string;
    tamaños: string[];
    precio: number;
    images_URL: string[];
}

export interface Servicio  {
    tipo:  'mantenimiento' | 'bespoke';
    presencial: boolean;
    contacto: string;
}