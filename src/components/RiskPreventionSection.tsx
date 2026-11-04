import { AlertTriangle, Fingerprint, Droplets, Copy, Gauge, FileWarning, Layers, Wrench, ShieldAlert, ArrowRight, MessageCircle } from 'lucide-react';
import { RISKS_AVOIDED, CONTACT_INFO, OFFICIAL_ASSETS } from '../data/siteData';

export default function RiskPreventionSection() {
  const getRiskIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      case 'Fingerprint':
        return <Fingerprint className="w-5 h-5 text-amber-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-400" />;
      case 'Copy':
        return <Copy className="w-5 h-5 text-purple-400" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-orange-400" />;
      case 'FileWarning':
        return <FileWarning className="w-5 h-5 text-yellow-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="riscos" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Alert Top */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-950/40 via-neutral-900 to-red-950/40 border border-red-500/30 rounded-2xl p-6 sm:p-8 text-center mb-16 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-4 h-4" />
            <span>Alerta de Segurança Veicular</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
            Por que devo saber o histórico do meu veículo?
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            <span className="text-red-400 font-bold">Não se deixe enganar por aparências.</span> Um polimento e uma lavagem de motor escondem batidas violentas, peças emendadas e adulterações que desvalorizam seu carro e colocam sua família em perigo.
          </p>
        </div>

        {/* 8 Risks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {RISKS_AVOIDED.map((risk, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-white/10 hover:border-[#d4af37]/40 rounded-xl p-5 transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  {getRiskIcon(risk.icon)}
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  {risk.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {risk.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-red-400/90 font-medium flex items-center gap-1">
                <span>Risco 100% detectado no nosso laudo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout Card */}
        <div className="bg-[#121212] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-1">
              DECISÃO INTELIGENTE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3">
              R$ 260 de investimento vs. Dezenas de milhares de prejuízo
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              Ao comprar um veículo sem vistoria cautelar, qualquer vício oculto ou histórico desabonador (leilão, sinistro média monta, corte de longarina) torna-se seu prejuízo no momento de segurar ou revender.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-300">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                Comprovante técnico com validade jurídica
              </span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                Poder de barganha real para baixar o preço na compra
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-black/50 border border-white/10 rounded-2xl p-6 text-center">
            <span className="text-xs text-neutral-400 mb-1">Vistoria Cautelar Completa</span>
            <span className="font-heading text-3xl font-black text-[#d4af37] mb-4">
              R$ 260,00
            </span>
            <a
              href={CONTACT_INFO.whatsappDirectMessage('Olá! Quero agendar a vistoria cautelar estrutural completa de R$ 260.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Agendar Minha Vistoria</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
