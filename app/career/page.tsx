"use client";

import { useState } from "react";

export default function CareersPage() {
  const [careers, setCareers] = useState([
    {
      id: 1,
      Role: "Junior Software Engineer",
      Salary: "Competitive salary package",
      Experience: "1 year or more",
      area: "Athens",
      image:
        "https://miro.medium.com/v2/da:true/resize:fit:1200/0*GUiDDjgZTncwGrIm",
    },
    {
      id: 2,
      Role: "Sales Manager",
      Salary: "Competitive salary package",
      Experience: "7 year or more",
      area: "Athens",
      image:
        "https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-the-Difference-Between-Sales-and-Marekting-1.jpg.webp",
    },
    {
      id: 3,
      Role: "HR trainee",
      Salary: "Competitive salary package",
      Experience: "No experience required",
      area: "Athens",
      image:
        "https://www.shrm.org/content/dam/en/shrm/topics-tools/news/employee-relations/Diversity3_voauyq.jpeg",
    },
  ]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Career Opportunities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((career) => (
          <div
            key={career.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={career.image}
              alt={career.Role}
              className="w-full h-55 object-cover"
            />
            <div className="p-2.5">
              <h2 className="text-xl font-semibold mb-2">{career.Role}</h2>
              
              <div className="space-y-1 text-sm text-gray-600">
                <p className="flex justify-between">
                  <span className="font-medium">Salary:</span>
                  <span>{career.Salary}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>{career.Experience}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>{career.area}</span>
                </p>
              </div>
              <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Apply Now-Upload CV
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}