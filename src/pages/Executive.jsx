// src/pages/Executive.jsx
import React from "react";

function Executive() {
  const mayor = {
    name: "Chuck Lubiano",
    position: "Mayor",
    party: "Independent",
    photo: "/mayor.jpg",
  };

  const departments = [
    { name: "Engr. Pedro Santos", position: "Municipal Engineer", photo: "/engineer.jpg" },
    { name: "Dr. Maria Lopez", position: "Municipal Health Officer", photo: "/health.jpg" },
    { name: "Roberto Dela Vega", position: "Municipal Environment Officer", photo: "/menro.jpg" },
    { name: "Ana Cruz", position: "Municipal Social Welfare Officer", photo: "/mswdo.jpg" },
    { name: "Elsie Reyes", position: "Municipal Treasurer", photo: "/treasurer.jpg" },
    { name: "Lilian Pineda", position: "Municipal Civil Registrar", photo: "/civil.jpg" },
    { name: "Ramon Delos Santos", position: "Municipal Accountant", photo: "/accountant.jpg" },
    { name: "Sherwin Gatdula", position: "Municipal Administrator", photo: "/administrator.jpg" },
    { name: "Jessica Madrilejos", position: "Municipal Planning and Development Officer", photo: "/mpdo.jpg" },
    { name: "Carlos Tan", position: "Department of Agriculture Head", photo: "/agriculture.jpg" },
    { name: "Liza Cruz", position: "Department of Education Head", photo: "/education.jpg" },
    { name: "Ramon Villanueva", position: "Department of Public Works Head", photo: "/publicworks.jpg" },
  ];

  return (
    <div className="min-h-screen w-full bg-transparent overflow-x-hidden">
      {/* ✅ Hero Section */}
      <div
        className="relative w-full h-72 md:h-96 bg-cover bg-center -mt-20"
        style={{ backgroundImage: "url('/losnod.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-3">Executive</h1>
          <p className="italic text-sm md:text-base max-w-2xl">
            “Leadership is action, not position.” – Donald H. McGannon
          </p>
        </div>
      </div>

      {/* Mayor */}
      <div className="flex justify-center mt-10 mb-12">
        <div className="bg-transparent p-6 rounded-xl shadow-md w-[360px] flex flex-col items-center border">
          <img
            src={mayor.photo}
            alt={mayor.name}
            className="w-72 h-72 object-cover rounded-lg shadow-sm mb-4"
          />
          <h2 className="font-bold text-xl text-slate-800 text-center uppercase">
            {mayor.name}
          </h2>
          <p className="text-sm text-slate-600 text-center">{mayor.position}</p>
          {mayor.party && (
            <p className="text-xs text-gray-500 mt-1">({mayor.party})</p>
          )}
        </div>
      </div>

      {/* Departments Header */}
      <div className="bg-[#003c73] text-white py-2 px-6 text-center rounded-md mb-8 max-w-xl mx-auto">
        <h2 className="text-lg font-semibold uppercase">Department Heads</h2>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-10">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-transparent p-4 rounded-lg shadow-sm flex flex-col items-center border hover:shadow-md transition"
          >
            <div className="flex flex-col items-center w-56">
              <img
                src={dept.photo}
                alt={dept.name}
                className="w-56 h-56 object-cover rounded-md shadow-sm mb-3"
              />
              <h2 className="font-semibold text-base text-slate-800 text-center uppercase">
                {dept.name}
              </h2>
              <p className="text-sm text-slate-600 text-center">{dept.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Executive;
