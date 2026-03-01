import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/config";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      subtitle="Call, email, or stop by — we’re here to help with stays and event planning."
    >
      <div className="grid2">
        <div className="card cardPad">
          <h3 className="h3">Front Desk</h3>
          <p className="muted">
            <strong>{SITE.phone}</strong>
            <br />
            {SITE.email}
            <br />
            {SITE.addressLine}
          </p>

          <div style={{ height: 10 }} />
          <a
            className="btn"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              SITE.addressLine
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps
          </a>
        </div>

        <div className="card mediaCard">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/exterior.png" alt="Avalon Hotels exterior" />
          <div className="mediaBody">
            <h3 className="h3">Check-in / Check-out</h3>
            <p className="muted" style={{ marginTop: 0 }}>
              Check‑in: 3:00 PM
              <br />
              Check‑out: 11:00 AM
            </p>
          </div>
        </div>
      </div>

      <div className="card cardPad" style={{ marginTop: 18 }}>
        <h3 className="h3">Ballroom inquiries</h3>
        <p className="muted" style={{ marginTop: 6 }}>
          For weddings, banquets, and meetings, share your date, expected guest count, and preferred setup —
          we’ll respond with availability and next steps.
        </p>
      </div>
    </PageShell>
  );
}
