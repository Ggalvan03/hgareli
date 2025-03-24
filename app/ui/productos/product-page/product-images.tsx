import { useState } from "react";
import { Variante } from "@/app/lib/definitions";
import ImageModal from "@/app/ui/productos/product-page/image-modal";

export default function ProductImages({ variante }: { variante: Variante }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const handleClick = (url: string) => {
        setActiveImage(url);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center">
            {/* Main Image */}
            <img
                key={selectedImage}
                src={variante.images_URL[selectedImage]}
                alt={variante.material}
                className="h-80 w-80 object-cover mb-4 rounded-md cursor-pointer"
                onClick={() => handleClick(variante.images_URL[selectedImage])}
            />

            {/* Image Modal */}
            <ImageModal
                imageUrl={activeImage || ''}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Image Thumbnails */}
            <div className="flex gap-4 flex-wrap justify-center">
                {variante.images_URL.map((image, index) => (
                    <div
                        key={index}
                        className="relative h-16 w-16 rounded-md overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(index)}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                        {selectedImage !== index && (
                            <div className="absolute inset-0 bg-black opacity-10 hover:opacity-40 transition-opacity"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}