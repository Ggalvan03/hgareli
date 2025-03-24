"use client"

import { motion } from "framer-motion";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
function Cart(){
    return(
        <Link href={"/cart"}>
            <motion.button
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            whileTap={{ scale: 0.9 }}
            >
                <ShoppingBasket  strokeWidth = {1.5} className="w-9 h-9 text-black hover:"/>
            </motion.button>
        </Link>
    );
}

export default Cart;