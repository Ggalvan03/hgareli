"use client";

import { useCart } from "@/app/context/cart-context"; // Adjust path to your context
import { CarritoItem } from "@/app/lib/definitions";
import CartOptions from "@/app/ui/cart/cart-options";
import Link from 'next/link';

export default function Page() {
    const { cart,increaseItem, decreaseItem, removeItem} = useCart();

    return (
        <div className="h-full w-full p-4">
            {cart.length > 0 ? (
                <div className="space-y-4">
                    {cart.map((item: CarritoItem, index: number) => (
                        <div key={index} className="flex flex-wrap w-full border p-4 rounded-md shadow-md items-center">
                            <h2 className="text-lg font-semibold">{item.producto.nombre}</h2>
                            <p>Variante: {item.variante.material}</p>
                            <p>Tamaño: {item.tamaño}</p>
                            
                            <p>Precio unitario: ${item.variante.precio}</p>
                            <p>Total: ${item.variante.precio * item.cantidad}</p>

                            <CartOptions item={item} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col h-full w-full items-center justify-center text-gray-500">
                    Parece que todavía no tienes nada en tu carrito. 
                    <Link className="font-bold" href="/productos">
                        Encuentra algo que te encante
                    </Link>
                </div>
            )}
        </div>
    );
}
