import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    veiculo: '',
    servico: 'Vistoria Cautelar Estrutural (R$ 260)',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITAÇÃO DE AGENDAMENTO*\n\n*Nome:* ${formData.nome}\n*Telefone:* ${formData.telefone}\n*Veículo:* ${formData.veiculo || 'Não informado'}\n*Serviço:* ${formData.servico}\n*Observação:* ${formData.mensagem || 'Gostaria de verificar datas disponíveis.'}`;
    const url = `https://api.whatsapp.com/send?phone=53981007069&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-[#0d0d0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d4af37] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 block">
            FALE CONOSCO & LOCALIZAÇÃO
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Venha nos Visitar ou Agende Online
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Estamos estrategicamente localizados no Centro de Pelotas - RS, com pátio amplo para vistorias de todos os portes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              Informações de Contato
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider block">Endereço</span>
                <p className="text-sm font-medium text-white">{CONTACT_INFO.address}</p>
                <span className="text-xs text-neutral-400">Ponto de referência: Centro de Pelotas</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider block">Horário de Atendimento</span>
                <p className="text-sm font-medium text-white">{CONTACT_INFO.workingHours}</p>
                <span className="text-xs text-neutral-400">Sábado sob agendamento prévio</span>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0 mt-1">
                <Phone className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#25D366] uppercase tracking-wider block">Telefones & WhatsApp</span>
                {CONTACT_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`https://api.whatsapp.com/send?phone=${phone.value}&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20vistorias`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-white hover:text-[#d4af37] transition-colors"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                <Mail className="w-5 h-5 text-neutral-300" />
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">E-mail Oficial</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-medium text-white hover:text-[#d4af37] transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center shrink-0 mt-1 shadow-md">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Instagram Oficial</span>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:text-[#d4af37] transition-colors"
                >
                  {CONTACT_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Schedule Form Card */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              Solicitar Pré-Agendamento Rápido
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Preencha os dados abaixo para adiantar seu cadastro. Você será direcionado diretamente para confirmação no WhatsApp com o perito.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: João da Silva"
                    className="w-full bg-[#1b1b1b] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    WhatsApp para Contato *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="Ex: (53) 98100-0000"
                    className="w-full bg-[#1b1b1b] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Marca / Modelo do Veículo
                  </label>
                  <input
                    type="text"
                    value={formData.veiculo}
                    onChange={(e) => setFormData({ ...formData, veiculo: e.target.value })}
                    placeholder="Ex: Corolla 2021 / Hilux / Onix"
                    className="w-full bg-[#1b1b1b] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Serviço Desejado
                  </label>
                  <select
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Vistoria Cautelar Estrutural (a partir de R$ 260)">Vistoria Cautelar Estrutural (a partir de R$ 260,00)</option>
                    <option value="Vistoria Cautelar Completa Linha Leve (R$ 460)">Vistoria Cautelar Completa Linha Leve (R$ 460,00)</option>
                    <option value="Opção Adicional Motor & Scanner (+ R$ 200)">Opção Adicional: Motor, Scanner e Bateria (+ R$ 200,00)</option>
                    <option value="Exame Estrutural 3D & Ultrassom">Exame Estrutural 3D & Ultrassom</option>
                    <option value="Laudo Pericial Judicial">Laudo Pericial Judicial</option>
                    <option value="Simulação de Acidente">Simulação de Acidente</option>
                    <option value="Auditoria de Frotas">Auditoria de Frotas Corporativas</option>
                    <option value="Vistoria Linha Pesada / Máquinas">Vistoria Linha Pesada / Máquinas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Mensagem ou Preferência de Horário
                </label>
                <textarea
                  rows={3}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Gostaria de agendar para esta quinta-feira pela manhã..."
                  className="w-full bg-[#1b1b1b] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl text-sm shadow-xl shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Enviar e Abrir no WhatsApp</span>
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mensagem preparada! Abrindo WhatsApp...</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
          <div className="p-4 bg-[#141414] border-b border-white/5 flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Localização: R. Santos Dumont, 551 - Centro, Pelotas - RS</span>
            </span>
            <a
              href={CONTACT_INFO.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#d4af37] font-semibold hover:underline flex items-center gap-1"
            >
              <span>Abrir no Google Maps Oficial</span>
            </a>
          </div>
          <iframe
            title="Localização América Latina Perícias em Pelotas RS"
            src="https://maps.google.com/maps?q=R.+Santos+Dumont,+551+-+Centro,+Pelotas+-+RS,+96020-380&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
