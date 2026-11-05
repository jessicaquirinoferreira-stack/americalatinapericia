import { Building, Shield, Briefcase, UserCheck, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { TARGET_AUDIENCE, CONTACT_INFO } from '../data/siteData';

export default function TargetAudienceSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building className="w-6 h-6 text-[#d4af37]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#d4af37]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#d4af37]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <UserCheck className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section id="para-quem-e" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d4af37] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 block">
            SEGMENTOS ATENDIDOS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Para quem é a América Latina?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Seja você um comprador individual ou uma grande corporação, entregamos a certeza técnica que protege seu dinheiro, patrimônio e segurança jurídica.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 card-gold-hover ${
                index === 3
                  ? 'bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-[#d4af37]/60 shadow-xl shadow-[#d4af37]/5'
                  : 'bg-[#121212] border border-white/10'
              }`}
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  {index === 3 && (
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-[#d4af37] text-black rounded-full">
                      Pessoa Física
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold text-[#d4af37] block mb-1">
                  {item.role}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                  {item.headline}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 mb-6 border-t border-white/5 pt-4">
                  {item.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={CONTACT_INFO.whatsappDirectMessage(
                  index === 3
                    ? 'SIM! Gostaria de agendar vistoria (a partir de R$ 260 estrutural ou R$ 460 completa).'
                    : `SIM! Sou do segmento de ${item.title} e gostaria de solicitar atendimento pericial.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                  index === 3
                    ? 'bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10'
                }`}
              >
                <span>{item.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Corporate Specialty Banner from Flyer 3 */}
        <div className="mt-12 bg-gradient-to-r from-[#181818] via-[#1c1810] to-[#181818] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                VISTORIA CAUTELAR COMPLETA (R$ 460,00) · ESPECIAL PARA:
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Seguradoras', 'Bancos e Financeiras', 'Cooperativas de Crédito', 'Empresas de Frotas', 'Compras Corporativas', 'Garantias Contratuais'].map((sector, sIdx) => (
                  <span key={sIdx} className="text-xs font-medium bg-black/60 border border-white/10 px-3 py-1 rounded-lg text-neutral-200">
                    ✓ {sector}
                  </span>
                ))}
              </div>
              <p className="text-xs text-neutral-400 pt-2 leading-relaxed">
                Observando critérios técnicos reconhecidos pelos conselhos e normas aplicáveis à atividade pericial. Maior profundidade de análise, responsabilidade técnica e confiabilidade documental.
              </p>
            </div>

            <a
              href={CONTACT_INFO.whatsappDirectMessage('SIM! Gostaria de atendimento corporativo para Vistoria Cautelar Completa (R$ 460).')}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3.5 text-xs sm:text-sm font-bold text-black bg-[#d4af37] hover:bg-[#f3cf65] rounded-xl transition-all shadow-lg shrink-0"
            >
              Atendimento Corporativo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
