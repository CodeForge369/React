import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PdfModal from "./components/PDFModel";
import { profile } from "./data/portfolio-data";

export default function App() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 antialiased selection:bg-slate-200 selection:text-slate-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6">
        <Hero onViewResume={() => setShowPdf(true)} />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {showPdf && (
        <PdfModal url={profile.resumeUrl} onClose={() => setShowPdf(false)} />
      )}
    </div>
  );
}
