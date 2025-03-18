"use client"

import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";

function Cart(){
    return(
        <div>
            <motion.button
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            whileTap={{ scale: 0.9 }}
            >
                <ShoppingBagIcon  className="w-10 h-10 text-black hover:"/>
            </motion.button>
        </div>
    );
}

export default Cart;