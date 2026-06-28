import SectionHeading from "./SectionHeading";
import { Mail, MapPin, Phone, Send, GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/portfolio-data";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <SectionHeading eyebrow="Get in Touch" title="Let's Work Together" number="05" />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
        {/* Contact card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to bring AI into production?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-md">
              I'm currently looking for internship opportunities in AI/ML engineering. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail size={16} />
                </span>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="text-sm font-medium">{profile.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-200">
                <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin size={16} />
                </span>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-medium">{profile.location}</div>
                </div>
              </div>

              {profile.phone && (
                <div className="flex items-center gap-3 text-slate-200">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone size={16} />
                  </span>
                  <div>
                    <div className="text-xs text-slate-400">Phone</div>
                    <div className="text-sm font-medium">{profile.phone}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                title="GitHub"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-[#0A66C2] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="ml-auto inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <Send size={14} />
                Send Message
              </a>
            </div>
          </div>
        </div>

        {/* Quick facts card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 text-lg mb-5">Quick Facts</h3>
            <div className="space-y-4">
              {[
                { label: "Role", value: "AI / ML Intern" },
                { label: "Availability", value: "Open to Internships" },
                { label: "Specialty", value: "LLMs, RAG, Deep Learning" },
                { label: "Tech Stack", value: "Python, PyTorch, TensorFlow, Scikit-learn, LangChain, Hugging Face, FAISS/ChromaDB, SQL, Git" },
              ].map((fact) => (
                <div key={fact.label} className="flex justify-between items-start gap-4 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {fact.label}
                  </span>
                  <span className="text-sm font-medium text-slate-700 text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={profile.resumeUrl}
            download="Sujal_Shrestha_CV.pdf"
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
}
