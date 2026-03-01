import PageShell from "@/components/PageShell";

const photos = [
  { src: "/photos/exterior.png", alt: "Exterior" },
  { src: "/photos/lobby.png", alt: "Lobby" },
  { src: "/photos/room-queen.png", alt: "Double Queen" },
  { src: "/photos/room-king.png", alt: "King Room" },
  { src: "/photos/bathroom.png", alt: "Bathroom" },
  { src: "/photos/pool2.png", alt: "Indoor Pool" },
  { src: "/photos/gym.png", alt: "Fitness Center" },
  { src: "/photos/bar-grill.png", alt: "On-site Bar & Grill" },
  { src: "/photos/ballroom1.jpg", alt: "Ballroom" },
  { src: "/photos/ballroom2.jpg", alt: "Ballroom" },
  { src: "/photos/ballroom3.jpg", alt: "Ballroom" },
  { src: "/photos/ballroom4.jpg", alt: "Ballroom" },
  { src: "/photos/ballroom5.jpg", alt: "Ballroom" },
];

export default function GalleryPage() {
  return (
    <PageShell
      title="Gallery"
      subtitle="A quick look at the property — rooms, ballroom, and amenities."
    >
      <div className="galleryGrid">
        {photos.map((p) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={p.src} src={p.src} alt={p.alt} />
        ))}
      </div>
    </PageShell>
  );
}
