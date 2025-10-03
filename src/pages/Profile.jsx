function Profile() {
  return (
    <div className="py-8 space-y-8 px-4 sm:px-6 lg:px-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900">Donsol Profile</h1>

      {/* Overview */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3">Overview</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Donsol is a coastal municipality in Sorsogon Province, located in the Bicol Region of Luzon, Philippines. 
          Known as the “Whale Shark Capital of the World,” it has gained international recognition for its sustainable whale shark (butanding) tourism. 
          The municipality was founded in 1668 and is approximately 66 km from Sorsogon City, 571 km from Manila, and 94 km from Legazpi City.
        </p>
      </section>

      {/* Geography */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3">Geography</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Donsol covers an area of 156.20 km², constituting 7.37% of Sorsogon’s total land area. 
          It is situated near the entrance of Burias Pass, which connects to the Pacific Ocean, making it a key point for marine biodiversity.
        </p>
      </section>

      {/* Population */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3">Population</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          As of the 2024 Census, Donsol has a population of 51,781, with a density of approximately 331 people per square kilometer. 
          This represents a modest growth from the 50,281 recorded in the 2020 Census.
        </p>
      </section>

      {/* Barangays */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3">Barangays</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          The municipality is subdivided into 51 barangays, including Alin, Awai, Banban, Bandi, Banuang Gurang, Baras, Bayawas, Bororan, Cabugao, Cristo, Dancalan, De Vera, Gimagaan, Girawan, Gogon, Gura, Juan Adre, JR Cawaling, Mabini, Malapoc, Malinao, Market Site, New Maguisa, Ogod, Old Maguisa, Orange, Pangpang, Parina, Pawala, Pinamanaan, Poso, Punta Waling-Waling, Rawis, San Antonio, San Isidro, San Jose, San Rafael, San Ramon, San Vicente, Santa Cruz, Sevilla, Sibago, Suguian, Tagbac, Tinanogan, Tongdol, Tres Marias, Tuba, Tupas, and Vinisitahan.
        </p>
      </section>

      {/* Climate */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3">Climate</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Donsol experiences a tropical climate with distinct wet and dry seasons. The wet season typically occurs from June to November, 
          while the dry season spans from December to May. Average temperatures range from 25°C to 32°C.
        </p>
      </section>

      {/* Economy */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3">Economy</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          The local economy is primarily driven by ecotourism, agriculture, and fishing. Whale shark tourism, particularly from November to June, 
          attracts both local and international visitors. The municipality also engages in rice, coconut, and root crop farming, as well as fishing activities.
        </p>
      </section>

      {/* Tourism Highlights */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-4">Tourism Highlights</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1 text-xl sm:text-2xl">🐋</span>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Whale Shark Interaction:</strong> Donsol offers one of the best opportunities globally to swim with whale sharks.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 text-xl sm:text-2xl">✨</span>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Firefly Watching:</strong> Evening boat tours along the Donsol River provide a magical experience of watching fireflies illuminate the mangroves.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2 mt-1 text-xl sm:text-2xl">🛶</span>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>River Tours:</strong> Visitors can enjoy kayaking and river cruising, exploring the rich biodiversity of the area.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1 text-xl sm:text-2xl">🤿</span>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Diving and Snorkeling:</strong> Donsol serves as a gateway for divers heading to nearby dive spots.
            </p>
          </li>
        </ul>
      </section>

      {/* Culture and Language */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3">Culture and Language</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          The majority of Donsol’s population speaks Eastern Miraya, a Bicolano language. Filipino and English are also widely understood. 
          Catholicism is the predominant religion, with each barangay celebrating its own fiesta in honor of its patron saint.
        </p>
      </section>

      {/* Local Government */}
      <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3">Local Government</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Donsol is a third-class municipality under the leadership of Mayor Chuck Lubiano, elected in 2025. The local government prioritizes sustainable tourism and community development.
        </p>  
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center h-auto">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3 text-center">Vision</h2>
          <p className="text-base sm:text-lg italic text-center leading-relaxed">
            "To establish a transparent, accountable, and efficient financial management system that empowers Donsol to optimize resource allocation and enhance public service delivery."
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center h-auto">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3 text-center">Mission</h2>
          <p className="text-base sm:text-lg italic text-center leading-relaxed">
            "To develop and implement a user-friendly, secure, and interactive platform that provides stakeholders with timely and accurate financial data for informed decision-making."
          </p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
