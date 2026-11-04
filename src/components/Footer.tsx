import { Phone, Mail, MapPin, Instagram, MessageCircle, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/siteData';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#070707] border-t border-white/10 pt-16 pb-24 lg:pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src={OFFICIAL_ASSETS.logo}
                alt="América Latina Perícias"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-sm font-extrabold text-white tracking-wide">
                  AMÉRICA LATINA
                </span>
                <span className="text-[10px] text-[#d4af37] font-semibold tracking-wider uppercase">
                  Perícias & Vistorias
                </span>
              </div>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Mais de 46 anos de tradição em perícias veiculares, exames estruturais 3D, laudos judiciais e vistorias cautelares de alta precisão técnica em Pelotas e região.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Laudos com rigor técnico e fé pública</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#d4af37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#para-quem-e" className="hover:text-[#d4af37] transition-colors">
                  Para Quem É
                </a>
              </li>
              <li>
                <a href="#riscos" className="hover:text-[#d4af37] transition-colors">
                  Riscos Evitados
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-[#d4af37] transition-colors">
                  28 Equipamentos Periciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#d4af37] transition-colors">
                  Depoimentos no Google
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#d4af37] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Serviços Periciais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Vistoria Cautelar Estrutural (R$ 260)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Exame Estrutural 3D & Ultrassom
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Laudos Periciais Judiciais
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Simulação Científica de Acidentes
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Auditoria de Frotas Públicas e Privadas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Vistoria em Máquinas Agrícolas e Barcos
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Direct Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Canais Oficiais
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                </div>
                <span>WhatsApp: (53) 98100-7069</span>
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram: {CONTACT_INFO.instagramHandle}</span>
              </a>

              <a
                href={CONTACT_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#4285F4]/20 text-[#4285F4] flex items-center justify-center font-bold text-xs">
                  G
                </div>
                <span>Google Empresas (5.0 ★)</span>
              </a>

              <div className="flex items-start gap-2.5 text-neutral-400 pt-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>R. Santos Dumont, 551 - Centro, Pelotas - RS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="text-center md:text-left">
            © 2024-{currentYear} América Latina Perícias e Vistorias Cautelares – Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Pelotas - Rio Grande do Sul</span>
            <span>·</span>
            <span>CNPJ & Registro Técnico Regular</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
