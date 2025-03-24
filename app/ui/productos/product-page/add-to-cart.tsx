import { Variante, Producto, CarritoItem } from "@/app/lib/definitions";
import { motion } from "framer-motion";

interface AddToCartProps {
    cantidad: number;
    producto: Producto;
    selectedVariant: Variante;
    selectedSize: string;
}

export default function AddToCart({ cantidad, producto, selectedVariant, selectedSize }: AddToCartProps) {
    const handleAddToCart = () => {
        // Retrieve the current cart from localStorage
        const cart: CarritoItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

        // Check if the item already exists in the cart
        const existingItemIndex = cart.findIndex(
            (item) =>
                item.producto.id === producto.id &&
                item.variante.sub_id === selectedVariant.sub_id && // Compare by sub_id
                item.tamaño === selectedSize
        );

        if (existingItemIndex !== -1) {
            // If the item exists, increase its cantidad
            cart[existingItemIndex].cantidad += 1;
        } else {
            // If the item doesn't exist, add it to the cart
            const newItem: CarritoItem = {
                cantidad: 1,
                producto: producto,
                variante: selectedVariant,
                tamaño: selectedSize,
            };
            cart.push(newItem);
        }

        // Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Log the updated cart for debugging
        console.log("Updated Cart:", cart);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#333333" }} // Slightly enlarge and darken on hover
            whileTap={{ scale: 0.95 }} // Slightly shrink on click
            transition={{ duration: 0.2 }} // Smooth transition
            className="bg-black w-full font-bold text-md rounded-sm text-white py-2 px-4 my-2 cursor-pointer"
            onClick={handleAddToCart} // Add to cart on click
        >
            Agregar al Carrito
        </motion.button>
    );
}