"use client";

import { useEffect, useState } from "react";
import { CarritoItem } from "@/app/lib/definitions";

export default function Page() {
    const [cartItems, setCartItems] = useState<CarritoItem[]>([]);

    useEffect(() => {
        // Retrieve the cart from localStorage
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Carrito</h1>
            {cartItems.length > 0 ? (
                <ul className="space-y-4">
                    {cartItems.map((item, index) => (
                        <li key={index} className="border p-4 rounded-md shadow-md">
                            <h2 className="text-lg font-semibold">{item.producto.nombre}</h2>
                            <p>Variante: {item.variante.material}</p>
                            <p>Tamaño: {item.tamaño}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.variante.precio * item.cantidad}</p>
                            <p>Precio: ${item.variante.precio}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">El carrito está vacío.</p>
            )}
        </div>
    );
}