import { useParams } from 'react-router-dom'

function BarangayDashboard() {
  const { name } = useParams()

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">{decodeURIComponent(name)} — Dashboard</h1>
        <p className="mt-2 muted">Budget Allocation, Expenditures, Projects, and Events overview.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Budget Allocation</h2>
          <div className="mt-4 h-48 rounded bg-slate-100"></div>
          <p className="mt-2 text-sm muted">Pie chart placeholder.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Expenditure Breakdown</h2>
          <div className="mt-4 h-48 rounded bg-slate-100"></div>
          <p className="mt-2 text-sm muted">Bar graph placeholder.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Ongoing Projects</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>• Road Rehabilitation — 40% complete</li>
            <li>• Health Center Upgrade — 60% complete</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <div className="mt-4 h-48 rounded bg-slate-100"></div>
          <p className="mt-2 text-sm muted">Calendar placeholder.</p>
        </div>
      </div>
    </div>
  )
}

export default BarangayDashboard


