"use client";

import { useState } from "react";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Modern Villa with Ocean View",
      price: 450000,
      area: "Chania",
      size: 180,
      bedrooms: 3,
      bathrooms: 2,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319925214.jpg?k=cd7306c89de80c4f4134a930ee0ead3597e0bbd845c9e3892797a2a4a25c38bf&o=&hp=1",
    },
    {
      id: 2,
      title: "Cozy Apartment in City Center",
      price: 180000,
      area: "Crete",
      size: 85,
      bedrooms: 2,
      bathrooms: 1,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518871178.jpg?k=f17001e4323cbfc6934c1b2ce61e94251037de106f96e0854d98a3278e047ce6&o=&hp=1",
    },
    {
      id: 3,
      title: "Luxury Beachfront Home",
      price: 750000,
      area: "Mykonos",
      size: 220,
      bedrooms: 4,
      bathrooms: 3,
      image:
        "https://www.oliverstravels.com/uploads/herder_image/crop_720_440_Villa-Hislop-Crete-Greeces-OliversTravels-1.jpg",
    },
  ]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-55 object-cover"
            />
            <div className="p-2.5">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-blue-500 font-bold mb-2">
                €{property.price.toLocaleString()}
              </p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{property.area}</span>
                <span>{property.size} m²</span>
                <span>{property.bedrooms} beds</span>
                <span>{property.bathrooms} baths</span>
              </div>
              <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
