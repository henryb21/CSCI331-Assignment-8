"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products?limit=20");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        FakeStore Products
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-400 px-4 py-2 rounded w-full mb-4"
      />

      {/* Table */}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Price</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((product) => (
            <tr key={product.id} className="border">
              <td className="p-2 border text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-16 mx-auto"
                />
              </td>
              <td className="p-2 border">{product.title}</td>
              <td className="p-2 border text-green-600 font-bold">
                ${product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
