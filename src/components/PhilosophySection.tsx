import { PHILOSOPHY_PRINCIPLES } from "@/data/portfolio";

export default function PhilosophySection() {
  return (
    <section className="py-12 md:py-16 border-b border-[#1b2230]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest uppercase text-[#64748b]">
              <span>05</span>
              <span className="text-[#334155]">/</span>
              <span>Values &amp; Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f8fafc]">
              How I like to build.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
            Prinsip utama yang memandu setiap keputusan arsitektur kode dan desain komponen antarmuka.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {PHILOSOPHY_PRINCIPLES.map((item) => (
            <div
              key={item.number}
              className="p-5 sm:p-7 rounded-xl bg-[#10141d] border border-[#1e2536] hover:border-[#2b364d] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#38bdf8] font-semibold tracking-widest">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                    Core Rule
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[#f8fafc] group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#cbd5e1]">
                  {item.tagline}
                </p>

                <p className="text-xs text-[#94a3b8] leading-relaxed pt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
