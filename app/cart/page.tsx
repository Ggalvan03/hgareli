"use client";

import { useCart } from "@/app/context/cart-context"; // Adjust path to your context
import { CarritoItem } from "@/app/lib/definitions";

export default function Page() {
    const { cart, decreaseItem, removeItem, clearCart } = useCart();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Carrito</h1>
            {cart.length > 0 && (
                <button
                    onClick={clearCart}
                    className="mb-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                >
                    Vaciar Carrito
                </button>
            )}
            {cart.length > 0 ? (
                <ul className="space-y-4">
                    {cart.map((item: CarritoItem, index: number) => (
                        <li key={index} className="border p-4 rounded-md shadow-md">
                            <h2 className="text-lg font-semibold">{item.producto.nombre}</h2>
                            <p>Variante: {item.variante.material}</p>
                            <p>Tamaño: {item.tamaño}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio unitario: ${item.variante.precio}</p>
                            <p>Total: ${item.variante.precio * item.cantidad}</p>

                            {/* Controls */}
                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => decreaseItem(item)}
                                    className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                                >
                                    -1
                                </button>
                                <button
                                    onClick={() => removeItem(item)}
                                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">El carrito está vacío.</p>
            )}
        </div>
    );
}