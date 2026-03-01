"use client";

import { useMemo, useState } from "react";
import { CLOUDBEDS_BOOKING_URL } from "@/lib/config";

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function toISODate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function BookingBar() {
  const today = useMemo(() => new Date(), []);
  const [checkIn, setCheckIn] = useState<string>(toISODate(addDays(today, 1)));
  const [checkOut, setCheckOut] = useState<string>(toISODate(addDays(today, 2)));
  const [guests, setGuests] = useState<string>("2");

  // Note: Cloudbeds parameters vary by property. For now we open your booking engine URL.
  const bookHref = CLOUDBEDS_BOOKING_URL;

  return (
    <div className="bookingBar" id="booking">
      <div className="field">
        <label htmlFor="checkin">Check-in</label>
        <input
          id="checkin"
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="checkout">Check-out</label>
        <input
          id="checkout"
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="guests">Guests</label>
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
        </select>
      </div>

      <a
        className="btn btnPrimary"
        href={bookHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Book on Cloudbeds"
      >
        Check Availability
      </a>
    </div>
  );
}
