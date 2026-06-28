import SectionHeading from "./SectionHeading";
import { Brain, Eye, MessageSquare, Rocket } from "./Icons";
import { focusAreas } from "../data/portfolio-data";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={20} className="text-slate-900" />,
  eye: <Eye size={20} className="text-slate-900" />,
  message: <MessageSquare size={20} className="text-slate-900" />,
  rocket: <Rocket size={20} className="text-slate-900" />,
};

export default function About() {
  return (
    <section className="py-16">
      <SectionHeading eyebrow="What I Do" title="Areas of Focus" number="01" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {focusAreas.map((f) => (
          <div
            key={f.title}
            className="group relative border border-slate-200 rounded-2xl p-6 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                <span className="group-hover:text-white transition-colors">
                  {iconMap[f.icon]}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base mb-1.5 group-hover:text-slate-700 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
