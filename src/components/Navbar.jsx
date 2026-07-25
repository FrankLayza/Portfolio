import { useState, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NAV_LINKS, MORE_LINKS } from '../data/portfolioData';

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
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

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-paper border-b border-line">
      <div className="max-w-[640px] mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={[
                'text-[13px] transition-colors duration-150',
                active === link.label
                  ? 'text-ink font-medium'
                  : 'text-grey hover:text-ink',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}

          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center gap-[5px] text-[13px] text-grey hover:text-ink transition-colors duration-150 outline-none cursor-pointer select-none">
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
                className="z-50 min-w-[148px] bg-paper border border-line py-1 outline-none"
              >
                {MORE_LINKS.map(link => (
                  <DropdownMenu.Item key={link.label} asChild>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center px-4 py-2 text-[13px] text-grey hover:text-ink transition-colors duration-150 outline-none cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        <div className="flex items-center gap-[18px]">
          <a
            href="https://github.com/FrankLayza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-grey hover:text-ink transition-colors duration-150"
          >
            <FiGithub size={15} strokeWidth={1.75} />
          </a>

          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-grey hover:text-ink transition-colors duration-150 cursor-pointer"
          >
            {dark ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.75"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
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
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
