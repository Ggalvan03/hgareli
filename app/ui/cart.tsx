"use client";

import { motion } from "framer-motion";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/context/cart-context";

function Cart() {
    const { cart } = useCart();
    const cartCount = cart.reduce((sum: number, item: { cantidad: number }) => sum + item.cantidad, 0);

    return (
        <Link href={"/cart"} className="relative">
            <motion.button
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                whileTap={{ scale: 0.9 }}
                className="relative cursor-pointer"
            >
                <ShoppingBasket strokeWidth={1.5} className="w-9 h-9 text-black" />
                {cartCount > 0 && (
                    <div className="absolute top-0 right-[-8px] bg-red-500 text-white text-[1vh] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        {cartCount}
                    </div>
                )}
            </motion.button>
        </Link>
    );
}

export default Cart;