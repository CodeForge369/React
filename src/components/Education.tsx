import SectionHeading from "./SectionHeading";
import { GraduationCap } from "./Icons";
import { education } from "../data/portfolio-data";

export default function Education() {
  return (
    <section id="education" className="py-16">
      <SectionHeading eyebrow="Education" title="Academic Background" number="02" />
      <div className="relative border border-slate-200 rounded-2xl p-6 sm:p-8 bg-white overflow-hidden">
        {/* Accent gradient top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800" />

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-200">
            <GraduationCap size={26} />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <h3 className="font-semibold text-lg text-slate-900">{education.degree}</h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {education.status}
              </span>
            </div>
            <p className="text-slate-700 font-medium text-sm mb-0.5">{education.school}</p>
            <p className="text-slate-400 text-sm">{education.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
