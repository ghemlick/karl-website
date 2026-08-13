export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {subtitle ? (
        <p className="max-w-md text-sm leading-6 text-muted sm:text-right">{subtitle}</p>
      ) : null}
    </header>
  );
}
