import { useState } from 'react';
import { MessageCircle, Check, ShieldCheck, Zap, Award, Sparkles, MapPin, Phone, Car, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, FLYER_PLANS } from '../data/siteData';

export default function PricingCtaSection() {
  return (
    <section id="planos" className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Zap className="w-4 h-4" />
            <span>{FLYER_PLANS.slogan}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Acredite, custa <span className="text-[#d4af37]">MUITO pouco</span> para evitar{' '}
            <span className="text-red-400">GRANDES dores de cabeça!</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Nossos laudos periciais iniciam a partir de <strong>R$ 260,00</strong> com cobertura estrutural profunda, e chegam a <strong>R$ 460,00</strong> na vistoria cautelar completa com scanner eletrônico total e análise técnica de motor.
          </p>

          {/* 4 Trust Badges from Flyers */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#161616] border border-white/10 rounded-xl text-neutral-200">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="font-semibold">Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#161616] border border-white/10 rounded-xl text-neutral-200">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00a650] shrink-0" />
              <span className="font-semibold">Pagamento Facilitado via Mercado Pago</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#161616] border border-white/10 rounded-xl text-neutral-200">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span className="font-semibold">Serviço Verificado & Confiável</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#161616] border border-white/10 rounded-xl text-neutral-200">
              <Car className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold">Agilizamos seu laudo: vamos até o local!</span>
            </div>
          </div>
        </div>

        {/* 2 Main Plans Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Plan 1: Vistoria Cautelar Estrutural (R$ 260,00) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/40 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 bg-white/5 px-3 py-1 rounded-full">
                  Plano Estrutural
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Melhor Custo
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mb-2">
                {FLYER_PLANS.structuralPlan.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                {FLYER_PLANS.structuralPlan.description}
              </p>

              {/* Price Banner */}
              <div className="bg-black/60 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6 flex items-baseline gap-2">
                <span className="text-xs text-neutral-400 uppercase font-semibold">Por apenas</span>
                <span className="font-heading text-3xl sm:text-4xl font-black text-[#d4af37]">
                  R$ 260,00
                </span>
                <span className="text-xs text-neutral-400 ml-auto hidden sm:inline">Mercado Pago</span>
              </div>

              {/* Flyer Checklist */}
              <div className="space-y-2.5 mb-8">
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
                  Serviços Inclusos (Conforme Flyer Oficial):
                </span>
                {FLYER_PLANS.structuralPlan.includedServices.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan 1 CTA */}
            <div className="pt-6 border-t border-white/10">
              <a
                href={CONTACT_INFO.whatsappDirectMessage('SIM! Gostaria de agendar a Vistoria Cautelar Estrutural por R$ 260,00.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] text-sm transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enviar "SIM" para Vistoria R$ 260</span>
              </a>
              <span className="text-[11px] text-neutral-500 text-center block mt-2">
                Agendamento rápido · Vamos até o local
              </span>
            </div>
          </div>

          {/* Plan 2: Vistoria Cautelar Completa (R$ 460,00) */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#1b1710] via-[#141414] to-[#111111] border-2 border-[#d4af37] p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-[#d4af37]/10 relative">
            {/* Top Star Tag */}
            <div className="absolute -top-3.5 right-6 bg-[#d4af37] text-black font-heading font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              Mais Completa & Profunda
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/15 px-3 py-1 rounded-full border border-[#d4af37]/30">
                  {FLYER_PLANS.fullPlan.target}
                </span>
                <span className="text-xs text-neutral-400">
                  Padrão Pericial Máximo
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mb-2">
                {FLYER_PLANS.fullPlan.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                {FLYER_PLANS.fullPlan.description}
              </p>

              {/* Price Banner */}
              <div className="bg-black/80 border border-[#d4af37]/40 rounded-2xl p-4 sm:p-5 mb-6 flex items-baseline gap-2">
                <span className="text-xs text-neutral-400 uppercase font-semibold">Apenas</span>
                <span className="font-heading text-3xl sm:text-4xl font-black text-[#d4af37]">
                  R$ 460,00
                </span>
                <span className="text-xs text-emerald-400 ml-auto font-medium hidden sm:inline">
                  Tudo Incluso
                </span>
              </div>

              {/* 4 Pillars of Flyer 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {FLYER_PLANS.fullPlan.pillars.map((pillar, idx) => (
                  <div key={idx} className="bg-black/50 border border-white/10 rounded-xl p-3">
                    <h5 className="font-heading text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{pillar.title}</span>
                    </h5>
                    <p className="text-[11px] text-neutral-400 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* What the Completa adds (Opção Adicional) */}
              <div className="bg-[#181510] border border-[#d4af37]/30 rounded-2xl p-4 mb-6">
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                  Inclui o Pacote Estrutural + Diagnóstico Mecânico & Scanner Total:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-200">
                  {FLYER_PLANS.additionalAddon.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Especial Para Strip */}
              <div className="mb-6">
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                  Especial para quem exige máxima segurança:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {FLYER_PLANS.fullPlan.specialFor.map((item, i) => (
                    <span key={i} className="text-[11px] font-medium bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-neutral-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Plan 2 CTA */}
            <div className="pt-6 border-t border-white/10">
              <a
                href={CONTACT_INFO.whatsappDirectMessage('SIM! Gostaria de agendar a Vistoria Cautelar Completa por R$ 460,00.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-black text-black bg-[#d4af37] hover:bg-[#f3cf65] text-sm transition-all shadow-xl shadow-[#d4af37]/20"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Enviar "SIM" para Vistoria Completa R$ 460</span>
              </a>
              <span className="text-[11px] text-neutral-500 text-center block mt-2">
                Maior responsabilidade técnica · Decisões seguras
              </span>
            </div>
          </div>
        </div>

        {/* Big Yellow Flyer Action Strip: ENVIE MENSAGEM "SIM" */}
        <div className="rounded-3xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] p-8 sm:p-10 text-black shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-black text-[#d4af37] flex items-center justify-center shrink-0 shadow-lg">
              <MessageCircle className="w-8 h-8 fill-[#d4af37]" />
            </div>
            <div>
              <span className="text-xs font-mono font-black uppercase tracking-wider text-black/70 block mb-0.5">
                ATENDIMENTO IMEDIATO
              </span>
              <h4 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-black leading-tight">
                Envie a mensagem "SIM" para nosso WhatsApp e já será atendido!
              </h4>
              <p className="text-xs sm:text-sm text-black/80 font-medium mt-1">
                Agilizamos seu laudo cautelar · Vamos até o local · Pelotas - RS
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={CONTACT_INFO.whatsappSimLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-black hover:bg-neutral-900 text-white font-black text-sm rounded-xl shadow-xl transition-all transform hover:scale-105"
            >
              <span>Enviar "SIM" Agora</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
