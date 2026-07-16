import { AudienceExplorer } from "@/components/audience-explorer";
import { PresentationNav } from "@/components/presentation-nav";
import {
  ContentSignalChart,
  ExperimentTimeline,
  MarketStageChart,
  RevenueChart,
} from "@/components/report-charts";
import {
  campaignFunnel,
  distributionChannels,
} from "@/lib/report-data";

const navItems = [
  { id: "overview", label: "Resumen" },
  { id: "origin", label: "Por qué comenzamos" },
  { id: "assumptions", label: "Hipótesis iniciales" },
  { id: "timeline", label: "Tres meses" },
  { id: "experiments", label: "Experimentos" },
  { id: "audience", label: "Audiencia" },
  { id: "voices", label: "Voces del mercado" },
  { id: "market", label: "Etapa del mercado" },
  { id: "distribution", label: "Distribución" },
  { id: "economics", label: "Economía y capacidades" },
  { id: "reading", label: "Lectura honesta" },
];

const worked = [
  "Contenido que genera alcance, confianza y conversaciones.",
  "Capacidad de convocar laboratorios de IA, fundadores, expertos e instituciones.",
  "Mentorías y charlas cuando la compra es criterio o acceso.",
  "Proyectos a la medida cuando ya existe una relación de confianza.",
];

const didNotWork = [
  "Convertir alcance orgánico en ventas enterprise predecibles.",
  "Usar sesiones gratuitas como puente repetible hacia proyectos.",
  "Vender cursos, diagnósticos o cobro por resultados sin un dolor urgente.",
  "Convertir introducciones de aliados en un canal con dueño y cadencia.",
];

const originSignals = [
  {
    signal: "Charlas corporativas sobre IA",
    observed: "Nestlé y Enel contrataron a Alexander para hablar de innovación e IA; una referencia interna llegó a USD 20K.",
    proved: "Las empresas pagan por reputación, perspectiva y acceso.",
    didNotProve: "Que el mismo comprador contrataría una implementación amplia.",
  },
  {
    signal: "Venta de avatares de IA",
    observed: "Un producto visible consiguió un cliente institucional en Costa Rica, conversaciones en México y aliados interesados en venderlo.",
    proved: "Una solución que se entiende en segundos abre conversaciones más rápido.",
    didNotProve: "Que exista la misma demanda por una consultoría general.",
  },
  {
    signal: "Programas educativos de IA",
    observed: "Lab10/Lapis, Fundamentos AI, 30X y programas ejecutivos mostraban demanda; Alan también fue invitado como speaker.",
    proved: "Aprender IA ya era una compra reconocible en Latinoamérica.",
    didNotProve: "Que educación, criterio e implementación tengan el mismo comprador o modelo económico.",
  },
  {
    signal: "Equipos internos y firmas de implementación",
    observed: "Grupo BAL, Global66, Ontop y otras compañías buscaban líderes internos capaces de conectar IA y negocio; firmas como Tenex crecían alrededor de la implementación.",
    proved: "Las organizaciones necesitan conectar negocio e implementación.",
    didNotProve: "Que las empresas prefieran tercerizar esa función o comprarla a partir de contenido.",
  },
];

const assumptions = [
  {
    title: "La implementación sería la siguiente ola",
    verdict: "Parcialmente correcta",
    body: "Existe en empresas grandes y en procesos específicos. Gran parte del mercado accesible sigue comprando aprendizaje, claridad o soluciones muy concretas.",
  },
  {
    title: "La marca reduciría la fricción de confianza",
    verdict: "Correcta, pero insuficiente",
    body: "Abre puertas y explica por qué las personas responden. No sustituye urgencia, presupuesto, un proceso de compra ni un caso de uso claro.",
  },
  {
    title: "El alcance produciría ventas enterprise entrantes",
    verdict: "No validada",
    body: "La distribución creció con fuerza; el comprador dominante siguió siendo pequeño, exploratorio y temprano en su adopción.",
  },
  {
    title: "Una oferta amplia ayudaría a descubrir qué vender",
    verdict: "No funcionó",
    body: "La amplitud atrajo problemas heterogéneos y dificultó repetir un mismo comprador, proceso y resultado prometido.",
  },
];

const experiments = [
  ["Llamada inicial de USD 200", "4 pagos", "Monetizó acceso; no produjo una transición consistente a consultoría."],
  ["Sesiones gratuitas con Alexander", "Aplicaciones y cotizaciones", "No hubo un cierre repetible atribuible al formato."],
  ["Consultoría AI First", "Conversaciones y propuestas", "Demasiado amplia para que un comprador frío entendiera qué compraba."],
  ["Cursos y programas", "Leads e interés declarado", "Cero ventas confirmadas pese a distribución propia y pauta."],
  ["AI Frontier Summit", "~USD 10K de interés potencial", "La mejor señal comercial, pero fue pipeline y se lanzó con 3-4 semanas."],
  ["Outcome-based pricing", "2 leads débiles", "Quitar riesgo económico no creó urgencia ni presupuesto."],
  ["AI 360 / advisory", "Conversaciones manuales", "El valor de una opinión externa apareció; el packaging web no convirtió."],
  ["Partners, eventos y alianzas", "Acceso institucional", "Experimentos iniciados recientemente; todavía no son canales probados."],
];

const revenueSignals = [
  ["2 proyectos pagados", "Podemos entregar valor a la medida.", "Ambos llegaron por relaciones previas de Alan."],
  ["3 mentorías de USD 1K", "Existe disposición a pagar por criterio reconocido.", "Escala solo si Alexander continúa siendo el producto."],
  ["4 llamadas pagadas", "Existe disposición a pagar por acceso inicial.", "No hubo conversión posterior demostrada."],
  ["~10 llamadas desde pauta", "Los anuncios pueden producir conversaciones.", "No hubo cierres; tres prospectos declararon falta de presupuesto."],
];

const negativeEvidence = [
  {
    label: "Oferta",
    title: "No existe una venta repetible",
    body: "Ningún comprador nuevo adquirió dos veces la misma solución y no hay ingresos recurrentes demostrados.",
  },
  {
    label: "Comprador",
    title: "La mayor parte de la demanda llega antes del presupuesto",
    body: "75% de quienes declararon su etapa comercial están sin ingresos o por debajo de USD 500K.",
  },
  {
    label: "Ingreso",
    title: "Lo cobrado sigue ligado a personas y relaciones",
    body: "Los proyectos llegaron por relaciones de Alan; las demás compras monetizaron principalmente acceso o criterio de Alexander.",
  },
  {
    label: "Capacidad",
    title: "La venta enterprise y a gobierno todavía no está probada",
    body: "Hay acceso inicial, pero no un proceso repetible para abrir la cuenta, encontrar un responsable, pasar compras y cerrar.",
  },
  {
    label: "Aprendizaje",
    title: "Se cambiaron demasiadas variables al mismo tiempo",
    body: "Cursos, eventos, diagnósticos, consultoría, pilotos y precios no aislaron un mismo comprador, problema y promesa.",
  },
];

const positiveEvidence = [
  {
    label: "Confianza",
    title: "La profundidad técnica sí abre puertas",
    body: "El Gobierno de El Salvador buscó la conversación por credibilidad técnica; Fedesoft llegó por el contenido.",
  },
  {
    label: "Distribución",
    title: "La atención propia es real y difícil de copiar",
    body: "Contenido, newsletter, YouTube y eventos generan alcance y republicación sin depender por completo de pauta.",
  },
  {
    label: "Acceso",
    title: "El equipo convoca actores poco accesibles",
    body: "OpenAI, el Consulado, Fedesoft, fundadores, investigadores e instituciones aceptaron construir espacios junto al equipo.",
  },
  {
    label: "Tiempo",
    title: "Los experimentos enterprise apenas comenzaron",
    body: "Fedesoft, eventos institucionales y aliados comerciales entraron en prueba en julio; tres meses no cubren un ciclo enterprise completo.",
  },
  {
    label: "Mercado",
    title: "Sí existe compra cuando el resultado es concreto",
    body: "McKinsey y Tenex muestran demanda por resultados medibles; el dato no valida todavía que Torrenegra pueda capturarla.",
  },
];

const leadQuotes = [
  "Quiero guía, apoyo, alguien que me diga si lo hago bien o no.",
  "No tengo claras ciertas cosas que sí se pueden automatizar.",
  "Nos urge una mirada desde el mundo, pero partiendo de lo que ya existe.",
  "Claridad sobre hacia dónde dirigir el negocio.",
];

function SlideNumber({ number }: { number: number }) {
  return <span className="slide-number" aria-hidden="true">{String(number).padStart(2, "0")}</span>;
}

export default function Home() {
  return (
    <main>
      <PresentationNav items={navItems} />

      <section className="report-section report-slide overview" id="overview">
        <SlideNumber number={1} />
        <div className="overview-intro overview-intro-compact">
          <div><h1>Resumen ejecutivo</h1></div>
          <div className="overview-summary">
            <p>En tres meses probamos distintas formas de convertir autoridad y acceso en un negocio de IA. Validamos atención, conversaciones y disposición a pagar por personas concretas. No validamos todavía una oferta fría y repetible.</p>
          </div>
        </div>

        <div className="overview-lower overview-lower-revenue">
          <RevenueChart />
          <div className="overview-status">
            <h2>Qué se puso a prueba</h2>
            <div className="overview-status-grid">
              <article><strong>Funcionó</strong><p>Contenido, acceso institucional y compras ligadas a relaciones o personas reconocidas.</p></article>
              <article><strong>No funcionó</strong><p>Convertir alcance, sesiones gratuitas, cursos o cobro por resultados en una venta fría repetible.</p></article>
              <article><strong>En validación</strong><p>Fedesoft, eventos institucionales y aliados comerciales comenzaron apenas en julio.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="report-section report-slide" id="origin">
        <SlideNumber number={2} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Por qué comenzamos</p><h2>Cuatro señales distintas hicieron razonable lanzar Torrenegra &amp; Co.</h2></div>
          <p>Antes de marzo observamos compras reales alrededor de IA. Cada señal validaba un mercado distinto; ninguna demostraba por sí sola demanda por una consultoría general de implementación.</p>
        </div>
        <div className="origin-table">
          <div className="origin-head"><span>Señal observada antes de lanzar</span><span>Evidencia concreta</span><span>Qué validaba</span><span>Qué todavía no validaba</span></div>
          {originSignals.map((item) => (
            <article key={item.signal}><h3>{item.signal}</h3><p>{item.observed}</p><p>{item.proved}</p><p>{item.didNotProve}</p></article>
          ))}
        </div>
      </section>

      <section className="report-section report-slide" id="assumptions">
        <SlideNumber number={3} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Hipótesis iniciales</p><h2>La marca sí abre la puerta. No crea por sí sola urgencia, presupuesto ni claridad de compra.</h2></div>
          <p>Una señal de mercado solo se convierte en negocio cuando la misma compra se repite. Estas son las cuatro ideas que realmente se pusieron a prueba.</p>
        </div>
        <div className="assumption-list">
          {assumptions.map((item) => (
            <article key={item.title}><div><h3>{item.title}</h3><span>{item.verdict}</span></div><p>{item.body}</p></article>
          ))}
        </div>
        <div className="worked-grid">
          <article><h2>Qué sí funcionó</h2><ul>{worked.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article><h2>Qué no funcionó</h2><ul>{didNotWork.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="report-section report-slide" id="timeline">
        <SlideNumber number={4} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Mes a mes</p><h2>Cada mes generó más atención y conversaciones. Todavía no una forma repetible de vender.</h2></div>
          <p>“Mes 3” no significa que la venta a empresas grandes haya sido validada. Fedesoft, eventos institucionales y socios comerciales apenas comenzaron a probarse en julio.</p>
        </div>
        <ExperimentTimeline />
      </section>

      <section className="report-section report-slide" id="experiments">
        <SlideNumber number={5} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Registro de experimentos</p><h2>Probamos distintos precios, formatos, compradores y canales. Ninguno produjo una oferta repetible.</h2></div>
          <p>Interés, aplicaciones, cotizaciones y pipeline se muestran como señales intermedias. Solo se llama venta al efectivo cobrado.</p>
        </div>
        <div className="experiment-register">
          <div className="register-head"><span>Experimento</span><span>Señal</span><span>Lectura al corte</span></div>
          {experiments.map(([experiment, signal, reading]) => (
            <div key={experiment}><strong>{experiment}</strong><span>{signal}</span><p>{reading}</p></div>
          ))}
        </div>
      </section>

      <section className="report-section report-slide audience-section" id="audience">
        <SlideNumber number={6} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Qué nos dijo la audiencia</p><h2>La audiencia sí incluye decisores, pero llega temprano y con problemas distintos.</h2></div>
          <p>Consolidamos 1,937 contactos únicos de cinco fuentes. Perfil, facturación y adopción combinan respuestas comparables; retos y países conservan su propia unidad de análisis.</p>
        </div>
        <AudienceExplorer />
      </section>

      <section className="report-section report-slide voices-section" id="voices">
        <SlideNumber number={7} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Qué dijeron leads y aliados</p><h2>La profundidad técnica abre la puerta. La necesidad más repetida es claridad.</h2></div>
          <p>El Salvador explica por qué llegan las conversaciones de mayor escala; los demás quotes muestran el problema que aparece con mayor frecuencia una vez abierta la puerta.</p>
        </div>
        <div className="voices-layout">
          <article className="voice-feature">
            <span>Por qué El Salvador abrió la conversación</span>
            <h3>Buscaban instituciones y aliados tecnológicos con quienes colaborar. Al revisar el ecosistema, percibieron a Torrenegra como un equipo con mayor profundidad técnica.</h3>
            <blockquote>“Sabemos que esto es nuevo, que expertos como tal no hay; hay gente con intenciones, POCs o implementaciones, unas mejor hechas que otras.”</blockquote>
            <footer>Equipo de asesores técnicos de Presidencia de El Salvador · conversación inicial</footer>
            <p>No llegaron buscando una capacitación. Llegaron evaluando con quién podían explorar e implementar.</p>
          </article>
          <div className="voice-list">
            <header><span>Qué buscan resolver</span><small>Expresiones textuales en entrevistas, formularios y sesiones</small></header>
            {leadQuotes.map((quote, index) => (
              <blockquote key={quote}><span>{String(index + 1).padStart(2, "0")}</span><p>“{quote}”</p></blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="report-section report-slide" id="market">
        <SlideNumber number={8} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Etapa de compra</p><h2>Captamos a la audiencia antes de que exista un proyecto listo para comprar.</h2></div>
          <p>El contenido atrae durante descubrimiento, aprendizaje y búsqueda de claridad. Una implementación grande aparece después: cuando ya existen un proceso costoso, un dueño, datos, urgencia y presupuesto.</p>
        </div>
        <MarketStageChart />
        <div className="market-takeaway"><strong>El volumen está en educación y claridad.</strong><p>Los contratos de mayor valor aparecen en las etapas 3 y 4, cuando la empresa ya puede nombrar el proceso, el costo y el responsable.</p></div>
      </section>

      <section className="report-section report-slide distribution-section" id="distribution">
        <SlideNumber number={9} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Distribución</p><h2>El contenido funcionó como medio. Todavía no es un canal de ventas predecible.</h2></div>
          <p>Las plataformas miden cosas distintas y las audiencias se solapan. Por eso no sumamos todo como “alcance total”; mostramos cada activo por separado.</p>
        </div>
        <div className="channel-list">
          {distributionChannels.map((item) => (
            <article key={item.channel}><span>{item.channel}</span><strong>{item.primary}</strong><p>{item.label}</p><small>{item.detail}</small></article>
          ))}
        </div>
        <div className="distribution-grid">
          <div><h3>Qué contenido resonó</h3><p>Los mayores resultados vinieron de una cifra sorprendente, una contradicción o un marco visual útil y compartible.</p><ContentSignalChart /></div>
          <div><h3>Qué pasó con la pauta</h3><p>La lectura útil no está en los eventos reportados por la plataforma, sino en llamadas y contratos.</p><div className="campaign-funnel">
            {campaignFunnel.map((item, index) => <div key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><p><strong>{item.label}</strong><small>{item.detail}</small></p><b>{item.value}</b></div>)}
          </div></div>
        </div>
      </section>

      <section className="report-section report-slide" id="economics">
        <SlideNumber number={10} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Economía observada</p><h2>El ingreso validó personas y relaciones, no una oferta escalable.</h2></div>
          <p>Separar el efectivo cobrado de las señales intermedias evita confundir atención, cotizaciones o pipeline con un negocio validado.</p>
        </div>
        <div className="signal-table">
          <div className="table-head"><span>Señal</span><span>Qué demuestra</span><span>Qué no demuestra</span></div>
          {revenueSignals.map(([signal, proves, notProves]) => <div key={signal}><strong>{signal}</strong><p>{proves}</p><p>{notProves}</p></div>)}
        </div>
      </section>

      <section className="report-section report-slide" id="reading">
        <SlideNumber number={11} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Lectura honesta</p><h2>El modelo actual no es repetible. La autoridad, distribución y acceso sí son activos reales.</h2></div>
          <p>Estas conclusiones no se contradicen: una describe el negocio que se probó; la otra, activos reales que todavía no se han convertido en un proceso comercial repetible.</p>
        </div>
        <div className="evidence-balance">
          <article className="evidence-case evidence-case-negative">
            <header><span>Lo que hoy no funciona</span><h3>La consultoría general todavía no se comporta como un negocio repetible</h3></header>
            <div className="evidence-points">{negativeEvidence.map((item, index) => <div key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.label}</small><p><strong>{item.title}</strong>{item.body}</p></div>)}</div>
          </article>
          <article className="evidence-case evidence-case-positive">
            <header><span>Lo que sí existe</span><h3>Hay activos poco comunes que todavía no se monetizan de forma repetible</h3></header>
            <div className="evidence-points">{positiveEvidence.map((item, index) => <div key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.label}</small><p><strong>{item.title}</strong>{item.body}</p></div>)}</div>
          </article>
        </div>
      </section>

      <footer className="report-footer">
        <strong>Torrenegra &amp; Co</strong>
        <p>Informe interno. Ingreso sujeto a conciliación contable. Alcance, registros, interés y pipeline no se contabilizan como ventas. Las clasificaciones de audiencia son direccionales y cada vista conserva su propio denominador.</p>
      </footer>
    </main>
  );
}
