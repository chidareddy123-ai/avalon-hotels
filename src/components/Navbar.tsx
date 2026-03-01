import Link from "next/link";
import { SITE, CLOUDBEDS_BOOKING_URL } from "@/lib/config";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container navInner">
        <Link href="/" className="brand" aria-label={SITE.name}>
          <span className="brandBadge">
            <span className="brandBadgeText">Avalon</span>
            <span className="brandBadgeSub">Hotels</span>
          </span>
        </Link>

        <nav className="navLinks" aria-label="Primary">
          <Link href="/rooms">Rooms</Link>
          <Link href="/ballroom">Ballroom</Link>
          <Link href="/restaurant">Restaurant</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>

          <button
            type="button"
            className="btn btnPrimary"
            data-be-url={CLOUDBEDS_BOOKING_URL}
          >
            Book Now
          </button>
        </nav>
      </div>
    </div>
  );
}