import { useState } from "react";
import { mockProducts } from "@/features/inventory/services/mockData.ts";
import { ProductTable } from "@/features/inventory/components/ProductTable";
import { Product } from "@/types/Product";

export const DashboardPage = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts)

  return (
    <div>
      <h1 className="text-2x1 font-bold mb-4">Inventario</h1>
      <button className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Agregar Producto
      </button>
      <ProductTable products={products} />
    </div>
  )
}