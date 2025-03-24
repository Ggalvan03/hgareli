"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/app/ui/productos/product-card";
import { productos } from "@/app/lib/data";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9); // Default to 9 items per page

  // Dynamically calculate items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1407) {
        setItemsPerPage(21); // 7 columns for large screens
      } else if (window.innerWidth >= 1250) {
        setItemsPerPage(18); // 6 columns for large screens
      } else if (window.innerWidth >= 1055) {
        setItemsPerPage(15); // 5 columns for medium screens
      } else if (window.innerWidth >= 880) {
        setItemsPerPage(12); // 4 columns for small screens
      } else if (window.innerWidth >= 575) {
        setItemsPerPage(9); // 3 columns for small screens
      }else {
        setItemsPerPage(8); // 2 columns for extra small screens
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  // Get unique types for dropdown
  const uniqueTypes = [...new Set(productos.map((p) => p.tipo))];

  // Filtered products based on search + type
  const filteredProductos = productos.filter((producto) => {
    const matchesName = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "" || producto.tipo === selectedType;
    return matchesName && matchesType;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProductos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProductos = filteredProductos.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-2">
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-m border p-2 rounded w-full md:w-1/3"
        />

        <div className="flex w-full md:w-fit flex-col md:flex-row gap-4 items-center">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border p-2 rounded min-w-fit w-full md:w-1/6"
          >
            <option value="">Todos</option>
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {totalPages > 1 && (
            <div className="flex min-w-fit items-center gap-2">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`text-sm ${currentPage === 1 ? "text-gray-400" : "font-bold"}`}
              >
                &lt;
              </button>
              <span className="text-sm min-w-fit">
                <span className="font-bold">{currentPage}</span> de {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`text-sm ${currentPage === totalPages ? "text-gray-400" : "font-bold"}`}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-8 sm:gap-4 justify-center md:justify-start">
        {paginatedProductos.length > 0 ? (
          paginatedProductos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))
        ) : (
          <p className="text-gray-500">No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}