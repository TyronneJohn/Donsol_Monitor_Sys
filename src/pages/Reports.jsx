function Reports() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Reports</h1>
        <p className="mt-2 muted">Generate summary/detailed reports by Year & Barangay. Export as PDF/Excel.</p>
      </div>
      <div className="card p-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <select className="rounded border border-[rgb(var(--color-border))] p-2">
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
          <select className="rounded border border-[rgb(var(--color-border))] p-2">
            <option>All Barangays</option>
            <option>Alin</option>
            <option>Awaii (Poblacion)</option>
          </select>
          <button className="btn-primary">Generate</button>
        </div>
        <div className="h-64 rounded bg-slate-100"></div>
        <div className="flex gap-3">
          <button className="btn-primary">Export PDF</button>
          <button className="btn-primary">Export Excel</button>
        </div>
      </div>
    </div>
  )
}

export default Reports


