"use client";

import { useState } from "react";

export default function Home() {
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [size, setSize] = useState("");
  const [selectedOption, setSelectedOption] = useState<"sale" | "rent" | null>(
    null
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Welcome to Papogatos</h1>

      <div className="text-center">
        <div className="flex flex-row gap-4 text-lg font-medium">
          <button
            className={`px-4 py-2 rounded-lg shadow border-2 ${
              selectedOption === "sale"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedOption("sale")}
          >
            Sale
          </button>
          <button
            className={`px-4 py-2 rounded-lg shadow border-2 ${
              selectedOption === "rent"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedOption("rent")}
          >
            Rent
          </button>
        </div>
        <div className="flex flex-row mt-6 gap-4 w-full">
          <div className="flex items-center gap-2 w-full">
            <label htmlFor="category" className="text-lg font-semibold">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Category</option>
              <option value="house">House</option>
              <option value="field">Field</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div className="flex items-center gap-2 w-full">
            <label htmlFor="area" className="text-lg font-semibold">
              Area
            </label>
            <select
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Attica</option>
              <option value="house">Crete</option>
              <option value="field">Mykonos</option>
            </select>
          </div>

          <div className="flex items-center gap-2 w-full">
            <label htmlFor="price" className="text-lg font-semibold">
              Price Range
            </label>
            <input
              id="price"
              type="text"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              placeholder="Enter price range..."
              className="w-full p-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2 w-full">
            <label htmlFor="size" className="text-lg font-semibold">
              Size (m²)
            </label>
            <input
              id="size"
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="Enter size in m²..."
              className="w-full p-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-indigo-700">
          Search
        </button>
      </div>
    </div>
  );
}
