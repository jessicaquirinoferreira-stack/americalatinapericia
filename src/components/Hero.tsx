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
                <span>A Vistoria Cautelar Mais Técnica do Brasil</span>
              </span>
              <span className="text-white/40 hidden sm:inline">·</span>
              <span className="hidden sm:inline text-neutral-400">46+ anos de tradição em Pelotas - RS</span>
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
            <div className="mb-5 flex flex-wrap items-center gap-2 text-base sm:text-lg font-bold text-neutral-200">
              <span>Vistorias a partir de</span>
              <span className="text-[#d4af37] text-xl sm:text-2xl font-black px-2.5 py-0.5 bg-[#d4af37]/10 rounded border border-[#d4af37]/30">
                R$ 260,00
              </span>
              <span className="text-neutral-400">|</span>
              <span>Vistoria Completa Linha Leve por</span>
              <span className="text-white text-xl sm:text-2xl font-black px-2.5 py-0.5 bg-white/10 rounded border border-white/20">
                R$ 460,00
              </span>
            </div>

            {/* Quick Service Text */}
            <div className="mb-6 bg-gradient-to-r from-[#181818] to-transparent border-l-2 border-[#d4af37] pl-3 py-2">
              <p className="text-neutral-200 text-xs sm:text-sm font-medium mb-1">
                <strong className="text-[#d4af37]">ATENDIMENTO ÁGIL E PRÁTICO:</strong> Agilizamos seu laudo cautelar, <strong className="text-white">vamos até o local</strong>.
              </p>
              <p className="text-neutral-300 text-xs sm:text-sm">
                Envie a mensagem <strong className="text-emerald-400 font-bold">"SIM"</strong> para nosso WhatsApp{' '}
                <a
                  href={CONTACT_INFO.whatsappSimLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4af37] font-semibold underline underline-offset-4 hover:text-[#f3cf65]"
                >
                  53 98100-7069
                </a>{' '}
                /{' '}
                <a
                  href={CONTACT_INFO.whatsappSimLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4af37] font-semibold underline underline-offset-4 hover:text-[#f3cf65]"
                >
                  53 98118-7344
                </a>{' '}
                e já será atendido!
              </p>
            </div>

            {/* Bullet Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 bg-[#121212]/80 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Análise de pintura peça por peça (medidor digital + magnético)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Verificação de motor, fluidos, enchente e detecção de clonagem</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Conferência de numerações (chassi/motor), etiquetas e vidros</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Checagem de avarias, hodômetro, pneus, aros e desgaste interno</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Identificação com fotos de 45° e vídeo completo sob solicitação</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Opção completa com scanner total e estetoscópio (R$ 460,00)</span>
              </div>
            </div>

            {/* Trust Badges Strip from Flyers */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Compra 100% Segura</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853]" />
                <span>Facilitado via Mercado Pago</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Serviço Verificado & Confiável</span>
              </span>
            </div>

            {/* CTA Button Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CONTACT_INFO.whatsappSimLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:-translate-y-0.5 pulse-whatsapp"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>Enviar "SIM" no WhatsApp</span>
              </a>

              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
              >
                <Search className="w-4 h-4 text-[#d4af37]" />
                <span>Ver Planos: R$ 260 e R$ 460</span>
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
                    alt="Especialista com jaleco América Latina realizando vistoria pericial automotiva"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Price Tag on Image */}
                  <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md border border-[#d4af37]/50 px-3.5 py-1.5 rounded-xl shadow-lg text-right">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Vistorias</span>
                    <span className="text-base font-black text-[#d4af37]">A partir de R$ 260</span>
                    <span className="text-[10px] text-neutral-300 block">Completa: R$ 460,00</span>
                  </div>

                  {/* Bottom Image Overlay Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                      Laudo Pericial Oficial
                    </span>
                    <span className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 text-neutral-300">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      Vamos até o Local
                    </span>
                  </div>
                </div>

                {/* Secondary Inspection Info Strip */}
                <div className="p-4 pt-4 grid grid-cols-2 gap-3 text-left">
                  <div className="bg-black/50 border border-white/5 rounded-xl p-3">
                    <span className="text-[11px] text-neutral-400 block mb-0.5">Pagamento Facilitado</span>
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                      Via Mercado Pago
                    </span>
                  </div>
                  <div className="bg-black/50 border border-white/5 rounded-xl p-3">
                    <span className="text-[11px] text-neutral-400 block mb-0.5">Atendimento Ágil</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                      Envie "SIM" no WhatsApp
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
