import { useState, useEffect } from 'react';
import { MessageCircle, Instagram, X, Send, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/siteData';

export default function FloatingElements() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Olá! Sou a assistente virtual da América Latina Perícias. Como posso ajudar?',
      time: 'Agora'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [showTooltip, setShowTooltip] = useState(true);

  // Hide the initial bubble tooltip after 7 seconds or on click
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const quickQuestions = [
    { label: 'Vistoria Estrutural (R$ 260)', text: 'Gostaria de agendar a vistoria cautelar estrutural de R$ 260.' },
    { label: 'Vistoria Completa (R$ 460)', text: 'Gostaria de agendar a vistoria completa linha leve de R$ 460.' },
    { label: 'Opção Scanner (+ R$ 200)', text: 'Como funciona o adicional de R$ 200 com estetoscópio e scanner?' },
    { label: 'Atendimento no local?', text: 'Vocês realizam atendimento no local onde o carro está?' }
  ];

  const handleSendPrompt = (questionText: string) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: questionText, time: currentTime }
    ]);

    // Instant bot response
    setTimeout(() => {
      let botResponse = 'Perfeito! Nossos peritos estão disponíveis para atendê-lo agora.';
      if (questionText.includes('460')) {
        botResponse = 'A Vistoria Cautelar Completa Linha Leve custa R$ 460,00 e oferece a maior profundidade técnica do Brasil: laudo completo reconhecido por conselhos periciais, diagnóstico eletrônico, estetoscópio de motor e total confiabilidade documental. Agilize enviando "SIM" no WhatsApp!';
      } else if (questionText.includes('260') || questionText.includes('estrutural')) {
        botResponse = 'Nossa Vistoria Cautelar Estrutural custa apenas R$ 260,00 e inclui medição peça por peça com medidor digital e detector magnético, análise de fluidos, teste de enchente e consulta documental completa.';
      } else if (questionText.includes('200') || questionText.includes('scanner')) {
        botResponse = 'A Opção Adicional de R$ 200,00 inclui análise acústica de motor com estetoscópio pericial, diagnóstico eletrônico total via scanner multimarcas, teste de condutividade de bateria e hodometria via scanner.';
      } else if (questionText.includes('local')) {
        botResponse = 'Sim! Temos atendimento ágil e prático: agilizamos seu laudo cautelar e vamos até o local onde o veículo estiver (garagem, loja ou residência).';
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, time: currentTime }
      ]);
    }, 400);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    handleSendPrompt(text);
  };

  const openWhatsAppWithLastContext = () => {
    const lastUserMsg = [...chatMessages].reverse().find((m) => m.sender === 'user')?.text;
    const redirectUrl = CONTACT_INFO.whatsappDirectMessage(
      lastUserMsg
        ? `Olá! Estava no site e selecionei: "${lastUserMsg}". Gostaria de atendimento.`
        : 'Olá! Sou a assistente virtual da América Latina Perícias. Como posso ajudar?'
    );
    window.open(redirectUrl, '_blank');
  };

  return (
    <>
      {/* =========================================
          RIGHT SIDE: Instagram & WhatsApp Floating Buttons
         ========================================= */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
        {/* Instagram Circular Button */}
        <a
          href={CONTACT_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-xl hover:scale-110 hover:shadow-rose-600/40 transition-all duration-300"
          aria-label="Acessar Instagram da América Latina Perícias"
        >
          <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          {/* Tooltip on Desktop */}
          <span className="hidden sm:block absolute right-full mr-3 px-3 py-1 bg-black/90 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-lg">
            Siga nosso Instagram
          </span>
        </a>

        {/* WhatsApp Circular Button */}
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white shadow-xl hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 pulse-whatsapp"
          aria-label="Abrir WhatsApp oficial"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
          {/* Tooltip on Desktop */}
          <span className="hidden sm:block absolute right-full mr-3 px-3 py-1 bg-black/90 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-lg">
            Fale conosco no WhatsApp
          </span>
        </a>
      </div>

      {/* =========================================
          LEFT SIDE: Virtual Assistant Floating Button & Chat
         ========================================= */}
      <div className="fixed bottom-6 left-5 z-50">
        {/* Assistant Speech Hint Bubble (shown initially) */}
        {!chatOpen && showTooltip && (
          <div
            onClick={() => {
              setChatOpen(true);
              setShowTooltip(false);
            }}
            className="absolute bottom-16 left-0 mb-2 w-64 bg-[#141414] border border-[#d4af37]/40 text-white p-3 rounded-2xl shadow-2xl cursor-pointer transform hover:scale-102 transition-all animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">
                  Dúvidas sobre laudos (R$ 260 a R$ 460)?
                </p>
                <p className="text-[11px] text-neutral-300 mt-0.5">
                  Clique aqui para falar com nossa assistente virtual.
                </p>
              </div>
            </div>
            {/* Small triangle arrow */}
            <div className="absolute -bottom-2 left-6 w-3 h-3 bg-[#141414] border-b border-r border-[#d4af37]/40 transform rotate-45" />
          </div>
        )}

        {/* Floating Bubble Button with Photo */}
        <button
          onClick={() => {
            setChatOpen(!chatOpen);
            setShowTooltip(false);
          }}
          className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#d4af37] via-amber-200 to-[#d4af37] shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          aria-label="Abrir assistente virtual da América Latina Perícias"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border border-black/40">
            <img
              src={OFFICIAL_ASSETS.generated.avatar}
              alt="Assistente Virtual América Latina"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Green Online Status Pip */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-black rounded-full" />
        </button>

        {/* Simulated Chat Modal */}
        {chatOpen && (
          <div className="fixed sm:absolute bottom-20 left-4 right-4 sm:left-0 sm:right-auto w-auto sm:w-96 max-h-[80vh] bg-[#121212] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50 animate-in slide-in-from-bottom-5 duration-300">
            {/* Chat Header */}
            <div className="bg-[#181818] border-b border-white/10 p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/50 shrink-0">
                  <img
                    src={OFFICIAL_ASSETS.generated.avatar}
                    alt="Mariana - Assistente Virtual"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-black" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Mariana</span>
                    <span className="text-[10px] text-[#d4af37] font-semibold bg-[#d4af37]/10 px-1.5 rounded">
                      Atendente
                    </span>
                  </h4>
                  <span className="text-[10px] text-emerald-400 font-medium">
                    Online agora · Pelotas RS
                  </span>
                </div>
              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Fechar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body Messages */}
            <div className="p-4 overflow-y-auto max-h-72 space-y-3 bg-[#0d0d0d] text-xs">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#d4af37] text-black font-medium rounded-tr-none'
                        : 'bg-[#1e1e1e] border border-white/10 text-neutral-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-neutral-500 mt-1 px-1">
                    {msg.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Prompts */}
            <div className="p-3 bg-[#141414] border-t border-white/5">
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-2 font-medium">
                Respostas Rápidas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendPrompt(q.text)}
                    className="text-[11px] px-2.5 py-1 bg-white/5 hover:bg-[#d4af37]/20 hover:text-[#d4af37] border border-white/10 rounded-lg text-neutral-300 transition-colors text-left"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct Action Bar */}
            <div className="p-3 bg-[#181818] border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={openWhatsAppWithLastContext}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Continuar no WhatsApp com Perito</span>
              </button>

              {/* Custom Input Form */}
              <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Digite sua dúvida aqui..."
                  className="flex-1 bg-[#101010] border border-white/10 focus:border-[#d4af37] rounded-lg px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2 bg-[#d4af37] hover:bg-[#f3cf65] text-black rounded-lg transition-colors"
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
