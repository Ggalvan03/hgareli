import { Producto } from '@/app/lib/definitions';
export default function ProductCard({product}:{product: Producto}) {
    return (
        <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft hover:scale-105 transition-transform">
                    <img 
                        src={product.thumbnail_URL} 
                        alt={product.nombre} 
                        className="h-32 w-32 object-cover rounded-md"
                    />
        </div>
    )
}
