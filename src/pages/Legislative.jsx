// src/pages/Legislative.jsx
function Legislative() {
  const presidingOfficer = {
    name: "Tanang Abetria",
    position: "Vice Mayor (Presiding Officer)",
    party: "Independent",
    photo: "/vice.jpg",
  };

  const officials = [
    { name: "Jeszar Ocaya", position: "Councilor", party: "NPC", photo: "/ocaya.jpg", committee: "Committee on Finance" },
    { name: "Ruby Hernandez", position: "Councilor", party: "PRP", photo: "/ruby.jpg", committee: "Committee on Education" },
    { name: "Tonette Aquino", position: "Councilor", party: "NPC", photo: "/tonette.jpg", committee: "Committee on Health" },
    { name: "Ingrid Bonaobra", position: "Councilor", party: "NPC", photo: "/ingrid.jpg", committee: "Committee on Agriculture" },
    { name: "Jun Abliter", position: "Councilor", party: "NPC", photo: "/jun.jpg", committee: "Committee on Infrastructure" },
    { name: "Ryan Tarog", position: "Councilor", party: "PRP", photo: "/ryan.png", committee: "Committee on Peace & Order" },
    { name: "Jose Owen Averilla", position: "Councilor", party: "PRP", photo: "/owen.jpg", committee: "Committee on Women & Family" },
    { name: "Ray Aquino", position: "Councilor", party: "PRP", photo: "/ray.jpg", committee: "Committee on Environment" },
    { name: "Liga ng mga Barangay President", position: "Ex-Officio Member", photo: "/vista.png", committee: "Committee on Barangay Affairs" },
    { name: "Patricia Magdamit", position: "Ex-Officio Member", photo: "/pat.jpg", committee: "Committee on Youth & Sports" },
  ];

  return (
    <div className="min-h-screen w-full bg-transparent overflow-x-hidden">
      {/* ✅ Hero Section */}
      <div
        className="relative w-full h-72 md:h-96 bg-cover bg-center -mt-20"
        style={{ backgroundImage: "url('/losnod.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-3">Legislative</h1>
          <p className="italic text-sm md:text-base max-w-2xl">
            “Law is order, and good law is good order.” – Aristotle
          </p>
        </div>
      </div>

      {/* Presiding Officer */}
      <div className="flex justify-center mt-10 mb-12">
        <div className="bg-transparent p-6 rounded-xl shadow-md w-[360px] flex flex-col items-center border">
          <img
            src={presidingOfficer.photo}
            alt={presidingOfficer.name}
            className="w-72 h-72 object-cover rounded-lg shadow-sm mb-4"
          />
          <h2 className="font-bold text-xl text-slate-800 text-center uppercase">
            {presidingOfficer.name}
          </h2>
          <p className="text-sm text-slate-600 text-center">{presidingOfficer.position}</p>
          {presidingOfficer.party && (
            <p className="text-xs text-gray-500 mt-1">({presidingOfficer.party})</p>
          )}
        </div>
      </div>

      {/* Officials Header */}
      <div className="bg-[#003c73] text-white py-2 px-6 text-center rounded-md mb-8 max-w-xl mx-auto">
        <h2 className="text-lg font-semibold uppercase">Councilors & Ex-Officio Members</h2>
      </div>

      {/* Officials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-10">
        {officials.map((official, index) => (
          <div
            key={index}
            className={`bg-transparent p-4 rounded-lg shadow-sm flex flex-col items-center border hover:shadow-md transition
              ${index === officials.length - 1 ? 'col-span-1 sm:col-span-2 md:col-span-3 flex justify-center' : ''}`}
          >
            <div className="flex flex-col items-center w-56">
              <img
                src={official.photo}
                alt={official.name}
                className="w-56 h-56 object-cover rounded-md shadow-sm mb-3"
              />
              <h2 className="font-semibold text-base text-slate-800 text-center uppercase">
                {official.name}
              </h2>
              <p className="text-sm text-slate-600 text-center">{official.position}</p>
              {official.party && (
                <p className="text-xs text-gray-500 mt-1">({official.party})</p>
              )}
              {official.committee && (
                <p className="mt-3 text-sm text-black text-center font-medium border-t pt-2 w-full tracking-wide">
                  {official.committee}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legislative;
