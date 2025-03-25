"use client"

import { cormorant } from "@/app/lib/fonts";
import Cart  from "@/app/ui/cart"
import NavBar from "@/app/ui/nav-bar";
import Link from "next/link";
export default function Header() {
    return (
        <div className="flex w-full h-[10vh] items-center justify-between p-3 ">
            <Link href={"/"}>
                <div className={`${cormorant.className} text-[5vh] font-600s`}> 
                    <img src="/Logo nuevo.png" className="h-40 w-50 object-cover"/>
                </div>
            </Link>
            
            <div className="flex items-center gap-2 md:gap-5">
                <NavBar/>
                <Cart/>
            </div>
            
            
        </div>
    );
}