import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/siteData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#d4af37] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 block">
            TIRE TODAS AS SUAS DÚVIDAS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Esclarecimentos diretos e transparentes sobre valores, prazos, procedimentos e validade dos nossos laudos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#131313] border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-[#d4af37] text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 shrink-0">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Help Callout */}
        <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-sm sm:text-base font-bold text-white mb-1">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs text-neutral-400">
              Nossa equipe responde em minutos no WhatsApp sem qualquer compromisso.
            </p>
          </div>
          <a
            href={CONTACT_INFO.whatsappDirectMessage('Olá! Tenho uma dúvida sobre a vistoria cautelar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
