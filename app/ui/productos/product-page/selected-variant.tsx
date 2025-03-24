import { Variante } from "@/app/lib/definitions";
import { useEffect } from "react";
interface VariantSelectorProps {
    variantes: Variante[];
    selectedVariant: number;
    onSelect: (sub_id: number) => void;
  }

  export default function SelectedVariant({ variantes, selectedVariant, onSelect }: VariantSelectorProps) {
    return (
        <div className="flex space-x-4 my-1">
            {variantes.map((variant) => (
                <button
                    key={variant.sub_id}
                    onClick={() => onSelect(variant.sub_id)}
                    className={`
                        relative overflow-hidden
                        w-8 h-8 rounded-full transition-all duration-300 border border-gray-300
                        ${variant.material === 'oro' 
                            ? 'bg-[radial-gradient(circle_at_center,#f9e29c,#e5c488,#c79c55)]' 
                            : 'bg-[radial-gradient(circle_at_center,#f5f5f5,#e0e0e0,#bdbdbd)]'}
                        ${selectedVariant === variant.sub_id ? 'ring-1 inset-ring-gray-800' : ''}
                        hover:brightness-110 hover:scale-110
                    `}
                    title={variant.material}
                >
                    {/* Shine Overlay */}
                    <span className="absolute inset-0 opacity-30 bg-gradient-to-tl from-white/70 to-transparent rounded-full pointer-events-none"></span>
                </button>
            ))}
        </div>
    );
}