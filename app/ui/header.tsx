"use client"

import { cormorant } from "@/app/lib/fonts";
import Cart  from "@/app/ui/cart"
import NavBar from "@/app/ui/nav-bar";

export default function Header() {
    return (
        <div className="flex w-full h-[10vh] items-center justify-between p-3 ">
            <div className={`${cormorant.className} text-[5vh] font-600s`}> 
                Hgareli
            </div>
            
            <div className="flex items-center gap-2 md:gap-5">
                <NavBar/>
                <Cart/>
            </div>
            
            
        </div>
    );
}