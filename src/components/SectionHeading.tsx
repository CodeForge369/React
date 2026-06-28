interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  number?: string;
}

export default function SectionHeading({ eyebrow, title, number }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span className="text-xs font-mono font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
            {number}
          </span>
        )}
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
}
