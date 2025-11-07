import { useState } from "react";
import { mockProducts } from "@/features/inventory/services/mockData";
import { ProductTable } from "@/features/inventory/components/ProductTable";
import { Product } from "@/features/inventory/types/Product";
import DashboardLayout from "@/app/layouts/DashboardLayout";

export const DashboardPage = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts)

  return (
    <>
      <h1 className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Inventario</h1>
      <button className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Agregar Producto
      </button>
      <ProductTable products={products} />
    </>
  );
}