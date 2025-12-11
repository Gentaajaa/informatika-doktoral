"use client";

import React from 'react';

const StructureSection = () => {
  // Data derived from PDF Page 2 and your instructions
  const teamMembers = [
    {
      name: "Izzati Muhimmah, Ph.D",
      role: "Ketua Program Studi",
      image: "/photo_profile/Izzati-Muhimmah.png"
    },
    {
      name: "Luthfi Usman",
      role: "Staff Keuangan",
      image: "/photo_profile/Lutfhi-Usman.png"
    },
    {
      name: "Farras Rana",
      role: "Staff Administrasi",
      image: "/photo_profile/Farras-Rana.png"
    }
  ];

  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          Struktur Program Studi
        </h2>
        <div className="h-1 w-24 bg-yellow-400 mx-auto mb-12"></div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">

              {/* Image Container with Hover Effect */}
              <div className="w-48 h-48 mb-6 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:border-blue-100 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-900 font-medium italic">
                {member.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StructureSection;