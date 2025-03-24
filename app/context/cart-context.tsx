"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CarritoItem } from "@/app/lib/definitions";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CarritoItem[]>([]);

    // Initialize from localStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(stored);
    }, []);

    const saveCart = (updated: CarritoItem[]) => {
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    const addItem = (newItem: CarritoItem) => {
        const updatedCart = [...cart];
        const existingIndex = updatedCart.findIndex(
            (item) =>
                item.producto.id === newItem.producto.id &&
                item.variante.sub_id === newItem.variante.sub_id &&
                item.tamaño === newItem.tamaño
        );

        if (existingIndex !== -1) {
            updatedCart[existingIndex].cantidad += newItem.cantidad;
        } else {
            updatedCart.push(newItem);
        }

        saveCart(updatedCart);
    };

    const decreaseItem = (itemToDecrease: CarritoItem) => {
        const updatedCart = [...cart];
        const existingIndex = updatedCart.findIndex(
            (item) =>
                item.producto.id === itemToDecrease.producto.id &&
                item.variante.sub_id === itemToDecrease.variante.sub_id &&
                item.tamaño === itemToDecrease.tamaño
        );

        if (existingIndex !== -1) {
            updatedCart[existingIndex].cantidad -= 1;
            if (updatedCart[existingIndex].cantidad <= 0) {
                updatedCart.splice(existingIndex, 1);
            }
            saveCart(updatedCart);
        }
    };

    const removeItem = (itemToRemove: CarritoItem) => {
        const updatedCart = cart.filter(
            (item) =>
                !(
                    item.producto.id === itemToRemove.producto.id &&
                    item.variante.sub_id === itemToRemove.variante.sub_id &&
                    item.tamaño === itemToRemove.tamaño
                )
        );
        saveCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    };

    return (
        <CartContext.Provider value={{ cart, addItem, decreaseItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);