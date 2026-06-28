import SectionHeading from "./SectionHeading";
import { GithubIcon, ArrowUpRight } from "./Icons";
import { projects } from "../data/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <SectionHeading eyebrow="Portfolio" title="Selected Projects" number="04" />
      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`group relative rounded-2xl p-6 bg-white border transition-all hover:shadow-lg ${
              p.featured
                ? "border-slate-300 shadow-md shadow-slate-100/50"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            {p.featured && (
              <span className="absolute top-0 left-6 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-wider text-white bg-slate-900 px-2.5 py-1 rounded-full">
                Featured
              </span>
            )}

            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="min-w-0">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md mb-2">
                  {p.tag}
                </span>
                <h3 className="font-semibold text-lg text-slate-900 group-hover:text-slate-700 transition-colors">
                  {p.title}
                </h3>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  title="View on GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    title="Live Demo"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium px-2 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-200/70"
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
