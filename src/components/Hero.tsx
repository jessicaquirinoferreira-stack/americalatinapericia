import { MessageCircle, ShieldCheck, CheckCircle2, Star, Clock, FileCheck, Search, Award } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/siteData';

export default function Hero() {
  const inspectionPoints = [
    'Medição de espessura peça por peça (micrômetro digital)',
    'Análise técnica de pneus, rodas e estepe',
    'Detecção rigorosa de enchente e submersão',
    'Prevenção contra clonagem veicular e dublê',
    'HISTÓRICO documental e leilão completos',
    'Exame de todos os números de identificação e etiquetas obrigatórias'
  ];

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center bg-[#0a0a0a] overflow-hidden pt-8 pb-16">
      {/* Background Graphic & Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/95 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Authority Micro-bar */}
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-[#d4af37]">
              <span className="flex items-center gap-1 bg-[#161616] border border-[#d4af37]/30 px-3 py-1 rounded-md">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Mais de 46 anos de tradição em Pelotas - RS</span>
              </span>
              <span className="text-white/40 hidden sm:inline">·</span>
              <span className="hidden sm:inline text-neutral-400">Referência em Perícias Técnicas</span>
            </div>

            {/* Official Logo Banner */}
            <div className="mb-6 flex items-center">
              <img
                src={OFFICIAL_ASSETS.logo}
                alt="América Latina Perícias e Vistorias Cautelares"
                referrerPolicy="no-referrer"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
              />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.12] tracking-tight mb-4">
              SERIEDADE, EXPERIÊNCIA E{' '}
              <span className="text-gold-gradient block sm:inline">
                PREÇO BAIXO.
              </span>
            </h1>

            {/* Subtitle with Price Highlight */}
            <div className="mb-5 inline-flex items-center flex-wrap gap-2 text-lg sm:text-xl font-bold text-neutral-200">
              <span>Apenas</span>
              <span className="text-[#d4af37] text-2xl sm:text-3xl font-extrabold px-2 py-0.5 bg-[#d4af37]/10 rounded border border-[#d4af37]/30">
                R$ 260,00
              </span>
              <span className="text-white">Vistoria CAUTELAR estrutural completa.</span>
            </div>

            {/* Quick Service Text */}
            <p className="text-neutral-300 text-sm sm:text-base mb-6 leading-relaxed">
              Atendimento <strong className="text-white font-bold">RÁPIDO</strong>. Clique aqui ou chame no WhatsApp{' '}
              <a
                href={CONTACT_INFO.whatsappDirectMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] font-semibold underline underline-offset-4 hover:text-[#f3cf65]"
              >
                53 98100-7069
              </a>{' '}
              /{' '}
              <a
                href={CONTACT_INFO.whatsappDirectMessage('Olá! Gostaria de falar com o plantão de vistorias.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] font-semibold underline underline-offset-4 hover:text-[#f3cf65]"
              >
                53 98118-7344
              </a>
            </p>

            {/* Bullet Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 bg-[#121212]/80 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
              {inspectionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Authority & Google Rating Statement */}
            <div className="flex items-center gap-3 mb-8 bg-gradient-to-r from-white/5 to-transparent border-l-2 border-[#d4af37] pl-3 py-1">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">
                Confira nossa reputação no <strong className="text-white">Google (5.0 Estrelas)</strong>: somos referência por bons serviços e atendimento há mais de{' '}
                <strong className="text-[#d4af37]">46 anos</strong>.
              </p>
            </div>

            {/* CTA Button Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:-translate-y-0.5 pulse-whatsapp"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>Entrar em Contato</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
              >
                <Search className="w-4 h-4 text-[#d4af37]" />
                <span>Ver Todos os Serviços</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow Card */}
              <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-gradient-to-b from-[#181818] to-[#0f0f0f] p-3 shadow-2xl shadow-black/80">
                {/* Generated High-Resolution Automotive Forensic Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900">
                  <img
                    src={OFFICIAL_ASSETS.generated.hero}
                    alt="Especialista realizando vistoria pericial automotiva"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Price Tag on Image */}
                  <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-[#d4af37]/50 px-3.5 py-1.5 rounded-xl shadow-lg">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Vistoria Completa</span>
                    <span className="text-lg font-black text-[#d4af37]">R$ 260,00</span>
                  </div>

                  {/* Bottom Image Overlay Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                      Laudo Pericial Oficial
                    </span>
                    <span className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 text-neutral-300">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      Laudo em até 3h
                    </span>
                  </div>
                </div>

                {/* Secondary Inspection Info Strip */}
                <div className="p-4 pt-4 grid grid-cols-2 gap-3 text-left">
                  <div className="bg-black/50 border border-white/5 rounded-xl p-3">
                    <span className="text-[11px] text-neutral-400 block mb-0.5">Laboratório Pericial</span>
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                      28 Testes Físicos
                    </span>
                  </div>
                  <div className="bg-black/50 border border-white/5 rounded-xl p-3">
                    <span className="text-[11px] text-neutral-400 block mb-0.5">Atendimento</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                      Horários Disponíveis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Metric Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-white font-heading">
              +46 <span className="text-[#d4af37]">Anos</span>
            </span>
            <span className="text-xs sm:text-sm text-neutral-400 mt-1">Tradição & Confiança em Pelotas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-white font-heading flex items-center gap-1">
              5.0 <span className="text-amber-400 text-2xl">★</span>
            </span>
            <span className="text-xs sm:text-sm text-neutral-400 mt-1">128+ Avaliações Máximas no Google</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-white font-heading">
              28 <span className="text-[#d4af37]">Equipamentos</span>
            </span>
            <span className="text-xs sm:text-sm text-neutral-400 mt-1">Bateria Pericial de Alta Precisão</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-white font-heading">
              100% <span className="text-[#d4af37]">Imparcial</span>
            </span>
            <span className="text-xs sm:text-sm text-neutral-400 mt-1">Laudo com Validade Técnica e Jurídica</span>
          </div>
        </div>
      </div>
    </section>
  );
}
