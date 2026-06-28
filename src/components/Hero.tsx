import { Mail, Download, FileText, MapPin, Sparkles, GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/portfolio-data";

interface HeroProps {
  onViewResume: () => void;
}

export default function Hero({ onViewResume }: HeroProps) {
  return (
    <section id="about" className="pt-28 pb-20">
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
        <div>
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-800">
              Open to AI / ML Internships
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
            {profile.name}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-slate-500 mb-6">
            <span className="flex items-center gap-1.5 text-sm">
              <Sparkles size={14} className="text-slate-900" />
              {profile.title}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-2xl mb-8">
            {profile.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-700 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <button
              onClick={onViewResume}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:border-slate-400 transition-all hover:-translate-y-0.5"
            >
              <FileText size={16} />
              View Resume
            </button>
            <a
              href={profile.resumeUrl}
              download="Sujal_Shrestha_CV.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-xl text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        {/* Social links card */}
        <div className="hidden lg:flex flex-col gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all"
            title="GitHub"
          >
            <GithubIcon size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all"
            title="Email"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Mobile socials */}
      <div className="flex lg:hidden items-center gap-2 mt-8">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors"
        >
          <GithubIcon size={17} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
        >
          <LinkedinIcon size={17} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-colors"
        >
          <Mail size={17} />
        </a>
      </div>
    </section>
  );
}
