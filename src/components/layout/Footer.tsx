// @ts-nocheck
export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0A1628] text-white border-t-[3px] border-[#C9A84C]">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        {/* Disclaimer */}
        <p className="text-white/50 text-xs leading-relaxed max-w-2xl mx-auto">
          This presentation is a hypothetical strategic proposal created for
          portfolio and demonstration purposes only. All data, analyses, and
          recommendations are based on publicly available information and do not
          represent the views, strategies, or proprietary information of BNY or
          any affiliated entity.
        </p>

        {/* Divider */}
        <div className="my-8 mx-auto w-16 h-px bg-[#C9A84C]/30" />

        {/* Attribution */}
        <p className="text-white/70 text-sm font-light tracking-wide">
          Prepared by{' '}
          <span className="text-[#C9A84C] font-medium">
            Student Research Team -{" "}
            <a href="https://www.linkedin.com/in/amogh-mishra-71a1ab318" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors">Amogh Mishra</a>
            {" "}and{" "}
            <a href="https://www.linkedin.com/in/mihir-patel-6b361b37b" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors">Mihir Patel</a>
          </span>
        </p>

        {/* Copyright */}
        <p className="mt-4 text-white/30 text-xs tracking-wider">
          &copy; 2025 &mdash; All rights reserved
        </p>
      </div>
    </footer>
  );
}
