import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { FaBars, FaTimes, FaGlobe, FaShieldAlt } from 'react-icons/fa';

interface NavbarProps {
  onJoinClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.statistics'), href: '#statistics' },
    { label: t('nav.manifesto'), href: '#commitments' },
    { label: t('nav.initiatives'), href: '#breakdown' },
    { label: t('nav.mediaHub'), href: '#digital-hub' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-xl font-black tracking-tight text-[#1a365d] whitespace-nowrap"
          >
            <span className="w-8 h-8 rounded-lg bg-[#1a365d] text-amber-400 flex items-center justify-center font-black text-base shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-amber-400" />
            </span>
            <span>{t('nav.brand')}</span>
          </a>

          {/* Zone 2: 4-6 Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1a365d] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1a365d] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions (Language Toggle + Join CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer"
              title="Change Language"
              aria-label="Change Language"
            >
              <FaGlobe className="w-3.5 h-3.5 text-slate-500" />
              <span>{i18n.language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            <Button
              variant="primary"
              size="sm"
              onClick={onJoinClick}
              className="shadow-sm whitespace-nowrap"
            >
              {t('nav.join')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2 py-1 text-xs font-semibold text-slate-700 border border-slate-200 rounded"
              aria-label="Change Language"
            >
              {i18n.language === 'en' ? 'हि' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-[#1a365d] hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onJoinClick) onJoinClick();
              }}
            >
              {t('nav.join')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
