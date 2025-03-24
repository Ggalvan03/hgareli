'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { productos } from "@/app/lib/data";
import {MoveLeft} from "lucide-react";
import { motion } from "framer-motion";

import ProductImages from '@/app/ui/productos/product-page/product-images';
import SelectedVariant from '@/app/ui/productos/product-page/selected-variant';
import SizeSelector from '@/app/ui/productos/product-page/size-selector';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string; // keep as string

  const product = productos.find(p => p.id === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const [selectedVariantId, setSelectedVariantId] = useState(product.variantes[0].sub_id);
  const [selectedSize, setSelectedSize] = useState(product.variantes[0].tamaños[0]);

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

      <div className='flex flex-col w-full items-center mb-5 sm:hidden '>
        <h2 className=' font-bold text-2xl '>{product.nombre}</h2>  
        <p>{product.tipo}</p>
      </div>

      <div className='sm:h-full flex items-center'>
        <div className='flex flex-row w-full mt-5 sm:mt-10 flex-wrap sm:flex-nowrap sm:h-fit'>
          <div className=" flex justify-center items-center w-full sm:w-fill md:max-w-fit md:mr-10 lg:max-w-1/2  ">
            <ProductImages variante={product.variantes[selectedVariantId]}/>
          </div>
          <div className='h-fill'>
            <h2 className='hidden sm:block font-bold text-2xl'>{product.nombre}</h2>
            <p className='hidden sm:block'>{product.tipo}</p>
            <p className='text-lg font-medium'>${product.precio}</p>
            <p className='sm:hidden'>{product.variantes[selectedVariantId].descripcion}</p>
            <SizeSelector
              sizes={product.variantes[selectedVariantId].tamaños} 
              selectedSize={selectedSize} 
              onSelect={setSelectedSize}
            />
            <SelectedVariant 
              variantes={product.variantes} 
              selectedVariant={selectedVariantId} 
              onSelect={setSelectedVariantId} 
            />
            <p className='hidden sm:block'>{product.variantes[selectedVariantId].descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}