import { Link } from 'react-router-dom'

const sampleBarangays = [
  'Alin',
  'Awaii (Poblacion)',
  'Banban',
  'Bandi',
  'Banuang Gurang',
  'Baras',
  'Bayawas',
  'Bororan Barangay 1 (Poblacion)',
  'Cabugao',
  'Central Barangay 2 (Poblacion)',
  'Cristo',
  'Dancalan',
  'De Vera',
  'Gimagaan',
  'Girawan',
  'Gogon',
  'Gura',
  'Juan Adre',
  'JR Cawaling',
  'Mabini',
  'Malapoc',
  'Malinao',
  'Market Site Barangay 3 (Poblacion)',
  'New Maguisa',
  'Ogod (Crossing)',
  'Old Maguisa',
  'Orange',
  'Pangpang',
  'Parina',
  'Pawala',
  'Pinamanaan',
  'Poso Pob. (Barangay 5)',
  'Punta Waling-Waling (Poblacion)',
  'Rawis (Poblacion Brgy)',
  'San Antonio',
  'San Isidro',
  'San Jose',
  'San Rafael',
  'San Ramon',
  'San Vicente',
  'Santa Cruz (Itunggan)',
  'Sevilla',
  'Sibago',
  'Suguian',
  'Tagbac',
  'Tinanogan',
  'Tongdol',
  'Tres Marias (Poblacion Brgy)',
  'Tuba',
  'Tupas',
  'Vinisitahan',
  'Lourdes',
]

function Barangays() {
  const barangays = [...sampleBarangays].sort((a, b) => a.localeCompare(b))
  return (
    <div className="space-y-8">
      <div className="card p-6">
        <h1 className="text-3xl font-semibold">Barangays</h1>
        <p className="mt-3 text-lg muted">Select a barangay to view its budget dashboard.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {barangays.map((b) => (
          <Link key={b} to={`/barangays/${encodeURIComponent(b)}`} className="card p-5 hover:shadow-md">
            <div className="text-xl font-medium">{b}</div>
            <div className="mt-1 text-base muted">Open dashboard</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Barangays


