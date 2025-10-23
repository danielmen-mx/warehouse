import { Product } from "../types/Product";

interface Props {
  products: Product[]
}

export const ProductTable = ({ products }: Props) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Nombre</th>
          <th className="border px-4 py-2">Cantidad</th>
          <th className="border px-4 py-2">Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td className="border px-4 py-2">{p.id}</td>
            <td className="border px-4 py-2">{p.name}</td>
            <td className="border px-4 py-2">{p.quantity}</td>
            <td className="border px-4 py-2">{p.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}