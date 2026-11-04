import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Certificado Google', href: '#google-certificado' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Para quem é', href: '#para-quem-e' },
    { label: 'Riscos', href: '#riscos' },
    { label: 'Equipamentos', href: '#equipamentos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#111111] border-b border-white/5 py-1.5 px-4 text-xs text-neutral-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>R. Santos Dumont, 551 - Pelotas, RS</span>
            </span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Seg a Sex: 08:30-11:30 / 13:30-18:30</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <a
              href={CONTACT_INFO.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-[#f3cf65] font-medium flex items-center gap-1 transition-colors"
            >
              ★ 5.0 no Google (128+ avaliações)
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:53981007069`}
              className="hover:text-[#d4af37] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              (53) 98100-7069
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
            : 'bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark / Official Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-lg p-1"
          >
            <img
              src={OFFICIAL_ASSETS.logo}
              alt="América Latina Perícias e Vistorias Cautelares Logo"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading text-sm sm:text-base font-extrabold tracking-wide text-white leading-tight">
                AMÉRICA LATINA
              </span>
              <span className="text-[10px] sm:text-xs text-[#d4af37] font-semibold tracking-wider uppercase">
                Perícias & Vistorias Cautelares
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single line) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Entrar em Contato</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111111] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-200 hover:text-[#d4af37] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Entrar em Contato no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
