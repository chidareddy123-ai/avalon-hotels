import Link from "next/link";

export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="container pageHeader">
        <div className="pill">
          <span aria-hidden="true">✦</span>
          <span>Premium Stay</span>
        </div>
        <h1 className="h1">{title}</h1>
        {subtitle ? <p className="lead">{subtitle}</p> : null}
        <div className="muted small">
          <Link href="/">Home</Link> <span aria-hidden="true">›</span> {title}
        </div>
      </div>
      <div className="container section" style={{ paddingTop: 22 }}>
        {children}
      </div>
    </main>
  );
}
