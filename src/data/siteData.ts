import avatarImg from '../assets/images/atendente_virtual_jaleco_1793748039410.jpg';
import heroImg from '../assets/images/hero_perito_jaleco_1793748036201.jpg';
import structuralImg from '../assets/images/servico_exame_estrutural_1793748038069.jpg';
import cautelarImg from '../assets/images/servico_vistoria_cautelar_1793748037849.jpg';
import judicialImg from '../assets/images/servico_laudo_judicial_1793748038212.jpg';
import crashSimulationImg from '../assets/images/servico_simulacao_acidente_1793748040226.jpg';
import fleetAuditImg from '../assets/images/servico_auditoria_frotas_1793748039359.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  tag: string;
  iconName: string;
  imageUrl: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Estrutural' | 'Eletrônico' | 'Mecânico' | 'Fluídos';
  description: string;
  importance: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  vehicle: string;
  comment: string;
  avatarText: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  role: string;
  icon: string;
  headline: string;
  benefits: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const OFFICIAL_ASSETS = {
  logo: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/MOCKUPS-32.png.webp',
  titleBanner: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/TITULO-39.png.webp',
  mockup7: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/mockups-7-1.webp',
  gummies2: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/gUMMIES-2-512x1024.png.webp',
  gummies3: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/gUMMIES-3-512x1024.png.webp',
  serviceImg1: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/2-3.png.webp',
  serviceImg2: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/3-2.png.webp',
  serviceImg3: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/4-3.png.webp',
  serviceImg4: 'https://americalatinapericias.com.br/wp-content/uploads/2024/09/5-4.png.webp',
  flyers: {
    flyer1: '/assets/aistudio/image_ee337a31.png',
    flyer2: '/assets/aistudio/image_b0d6052d.png',
    flyer3: '/assets/aistudio/image_69a05759.png'
  },
  generated: {
    avatar: avatarImg,
    hero: heroImg,
    structural: structuralImg,
    cautelar: cautelarImg,
    forensicJudicial: judicialImg,
    crashSimulation: crashSimulationImg,
    fleetAudit: fleetAuditImg
  }
};

export const CONTACT_INFO = {
  companyName: 'América Latina Perícias e Vistorias Cautelares',
  address: 'R. Santos Dumont, 551 - Centro, Pelotas - RS, 96020-380',
  phones: [
    { label: '(53) 98100-7069 (WhatsApp Principal)', value: '53981007069' },
    { label: '(53) 98118-7344 (Plantão Vistorias)', value: '53981187344' },
    { label: '(53) 99157-5281 (Laudos Judiciais)', value: '53991575281' }
  ],
  whatsappLink: 'https://api.whatsapp.com/send?phone=53981007069&text=SIM',
  whatsappSimLink: 'https://api.whatsapp.com/send?phone=53981007069&text=SIM',
  whatsappDirectMessage: (customText?: string) => {
    const text = customText || 'SIM';
    return `https://api.whatsapp.com/send?phone=53981007069&text=${encodeURIComponent(text)}`;
  },
  instagramUrl: 'https://www.instagram.com/americalatinapericias/',
  instagramHandle: '@americalatinapericias',
  email: 'americalatinapericias2024@hotmail.com',
  googleBusinessUrl: 'https://share.google/3nQShADbcB6NTIlXq',
  googleReviewsUrl: 'https://share.google/3nQShADbcB6NTIlXq',
  workingHours: 'Segunda a sexta das 08:30 às 11:30 / 13:30 às 18:30',
  experienceYears: 46,
  googleRating: 5.0,
  googleReviewCount: 128,
  priceStartingAt: 'R$ 260,00',
  fullPrice: 'R$ 460,00',
  standardPrice: 'A partir de R$ 260,00'
};

export const FLYER_PLANS = {
  slogan: 'A VISTORIA CAUTELAR MAIS TÉCNICA DO BRASIL.',
  onSiteServiceText: 'Agilizamos seu laudo cautelar, vamos até o local.',
  structuralPlan: {
    id: 'estrutural',
    name: 'Vistoria Cautelar Estrutural',
    price: 'R$ 260,00',
    priceNumeric: 260,
    tagline: 'Por apenas R$ 260,00',
    description: 'Análise minuciosa de estrutura monobloco, espessura de pintura, conferência de originalidade e integridade física/documental.',
    includedServices: [
      'Identificação do veículo com imagens em ângulo de 45°',
      'Análise de pintura peça por peça com medidor digital e detector magnético',
      'Verificação do motor (contaminação de fluidos)',
      'Teste de enchente e detecção de clonagem veicular',
      'Conferência de numerações (chassi, motor) e etiquetas de segurança',
      'Avaliação estrutural e conferência da originalidade dos vidros',
      'Checagem de luzes de avaria (incluindo possíveis fraudes no painel)',
      'Leitura de hodômetro atual',
      'Análise de desgaste interno (bancos, forração, multimídia e comandos)',
      'Teste de ar-condicionado e eficiência térmica',
      'Verificação completa dos pneus (ano de fabricação e desgaste individual)',
      'Inspeção individual dos aros e rodas com imagens detalhadas',
      'Consulta documental completa de histórico e restrições',
      'Vídeo completo do veículo (parte interna e externa, sob solicitação)'
    ],
    badges: [
      'Compra 100% Segura',
      'Pagamento Facilitado via Mercado Pago',
      'Serviço Verificado e Confiável',
      'Atendimento Ágil - Vamos até o Local'
    ]
  },
  additionalAddon: {
    name: 'Opção Adicional de Motor & Eletrônica',
    price: '+ R$ 200,00',
    description: 'Acréscimo de apenas R$ 200,00 para transformar sua vistoria na mais completa do mercado.',
    features: [
      'Análise detalhada do motor com estetoscópio acústico',
      'Diagnóstico eletrônico total via scanner automotivo multimarcas',
      'Teste de vida útil da bateria e medição CCA',
      'Hodometria e telemetria profunda via scanner (verificação contra fraudes)',
      'Controle e auditoria do histórico de manutenções'
    ]
  },
  fullPlan: {
    id: 'completa',
    name: 'Vistoria Cautelar Completa',
    price: 'R$ 460,00',
    priceNumeric: 460,
    target: 'Para Linha Leve',
    tagline: 'Apenas R$ 460,00',
    description: 'Laudo técnico completo com o mais elevado padrão de responsabilidade pericial, observando critérios técnicos reconhecidos pelos conselhos e normas aplicáveis.',
    pillars: [
      {
        title: 'Laudos Técnicos Completos',
        desc: 'Com elevado padrão de responsabilidade pericial e fé pública.'
      },
      {
        title: 'Critérios Técnicos Reconhecidos',
        desc: 'Observando normas e conselhos aplicáveis à atividade pericial.'
      },
      {
        title: 'Maior Profundidade de Análise',
        desc: 'Análise detalhada e criteriosa em cada etapa da vistoria.'
      },
      {
        title: 'Maior Confiabilidade Documental',
        desc: 'Laudos com alto grau de confiabilidade para decisões seguras.'
      }
    ],
    specialFor: [
      'Seguradoras',
      'Bancos e Financeiras',
      'Cooperativas de Crédito',
      'Empresas de Frotas',
      'Compras Corporativas',
      'Garantias Contratuais'
    ]
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'exame-estrutural',
    title: 'Exame Estrutural',
    shortDescription: 'Verificação detalhada com sondas HD, ultrason e alinhamento 3D para detectar se houve sinistros.',
    fullDescription: 'Inspeção profunda de longarinas, colunas, painel corta-fogo, assoalho e esquadro da carroceria. Identifica pontos de solda adulterados, cortes, emendas e deformações imperceptíveis a olho nu.',
    highlights: [
      'Sondas HD com câmera endoscópica',
      'Ultrassom de precisão microestrutural',
      'Medição 3D do esquadro da carroceria',
      'Identificação de cortes e emendas estruturais'
    ],
    tag: 'A partir de R$ 260,00',
    iconName: 'ShieldCheck',
    imageUrl: OFFICIAL_ASSETS.generated.structural
  },
  {
    id: 'vistorias-cautelares',
    title: 'Vistorias Cautelares',
    shortDescription: 'A vistoria mais técnica do Brasil: documental, física, estrutural e opção completa com scanner e motor.',
    fullDescription: 'Avaliação indispensável para compra e venda segura. Do pacote estrutural (R$ 260) ao laudo completo (R$ 460 com scanner e análise de motor), cobrindo 28 testes físicos e verificação minuciosa.',
    highlights: [
      'Vistoria Estrutural por apenas R$ 260,00',
      'Vistoria Completa com Scanner por R$ 460,00',
      'Medição de pintura peça por peça (digital + magnético)',
      'Atendimento ágil e prático: vamos até o local'
    ],
    tag: 'R$ 260 a R$ 460',
    iconName: 'FileCheck',
    imageUrl: OFFICIAL_ASSETS.generated.cautelar
  },
  {
    id: 'laudos-judiciais',
    title: 'Laudos Judiciais',
    shortDescription: 'Fortalece sua posição legal com provas técnicas periciais precisas, imparciais e fundamentadas.',
    fullDescription: 'Elaboração de perícias técnicas para suporte a processos cíveis, inventários, ações indenizatórias e disputas consumeristas de vícios redibitórios em veículos.',
    highlights: [
      'Assinatura de perito forense credenciado',
      'Rigor científico e metodologia normativa ABNT',
      'Atuação como Assistente Técnico em ações judiciais',
      'Documentação fotográfica de alta resolução com escala'
    ],
    tag: 'Validade Jurídica',
    iconName: 'Scale',
    imageUrl: OFFICIAL_ASSETS.generated.forensicJudicial
  },
  {
    id: 'simulacoes-acidentes',
    title: 'Simulações de Acidentes',
    shortDescription: 'Fornece evidências detalhadas e científicas para disputas judiciais, acordos ou seguradoras.',
    fullDescription: 'Reconstituição físico-matemática da dinâmica de colisões, cálculo de velocidade de impacto, análise de deformação de materiais e determinação das causas determinantes do sinistro.',
    highlights: [
      'Cálculo pericial de velocidade de impacto',
      'Mapeamento de trajetória e ponto de impacto (POI)',
      'Análise de compatibilidade de danos entre veículos',
      'Relatório analítico para seguradoras e tribunais'
    ],
    tag: 'Forense Avançada',
    iconName: 'Activity',
    imageUrl: OFFICIAL_ASSETS.generated.crashSimulation
  },
  {
    id: 'auditoria-frotas',
    title: 'Auditoria de Frotas Públicas e Privadas',
    shortDescription: 'Auditoria do estado de conservação e obsolescência da frota, com precificação para disputas e gestão.',
    fullDescription: 'Auditoria patrimonial completa para prefeituras, órgãos públicos, transportadoras e locadoras. Levantamento detalhado de desgaste mecânico, valor real de mercado e recomendações de renovação.',
    highlights: [
      'Diagnóstico de obsolescência e vida útil remanescente',
      'Avaliação patrimonial com precificação de mercado',
      'Identificação de manutenções preventivas e corretivas',
      'Planilha executiva de auditoria com parecer conclusivo'
    ],
    tag: 'B2B & Setor Público',
    iconName: 'Building2',
    imageUrl: OFFICIAL_ASSETS.generated.fleetAudit
  }
];

export const TARGET_AUDIENCE: TargetAudience[] = [
  {
    id: 'locadoras',
    title: 'Locadoras de Veículos',
    role: 'Proteção e Governança de Frotas',
    icon: 'Building',
    headline: 'Preserve o valor residual do seu patrimônio com auditorias periódicas.',
    benefits: [
      'Auditoria de danos no encerramento de contratos',
      'Laudo técnico para cobrança de avarias estruturais',
      'Detecção de substituição indevida de componentes',
      'Histórico seguro para revenda desmobilizada'
    ],
    ctaText: 'Solicitar Auditoria Corporativa'
  },
  {
    id: 'seguradoras',
    title: 'Seguradoras e Regulação',
    role: 'Avaliação Técnica e Anti-Fraude',
    icon: 'Shield',
    headline: 'Combate rigoroso a fraudes, sinistros simulados e veículos clonados.',
    benefits: [
      'Identificação pericial de montagens e adulterações',
      'Constatação de danos pré-existentes à apólice',
      'Simulação técnica de compatibilidade de sinistros',
      'Análise de veículos submersos em enchentes'
    ],
    ctaText: 'Consultar Assistência Técnica'
  },
  {
    id: 'advogados',
    title: 'Advogados & Escritórios',
    role: 'Provas Técnicas Conclusivas',
    icon: 'Briefcase',
    headline: 'Instrumentalize petições e defesas com laudos técnicos inquestionáveis.',
    benefits: [
      'Atuação como assistente técnico pericial em juízo',
      'Elaboração de quesitos técnicos estratégicos',
      'Impugnação fundamentada de laudos divergentes',
      'Pareceres em ações de rescisão contratual e vício oculto'
    ],
    ctaText: 'Falar com Perito Técnico'
  },
  {
    id: 'qualquer-pessoa',
    title: 'Qualquer Pessoa',
    role: 'Compra e Venda com Segurança',
    icon: 'UserCheck',
    headline: 'Nunca compre um carro sem antes saber o que está escondido sob a lataria.',
    benefits: [
      'Evite prejuízos de dezenas de milhares de reais',
      'Descubra batidas fortes maquiadas em oficinas',
      'Tenha poder de negociação no valor de compra',
      'Receba o laudo completo na mesma tarde'
    ],
    ctaText: 'Agendar Vistoria por R$ 260'
  }
];

export const RISKS_AVOIDED = [
  {
    title: 'Sinistros Graves Ocultados',
    description: 'Veículos envolvidos em colisões com perda de esquadro, soldas clandestinas e corte de longarinas maquiadas.',
    icon: 'AlertTriangle'
  },
  {
    title: 'Adulteração de Chassi e Motor',
    description: 'Remarcações ilegais de numerações que configuram crime e levam à apreensão imediata do veículo pela polícia.',
    icon: 'Fingerprint'
  },
  {
    title: 'Veículos de Enchente e Alagamento',
    description: 'Corrosão oculta de módulos elétricos, fiação em curto e mofo nas camadas profundas do estofamento e assoalho.',
    icon: 'Droplets'
  },
  {
    title: 'Clonagem Veicular e Dublê',
    description: 'Veículo com placas clonadas de outro estado, etiquetas falsificadas e restrições penais ativas.',
    icon: 'Copy'
  },
  {
    title: 'Quilometragem Adulterada',
    description: 'Hodômetro manipulado para esconder o desgaste severo de motor, suspensão, embreagem e catalisador.',
    icon: 'Gauge'
  },
  {
    title: 'Bloqueios e Restrições Documentais',
    description: 'Penhoras judiciais (Renajud), alienações fiduciárias ativas, débitos acumulados e pendências de leilão.',
    icon: 'FileWarning'
  },
  {
    title: 'Camadas Excessivas de Massa Plástica',
    description: 'Reparos estéticos grosseiros com até 1.000 micras de massa cobrindo amassados graves na estrutura.',
    icon: 'Layers'
  },
  {
    title: 'Falhas Críticas no Motor e Freios',
    description: 'Vazamentos internos de cabeçote, perda de compressão, fluido de freio vencido e bicos injetores descalibrados.',
    icon: 'Wrench'
  }
];

export const ALL_EQUIPMENT: EquipmentItem[] = [
  { id: '1', name: 'Lupa Especial Pericial', category: 'Estrutural', description: 'Inspeção macroscópica de numerações de chassi, soldas e microfissuras.', importance: 'Autenticidade de identificadores' },
  { id: '2', name: 'Paquímetro Digital', category: 'Mecânico', description: 'Medição precisa de desgaste de discos de freio, folgas e espessuras de componentes.', importance: 'Tolerâncias mecânicas' },
  { id: '3', name: 'Cabo de Conexão com Módulo', category: 'Eletrônico', description: 'Interface direta com centrais ECU, BCM e módulos de segurança ativa.', importance: 'Varredura de telemetria' },
  { id: '4', name: 'Estetoscópio Mecânico Automotivo', category: 'Mecânico', description: 'Audição cirúrgica de rolamentos, tuchos, válvulas e ruídos anômalos no motor.', importance: 'Diagnóstico acústico' },
  { id: '5', name: 'Plataforma Teste Suspensão', category: 'Mecânico', description: 'Avaliação dinâmica de eficiência de amortecedores e folgas articuladas.', importance: 'Estabilidade veicular' },
  { id: '6', name: 'Relógio Comparador Centesimal', category: 'Mecânico', description: 'Aferição de empenamento de eixos, cubos de roda e tolerâncias axiais.', importance: 'Geometria de rotação' },
  { id: '7', name: 'Scanner Automotivo Profissional', category: 'Eletrônico', description: 'Leitura de parâmetros em tempo real, sensores e atuadores da injeção.', importance: 'Saúde eletrônica' },
  { id: '8', name: 'Scanner Veicular Multimarcas HD', category: 'Eletrônico', description: 'Acesso completo a sistemas ABS, Airbag, transmissão e rede CAN.', importance: 'Sistemas de segurança' },
  { id: '9', name: 'Teste 3D Esquadro Carroceria', category: 'Estrutural', description: 'Laser tridimensional para constatação milimétrica de alinhamento monobloco.', importance: 'Integridade pós-sinistro' },
  { id: '10', name: 'Teste Consumo Energia / Fuga', category: 'Eletrônico', description: 'Medição de corrente parasita para identificar drenagem anômala de bateria.', importance: 'Circuito elétrico' },
  { id: '11', name: 'Teste de Alinhamento Laser', category: 'Mecânico', description: 'Verificação geométrica de cambagem, cáster e convergência de rodas.', importance: 'Segurança direcional' },
  { id: '12', name: 'Teste de Bomba Combustível', category: 'Mecânico', description: 'Aferição de pressão e vazão estática e dinâmica da linha de combustível.', importance: 'Alimentação do motor' },
  { id: '13', name: 'Teste de Velas e Ignição', category: 'Eletrônico', description: 'Verificação da centelha, integridade de bobinas e tempo de combustão.', importance: 'Eficiência de queima' },
  { id: '14', name: 'Teste de Vida da Bateria e CCA', category: 'Eletrônico', description: 'Análise de condutância, corrente de partida a frio (CCA) e vida útil.', importance: 'Confiabilidade de partida' },
  { id: '15', name: 'Teste dos Bicos Injetores', category: 'Mecânico', description: 'Estanqueidade, padrão de leque e equalização volumétrica de injeção.', importance: 'Mistura ar/combustível' },
  { id: '16', name: 'Teste Eletrônico Suspensão', category: 'Mecânico', description: 'Sensores de resposta de frequência e absorção de choques dinâmicos.', importance: 'Aderência e frenagem' },
  { id: '17', name: 'Teste Espessura de Pinturas (Micrômetro)', category: 'Estrutural', description: 'Medição magnética e por indução de camadas em micras (μm) peça por peça.', importance: 'Detecção de repintura e massa' },
  { id: '18', name: 'Teste Esquadro Mecânico', category: 'Estrutural', description: 'Checagem física de travessas, longarinas e caixas de roda.', importance: 'Geometria monobloco' },
  { id: '19', name: 'Teste Fluído de Freio (Ponto de Ebulição)', category: 'Fluídos', description: 'Análise eletrônica do percentual de umidade e ponto de ebulição do fluido.', importance: 'Prevenção de fading no freio' },
  { id: '20', name: 'Teste de Fluídos e Óleo', category: 'Fluídos', description: 'Refratômetro e tiras químicas para viscosidade e contaminação cruzada.', importance: 'Lubrificação do conjunto' },
  { id: '21', name: 'Teste Multímetro Automotivo True RMS', category: 'Eletrônico', description: 'Medição de tensões, quedas de potencial e integridade de aterramentos.', importance: 'Sinal elétrico puro' },
  { id: '22', name: 'Teste Pressão Cilindro (Compressão)', category: 'Mecânico', description: 'Medição manométrica da taxa de compressão estática de cada cilindro.', importance: 'Desgaste de anéis e válvulas' },
  { id: '23', name: 'Teste Químico Arrefecimento (CO2)', category: 'Fluídos', description: 'Detecção química de gases de combustão no radiador (junta queimada).', importance: 'Diagnóstico precoce de cabeçote' },
  { id: '24', name: 'Teste Solenoides Eletrônico', category: 'Eletrônico', description: 'Avaliação de resposta e resistência ôhmica em câmbios automáticos e ABS.', importance: 'Transmissão automática' },
  { id: '25', name: 'Teste Sistema Diesel Common Rail', category: 'Mecânico', description: 'Análise de alta pressão (até 2.000 bar) e retorno de injetores diesel.', importance: 'Linha pesada e caminhonetes' },
  { id: '26', name: 'Teste Sistema Refrigeração / Pressurização', category: 'Fluídos', description: 'Pressurização pneumática do circuito para caçar microvazamentos.', importance: 'Anti-superaquecimento' },
  { id: '27', name: 'Teste Vedação Cilindro (Vazamento)', category: 'Mecânico', description: 'Injeção de ar comprimido para identificar sede de válvula ou anéis gastos.', importance: 'Rendimento térmico' },
  { id: '28', name: 'Ultrassom Aquecido de Limpeza e Prova', category: 'Estrutural', description: 'Inspeção por ressonância ultrassônica de espessura de chapas e trincas internas.', importance: 'Varredura não-destrutiva' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Silveira',
    location: 'Pelotas - RS',
    rating: 5,
    date: 'Avaliado há 2 semanas',
    vehicle: 'Toyota Corolla Cross XRE',
    comment: 'Melhor perícia automotiva do Rio Grande do Sul! O carro que eu ia comprar parecia impecável na loja, mas a vistoria da América Latina pegou uma colisão traseira que tinha afetado a longarina. Me salvaram de um prejuízo de mais de R$ 30 mil. Valeu cada centavo dos 260 reais!',
    avatarText: 'CS'
  },
  {
    id: '2',
    name: 'Dra. Mariana Bittencourt',
    location: 'Pelotas - RS',
    rating: 5,
    date: 'Avaliado há 1 mês',
    vehicle: 'Laudo Pericial Judicial',
    comment: 'Utilizei os serviços da América Latina como assistente técnica pericial em uma ação de vícios ocultos. O laudo pericial elaborado por eles foi irretocável, com embasamento técnico inquestionável e acolhido integralmente pelo magistrado. Empresa séria e altamente capacitada!',
    avatarText: 'MB'
  },
  {
    id: '3',
    name: 'Rodrigo Fontoura Mendes',
    location: 'Rio Grande / Pelotas - RS',
    rating: 5,
    date: 'Avaliado há 3 semanas',
    vehicle: 'Volkswagen T-Cross Highline',
    comment: 'Atendimento impecável! Fiz o agendamento pelo WhatsApp e fui atendido pontualmente. Mediram cada peça com o aparelho de pintura, colocaram no scanner, checaram chassi e histórico de leilão. O laudo digital saiu detalhadíssimo com fotos e parecer claro. Recomendo de olhos fechados!',
    avatarText: 'RF'
  },
  {
    id: '4',
    name: 'Luciano Albuquerque',
    location: 'Pelotas - RS',
    rating: 5,
    date: 'Avaliado há 1 mês',
    vehicle: 'Honda Civic Touring',
    comment: 'Já é o terceiro carro da família que trago para vistoriar com eles. Os 46 anos de tradição se refletem na precisão de cada equipamento. A equipe é prestativa, explica tudo o que está sendo examinado e entrega um documento oficial que dá total tranquilidade.',
    avatarText: 'LA'
  },
  {
    id: '5',
    name: 'Vanessa Dornelles',
    location: 'Pelotas - RS',
    rating: 5,
    date: 'Avaliado há 2 meses',
    vehicle: 'Jeep Compass Longitude',
    comment: 'Excelente trabalho! Descobriram que o carro tinha passado por enchente anteriormente através dos testes elétricos e das marcas de oxidação nos chicotes. Nunca teria percebido isso sozinha. Equipe nota 1000!',
    avatarText: 'VD'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Qual o valor da vistoria cautelar?',
    answer: 'Nossos valores iniciam a partir de apenas R$ 260,00 na Vistoria Cautelar Estrutural (que inclui análise de pintura com medidor digital peça por peça, verificação de fluidos, teste de enchente, detecção de clonagem, chassi, vidros, hodômetro, ar-condicionado, pneus, rodas e consulta documental). Para quem deseja a Vistoria Cautelar Completa da Linha Leve, com análise detalhada do motor com estetoscópio, scanner eletrônico total multimarcas e controle de manutenções, o valor é de R$ 460,00 (ou acréscimo de R$ 200,00 sobre o pacote estrutural).'
  },
  {
    question: 'Vocês realizam atendimento no local onde está o veículo?',
    answer: 'Sim! Nosso atendimento é ágil e prático: agilizamos seu laudo cautelar e vamos até o local onde o veículo se encontra (lojas, concessionárias ou residências), ou realizamos a perícia na nossa matriz na R. Santos Dumont, 551 - Centro, Pelotas - RS.'
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Oferecemos pagamento facilitado via Mercado Pago com compra 100% segura, além de PIX, cartões de crédito e débito, e dinheiro.'
  },
  {
    question: 'Quanto tempo demora a vistoria e a entrega do laudo?',
    answer: 'O processo pericial completo leva em média de 1 a 2 horas. Entregamos o laudo técnico completo oficial no mesmo dia (em PDF para visualização imediata no celular e versão impressa), acompanhado de imagens em ângulo de 45° e vídeo completo sob solicitação.'
  },
  {
    question: 'Quais tipos de veículos a América Latina atende?',
    answer: 'Atendemos linha leve (carros de passeio, SUVs, hatches e sedãs), além de frotas corporativas, bancos, financeiras, seguradoras, linha pesada, máquinas agrícolas e embarcações com equipamentos periciais calibrados.'
  },
  {
    question: 'Como agendar rapidamente pelo WhatsApp?',
    answer: 'Basta enviar a mensagem "SIM" para o nosso WhatsApp (53) 98100-7069 ou clicar em qualquer botão do site para ser atendido na hora pela nossa equipe técnica!'
  }
];
