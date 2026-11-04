import { useState, useMemo } from 'react';
import { Search, Wrench, Cpu, Activity, Droplets, Filter, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { ALL_EQUIPMENT, CONTACT_INFO, EquipmentItem } from '../data/siteData';

export default function EquipmentSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Estrutural', 'Eletrônico', 'Mecânico', 'Fluídos'];

  const filteredEquipment = useMemo(() => {
    return ALL_EQUIPMENT.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Todos' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.importance.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Estrutural':
        return <Activity className="w-4 h-4 text-[#d4af37]" />;
      case 'Eletrônico':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'Mecânico':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'Fluídos':
        return <Droplets className="w-4 h-4 text-blue-400" />;
      default:
        return <Wrench className="w-4 h-4 text-[#d4af37]" />;
    }
  };

  return (
    <section id="equipamentos" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#d4af37] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 block">
            TECNOLOGIA E INSTRUMENTAÇÃO DE PONTA
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Equipamentos Periciais
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Contamos com 28 equipamentos de aferição calibrados e de nível laboratorial. Cada detalhe do monobloco, da eletrônica e da mecânica é testado com rigor pericial.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 sm:p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar entre os 28 equipamentos..."
              className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Equipment Results Count */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-6 px-1">
          <span>
            Exibindo <strong className="text-white">{filteredEquipment.length}</strong> de 28 equipamentos periciais
          </span>
          <span className="text-neutral-500 hidden sm:inline">
            Todos calibrados segundo normas ABNT
          </span>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {filteredEquipment.map((eq) => (
            <div
              key={eq.id}
              className="bg-[#131313] border border-white/10 hover:border-[#d4af37]/50 rounded-xl p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d4af37]/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(eq.category)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                    {eq.category}
                  </span>
                </div>

                <h3 className="font-heading text-sm font-bold text-white mb-2 line-clamp-1">
                  {eq.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {eq.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-[#d4af37] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {eq.importance}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#141414] via-[#1a1710] to-[#141414] border border-[#d4af37]/25 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-1">
              Deseja acompanhar a bateria pericial do seu veículo?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              Nossa estrutura em Pelotas é aberta para o cliente acompanhar todos os testes com total transparência.
            </p>
          </div>
          <a
            href={CONTACT_INFO.whatsappDirectMessage('Olá! Gostaria de agendar uma vistoria e acompanhar os testes.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com Perito Responsável</span>
          </a>
        </div>
      </div>
    </section>
  );
}
