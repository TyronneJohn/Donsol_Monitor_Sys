function Login() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="mt-2 muted text-sm">Role-based access: Barangay Officials, Municipal Admins, Public Users.</p>
      </div>
      <form className="card p-6 space-y-3">
        <select className="w-full rounded border border-[rgb(var(--color-border))] p-2">
          <option>Barangay Official</option>
          <option>Municipal Admin</option>
          <option>Public User</option>
        </select>
        <input placeholder="Email" className="w-full rounded border border-[rgb(var(--color-border))] p-2" />
        <input placeholder="Password" type="password" className="w-full rounded border border-[rgb(var(--color-border))] p-2" />
        <button className="btn-primary w-full">Sign in</button>
      </form>
    </div>
  )
}

export default Login


