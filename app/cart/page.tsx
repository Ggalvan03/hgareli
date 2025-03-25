"use client";

import { useCart } from "@/app/context/cart-context"; // Adjust path to your context
import { CarritoItem } from "@/app/lib/definitions";
import CartOptions from "@/app/ui/cart/cart-options";

export default function Page() {
    const { cart,increaseItem, decreaseItem, removeItem} = useCart();

    return (
        <div className="p-4">
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
                <p className="text-gray-500">El carrito está vacío.</p>
            )}
        </div>
    );
}