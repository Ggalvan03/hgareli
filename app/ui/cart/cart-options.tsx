import {motion} from "framer-motion";
import { Trash } from "lucide-react";
import { CarritoItem } from "@/app/lib/definitions";
import { useCart } from "@/app/context/cart-context";

export default function CartOptions({item}: {item: CarritoItem}) {
    const { increaseItem, decreaseItem, removeItem } = useCart();

    return (
        <div className="h-ful flex  flex-col items-end justify-between gap-2">
            <div className="flex gap-2 border-1 rounded-md py-1 px-2">
                <motion.button
                        whileHover={{ scale: 1.1, opacity: 0.8 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-[2vh] sm:w-fit cursor-pointer font-black items-center"
                        onClick={() => decreaseItem(item)}
                >
                    -
                </motion.button>

                <p>{item.cantidad}</p>

                <motion.button
                        whileHover={{ scale: 1.1, opacity: 0.8 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-[2vh] sm:w-fit cursor-pointer font-black items-center"
                        onClick={() => increaseItem(item)}
                >
                    +
                </motion.button>
                
            </div>
            <motion.button
                    whileHover={{ scale: 1.1, opacity: 0.8 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                    onClick={() => removeItem(item)}
            >
                    <Trash className="text-red-500 hover:text-red-600"/>
            </motion.button>
        </div>
        
    );
}