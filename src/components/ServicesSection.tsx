import { useState } from 'react';
import { MessageCircle, ShieldCheck, FileCheck, Scale, Activity, Building2, ChevronRight, CheckCircle, X, Sparkles } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO, ServiceItem } from '../data/siteData';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#d4af37]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#d4af37]" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#d4af37]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#d4af37]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d4af37] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 block">
            NOSSAS SOLUÇÕES ESPECIALIZADAS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Aqui você encontra...
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Metodologia científica forense, instrumentação com calibração digital e corpo pericial experiente para qualquer demanda automotiva e documental.
          </p>
        </div>

        {/* 5 Main Service Cards (Bento & Dynamic Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = index === 0 || index === 1;
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-[#141414] border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/10 flex flex-col justify-between ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Image Header with Scrim */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />

                    {/* Tag Top Right */}
                    <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#d4af37]">
                      {service.tag}
                    </div>

                    {/* Icon Badge Top Left */}
                    <div className="absolute bottom-3 left-4 w-12 h-12 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:border-[#d4af37]/50 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Highlights bullet list */}
                    <ul className="space-y-2 mb-6">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 pt-0 mt-auto border-t border-white/5 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={CONTACT_INFO.whatsappDirectMessage(`Olá! Gostaria de saber mais e agendar o serviço de ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl transition-all shadow-md shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Entrar em Contato</span>
                  </a>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                  >
                    <span>Ver detalhes</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Callout Bar */}
        <div className="mt-12 bg-gradient-to-r from-[#181818] via-[#1f1a10] to-[#181818] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-white mb-1">
                Precisa de vistoria para máquinas agrícolas ou frotas pesadas?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                Atendemos tratores, colheitadeiras, caminhões e utilitários em Pelotas e em toda a região sul do estado.
              </p>
            </div>
          </div>
          <a
            href={CONTACT_INFO.whatsappDirectMessage('Olá! Gostaria de consultar vistoria para maquinário agrícola ou caminhão.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 text-xs sm:text-sm font-bold text-black bg-[#d4af37] hover:bg-[#f3cf65] rounded-xl transition-colors shadow-lg"
          >
            Consultar Linha Pesada
          </a>
        </div>
      </div>

      {/* Modal Details Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#141414] border border-[#d4af37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-white/5 rounded-lg transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-neutral-900 border border-white/10">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37]">
                {selectedService.tag}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/30">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs text-[#d4af37] font-bold uppercase tracking-wider">{selectedService.tag}</span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedService.fullDescription}
            </p>

            <div className="mb-6 bg-black/40 border border-white/5 rounded-xl p-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                O que inclui este procedimento pericial:
              </h4>
              <ul className="space-y-2">
                {selectedService.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={CONTACT_INFO.whatsappDirectMessage(`Olá! Gostaria de agendar o serviço de ${selectedService.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Agendar pelo WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3.5 px-6 font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
