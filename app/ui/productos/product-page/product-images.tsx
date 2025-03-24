import { useState } from "react";
import { Variante } from "@/app/lib/definitions";

export default function ProductImages({ variante }: { variante: Variante }) {
    const [selectedImage, setSelectedImage] = useState(0); // Track the currently selected image

    return (
        <div className="flex flex-col items-center">
            {/* Main Image */}
            <img
                src={variante.images_URL[selectedImage]}
                alt={variante.material}
                className="h-80 w-80 object-cover mb-4 rounded-md"
            />

            {/* Image Buttons */}
            <div className="flex gap-4">
                {variante.images_URL.map((image, index) => (
                    <div
                        key={index}
                        className={"relative h-16 w-16 rounded-md overflow-hidden cursor-pointer"}
                        onClick={() => setSelectedImage(index)} // Update the selected image
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                        {selectedImage !== index && (
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}