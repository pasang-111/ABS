import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-orange-500/20 bg-gradient-to-b from-[#9a3412] via-[#c2410c] to-[#9a3412]">
      {/* Main footer */}
      <div className="w-[min(100%-2rem,1200px)] mx-auto pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_2fr] gap-12">
          {/* Brand + home link */}
          <div>
            <a
              href="#top"
              className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-lg"
              aria-label="After Built Solutions — back to home"
            >
              <Image
                src="/logo-nav-white-opt.png"
                alt="After Built Solutions"
                width={160}
                height={48}
                className="h-11 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
            <p className="mt-4 text-[14px] text-white/80 max-w-[28ch] leading-relaxed">
              Finishing what the builders leave behind across South West Sydney.
            </p>

            {/* Part of Rey Corporate Group */}
            <p className="mt-4 text-[13px] text-white/70 leading-relaxed">
              Part of{" "}
              <a
                href="https://reycorp.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-orange-100 underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
              >
                Rey Corporate Group
              </a>
            </p>
            <a
              href="https://reycorp.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-white/75 hover:text-white transition-colors focus:outline-none focus-visible:underline"
            >
              reycorp.com.au
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="#top"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-100 transition-colors focus:outline-none focus-visible:underline"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to home
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Contact */}
            <div>
              <h4 className="text-[11px] tracking-[0.16em] uppercase text-orange-100/90 font-bold mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:Afterbuiltsolutions@gmail.com"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Email us
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+61413230730"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    0413 230 730
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=6+Kibble+Place+Narellan+NSW+2567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Narellan NSW showroom
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-[11px] tracking-[0.16em] uppercase text-orange-100/90 font-bold mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#top"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#before-after"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Before & After
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#brochures"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Brochures
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Social + Group */}
            <div>
              <h4 className="text-[11px] tracking-[0.16em] uppercase text-orange-100/90 font-bold mb-4">
                Social
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://www.tiktok.com/@afterbuiltsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/afterbuiltsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/after.built/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>

              <h4 className="text-[11px] tracking-[0.16em] uppercase text-orange-100/90 font-bold mb-3 mt-6">
                Group
              </h4>
              <a
                href="https://reycorp.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-white/85 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
              >
                Rey Corporate Group
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="w-[min(100%-2rem,1200px)] mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/70">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <a
              href="#top"
              className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
            >
              After Built Solutions
            </a>
            {" · "}
            Part of{" "}
            <a
              href="https://reycorp.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
            >
              Rey Corporate Group
            </a>
          </p>
          <a
            href="https://maps.google.com/?q=6+Kibble+Place+Narellan+NSW+2567"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-none focus-visible:underline"
          >
            Showroom · 6 Kibble Place, Narellan 2567 NSW
          </a>
        </div>
      </div>
    </footer>
  );
}