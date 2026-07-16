export type ReportDatum = {
  label: string;
  value: number;
  display?: string;
  detail?: string;
  color?: string;
};

export const audienceProfiles: ReportDatum[] = [
  { label: "Fundadores y alta dirección", value: 1295, display: "67.1%", color: "#143f33" },
  { label: "Managers y operadores", value: 170, display: "8.8%", color: "#4d7b6d" },
  { label: "Builders y perfiles técnicos", value: 175, display: "9.1%", color: "#d06a3b" },
  { label: "Estudiantes y carrera temprana", value: 41, display: "2.1%", color: "#4067a9" },
  { label: "Otros perfiles declarados", value: 249, display: "12.9%", color: "#c9cbc6" },
];

export const revenueBands: ReportDatum[] = [
  { label: "Sin ingresos / etapa inicial", value: 215, display: "35.4%", detail: "215 contactos" },
  { label: "Menos de USD 500K", value: 242, display: "39.9%", detail: "242 contactos" },
  { label: "USD 500K o más", value: 133, display: "21.9%", detail: "133 contactos" },
  { label: "Capital levantado; ingresos no declarados", value: 17, display: "2.8%", detail: "17 contactos" },
];

export const adoptionStages: ReportDatum[] = [
  { label: "No usa herramientas", value: 78, display: "5.2%", detail: "78 contactos" },
  { label: "Uso general de asistentes", value: 799, display: "53.4%", detail: "799 contactos" },
  { label: "Construcción, código o automatización", value: 556, display: "37.1%", detail: "556 contactos" },
  { label: "Uso declarado en procesos o equipos", value: 64, display: "4.3%", detail: "64 contactos" },
];

export const challengeClusters: ReportDatum[] = [
  { label: "Eficiencia y automatización", value: 822, display: "42.5%" },
  { label: "Ventas, marketing y crecimiento", value: 373, display: "19.3%" },
  { label: "Producto, software y agentes", value: 299, display: "15.5%" },
  { label: "Estrategia, adopción y retorno", value: 291, display: "15.1%" },
  { label: "Datos y toma de decisiones", value: 222, display: "11.5%" },
  { label: "Personas, aprendizaje y cultura", value: 122, display: "6.3%" },
  { label: "Finanzas, administración y riesgo", value: 99, display: "5.1%" },
  { label: "Servicio y experiencia del cliente", value: 37, display: "1.9%" },
];

export const countries: ReportDatum[] = [
  { label: "Colombia", value: 234, display: "234" },
  { label: "México", value: 21, display: "21" },
  { label: "Estados Unidos", value: 17, display: "17" },
  { label: "Ecuador", value: 12, display: "12" },
  { label: "Perú", value: 10, display: "10" },
  { label: "Chile", value: 7, display: "7" },
  { label: "Panamá", value: 6, display: "6" },
  { label: "Argentina", value: 6, display: "6" },
  { label: "Otros países", value: 38, display: "38" },
];

export const audienceQuotes = [
  "Quiero guía, apoyo, alguien que me diga si lo hago bien o no.",
  "No tengo claras ciertas cosas que sí se pueden automatizar.",
  "Nos urge una mirada desde el mundo, pero partiendo de lo que ya existe.",
  "Claridad sobre hacia dónde dirigir el negocio.",
];

export const distributionChannels = [
  {
    channel: "LinkedIn · Alan + Torrenegra & Co",
    primary: "1.79M",
    label: "impresiones",
    detail: "1.42M compañía + 366.8K Alan; no deduplicadas",
  },
  {
    channel: "Instagram · Torrenegra Consulting",
    primary: "1.15M",
    label: "visualizaciones en 90 días",
    detail: "82.6% no seguidores · 89,235 cuentas alcanzadas",
  },
  {
    channel: "YouTube · Torrenegra Consulting",
    primary: "34.3K",
    label: "visualizaciones",
    detail: "7.6K horas vistas · +749 suscriptores",
  },
  {
    channel: "Substack · Alexander Torrenegra",
    primary: "4,684",
    label: "suscriptores",
    detail: "54.5K vistas en 180 días",
  },
];

export const campaignFunnel = [
  { label: "Gasto en campañas", value: "USD 2,461.91", detail: "17 campañas" },
  { label: "Llamadas atribuidas internamente", value: "~10", detail: "Distintas ofertas y audiencias" },
  { label: "Contratos cerrados", value: "0", detail: "Tres prospectos citaron presupuesto" },
];

export type PipelineAccount = {
  account: string;
  origin: string;
  stage: string;
  reading: string;
  status: "closed" | "open" | "validation" | "stalled";
};

export const pipelineAccounts: PipelineAccount[] = [
  {
    account: "2 proyectos de ejecución",
    origin: "Relaciones previas de Alan",
    stage: "Pagados · USD 2.6K",
    reading: "Único origen que produjo delivery pagado; todavía no prueba adquisición en frío.",
    status: "closed",
  },
  {
    account: "Davivienda / Grupo Bolívar",
    origin: "Formulario inbound + relación previa con el líder",
    stage: "Cotización y segunda conversación",
    reading: "Proyecto estimado en USD 30K-45K; quedó en evaluación interna al corte.",
    status: "stalled",
  },
  {
    account: "Gobierno de El Salvador",
    origin: "Inbound directo a Alexander",
    stage: "Discovery activo",
    reading: "Llegó por credibilidad y contenido. Tiene escala operativa; todavía no existe contrato.",
    status: "open",
  },
  {
    account: "La Cardio",
    origin: "Conversación estratégica",
    stage: "Modelo de colaboración explorado",
    reading: "Hay activos clínicos y datos; no hay todavía un esquema financiado que encaje.",
    status: "stalled",
  },
  {
    account: "Sabana Blues",
    origin: "Pauta de Instagram",
    stage: "Piloto de USD 1.1K propuesto",
    reading: "Dolor concreto y buena conversación; no hay evidencia de cierre al corte.",
    status: "stalled",
  },
  {
    account: "Holman / gestión de proyectos",
    origin: "Formulario de consultoría",
    stage: "Piloto de USD 1.1K propuesto",
    reading: "Caso de uso identificable; no hay evidencia de cierre al corte.",
    status: "stalled",
  },
  {
    account: "Fedesoft + Cenisoft",
    origin: "Inbound por contenido",
    stage: "Alianza lanzada",
    reading: "Distribución institucional y SDR dedicado apenas comienzan a ponerse a prueba.",
    status: "validation",
  },
  {
    account: "GoTraining + socios enterprise",
    origin: "Convocatoria pública de julio",
    stage: "Diseño de ofertas y acceso a cuentas",
    reading: "El canal se empezó a construir en julio; aún no produjo revenue atribuible.",
    status: "validation",
  },
];
