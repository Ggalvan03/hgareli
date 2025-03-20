'use client';

import { useParams, useRouter } from 'next/navigation';
import { productos } from "@/app/lib/data";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string; // keep as string

  const product = productos.find(p => p.id === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>{product.nombre}</h1>
      <p>Precio: ${product.precio}</p>
      <img src={product.image_URL} alt= {product.tipo} className="h-40 w-40 object-cover"/>
      <br />
      <button onClick={() => router.push('/productos')}>Volver al catálogo</button>
    </div>
  );
}