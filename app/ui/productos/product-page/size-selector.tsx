interface SizeSelectorProps {
    sizes: string[];
    selectedSize: string;
    onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
    return (
        <div className="flex h-fit flex-wrap gap-2 my-2">
            {sizes.map((size) => (
                <button
                    key={size}
                    onClick={() => onSelect(size)}
                    className={`
                        px-4 py-2 rounded-full border transition-all duration-200 text-sm
                        ${selectedSize === size 
                            ? 'bg-black text-white border-black scale-105' 
                            : 'bg-white text-black border-gray-400'}
                        hover:bg-black hover:text-white
                    `}
                >
                    {size}
                </button>
            ))}
        </div>
    );
}