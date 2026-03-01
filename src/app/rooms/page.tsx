import Link from "next/link";
import PageShell from "@/components/PageShell";
import { CLOUDBEDS_BOOKING_URL, PROPERTY } from "@/lib/config";

type RoomCard = {
  title: string;
  count: number;
  image: string;
  bullets: string[];
  note?: string;
};

const rooms: RoomCard[] = [
  {
    title: "Double Queen",
    count: PROPERTY.roomInventory.doubleQueen,
    image: "/photos/room-queen.png",
    bullets: [
      "Two queen beds",
      "Mini fridge & microwave",
      "Smart TV",
      "Work desk",
    ],
  },
  {
    title: "Single Queen",
    count: PROPERTY.roomInventory.singleQueen,
    image: "/photos/room-queen.png",
    bullets: ["Queen bed", "Mini fridge & microwave", "Smart TV", "Work desk"],
  },
  {
    title: "King Room",
    count: PROPERTY.roomInventory.king,
    image: "/photos/room-king.png",
    bullets: ["King bed", "Mini fridge & microwave", "Smart TV", "Work desk"],
  },
  {
    title: "Whirlpool Suite",
    count: PROPERTY.roomInventory.whirlpoolSuite,
    image: "/photos/bathroom.png",
    bullets: ["Extra space", "Whirlpool / hot tub", "Smart TV", "Mini fridge & microwave"],
    note: "Limited availability — call for details.",
  },
  {
    title: "Kitchenette Apartment",
    count: PROPERTY.roomInventory.kitchenetteApartment,
    image: "/photos/room-king.png",
    bullets: ["Two separate bedrooms", "Shared kitchenette", "Ideal for longer stays", "Great for families"],
    note: "Limited availability — call for details.",
  },
  {
    title: "Accessible Room",
    count: 0,
    image: "/photos/bathroom.png",
    bullets: ["Accessible options available", "Contact us for the best fit"],
  },
];

export default function RoomsPage() {
  return (
    <PageShell
      title="Rooms & Suites"
      subtitle={`A total of ${PROPERTY.totalRooms} rooms — designed for comfort, groups, and extended stays.`}
    >
      <div className="card cardPad" style={{ marginBottom: 18 }}>
        <div className="sectionTop" style={{ marginBottom: 0 }}>
          <div>
            <h2 className="h3" style={{ margin: 0 }}>In-room essentials</h2>
            <p className="muted" style={{ marginTop: 6 }}>
              {PROPERTY.inRoom.join(" • ")}
            </p>
          </div>
          <a className="btn btnPrimary" href={CLOUDBEDS_BOOKING_URL} target="_blank" rel="noreferrer">
            Book Now
          </a>
        </div>
      </div>

      <div className="grid3">
        {rooms.map((r) => (
          <div key={r.title} className="card mediaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.image} alt={r.title} />
            <div className="mediaBody">
              <h3 className="h3">
                {r.title}{" "}
                {r.count ? (
                  <span className="muted" style={{ fontFamily: "var(--font-sans)", fontSize: 14 }}>
                    ({r.count})
                  </span>
                ) : null}
              </h3>

              <ul className="muted" style={{ margin: "10px 0 0 18px" }}>
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {r.note ? <p className="muted" style={{ marginTop: 10 }}>{r.note}</p> : null}

              <div style={{ height: 10 }} />
              <a className="btn" href={CLOUDBEDS_BOOKING_URL} target="_blank" rel="noreferrer">
                Check Rates
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="card cardPad" style={{ marginTop: 18 }}>
        <p className="muted" style={{ margin: 0 }}>
          Need a room block for an event? Visit the <Link href="/ballroom">Ballroom</Link> page and contact us — we’ll help you plan it.
        </p>
      </div>
    </PageShell>
  );
}
