import CartCarusel from "@/app/ui/inicio/product-carusel";
import { cormorant } from "@/app/lib/fonts";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex-1 relative h-full">
      {/* Carousel container */}
      <div className="absolute inset-0 z-0 opacity-60">
        <CartCarusel />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-1 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-6xl font-bold ${cormorant.className}`}>Bienvenidos</h1>
          <Link className="text-xl border-2 px-4 py-2 rounded-xs" href="/productos">
            Visita nuestro catalogo
          </Link>
        </div>
      </div>
    </div>
  );
}