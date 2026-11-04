import { MessageCircle, Check, ShieldCheck, FileCheck, Zap, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/siteData';

export default function PricingCtaSection() {
  const inclusions = [
    'Análise da integridade estrutural (longarinas, colunas e assoalho)',
    'Medição de espessura de pintura com micrômetro digital em cada peça',
    'Conferência de chassi, motor, câmbio e etiquetas de segurança',
    'Checagem de histórico documental (leilão, sinistros e furto)',
    'Verificação de enchente, oxidação oculta e conectores elétricos',
    'Análise de desgaste de pneus, estepe, suspensão e freios',
    'Diagnóstico via scanner eletrônico de injeção e falhas registradas',
    'Laudo pericial completo impresso e em PDF de alta resolução'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#181818] to-[#101010] border-2 border-[#d4af37]/40 p-8 sm:p-12 md:p-16 shadow-2xl shadow-black text-center relative overflow-hidden">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-4 h-4" />
            <span>Melhor Custo-Benefício do Mercado</span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
            Acredite, custa <span className="text-[#d4af37]">MUITO pouco</span> para evitar{' '}
            <span className="text-red-400">GRANDES dores de cabeça!</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Comprar um veículo no escuro é arriscar anos de economia. Com a nossa vistoria cautelar você descobre a verdade antes de transferir o dinheiro.
          </p>

          {/* Pricing Box */}
          <div className="bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto mb-10 shadow-inner">
            <span className="text-xs sm:text-sm font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
              Vistoria Cautelar Estrutural Completa
            </span>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-neutral-400 text-xl font-bold">Por apenas</span>
              <span className="font-heading text-4xl sm:text-6xl font-black text-[#d4af37]">
                R$ 260,00
              </span>
            </div>
            <span className="text-xs text-neutral-400 block mb-6">
              Linha leve · Pagamento facilitado · Laudo entregue no mesmo dia
            </span>

            {/* Checklist */}
            <div className="text-left grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-6 border-t border-white/10">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Big WhatsApp CTA Button */}
          <div className="flex flex-col items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.whatsappDirectMessage('Olá! Quero aproveitar a vistoria cautelar estrutural completa por R$ 260,00.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-black text-white bg-[#25D366] hover:bg-[#20ba59] rounded-2xl shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-105 pulse-whatsapp"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              <span>Garantir Minha Vistoria no WhatsApp</span>
            </a>
            <span className="text-xs text-neutral-400 mt-2">
              Atendimento ágil em Pelotas - RS · Tire todas as suas dúvidas agora
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
