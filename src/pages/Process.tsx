import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import processSourcing from "@/assets/process-sourcing.jpg";
import processMold from "@/assets/process-mold.jpg";
import processPour from "@/assets/process-pour.jpg";
import processSand from "@/assets/process-sand.jpg";
import processFinish from "@/assets/process-finish.jpg";
import img1 from "@/assets/img1.jpeg";
import item2 from "@/assets/item2.jpeg";

const steps = [
  {
    num: "01",
    title: "Sourcing the Wood",
    desc: "Handpicked solid walnut or acacia slabs, chosen for their natural grain, character, and live-edge beauty.",
    image: img1,
  },
  {
    num: "02",
    title: "Colour palette & designing",
    desc: "Colour planning , layout and pattern development - every piece is mapped before the first pour",
    image: processMold,
  },
  {
    num: "03",
    title: "Resin Pour",
    desc: "Pigments, metallics, and flow art come together. Each pour is a live performance — unpredictable and unrepeatable.",
    image: processPour,
  },
  {
    num: "04",
    title: "Cure & Sand",
    desc: "48-hour cure followed by multi-stage sanding — from rough grit to silky smooth finish.",
    image: processSand,
  },
  {
    num: "05",
    title: "Seal & Finish",
    desc: "Mineral oil polish, top coat and final quality inspection.",
    image: processFinish,
  },
  {
    num: "06",
    title: "Packing Orders",
    desc: "Your favourite products are now ready to be packed and sent to their new homes.",
    image: item2,
  },
];

export default function AboutProcess() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = pageRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
                      transform 0.72s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.d1 { transition-delay: 0.1s; }
        .reveal.d2 { transition-delay: 0.2s; }
        .reveal.d3 { transition-delay: 0.32s; }
        .reveal.d4 { transition-delay: 0.44s; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }

        @keyframes inkDraw {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        .ink-word { position: relative; display: inline-block; }
        .ink-word::after {
          content: "";
          position: absolute;
          left: 0; bottom: -3px;
          width: 100%; height: 2px;
          background: #8e9882;
          clip-path: inset(0 100% 0 0);
        }
        .ink-word.is-visible::after {
          animation: inkDraw 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s forwards;
        }

        @keyframes borderPulse {
          0%,100% { border-color: #8e9882; }
          50%      { border-color: #a3ab6c; }
        }
        .quote-bar {
          border-left: 3px solid #8e9882;
          animation: borderPulse 3s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(142,152,130,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(142,152,130,0); }
        }
        .tl-dot { animation: dotPulse 2.4s ease-in-out infinite; }

        .stat-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .stat-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }

        /* process image zoom */
        .process-img-wrap { overflow: hidden; }
        .process-img-wrap img { transition: transform 0.7s ease; }
        .process-img-wrap:hover img { transform: scale(1.04); }

        /* CTA fill-slide */
        .cta-slide {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }
        .cta-slide::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #2c2c2c;
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .cta-slide:hover::before { transform: translateX(0); }
        .cta-slide span { position: relative; z-index: 1; transition: color 0.35s; }
        .cta-slide:hover span { color: #fff; }

        /* section separator label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #9a9a9a;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .section-label::before,
        .section-label::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #d1d1d1;
        }
      `}</style>

      <div ref={pageRef}>

        {/* ════════════════════════════════
            ABOUT US
        ════════════════════════════════ */}

        {/* Hero */}
        <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto text-center">
          <p className="reveal text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">
            The Story Behind
          </p>
          <h1 className="reveal d1 font-heading text-5xl md:text-7xl font-light tracking-wide mb-6 text-[#2c2c2c] leading-tight">
            We don't just make&nbsp;things.<br />
            We{" "}
            <span className="ink-word reveal d2">Etch</span>
            {" "}them.
          </h1>
          <p className="reveal d3 text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm">
            Handcrafted resin art rooted in passion — born in the pandemic, refined over time.
          </p>
        </section>

        {/* Founder story */}
        <section className="pb-24 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left — sticky name + timeline */}
            <div className="reveal">
              <div className="md:sticky md:top-32">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Founder</p>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-[#2c2c2c] mb-2">Pragya Jain</h2>
                {/* <p className="text-sm text-muted-foreground mb-8">Agra → Delhi → Kolkata</p> */}
                {/* <div className="space-y-6 border-l border-[#d1d1d1] pl-5">
                  {[
                    { year: "Delhi",   label: "B.Com (Hons), Delhi University" },
                    { year: "Kolkata", label: "Moved after marriage. Art stayed." },
                    { year: "2020",    label: "Discovered resin art during Covid" },
                    { year: "Now",     label: "3,000+ pieces. One premium brand." },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div
                        className="tl-dot absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#8e9882] border-2 border-white"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                      <p className="text-xs text-[#8e9882] tracking-widest uppercase mb-0.5">{item.year}</p>
                      <p className="text-sm text-[#2c2c2c]">{item.label}</p>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            {/* Right — prose */}
            <div className="space-y-8">
              <div className="reveal d1">
                <p className="text-[#2c2c2c] leading-relaxed text-base">
                  Art has always been more than a passion — it's been a quiet constant in my life. Over the years, I've explored many forms of creative expression, from canvas to mixed media, each one leaving its mark on how I create today.
                </p>
              </div>
              <div className="reveal d2 quote-bar pl-5 py-1">
                <p className="font-heading text-xl md:text-2xl font-light italic text-[#2c2c2c] leading-snug">
                  "During Covid, I discovered resin art — and something just clicked."
                </p>
              </div>
              <div className="reveal d3">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  What started as an exploration soon turned into a passion-driven venture. In the past three
                  years I have handcrafted several trays and platters — each piece unique in its design
                  and character. My work has been trusted for bulk orders across weddings, corporate gifting,
                  and special occasions; spaces where every detail matters.
                </p>
              </div>
              <div className="reveal d4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Now, I'm proud to introduce {" "}
                  <strong className="text-[#2c2c2c] font-medium">ETCH</strong>.{" "}
                  Etch means to carve something permanently — into a surface, into memory. Every piece
                  we create is designed to leave a lasting impression. These are not just products;
                  they are statement pieces that elevate your space and become a part of your story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f5f3ee] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { val: "550+", label: "Engaged Customers" },
                { val: "5 yrs", label: "Of resin mastery" },
                { val: "100%", label: "Made by hand" },
              ].map((s, i) => (
                <div key={i} className="stat-card bg-white border border-[#d1d1d1] p-8 text-center">
                  <p className="font-heading text-4xl font-light text-[#2c2c2c] mb-2">{s.val}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand meaning */}
        <section className="py-28 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal space-y-6">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">The Name</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-[#2c2c2c] leading-tight">
                What does<br /><em>Etch</em> mean?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To carve something permanently — into a surface, into memory. With ETCH, the vision
                is simple: to create art that doesn't just sit in your home — but adds more to it.
              </p>
            </div>
            <div className="reveal d2 space-y-5">
              {[
                { icon: "✦", title: "Art that stays with you", desc: "Not décor that sits in a corner — pieces that command the room." },
                { icon: "✦", title: "Every pour is unrepeatable", desc: "No two pieces are identical. Yours is truly one of one." },
                { icon: "✦", title: "Trusted for occasions that matter", desc: "Weddings, corporate gifting, bespoke commissions — when it has to be perfect." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <span className="text-[#8e9882] text-lg mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-[#2c2c2c] mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision banner */}
        <section className="reveal bg-[#2c2c2c] py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#8e9882] text-xs tracking-[0.3em] uppercase mb-6">Our Vision</p>
            <p className="font-heading text-2xl md:text-4xl text-[#f5f3ee] font-light italic leading-relaxed">
              "To create art that doesn't just sit in your home — but becomes a show stopper."
            </p>
            <p className="mt-8 text-[#8e9882] text-sm tracking-widest">— Pragya, Founder, ETCH</p>
          </div>
        </section>


        {/* ════════════════════════════════
            SECTION SEPARATOR
        ════════════════════════════════ */}
        <div className="reveal py-20 px-6 max-w-5xl mx-auto">
          <div className="section-label">Our Process</div>
        </div>


        {/* ════════════════════════════════
            PROCESS
        ════════════════════════════════ */}

        <section className="pb-8 px-6 max-w-6xl mx-auto">
          <h2 className="reveal font-heading text-4xl md:text-5xl text-center font-light tracking-wide mb-4 text-[#2c2c2c]">
            How It's Made
          </h2>
          <p className="reveal d1 text-center text-muted-foreground text-sm tracking-widest uppercase mb-20">
            From raw slab to finished masterpiece
          </p>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal flex flex-col gap-8 md:gap-16 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div className="md:w-1/2">
                  <div className="process-img-wrap">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 md:h-[28rem] object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 max-w-md">
                  <span className="font-heading text-6xl md:text-8xl text-[#d1d1d1] font-light select-none">
                    {step.num}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl tracking-wide mt-2 mb-4 text-[#2c2c2c]">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process quote banner */}
        <section className="reveal bg-[#f5f3ee] py-20 md:py-28 mt-24 px-6">
          <p className="font-heading text-2xl md:text-4xl italic text-[#2c2c2c] text-center font-light max-w-3xl mx-auto leading-relaxed">
            "Every piece takes 5–7 days of careful handwork."
          </p>
        </section>

        {/* Customer Service Card */}
        <section className="reveal py-24 md:py-32 text-center px-6">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Headphone icon */}
            <svg className="mb-6 text-[#2c2c2c]" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
            
            <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide mb-6 text-[#2c2c2c]">
              Customer Service
            </h2>
            
            <p className="text-muted-foreground mb-12 leading-relaxed text-sm md:text-base max-w-4xl mx-auto">
              For instant help, use our Live Chat. You can also email us at{" "}
              <a href="mailto:etchstudio.in@gmail.com" className="underline hover:text-[#2c2c2c] transition-colors">
                etchstudio.in@gmail.com
              </a>
              , or call or text us at{" "}
              <a href="tel:+919330132374" className="underline hover:text-[#2c2c2c] transition-colors">
                +91 93301 32374
              </a>
            </p>

            {/* Pagination Style Dots */}
            <div className="flex gap-4 justify-center items-center">
              <div className="w-2.5 h-2.5 rounded-full border border-[#2c2c2c]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2c2c2c]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2c2c2c]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2c2c2c]"></div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
