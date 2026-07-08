'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Summary', id: 'executive-summary' },
  { label: 'Problem', id: 'problem-definition' },
  { label: 'Industry', id: 'industry-overview' },
  { label: 'AI Opportunity', id: 'ai-opportunity' },
  { label: 'Use Cases', id: 'ai-use-cases' },
  { label: 'Roadmap', id: 'implementation' },
  { label: 'KPIs', id: 'kpi-dashboard' },
  { label: 'Recommendations', id: 'recommendations' },
] as const;

const NAV_HEIGHT = 64;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    setScrollProgress(Math.min(progress, 100));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent">
          <motion.div
            className="h-full"
            style={{
              width: `${scrollProgress}%`,
              background: '#C9A84C',
            }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-baseline gap-0 shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-pointer"
              >
                <span
                  className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                    scrolled ? 'text-[#0A1628]' : 'text-white'
                  }`}
                >
                  BNY
                </span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('footer');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer group"
              >
                <span
                  className={`text-sm font-light tracking-wide transition-colors duration-300 group-hover:underline ${
                    scrolled ? 'text-[#0A1628]/60 hover:text-[#0A1628]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  &nbsp;| Student Research Team
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                    scrolled
                      ? 'text-[#0A1628]/70 hover:text-[#0A1628] hover:bg-[#0A1628]/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`lg:hidden p-2 rounded-md transition-colors duration-200 cursor-pointer ${
                scrolled
                  ? 'text-[#0A1628] hover:bg-[#0A1628]/5'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden bg-[#0A1628] border-t border-white/10 shadow-xl"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium transition-colors duration-150 cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
