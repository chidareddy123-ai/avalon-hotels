import Link from "next/link";
import { SITE, CLOUDBEDS_BOOKING_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div style={{ marginBottom: 10 }}>
            <div className="brandBadge" style={{ display: "inline-flex" }}>
              <span className="brandBadgeText">Avalon</span>
              <span className="brandBadgeSub">Hotels</span>
            </div>
          </div>

          <p className="small">
            Comfortable accommodations and a premier ballroom in {SITE.locationShort}.
            Ideal for weddings, conferences, and weekend stays.
          </p>

          <p className="small">
            <strong>{SITE.phone}</strong>
            <br />
            {SITE.addressLine}
            <br />
            {SITE.email}
          </p>
        </div>

        <div className="small">
          <b>Explore</b>
          <div style={{ height: 10 }} />
          <div><Link href="/rooms">Rooms</Link></div>
          <div><Link href="/ballroom">Ballroom</Link></div>
          <div><Link href="/restaurant">Restaurant</Link></div>
          <div><Link href="/gallery">Gallery</Link></div>
          <div><Link href="/contact">Contact</Link></div>
        </div>

        <div className="small">
          <b>Booking</b>
          <div style={{ height: 10 }} />
          <div>
            <a href={CLOUDBEDS_BOOKING_URL} target="_blank" rel="noreferrer">
              Check availability
            </a>
          </div>
          <div className="muted" style={{ marginTop: 10 }}>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
