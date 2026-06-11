import { useEffect } from "react";
import { EXPERIENCE, SKILLS, ABOUT_TEXT, CONTACT_INFO, EDUCATION, CERTIFICATIONS } from "@/constants/terminal";

export default function CV() {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @media print {
          body { background: white; color: black; }
          .no-print { display: none; }
          @page { margin: 1.5cm; }
        }
        body { font-family: 'Georgia', serif; }
      `}</style>

      <div className="cv-page max-w-3xl mx-auto px-8 py-10 bg-white text-black">
        {/* Header */}
        <header className="border-b-2 border-black pb-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight">BOKEOM EOM</h1>
          <p className="text-lg text-gray-600 mt-1">Partner AI Deployment Engineer / AWS-Focused Platform & DevOps Leader</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-gray-700">
            {CONTACT_INFO.map((item) => (
              <span key={item.label}>
                <span className="font-semibold">{item.label}:</span> {item.value}
              </span>
            ))}
          </div>
        </header>

        {/* About */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            About
          </h2>
          <p className="text-sm leading-relaxed whitespace-pre-line text-gray-800">{ABOUT_TEXT}</p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Experience
          </h2>
          <div className="space-y-5">
            {EXPERIENCE.map((exp) => (
              <div key={exp.company} style={{ pageBreakInside: "avoid" }}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-base">{exp.company}</span>
                    <span className="mx-2 text-gray-400">·</span>
                    <span className="font-semibold text-sm">{exp.role}</span>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5 italic">{exp.desc}</p>
                <ul className="mt-2 space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                      <span className="shrink-0 text-gray-400">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Skills
          </h2>
          <div className="space-y-2">
            {Object.entries(SKILLS).map(([category, value]) => (
              <div key={category} className="text-sm">
                <span className="font-bold">{category}: </span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6" style={{ pageBreakInside: "avoid" }}>
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Certifications
          </h2>
          <ul className="space-y-1">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert} className="text-sm text-gray-700 flex gap-2">
                <span className="shrink-0 text-gray-400">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section style={{ pageBreakInside: "avoid" }}>
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Education
          </h2>
          <div className="space-y-2">
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="text-sm">
                <span className="font-bold">{edu.school}</span>
                <span className="mx-2 text-gray-400">·</span>
                <span className="text-gray-700">{edu.degree}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
