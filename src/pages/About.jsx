function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 muted text-base">{children}</div>
    </section>
  )
}

function About() {
  return (
    <div className="space-y-10">
      <div className="card p-6">
        <h1 className="text-3xl font-semibold">About the Municipality of Donsol</h1>
        <p className="mt-3 text-lg muted">Overview, leadership, and barangays information.</p>
      </div>

      <div className="space-y-12">
        <Section id="profile" title="Municipality Profile">
          Overview/history, Vision & Mission, and official seal/gallery placeholder.
        </Section>
        <Section id="executive" title="Executive Officials">
          Mayor, Vice Mayor, Municipal Administrator, Department Heads; roles in execution and budget implementation.
        </Section>
        <Section id="legislative" title="Legislative Officials">
          Vice Mayor (Presiding Officer), Councilors with committees; functions for ordinances and budget approval.
        </Section>
        <Section id="barangays" title="Barangays">
          List of barangays with basic info. Navigate to Barangays page for dashboards.
        </Section>
      </div>
    </div>
  )
}

export default About


