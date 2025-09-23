function StatCard({ label, value }) {
  return (
    <div className="card p-4">
      <div className="text-sm muted">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  )
}

function Home() {
  return (
    <div className="space-y-8">
      <section className="card overflow-hidden">
      <div
      className="h-56 lg:h-72 bg-center bg-cover"
      style={{ backgroundImage: "url('/donsol_bg.png')" }}
      ></div>
        <div className="p-6">
          <h1 className="text-3xl lg:text-4xl font-semibold">Municipality of Donsol</h1>
          <p className="mt-3 text-lg muted">Transparency on budgets, spending, and projects across all barangays.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Annual Budget" value="₱ 250,000,000" />
        <StatCard label="% Spent this Year" value="62%" />
        <StatCard label="Ongoing Projects" value="18" />
        <StatCard label="Active Barangays" value="31" />
      </section>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Latest News & Announcements</h2>
          <ul className="mt-4 space-y-3 text-base">
            <li>• Budget hearing for FY 2026 scheduled on Oct 10</li>
            <li>• Launch: Health Center Upgrade (Barangay Awaii)</li>
            <li>• Roads Improvement Phase 2 now 40% complete</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Barangay Budget Tracker (Top 5)</h2>
          <div className="mt-4 h-56 lg:h-64 rounded bg-slate-100"></div>
          <p className="mt-3 text-base muted">Chart placeholder (Top 5 spenders).</p>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <a href="/barangays" className="btn-primary">View Barangay Budgets</a>
        <a href="/reports" className="btn-primary">See Reports</a>
      </section>
    </div>
  )
}

export default Home


