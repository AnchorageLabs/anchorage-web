export type Lang = "en" | "es";

const en = {
  langToggle: "ES",
  install: "Install",
  openApp: "Open app",
  nav: [
    { label: "Products", id: "products" },
    { label: "How it works", id: "how" },
    { label: "About", id: "about" },
    { label: "Owners", id: "owners" },
  ],
  hero: {
    badge: "Software infrastructure lab",
    titleLead: "The map and runtime for ",
    titleAccent: "autonomous software delivery.",
    subtitle:
      "A deterministic map of every repository, and a runtime that takes an issue to a merged, deployed change.",
    ctaProducts: "Explore the products",
    ctaGithub: "View on GitHub",
    legendCartographer: "Cartographer — the map",
    legendAnchorage: "Anchorage — the runtime",
  },
  principles: [
    { title: "Deterministic substrate", description: "Facts before guesses. Byte-identical maps, zero-LLM indexes." },
    { title: "Inspectable by design", description: "Symbols, evidence trails, and durable run state you can audit." },
    { title: "Open-core boundary", description: "Protocol, SDK, and the map are open. Orchestration stays private." },
  ],
  worksWithLabel: "Works with the agents your team already uses",
  labels: { mission: "Mission", focus: "Focus" },
  sections: {
    products: {
      eyebrow: "Products",
      title: "Two products. One workflow.",
      intro:
        "Cartographer charts the ground so agents know where they are. Anchorage sequences those agents through durable workflows from issue to deploy. Together they are the map and the engine of autonomous software delivery.",
    },
    how: {
      eyebrow: "How it works",
      title: "Issue in. Merged, deployed change out.",
      intro:
        "Cartographer charts the ground so agents know where they are. Anchorage sequences those agents through durable steps — from a fresh issue to a reviewed change in production.",
    },
    about: {
      eyebrow: "About",
      title: "Precise systems, not demos.",
      intro:
        "Anchorage Labs is an independent, founder-led organization building useful technical products: backend systems, infrastructure, automation, and the open source primitives beneath them.",
    },
    owners: {
      eyebrow: "Owners",
      title: "Founder-led by systems builders.",
      intro:
        "Anchorage Labs is led by Sol Soletti and Valentin Torassa Colombero, whose public work points at the same center of gravity as the organization: developer tools, backend systems, infrastructure, and automation.",
    },
    stack: {
      eyebrow: "Technical stack",
      title: "Confirmed technologies across the repositories.",
      intro:
        "Observed in the Anchorage, Cartographer, and orchestrator repositories — manifests, Dockerfiles, CDK stacks, workflows, and project documentation.",
    },
  },
  products: [
    {
      kicker: "The map",
      visibility: "Private beta · invite-only",
      tagline: "Charts a repo before anyone sails it.",
      summary:
        "Scans a repository into a symbolic, machine-queryable context artifact — so agents and humans never re-discover a repo with ls, grep, and cat.",
      mission: "Any agent productive in any repo within one file read.",
      capabilities: [
        { title: "Symbolic context artifact", description: "Nine closed namespaces, closed enums, three-valued semantics. One vocabulary everywhere." },
        { title: "Code-symbol index — zero LLM tokens", description: "tree-sitter over ~25 languages into SQLite. Impact, refs, routes, env, tests — pure SQL, milliseconds." },
        { title: "Shared graph, versioned like git", description: "Push a hosted org graph so every agent queries the same fresh structure. Immutable, lease-checked snapshots." },
      ],
      guarantees: [
        "Deterministic — same tree, byte-identical output.",
        "Never invents facts — undetectable means null.",
        "No secrets — env names only.",
      ],
      ctaLabel: "Installation guide",
    },
    {
      kicker: "The runtime — protocol + orchestrator",
      visibility: "Open-core · private orchestrator",
      tagline: "Issue in, merged and deployed change out.",
      summary:
        "An open protocol, SDK, runner, and adapters for end-to-end software automation — plus the private orchestrator that sequences agents from issue to deploy.",
      mission: "Turn issues into completed changes by reliably sequencing agents.",
      capabilities: [
        { title: "Open-core protocol & SDK", description: "Wire spec, TypeScript SDK, CLI runner, MCP/A2A adapters, and reference agents — all Apache-2.0." },
        { title: "Durable, AWS-native execution", description: "Runs sequenced and persisted in RDS Postgres, served from ECS Fargate. issue-to-code, -merge, -deploy." },
        { title: "Plans & decomposition", description: "Plan and stop, or split into cross-linked GitHub issues. Inference on Amazon Bedrock, providers pluggable." },
      ],
      guarantees: [
        "Explicit open-core boundary.",
        "Protocol-first — a validated wire format, not a shared runtime.",
        "Auditable — durable, inspectable run state.",
      ],
      ctaLabel: "View on GitHub",
    },
  ],
  pipeline: [
    { title: "Issue", desc: "A GitHub issue lands — a bug, a feature, a task to complete." },
    { title: "Map", desc: "Cartographer charts the repo into a deterministic context graph — zero LLM tokens." },
    { title: "Sequence", desc: "Anchorage sequences agents through durable, inspectable steps: plan, code, test, review." },
    { title: "Ship", desc: "A reviewed change is merged and deployed, with run state auditable end to end." },
  ],
  bento: {
    feature: {
      eyebrow: "Ground truth",
      title: "Facts before guesses.",
      desc: "Deterministic maps and zero-LLM indexes give agents ground truth about a repository — byte-identical on every run.",
      stats: ["languages", "LLM tokens", "file read"],
    },
    durable: {
      eyebrow: "Durable runtime",
      title: "Survives restarts.",
      desc: "AWS-native workflows persist every step and stay auditable from issue to deploy.",
    },
    opencore: {
      eyebrow: "Open-core boundary",
      title: "Open where it counts.",
      desc: "Protocol, SDK, runner, and the Cartographer engine are Apache-2.0.",
    },
    operator: {
      eyebrow: "Operator-grade",
      title: "Explicit contracts, inspectable behavior.",
      desc: "Small composable tools with typed boundaries — you can see exactly what ran and why.",
    },
  },
  owners: [
    {
      role: "Co-founder",
      focus: "Developer tools, backend systems, Go, TypeScript, product.",
      summary:
        "Shapes Anchorage Labs around practical developer tooling and clear software systems. Public work across TypeScript and Go.",
      signals: ["Co-founder", "TypeScript", "Go", "Dev tooling", "Product"],
    },
    {
      role: "Co-founder",
      focus: "Infrastructure, automation, Linux, containers, security tooling.",
      summary:
        "Public work spanning Python, TypeScript, Go, Linux, and self-hosted tooling. Strong bias toward systems and automation.",
      signals: ["Co-founder", "Infrastructure", "Automation", "Linux", "AWS"],
    },
  ],
  aws: { title: "Built on AWS", subtitle: "Provisioned as code with AWS CDK" },
  footer: {
    blurb: "The state layer of AI software engineering. Founder-led, built in the open, and in early development.",
    githubOrg: "GitHub org",
    backToTop: "Back to top ↑",
    rights: "The state layer of AI software engineering",
  },
};

export type Dict = typeof en;

const es: Dict = {
  langToggle: "EN",
  install: "Instalar",
  openApp: "Abrir app",
  nav: [
    { label: "Productos", id: "products" },
    { label: "Cómo funciona", id: "how" },
    { label: "Acerca de", id: "about" },
    { label: "Fundadores", id: "owners" },
  ],
  hero: {
    badge: "Laboratorio de infraestructura de software",
    titleLead: "El mapa y el runtime para la ",
    titleAccent: "entrega de software autónoma.",
    subtitle:
      "Un mapa determinista de cada repositorio y un runtime que lleva un issue hasta un cambio fusionado y desplegado.",
    ctaProducts: "Explorar los productos",
    ctaGithub: "Ver en GitHub",
    legendCartographer: "Cartographer — el mapa",
    legendAnchorage: "Anchorage — el runtime",
  },
  principles: [
    { title: "Sustrato determinista", description: "Hechos antes que suposiciones. Mapas idénticos byte a byte, índices sin LLM." },
    { title: "Inspeccionable por diseño", description: "Símbolos, rastros de evidencia y estado de ejecución durable que podés auditar." },
    { title: "Frontera open-core", description: "El protocolo, el SDK y el mapa son abiertos. La orquestación queda privada." },
  ],
  worksWithLabel: "Funciona con los agentes que tu equipo ya usa",
  labels: { mission: "Misión", focus: "Enfoque" },
  sections: {
    products: {
      eyebrow: "Productos",
      title: "Dos productos. Un flujo de trabajo.",
      intro:
        "Cartographer traza el terreno para que los agentes sepan dónde están. Anchorage secuencia esos agentes en flujos durables, del issue al despliegue. Juntos son el mapa y el motor de la entrega de software autónoma.",
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Entra un issue. Sale un cambio fusionado y desplegado.",
      intro:
        "Cartographer traza el terreno para que los agentes sepan dónde están. Anchorage los secuencia en pasos durables — desde un issue nuevo hasta un cambio revisado en producción.",
    },
    about: {
      eyebrow: "Acerca de",
      title: "Sistemas precisos, no demos.",
      intro:
        "Anchorage Labs es una organización independiente y liderada por sus fundadores que construye productos técnicos útiles: sistemas backend, infraestructura, automatización y las primitivas open source que hay debajo.",
    },
    owners: {
      eyebrow: "Fundadores",
      title: "Liderado por constructores de sistemas.",
      intro:
        "Anchorage Labs está liderado por Sol Soletti y Valentin Torassa Colombero, cuyo trabajo público apunta al mismo centro de gravedad que la organización: herramientas para desarrolladores, sistemas backend, infraestructura y automatización.",
    },
    stack: {
      eyebrow: "Stack técnico",
      title: "Tecnologías confirmadas en los repositorios.",
      intro:
        "Observadas en los repositorios de Anchorage, Cartographer y el orquestador — manifiestos, Dockerfiles, stacks de CDK, workflows y documentación del proyecto.",
    },
  },
  products: [
    {
      kicker: "El mapa",
      visibility: "Beta privada · solo por invitación",
      tagline: "Cartografía un repo antes de que alguien lo navegue.",
      summary:
        "Escanea un repositorio en un artefacto de contexto simbólico y consultable por máquinas — para que agentes y personas nunca vuelvan a redescubrir un repo con ls, grep y cat.",
      mission: "Cualquier agente productivo en cualquier repo con la lectura de un solo archivo.",
      capabilities: [
        { title: "Artefacto de contexto simbólico", description: "Nueve namespaces cerrados, enums cerrados, semántica de tres valores. Un solo vocabulario en todos lados." },
        { title: "Índice de símbolos — cero tokens de LLM", description: "tree-sitter sobre ~25 lenguajes hacia SQLite. Impacto, referencias, rutas, env, tests — SQL puro, en milisegundos." },
        { title: "Grafo compartido, versionado como git", description: "Publicá un grafo de la organización para que cada agente consulte la misma estructura fresca. Snapshots inmutables y con lease." },
      ],
      guarantees: [
        "Determinista — mismo árbol, salida idéntica byte a byte.",
        "Nunca inventa hechos — indetectable significa null.",
        "Sin secretos — solo nombres de variables de entorno.",
      ],
      ctaLabel: "Guía de instalación",
    },
    {
      kicker: "El runtime — protocolo + orquestador",
      visibility: "Open-core · orquestador privado",
      tagline: "Entra un issue, sale un cambio fusionado y desplegado.",
      summary:
        "Un protocolo abierto, SDK, runner y adaptadores para la automatización de software de punta a punta — más el orquestador privado que secuencia agentes del issue al despliegue.",
      mission: "Convertir issues en cambios completos secuenciando agentes de forma confiable.",
      capabilities: [
        { title: "Protocolo y SDK open-core", description: "Especificación de wire, SDK de TypeScript, runner CLI, adaptadores MCP/A2A y agentes de referencia — todo Apache-2.0." },
        { title: "Ejecución durable y nativa de AWS", description: "Ejecuciones secuenciadas y persistidas en RDS Postgres, servidas desde ECS Fargate. issue-a-código, -merge, -deploy." },
        { title: "Planes y descomposición", description: "Planear y detenerse, o dividir en issues de GitHub enlazados. Inferencia en Amazon Bedrock, con proveedores intercambiables." },
      ],
      guarantees: [
        "Frontera open-core explícita.",
        "Primero el protocolo — un formato de wire validado, no un runtime compartido.",
        "Auditable — estado de ejecución durable e inspeccionable.",
      ],
      ctaLabel: "Ver en GitHub",
    },
  ],
  pipeline: [
    { title: "Issue", desc: "Llega un issue de GitHub — un bug, una feature, una tarea a completar." },
    { title: "Mapa", desc: "Cartographer traza el repo en un grafo de contexto determinista — cero tokens de LLM." },
    { title: "Secuencia", desc: "Anchorage secuencia agentes en pasos durables e inspeccionables: planear, codificar, testear, revisar." },
    { title: "Deploy", desc: "Un cambio revisado se fusiona y despliega, con el estado auditable de punta a punta." },
  ],
  bento: {
    feature: {
      eyebrow: "Verdad de base",
      title: "Hechos antes que suposiciones.",
      desc: "Los mapas deterministas y los índices sin LLM le dan a los agentes verdad de base sobre un repositorio — idéntica byte a byte en cada corrida.",
      stats: ["lenguajes", "tokens de LLM", "lectura de archivo"],
    },
    durable: {
      eyebrow: "Runtime durable",
      title: "Sobrevive a los reinicios.",
      desc: "Los flujos nativos de AWS persisten cada paso y siguen siendo auditables del issue al despliegue.",
    },
    opencore: {
      eyebrow: "Frontera open-core",
      title: "Abierto donde importa.",
      desc: "El protocolo, el SDK, el runner y el motor de Cartographer son Apache-2.0.",
    },
    operator: {
      eyebrow: "Grado operativo",
      title: "Contratos explícitos, comportamiento inspeccionable.",
      desc: "Herramientas pequeñas y componibles con límites tipados — podés ver exactamente qué corrió y por qué.",
    },
  },
  owners: [
    {
      role: "Cofundador",
      focus: "Herramientas para desarrolladores, sistemas backend, Go, TypeScript, producto.",
      summary:
        "Define Anchorage Labs en torno a herramientas prácticas para desarrolladores y sistemas de software claros. Trabajo público en TypeScript y Go.",
      signals: ["Cofundador", "TypeScript", "Go", "Dev tooling", "Producto"],
    },
    {
      role: "Cofundador",
      focus: "Infraestructura, automatización, Linux, contenedores, herramientas de seguridad.",
      summary:
        "Trabajo público que abarca Python, TypeScript, Go, Linux y herramientas self-hosted. Fuerte inclinación por los sistemas y la automatización.",
      signals: ["Cofundador", "Infraestructura", "Automatización", "Linux", "AWS"],
    },
  ],
  aws: { title: "Construido en AWS", subtitle: "Aprovisionado como código con AWS CDK" },
  footer: {
    blurb: "La capa de estado de la ingeniería de software con IA. Liderado por sus fundadores, construido en abierto y en desarrollo temprano.",
    githubOrg: "Organización en GitHub",
    backToTop: "Volver arriba ↑",
    rights: "La capa de estado de la ingeniería de software con IA",
  },
};

export const translations: Record<Lang, Dict> = { en, es };
