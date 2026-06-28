import { GithubIcon, LinkedinIcon, Mail, ChevronUp } from "./Icons";
import { profile } from "../data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white/50 mt-8">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-bold text-slate-900 text-lg mb-1">{profile.name}</div>
            <p className="text-sm text-slate-500">{profile.title} · {profile.location}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-900/40 transition-colors"
              title="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors ml-2"
              title="Back to top"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <a href={`mailto:${profile.email}`} className="hover:text-slate-600 transition-colors">
              {profile.email}
            </a>
            <span className="text-slate-300">|</span>
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
