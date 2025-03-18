"use client";

import { useState } from "react";
import ProductCard from "@/app/ui/productos/product-card";
import { productos } from "@/app/lib/data";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Get unique types for dropdown
  const uniqueTypes = [...new Set(productos.map((p) => p.tipo))];

  // Filtered products based on search + type
  const filteredProductos = productos.filter((producto) => {
    const matchesName = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "" || producto.tipo === selectedType;
    return matchesName && matchesType;
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Productos</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-start">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />

        {/* Dropdown Filter */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border p-2 rounded w-full md:w-1/6"
        >
          <option value="">Todos</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap w-full gap-1 justify-center">
        {filteredProductos.length > 0 ? (
          filteredProductos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))
        ) : (
          <p className="text-gray-500">No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}