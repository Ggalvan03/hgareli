"use client"
import { cormorant } from "@/app/lib/fonts";
import { Producto } from "@/app/lib/definitions";
import Link from "next/link";
export default function ProductCard({producto}: {producto: Producto}) {
    return(
        <Link className="w-fit" href = {`/productos/${producto.id}`}>
            <img src={producto.thumbnail_URL} alt= {producto.tipo} className="h-40 w-40 object-cover"/>
            <p className={`${cormorant.className} text-[2vh] font-bold`}>{producto.nombre}</p>
            <p className="text-[1.5vh]"> ${producto.precio}.00 mxn</p>
        </Link>
    );
}