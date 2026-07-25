import { useState, useEffect } from 'react';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NAV_LINKS, MORE_LINKS } from '../data/portfolioData';

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const isDark = stored ? stored === 'dark' : mediaQuery.matches;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);

    const handleMediaChange = (e) => {
      if (!localStorage.getItem('portfolio-theme')) {
        setDark(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const toggle = () => {
    setDark(prev => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return { dark, toggle };
}

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.filter(l => l.id).map(l => l.id);
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const onScroll = () => { if (window.scrollY < 80) setActive('home'); };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleMobileNavClick = (href) => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-paper border-b border-line">
      <div className="max-w-[640px] mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">

        {/* ===== DESKTOP NAV (sm:flex) ===== */}
        <div className="hidden sm:flex items-center gap-5">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={[
                'text-[13px] py-1 transition-colors duration-150 active:scale-[0.97]',
                active === link.label
                  ? 'text-ink font-medium'
                  : 'text-grey hover:text-ink',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}

          {/* More dropdown */}
          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger className="flex items-center gap-[5px] text-[13px] text-grey hover:text-ink transition-colors duration-150 outline-none cursor-pointer select-none active:scale-[0.97]">
              more
              <svg
                width="9" height="9" viewBox="0 0 9 6"
                fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 1l3.5 3.5L8 1"/>
              </svg>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={8}
                align="start"
                className="z-50 min-w-[148px] bg-paper border border-line py-1 outline-none shadow-sm"
              >
                {MORE_LINKS.map(link => (
                  <DropdownMenu.Item key={link.label} asChild>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center px-4 py-2 text-[13px] text-grey hover:text-ink transition-colors duration-150 outline-none cursor-pointer active:scale-[0.98]"
                    >
                      {link.label}
                    </a>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        {/* ===== MOBILE HEADER BRAND (flex sm:hidden) ===== */}
        <div className="flex sm:hidden items-center">
          <a
            href="#"
            className="text-xs font-mono tracking-tight font-medium text-ink active:scale-95 transition-transform duration-150"
          >
            frank anthony
          </a>
        </div>

        {/* ===== RIGHT CONTROLS (Desktop + Mobile) ===== */}
        <div className="flex items-center gap-3 sm:gap-[18px]">
          <a
            href="https://github.com/FrankLayza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-1 text-grey hover:text-ink transition-colors duration-150 active:scale-95"
          >
            <FiGithub size={16} strokeWidth={1.75} />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-1 text-grey hover:text-ink transition-colors duration-150 cursor-pointer active:scale-95 flex items-center justify-center"
          >
            <span className="inline-block transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-12 active:scale-90">
              {dark ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.75"
                  strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                  className="animate-in fade-in spin-in-90 duration-200"
                >
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1"  x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1"  y1="12" x2="3"  y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.75"
                  strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                  className="animate-in fade-in spin-in--90 duration-200"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </span>
          </button>

          {/* Hamburger toggle button (Mobile only) */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex sm:hidden p-1 text-grey hover:text-ink transition-colors duration-150 cursor-pointer active:scale-95"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

      </div>

      {/* ===== MOBILE EXPANDABLE MENU PANEL ===== */}
      {menuOpen && (
        <div className="block sm:hidden bg-paper border-b border-line px-4 py-3 space-y-2 origin-top transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] animate-in fade-in slide-in-from-top-1 zoom-in-[0.97]">
          <div className="flex flex-col space-y-1">
            <div className="text-[10px] tracking-wider uppercase text-grey px-2 py-1 font-mono">
              Navigation
            </div>
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleMobileNavClick(link.href)}
                className={[
                  'px-2 py-2 text-xs transition-colors duration-150 active:scale-[0.98] rounded-none',
                  active === link.label
                    ? 'text-ink font-medium bg-line/30'
                    : 'text-grey hover:text-ink',
                ].join(' ')}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="border-t border-line/60 pt-2 flex flex-col space-y-1">
            <div className="text-[10px] tracking-wider uppercase text-grey px-2 py-1 font-mono">
              Links
            </div>
            {MORE_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-1.5 text-xs text-grey hover:text-ink transition-colors duration-150 active:scale-[0.98]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
