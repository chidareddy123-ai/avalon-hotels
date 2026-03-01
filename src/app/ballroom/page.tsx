import PageShell from "@/components/PageShell";
import { BALLROOM, CLOUDBEDS_BOOKING_URL, PROPERTY, SITE } from "@/lib/config";

export default function BallroomPage() {
  return (
    <PageShell
      title="Ballroom"
      subtitle="A flexible, high-capacity venue for weddings, banquets, conferences, and community events."
    >
      <div className="grid2" style={{ marginBottom: 18 }}>
        <div className="card mediaCard">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/ballroom5.jpg" alt="Ballroom" />
          <div className="mediaBody">
            <h3 className="h3">Make it yours</h3>
            <p className="muted" style={{ marginTop: 0 }}>
              Dividable space with flexible layouts for ceremony, reception, training, or theater-style programs.
            </p>
          </div>
        </div>

        <div className="card cardPad">
          <span className="pill">Capacity</span>
          <h2 className="h2" style={{ marginTop: 10 }}>{BALLROOM.capacity.banquet}+ banquet guests</h2>
          <p className="muted">
            Theater style up to {BALLROOM.capacity.theater}. Dividable: {BALLROOM.dividable ? "Yes" : "No"}. Outside catering: {BALLROOM.outsideCateringAllowed ? "Allowed" : "No"}.
          </p>

          <div style={{ height: 12 }} />
          <span className="pill">Room blocks</span>
          <p className="muted" style={{ marginTop: 10 }}>
            Pair your event with overnight stays — {PROPERTY.totalRooms} rooms on-site for wedding parties, teams, and guests.
          </p>

          <div style={{ height: 14 }} />
          <a className="btn btnPrimary" href={CLOUDBEDS_BOOKING_URL} target="_blank" rel="noreferrer">
            Book Rooms
          </a>
        </div>
      </div>

      <div className="card cardPad" style={{ marginBottom: 18 }}>
        <h3 className="h3">Popular setups</h3>
        <div className="grid3" style={{ marginTop: 12 }}>
          {[
            { title: "Banquet", text: "Round tables + head table. Great for weddings and dinners." },
            { title: "Theater", text: "Rows of chairs facing a stage/screen for presentations." },
            { title: "Conference", text: "Classroom style with tables for trainings and meetings." },
          ].map((x) => (
            <div key={x.title} className="card cardPad" style={{ boxShadow: "none" }}>
              <h3 className="h3">{x.title}</h3>
              <p className="muted" style={{ marginTop: 0 }}>{x.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid3">
        {[
          { img: "/photos/ballroom1.jpg", title: "Bright, open floor" },
          { img: "/photos/ballroom2.jpg", title: "Table layouts" },
          { img: "/photos/ballroom3.jpg", title: "Elegant lighting" },
        ].map((x) => (
          <div key={x.title} className="card mediaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={x.img} alt={x.title} />
            <div className="mediaBody">
              <h3 className="h3">{x.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="card cardPad" style={{ marginTop: 18 }}>
        <h3 className="h3">Request pricing & availability</h3>
        <p className="muted" style={{ marginTop: 6 }}>
          Call <strong>{SITE.phone}</strong> or email <strong>{SITE.email}</strong>. Tell us your date, expected guest count,
          and the setup you want — we’ll respond with availability and next steps.
        </p>
        <p className="muted" style={{ marginTop: 6 }}>
          Address: {SITE.addressLine}
        </p>
      </div>
    </PageShell>
  );
}
