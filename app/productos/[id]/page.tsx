'use client';

import { useParams, useRouter } from 'next/navigation';
import { productos } from "@/app/lib/data";
import {MoveLeft} from "lucide-react";
import { motion } from "framer-motion";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string; // keep as string

  const product = productos.find(p => p.id === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='w-full flex justify-start'>
        <motion.button 
          whileHover={{ scale: 1.1, opacity: 0.8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push('/productos')}> 
              <MoveLeft/>
        </motion.button>
      </div>

      <div className='flex w-full mt-10 flex-wrap sm:flex-nowrap sm:h-full md:flex-nowrap md:h-full lg:flex-nowrap lg:h-full xl:flex-nowrap xl:h-full'>  
        <div className=" flex justify-center items-center h-full w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <img src={product.thumbnail_URL} alt= {product.tipo} className="h-80 w-80 object-cover"/>
        </div>
        <div>
          <h1>{product.nombre}</h1>
          <p>Precio: ${product.precio}</p>
          <p>Descripción: {product.variantes[0].descripcion}</p>
        </div>
      </div>
      
      <br />
      
    </div>
  );
}