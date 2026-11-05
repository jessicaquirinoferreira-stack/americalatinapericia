import { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, Award, ExternalLink, Search, MapPin, Phone, Clock, FileCheck, Sparkles, X, Share2, Download } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/siteData';

export default function GoogleCertificateSection() {
  const [activeSearchTerm, setActiveSearchTerm] = useState('Vistoria Cautelar Pelotas');
  const [modalCertificateOpen, setModalCertificateOpen] = useState(false);

  const searchKeywords = [
    'Vistoria Cautelar Pelotas',
    'Vistoria Cautelar',
    'Perícia automotiva',
    'vistoriador de automóveis',
    'Perito Veicular',
    'Cautelares Pelotas',
    'Rápida Visão'
  ];

  return (
    <section id="google-certificado" className="py-20 bg-[#0d0d0d] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4285F4]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#34A853]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 mb-4 shadow-sm">
            {/* Google G Logo */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span className="text-xs font-bold text-white tracking-wide">
              Google Meu Negócio · Certificado de Excelência 5.0
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Certificação Oficial no Google
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Nossa reputação é atestada por centenas de clientes em Pelotas e região. Conheça nosso certificado oficial de avaliação máxima e veja nossa presença nas buscas.
          </p>
        </div>

        {/* 2-Column Showcase: Official Certificate + Google Search Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Official Google Certificate Card (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#181818] via-[#141414] to-[#0f0f0f] border-2 border-[#d4af37]/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Certificate Watermark / Gold Corner Ornaments */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-24 h-24 border border-[#d4af37]/30 rounded-full pointer-events-none" />

            <div>
              {/* Certificate Top Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  {/* Google 4-Color Official Logo */}
                  <div className="flex items-center gap-1 font-heading text-lg font-bold tracking-tight">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                    <span className="text-white text-xs font-semibold ml-1.5 px-2 py-0.5 rounded bg-white/10">
                      Reviews
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verificado
                </span>
              </div>

              {/* Certificate Title */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/40 flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-[#d4af37]" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#d4af37] uppercase block mb-1">
                  CERTIFICADO OFICIAL DE CONFIABILIDADE
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-white">
                  Classificação 5.0 Estrelas
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Outorgado à <strong>América Latina Perícias & Vistorias Cautelares</strong>
                </p>
              </div>

              {/* Big Star Score Panel */}
              <div className="bg-black/60 border border-white/10 rounded-2xl p-5 mb-6 text-center">
                <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-heading text-3xl font-black text-white block">
                  5.0 / 5.0
                </span>
                <span className="text-xs text-neutral-400">
                  Com base em <strong>128+ avaliações públicas auditadas</strong> de motoristas e empresas de Pelotas - RS
                </span>
              </div>

              {/* Verified Details Checklist */}
              <div className="space-y-2 mb-6 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span><strong>Empresa Física Verificada:</strong> R. Santos Dumont, 551 - Centro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span><strong>Categorias Oficiais:</strong> Vistoriador de Automóveis · Perito Veicular</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span><strong>Tempo de Atuação:</strong> Mais de 46 anos ininterruptos</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalCertificateOpen(true)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-black bg-[#d4af37] hover:bg-[#f3cf65] transition-colors shadow-lg"
              >
                <Award className="w-4 h-4" />
                <span>Visualizar Certificado Oficial</span>
              </button>

              <a
                href={CONTACT_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-semibold text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Ver no Google Empresas</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#4285F4]" />
              </a>
            </div>
          </div>

          {/* Column 2: Google Search & SEO Simulator (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-8 shadow-2xl">
            <div>
              {/* Google Search Bar Simulation Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Indexação & Busca no Google em Pelotas
                </span>
                <span className="text-[11px] text-neutral-400">
                  Resultados Orgânicos & Perfil
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 mb-5 leading-relaxed">
                Clique nos termos mais buscados pelo cliente no Google para ver como nossa empresa e os serviços cautelares aparecem no topo:
              </p>

              {/* Keyword Selector Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {searchKeywords.map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setActiveSearchTerm(kw)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                      activeSearchTerm === kw
                        ? 'bg-[#4285F4] text-white shadow-md shadow-[#4285F4]/30'
                        : 'bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10'
                    }`}
                  >
                    <Search className="w-3 h-3" />
                    <span>{kw}</span>
                  </button>
                ))}
              </div>

              {/* Simulated Google Search Results Card */}
              <div className="bg-[#1f1f1f] border border-white/15 rounded-2xl p-5 sm:p-6 shadow-inner font-sans text-left">
                {/* Search Bar Visual */}
                <div className="flex items-center gap-2 bg-[#2a2a2a] rounded-full px-4 py-2 mb-5 border border-white/10">
                  <Search className="w-4 h-4 text-[#4285F4]" />
                  <span className="text-xs text-white font-medium truncate flex-1">
                    {activeSearchTerm}
                  </span>
                  <span className="text-[10px] text-neutral-400 hidden sm:inline">
                    Pelotas, RS
                  </span>
                </div>

                {/* Google Search Result Item */}
                <div className="space-y-3">
                  {/* Top Breadcrumb / Favicon URL */}
                  <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-white/10 p-0.5">
                      <img
                        src={OFFICIAL_ASSETS.logo}
                        alt="Favicon"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 truncate">
                      <span className="text-white font-medium">americalatinapericias.com.br</span>
                      <span className="hidden sm:inline text-neutral-500">› vistoria-cautelar-pelotas</span>
                    </div>
                  </div>

                  {/* Title Link */}
                  <h4 className="text-base sm:text-lg font-medium text-[#8ab4f8] hover:underline cursor-pointer leading-snug">
                    Vistoria Cautelar Pelotas | América Latina Perícias e Vistorias (Rápida Visão)
                  </h4>

                  {/* Star Rating Snippet */}
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex text-[#fbbc05]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc05]" />
                      ))}
                    </div>
                    <span className="text-neutral-300 font-semibold">Avaliação: 5,0</span>
                    <span className="text-neutral-400">· 128 comentários</span>
                    <span className="text-neutral-400 hidden sm:inline">· Preço: A partir de R$ 260,00 (Completa R$ 460,00)</span>
                  </div>

                  {/* Meta Description Snippet */}
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Referência em <strong className="text-white">Vistoria Cautelar Pelotas</strong>, perícia automotiva e laudos com mais de 46 anos de tradição. Vistoriador de automóveis e perito veicular credenciado. Exame estrutural completo com sondas HD e 28 testes físicos. Atendimento rápido no Centro.
                  </p>

                  {/* Google Sitelinks */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-xs">
                    <a
                      href="#precos"
                      className="text-[#8ab4f8] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Vistorias (R$ 260 a R$ 460)</span>
                    </a>
                    <a
                      href="#equipamentos"
                      className="text-[#8ab4f8] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>28 Equipamentos Periciais</span>
                    </a>
                    <a
                      href="#contato"
                      className="text-[#8ab4f8] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>R. Santos Dumont, 551</span>
                    </a>
                    <a
                      href={CONTACT_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#34A853] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Ligar: (53) 98100-7069</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Business Profile Fast Link */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-neutral-400 text-center sm:text-left">
                Empresa oficialmente cadastrada e verificada no Google Meu Negócio em Pelotas - RS.
              </span>
              <a
                href={CONTACT_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white font-bold transition-all shadow-md shadow-[#4285F4]/30"
              >
                <span>Acessar Google Empresas Oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Official Certificate Full Modal */}
      {modalCertificateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#111111] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setModalCertificateOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-white/5 rounded-xl transition-colors"
              aria-label="Fechar certificado"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Inner Certificate Parchment Frame */}
            <div className="border border-[#d4af37]/40 rounded-2xl p-6 sm:p-10 bg-gradient-to-b from-[#161616] via-[#121212] to-[#0d0d0d] relative text-center">
              {/* Top Google & Partner Branding */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Google Meu Negócio
                </span>
              </div>

              <span className="text-xs font-mono font-bold text-[#d4af37] uppercase tracking-widest block mb-2">
                CERTIFICADO DE CONFORMIDADE & EXCELÊNCIA 5.0
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mb-4">
                América Latina Perícias e Vistorias Cautelares
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed mb-6">
                Certifica-se formalmente que este estabelecimento automotivo possui reputação comprovada de excelência técnica com pontuação máxima de <strong>5.0 Estrelas</strong> no Google Reviews, endereço físico validado em Pelotas - RS e mais de <strong>46 anos de serviços prestados</strong> à comunidade.
              </p>

              {/* 5 Stars Visual */}
              <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Certificate Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/40 border border-white/10 rounded-xl p-4 text-center text-xs mb-8">
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">Nota Oficial</span>
                  <strong className="text-white font-bold">5.0 / 5.0</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">Avaliações</span>
                  <strong className="text-white font-bold">128+ Verificadas</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">Local</span>
                  <strong className="text-white font-bold">Pelotas - RS</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">Status</span>
                  <strong className="text-emerald-400 font-bold">Ativo & Verificado</strong>
                </div>
              </div>

              {/* Certificate Signatures & Seals */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10 text-xs text-neutral-400">
                <div className="text-center sm:text-left">
                  <span className="block text-[10px] uppercase text-neutral-500">ID de Validação Digital</span>
                  <span className="font-mono text-white text-[11px]">GL-RS-PEL-551-2024-2026</span>
                </div>
                <div className="text-center sm:text-right">
                  <span className="block text-[10px] uppercase text-neutral-500">Localização Cadastrada</span>
                  <span className="text-neutral-300">R. Santos Dumont, 551 - Pelotas, RS</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
              <a
                href={CONTACT_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-white bg-[#4285F4] hover:bg-[#3367d6] text-xs transition-colors shadow-md shadow-[#4285F4]/30"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir Perfil Oficial no Google Empresas</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappDirectMessage('Olá! Vi o Certificado Oficial Google 5.0 no site e gostaria de agendar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] text-xs transition-colors shadow-lg"
              >
                <span>Agendar com Garantia 5.0</span>
              </a>

              <button
                onClick={() => setModalCertificateOpen(false)}
                className="w-full sm:w-auto py-3 px-6 rounded-xl font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 text-xs transition-colors"
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
