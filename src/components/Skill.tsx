import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <SectionHeading eyebrow="Toolkit" title="Technical Skills" number="03" />
      <div className="grid sm:grid-cols-2 gap-4">
        {skillGroups.map((g, idx) => (
          <div
            key={g.label}
            className="border border-slate-200 rounded-2xl p-5 bg-white hover:border-slate-300 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono font-bold text-slate-900 bg-slate-100 w-5 h-5 rounded flex items-center justify-center">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {g.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-2.5 py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
