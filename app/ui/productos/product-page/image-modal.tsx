import React from 'react';

interface ImageModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full p-1"
        >
          ✕
        </button>
        <img src={imageUrl} alt="Modal View" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg" />
      </div>
    </div>
  );
}
