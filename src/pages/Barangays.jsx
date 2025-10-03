function Barangays() {
  const barangays = [
    { name: 'Alin', description: 'Description of Alin', population: 5000 },
    { name: 'Awai', description: 'Description of Awai', population: 3000 },
    { name: 'Banban', description: 'Description of Banban', population: 4500 },
    { name: 'Bandi', description: 'Description of Bandi', population: 365 },
    { name: 'Banuang Gurang', description: 'Description of Banuang Gurang', population: 4000 },
    { name: 'Baras', description: 'Description of Baras', population: 6000 },
    { name: 'Bayawas', description: 'Description of Bayawas', population: 3200 },
    { name: 'Bororan', description: 'Description of Bororan', population: 5000 },
    { name: 'Cabugao', description: 'Description of Cabugao', population: 4800 },
    { name: 'Cristo', description: 'Description of Cristo', population: 5300 },
    { name: 'Dancalan', description: 'Description of Dancalan', population: 4700 },
    { name: 'De Vera', description: 'Description of De Vera', population: 4600 },
    { name: 'Gimagaan', description: 'Description of Gimagaan', population: 4400 },
    { name: 'Girawan', description: 'Description of Girawan', population: 4200 },
    { name: 'Gogon', description: 'Description of Gogon', population: 4100 },
    { name: 'Gura', description: 'Description of Gura', population: 4000 },
    { name: 'Juan Adre', description: 'Description of Juan Adre', population: 3900 },
    { name: 'JR Cawaling', description: 'Description of JR Cawaling', population: 3800 },
    { name: 'Mabini', description: 'Description of Mabini', population: 3700 },
    { name: 'Malapoc', description: 'Description of Malapoc', population: 3600 },
    { name: 'Malinao', description: 'Description of Malinao', population: 3500 },
    { name: 'Market Site', description: 'Description of Market Site', population: 3400 },
    { name: 'New Maguisa', description: 'Description of New Maguisa', population: 3300 },
    { name: 'Ogod', description: 'Description of Ogod', population: 4189 },
    { name: 'Old Maguisa', description: 'Description of Old Maguisa', population: 3100 },
    { name: 'Orange', description: 'Description of Orange', population: 3000 },
    { name: 'Pangpang', description: 'Description of Pangpang', population: 2900 },
    { name: 'Parina', description: 'Description of Parina', population: 2800 },
    { name: 'Pawala', description: 'Description of Pawala', population: 2700 },
    { name: 'Pinamanaan', description: 'Description of Pinamanaan', population: 2600 },
    { name: 'Poso', description: 'Description of Poso', population: 2500 },
    { name: 'Punta Waling-Waling', description: 'Description of Punta Waling-Waling', population: 2400 },
    { name: 'Rawis', description: 'Description of Rawis', population: 2300 },
    { name: 'San Antonio', description: 'Description of San Antonio', population: 2200 },
    { name: 'San Isidro', description: 'Description of San Isidro', population: 2100 },
    { name: 'San Jose', description: 'Description of San Jose', population: 2000 },
    { name: 'San Rafael', description: 'Description of San Rafael', population: 1900 },
    { name: 'San Ramon', description: 'Description of San Ramon', population: 1800 },
    { name: 'San Vicente', description: 'Description of San Vicente', population: 1700 },
    { name: 'Santa Cruz', description: 'Description of Santa Cruz', population: 1600 },
    { name: 'Sevilla', description: 'Description of Sevilla', population: 1500 },
    { name: 'Sibago', description: 'Description of Sibago', population: 1400 },
    { name: 'Suguian', description: 'Description of Suguian', population: 1300 },
    { name: 'Tagbac', description: 'Description of Tagbac', population: 1200 },
    { name: 'Tinanogan', description: 'Description of Tinanogan', population: 1100 },
    { name: 'Tongdol', description: 'Description of Tongdol', population: 1000 },
    { name: 'Tres Marias', description: 'Description of Tres Marias', population: 900 },
    { name: 'Tuba', description: 'Description of Tuba', population: 800 },
    { name: 'Tupas', description: 'Description of Tupas', population: 700 },
    { name: 'Vinisitahan', description: 'Description of Vinisitahan', population: 600 },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Barangays of Donsol, Sorsogon</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {barangays.map((barangay, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{barangay.name}</h2>
            <p className="text-gray-700">{barangay.description}</p>
            <p className="text-gray-500">Population: {barangay.population}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Barangays;
