import { useEffect } from "react";
import { X, Download, FileText } from "./Icons";

interface PdfModalProps {
  url: string;
  onClose: () => void;
}

export default function PdfModal({ url, onClose }: PdfModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
            <FileText size={16} className="text-slate-900" />
            Sujal_Shrestha_CV.pdf
          </div>
          <div className="flex items-center gap-2">
            <a
              href={url}
              download="Sujal_Shrestha_CV.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              <Download size={13} />
              Download
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <iframe
          src={url}
          title="Resume PDF"
          className="flex-1 w-full border-0"
        />
      </div>
    </div>
  );
}
