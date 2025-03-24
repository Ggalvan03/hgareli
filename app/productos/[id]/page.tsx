'use client';

import { useParams, useRouter } from 'next/navigation';
import { productos } from "@/app/lib/data";
import {MoveLeft} from "lucide-react";
import { motion } from "framer-motion";
import ProductImages from '@/app/ui/productos/product-page/product-images';

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

      <div className='flex w-full mt-5 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-10 flex-wrap sm:flex-nowrap sm:h-full md:flex-nowrap md:h-full lg:flex-nowrap lg:h-full xl:flex-nowrap xl:h-full'>
        <div className='flex flex-col w-full items-center mb-5 sm:hidden md:hidden lg:hidden xl:hidden'>
          <h2 className=' font-medium text-2xl '>{product.nombre}</h2>  
          <p>{product.variantes[0].material}</p>
        </div>
        <div className=" flex justify-center items-center sm:h-full md:h-full lg:h-full xl:h-full w-full sm:w-fill md:max-w-fit lg:max-w-1/2 xl:max-w-1/2 ">
          <ProductImages variante={product.variantes[0]}/>
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