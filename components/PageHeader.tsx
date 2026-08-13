export function PageHeader({
  title,
  subtitle,
  className = "mb-12",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <header className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {subtitle ? (
        <p className="max-w-md text-sm leading-6 text-muted sm:text-right">{subtitle}</p>
      ) : null}
    </header>
  );
}
