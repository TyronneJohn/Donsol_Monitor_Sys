function Contact() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <p className="mt-2 muted">Reach the LGU office for concerns and inquiries.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <form className="card p-6 space-y-3">
          <input placeholder="Name" className="w-full rounded border border-[rgb(var(--color-border))] p-2" />
          <input placeholder="Email" className="w-full rounded border border-[rgb(var(--color-border))] p-2" />
          <textarea placeholder="Message" rows="5" className="w-full rounded border border-[rgb(var(--color-border))] p-2" />
          <button className="btn-primary">Send</button>
        </form>
        <div className="space-y-3">
          <div className="card p-4">
            <div className="font-medium">LGU Office</div>
            <div className="text-sm muted">Address and hotline placeholder.</div>
          </div>
          <div className="card h-64 p-4">
            <div className="h-full rounded bg-slate-100"></div>
            <p className="mt-2 text-sm muted">Google Maps integration placeholder.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


