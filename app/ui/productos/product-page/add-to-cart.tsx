import { Variante, Producto, CarritoItem } from "@/app/lib/definitions";
import { motion } from "framer-motion";
import { useCart } from "@/app/context/cart-context";

interface AddToCartProps {
    cantidad: number;
    producto: Producto;
    selectedVariant: Variante;
    selectedSize: string;
}

export default function AddToCart({ cantidad, producto, selectedVariant, selectedSize }: AddToCartProps) {
    const { addItem } = useCart();

    const handleAdd = () => {
        const item: CarritoItem = {
            cantidad,
            producto,
            variante: selectedVariant,
            tamaño: selectedSize,
        };
        addItem(item);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#333333" }} // Slightly enlarge and darken on hover
            whileTap={{ scale: 0.95 }} // Slightly shrink on click
            transition={{ duration: 0.2 }} // Smooth transition
            className="bg-black w-full font-bold text-md rounded-sm text-white py-2 px-4 my-2 cursor-pointer"
            onClick={handleAdd} // Add to cart on click
        >
            Agregar al Carrito
        </motion.button>
    );
}