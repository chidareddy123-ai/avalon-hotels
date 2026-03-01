import PageShell from "@/components/PageShell";

export default function RestaurantPage() {
  return (
    <PageShell
      title="Restaurant"
      subtitle="On-site Bar & Grill — easy dining for guests, groups, and events."
    >
      <div className="grid2">
        <div className="card mediaCard">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/bar-grill.png" alt="On-site Bar & Grill" />
          <div className="mediaBody">
            <h3 className="h3">On-site Bar & Grill</h3>
            <p className="muted" style={{ marginTop: 0 }}>
              A relaxed, local atmosphere — ideal for casual meals, drinks, and post-event gatherings.
            </p>
          </div>
        </div>

        <div className="card cardPad">
          <span className="pill">Hours & menu</span>
          <h2 className="h2" style={{ marginTop: 10 }}>Details coming soon</h2>
          <p className="muted">
            Add your real hours, menu highlights, and event catering options here when ready.
          </p>

          <div style={{ height: 12 }} />
          <div className="card" style={{ boxShadow: "none" }}>
            <div className="mediaBody">
              <h3 className="h3">Great for groups</h3>
              <p className="muted" style={{ marginTop: 0 }}>
                Hosting a wedding or conference? We can recommend simple dining options for your guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
