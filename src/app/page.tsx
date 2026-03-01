import Link from "next/link";
import BookingBar from "@/components/BookingBar";
import HeroSlider from "@/components/HeroSlider";
import { BALLROOM, CLOUDBEDS_BOOKING_URL, PROPERTY, SITE } from "@/lib/config";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="iconItem">
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <HeroSlider />
          <div className="bookingWrap">
            <BookingBar />
          </div>
        </div>
      </section>

      {/* Ballroom highlight */}
      <section className="section">
        <div className="container sectionTop">
          <div>
            <span className="pill">Premier Event Venue</span>
            <h2 className="h2" style={{ marginTop: 10 }}>
              A ballroom built for big moments.
            </h2>
            <p className="muted">
              Weddings, conferences, banquets, and community gatherings — with flexible setup and outside catering.
            </p>
          </div>
          <Link className="btn" href="/ballroom">
            Plan Your Event
          </Link>
        </div>

        <div className="container grid2">
          <div className="card mediaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/ballroom2.jpg" alt="Avalon Hotels Ballroom" />
            <div className="mediaBody">
              <h3 className="h3">Ballroom Capacity</h3>
              <p className="muted" style={{ marginTop: 0 }}>
                Up to {BALLROOM.capacity.banquet} banquet guests and {BALLROOM.capacity.theater} theater style.
                Dividable space with staging options.
              </p>
            </div>
          </div>

          <div className="card cardPad">
            <h3 className="h3">At a glance</h3>
            <div className="iconRow" style={{ marginTop: 14 }}>
              <Stat label="Banquet" value={`${BALLROOM.capacity.banquet} guests`} />
              <Stat label="Theater" value={`${BALLROOM.capacity.theater} guests`} />
              <Stat label="Dividable" value={BALLROOM.dividable ? "Yes" : "No"} />
              <Stat label="Outside catering" value={BALLROOM.outsideCateringAllowed ? "Allowed" : "No"} />
              <Stat label="On-site stay" value={`${PROPERTY.totalRooms} rooms`} />
            </div>

            <div style={{ height: 14 }} />
            <a className="btn btnPrimary" href={CLOUDBEDS_BOOKING_URL} target="_blank" rel="noreferrer">
              Book Rooms for Your Event
            </a>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="sectionTight">
        <div className="container sectionTop">
          <div>
            <h2 className="h2">Rooms & Suites</h2>
            <p className="muted">
              Comfortable, practical, and ready for groups — with in-room essentials done right.
            </p>
          </div>
          <Link className="btn" href="/rooms">
            See all rooms
          </Link>
        </div>

        <div className="container grid3">
          {[
            {
              title: "Double Queen",
              count: PROPERTY.roomInventory.doubleQueen,
              img: "/photos/room-queen.png",
              text: "Ideal for families, teams, and wedding groups.",
            },
            {
              title: "King Room",
              count: PROPERTY.roomInventory.king,
              img: "/photos/room-king.png",
              text: "Spacious comfort with a work desk and smart TV.",
            },
            {
              title: "Suites & Kitchenette",
              count: PROPERTY.roomInventory.whirlpoolSuite + PROPERTY.roomInventory.kitchenetteApartment,
              img: "/photos/bathroom.png",
              text: "Whirlpool suites and kitchenette apartments (limited availability).",
            },
          ].map((c) => (
            <div key={c.title} className="card mediaCard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.title} />
              <div className="mediaBody">
                <h3 className="h3">
                  {c.title} <span className="muted" style={{ fontFamily: "var(--font-sans)", fontSize: 14 }}>(~{c.count})</span>
                </h3>
                <p className="muted" style={{ marginTop: 0 }}>{c.text}</p>
                <div style={{ height: 10 }} />
                <Link className="btn" href="/rooms">Explore</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bar & Grill */}
      <section className="section">
        <div className="container grid2">
          <div className="card mediaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/bar-grill.png" alt="On-site Bar & Grill" />
          </div>
          <div className="card cardPad">
            <span className="pill">On-site Bar & Grill</span>
            <h2 className="h2" style={{ marginTop: 10 }}>Unwind without leaving the property.</h2>
            <p className="muted">
              A relaxed, local atmosphere — perfect for post-event gatherings, game day, and easy dining for your group.
            </p>
            <div style={{ height: 12 }} />
            <Link className="btn" href="/restaurant">View Dining</Link>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="sectionTight">
        <div className="container sectionTop">
          <div>
            <h2 className="h2">Amenities</h2>
            <p className="muted">Everything you need for a comfortable stay.</p>
          </div>
          <Link className="btn" href="/gallery">See photos</Link>
        </div>

        <div className="container grid3">
          {[
            { title: "Indoor Pool", text: "Spacious indoor pool area for families and relaxation.", img: "/photos/pool1.png" },
            { title: "Fitness Center", text: "Stay on routine with on-site cardio and strength equipment.", img: "/photos/gym.png" },
            { title: "In-room Essentials", text: "Mini fridge, microwave, smart TV, and a work desk in every room.", img: "/photos/room-king.png" },
          ].map((c) => (
            <div key={c.title} className="card mediaCard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.title} />
              <div className="mediaBody">
                <h3 className="h3">{c.title}</h3>
                <p className="muted" style={{ marginTop: 0 }}>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container grid2">
          <div className="card cardPad">
            <span className="pill">Location</span>
            <h2 className="h2" style={{ marginTop: 10 }}>Chippewa Falls, Wisconsin</h2>
            <p className="muted">
              {SITE.addressLine}
              <br />
              <strong>{SITE.phone}</strong>
            </p>
            <div style={{ height: 10 }} />
            <Link className="btn" href="/contact">Contact</Link>
            <a
              className="btn"
              style={{ marginLeft: 10 }}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.addressLine)}`}
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
              <h3 className="h3">Stay. Celebrate. Gather.</h3>
              <p className="muted" style={{ marginTop: 0 }}>
                Book your rooms online, or contact us to plan a large event and room block.
              </p>
              <div style={{ height: 10 }} />
              <a className="btn btnPrimary" href={CLOUDBEDS_BOOKING_URL} target="_blank" rel="noreferrer">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
