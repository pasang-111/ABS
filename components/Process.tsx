const STEPS = [
  {
    num: "01",
    title: "Consultation & measure",
    desc: "We visit the space or review your plans. Dimensions, existing finishes and how you use the room are logged in detail.",
  },
  {
    num: "02",
    title: "Design & scope",
    desc: "A clear proposal with finish options, inclusions and timeline. No ambiguity — decisions you can make with confidence.",
  },
  {
    num: "03",
    title: "Install",
    desc: "Specialist finishing trades. Progress is photographed so you have a record of the work as it lands.",
  },
  {
    num: "04",
    title: "Handover & aftercare",
    desc: "Final walkthrough, zero open items, warranty documentation. One contact for anything that arises later.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-[clamp(80px,12vw,140px)]">
      <div className="w-[min(100%-2rem,1200px)] mx-auto">
        <div className="max-w-xl mb-14">
          <span className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-orange)] font-semibold">
            Process
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white mt-3 leading-tight">
            How we work
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="relative bg-[var(--color-surface)] border border-[var(--color-line-soft)] rounded-2xl p-6 hover:border-[var(--color-orange)]/25 transition-all duration-300 group"
            >
              <div className="text-[28px] font-black text-[var(--color-orange)]/30 group-hover:text-[var(--color-orange)]/50 transition-colors mb-3">
                {s.num}
              </div>
              <h3 className="font-display text-[1.25rem] text-white mb-2">{s.title}</h3>
              <p className="text-[14px] text-[var(--color-muted)] leading-relaxed m-0">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-[var(--color-line-soft)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
