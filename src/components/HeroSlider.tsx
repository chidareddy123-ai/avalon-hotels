"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BALLROOM, CLOUDBEDS_BOOKING_URL, SITE } from "@/lib/config";

type Slide = {
  key: string;
  image: string;
  kicker: string;
  title: string;
  sub: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
};

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function HeroSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        key: "ballroom",
        image: "/photos/ballroom3.jpg",
        kicker: SITE.locationShort,
        title: "Host unforgettable events.",
        sub: `Up to ${BALLROOM.capacity.banquet} banquet guests • ${BALLROOM.capacity.theater} theater style • Dividable space • Outside catering welcome`,
        primaryCta: { label: "Plan Your Event", href: "/ballroom" },
        secondaryCta: { label: "Book a Stay", href: CLOUDBEDS_BOOKING_URL, external: true },
      },
      {
        key: "room",
        image: "/photos/room-king.png",
        kicker: "Spacious rooms",
        title: "Comfort you can count on.",
        sub: "Smart TV • Mini fridge • Microwave • Work desk — perfect for families, groups, and business travel.",
        primaryCta: { label: "Explore Rooms", href: "/rooms" },
        secondaryCta: { label: "Check Availability", href: CLOUDBEDS_BOOKING_URL, external: true },
      },
      {
        key: "pool",
        image: "/photos/pool2.png",
        kicker: "Amenities",
        title: "Relax, recharge, enjoy.",
        sub: "Indoor pool • Whirlpool / hot tub • Fitness center • On-site Bar & Grill",
        primaryCta: { label: "View Amenities", href: "/gallery" },
        secondaryCta: { label: "Book Now", href: CLOUDBEDS_BOOKING_URL, external: true },
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[idx];

  return (
    <div className="heroShell" aria-label="Hero slideshow">
      <div className="heroSlide">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="heroImg" src={s.image} alt="Avalon Hotels" />
        <div className="heroOverlay" />
        <div className="heroContent">
          <div className="heroContentInner">
            <div className="heroKicker">{s.kicker}</div>
            <h1 className="heroTitle">{s.title}</h1>
            <p className="heroSub">{s.sub}</p>

            <div className="heroActions">
              {s.primaryCta.external ? (
                <ExternalLink className="btn btnPrimary" href={s.primaryCta.href}>
                  {s.primaryCta.label}
                </ExternalLink>
              ) : (
                <Link className="btn btnPrimary" href={s.primaryCta.href}>
                  {s.primaryCta.label}
                </Link>
              )}

              {s.secondaryCta ? (
                s.secondaryCta.external ? (
                  <ExternalLink className="btn" href={s.secondaryCta.href}>
                    {s.secondaryCta.label}
                  </ExternalLink>
                ) : (
                  <Link className="btn" href={s.secondaryCta.href}>
                    {s.secondaryCta.label}
                  </Link>
                )
              ) : null}
            </div>
          </div>
        </div>

        <div className="heroDots" aria-label="Slide controls">
          {slides.map((x, i) => (
            <button
              key={x.key}
              className={`dot ${i === idx ? "dotActive" : ""}`}
              aria-label={`Go to ${x.key} slide`}
              onClick={() => setIdx(i)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
