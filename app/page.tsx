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
  "Capacidad de convocar AI labs, founders, expertos e instituciones.",
  "Mentorías y charlas cuando la compra es criterio o acceso.",
  "Proyectos a la medida cuando ya existe una relación de confianza.",
];

const didNotWork = [
  "Convertir alcance orgánico en inbound enterprise predecible.",
  "Usar sesiones gratuitas como puente repetible hacia proyectos.",
  "Vender cursos, assessments u outcome pricing sin un dolor urgente.",
  "Convertir introducciones de partners en un canal con dueño y cadencia.",
];

const originSignals = [
  {
    signal: "Charlas corporativas",
    observed: "Nestlé y Enel contrataron a Alexander para hablar de innovación e IA; una referencia interna llegó a USD 20K.",
    proved: "Las empresas pagan por reputación, perspectiva y acceso.",
    didNotProve: "Que el mismo comprador contrataría una implementación amplia.",
  },
  {
    signal: "Avatares de IA",
    observed: "Un producto visible consiguió un cliente institucional en Costa Rica, conversaciones en México y aliados interesados en venderlo.",
    proved: "Una solución que se entiende en segundos abre conversaciones más rápido.",
    didNotProve: "Que exista el mismo pull por una consultoría general.",
  },
  {
    signal: "Educación",
    observed: "Lab10/Lapis, Fundamentos AI, 30X y programas ejecutivos mostraban demanda; Alan también fue invitado como speaker.",
    proved: "Aprender IA ya era una compra reconocible en Latinoamérica.",
    didNotProve: "Que educación, criterio e implementación tengan el mismo buyer o economics.",
  },
  {
    signal: "Capacidad interna de IA",
    observed: "Grupo BAL, Global66, Ontop y otras compañías buscaban AI Leads o FDEs internos; firmas como Tenex crecían alrededor de deployment.",
    proved: "Las organizaciones necesitan conectar negocio e implementación.",
    didNotProve: "Que prefieran tercerizar esa función o comprarla mediante inbound.",
  },
];

const assumptions = [
  {
    title: "La implementación sería la siguiente ola",
    verdict: "Parcialmente correcta",
    body: "Existe en enterprise y en flujos específicos. Gran parte del mercado accesible sigue comprando aprendizaje, claridad o soluciones muy concretas.",
  },
  {
    title: "La marca reduciría la fricción de confianza",
    verdict: "Correcta, pero insuficiente",
    body: "Abre puertas y explica por qué las personas responden. No sustituye urgencia, presupuesto, procurement ni un caso de uso claro.",
  },
  {
    title: "El alcance produciría inbound de alto valor",
    verdict: "No validada",
    body: "La distribución creció con fuerza; el comprador dominante siguió siendo pequeño, exploratorio y temprano en su adopción.",
  },
  {
    title: "Una oferta amplia ayudaría a descubrir el wedge",
    verdict: "No funcionó",
    body: "La amplitud atrajo problemas heterogéneos y dificultó repetir un comprador, un workflow y una promesa comercial.",
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

const strengths = [
  ["Credibilidad de marca", "Las personas aceptan la conversación y las instituciones prestan atención."],
  ["Profundidad técnica", "El equipo puede discutir producto, ingeniería, modelos, adopción y negocio."],
  ["Distribución propia", "Contenido, newsletter y eventos generan atención sin depender totalmente de pauta."],
  ["Acceso poco común", "Relaciones con AI labs, founders, researchers e instituciones."],
  ["Puente regional", "Capacidad para traducir lo que ocurre en Silicon Valley a problemas latinoamericanos."],
];

const gaps = [
  ["Venta enterprise", "Todavía no existe un proceso probado de cuentas, champion, procurement y cierre."],
  ["B2G", "Hay acceso inicial, pero no capability probado para contratación pública y ciclos políticos."],
  ["Wedge y casos", "No hay dos clientes comparables con el mismo problema, solución y antes/después."],
  ["Delivery a escala", "El bench y la repetibilidad operativa no se han probado en contratos grandes."],
  ["Dependencia de personas", "La confianza y el ingreso siguen muy ligados a Alan y Alexander."],
];

const antiCase = [
  ["No hay repetibilidad", "Ningún desconocido compró dos veces la misma oferta; no existe revenue recurrente demostrado."],
  ["Distribución y comprador no coinciden", "La audiencia responde, pero la mayoría capturada tiene economics pequeños o está explorando."],
  ["La marca sigue atada a personas", "Los proyectos llegaron por relaciones de Alan; el resto monetizó principalmente acceso a Alexander."],
  ["La categoría se llena rápido", "Saber de IA se está volviendo una credencial básica, no una propuesta de valor suficiente."],
  ["El aprendizaje se diluyó", "Consultoría, cursos, summit, assessments, pilotos y pricing cambiaron demasiado rápido para aislar una señal."],
];

const investCase = [
  ["Tres meses no son un ciclo enterprise", "El periodo sí refuta el inbound automático; no basta para refutar una venta de seis a doce meses."],
  ["La autoridad es real", "OpenAI, el Consulado, Fedesoft y líderes relevantes aceptaron construir espacios junto al equipo."],
  ["La distribución es difícil de copiar", "El contenido alcanza y se republica fuera de los canales propios."],
  ["El mercado paga por outcomes concretos", "Un partner de McKinsey describió demanda al regalar diagnóstico o research y cobrar contra el outcome; Tenex muestra un patrón comparable."],
  ["Existen leads con escala", "El Gobierno de El Salvador y otras instituciones sí tienen operaciones y problemas de tamaño suficiente."],
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
        <div className="overview-intro">
          <div>
            <p className="context-line">Business review · marzo-julio de 2026</p>
            <h1>Torrenegra &amp; Co</h1>
          </div>
          <div className="overview-summary">
            <strong>Resumen ejecutivo</strong>
            <p>En tres meses probamos distintas formas de convertir autoridad y acceso en un negocio de IA. Validamos atención, conversaciones y disposición a pagar por personas concretas. No validamos todavía una oferta fría y repetible.</p>
          </div>
        </div>

        <div className="overview-lower overview-lower-summary">
          <article className="overview-conclusion">
            <span>Lectura al corte</span>
            <strong>La autoridad abre conversaciones. Todavía no existe un motor comercial repetible.</strong>
            <p>La evidencia separa dos realidades: Torrenegra genera confianza y acceso poco comunes, pero el alcance por sí solo no produjo una oferta que compradores desconocidos entendieran y compraran de forma consistente.</p>
          </article>
          <div className="overview-status">
            <h2>Qué se puso a prueba</h2>
            <div className="overview-status-grid">
              <article><strong>Funcionó</strong><p>Contenido, acceso institucional y compras ligadas a relaciones o personas reconocidas.</p></article>
              <article><strong>No funcionó</strong><p>Convertir alcance, sesiones gratuitas, cursos u outcome pricing en una venta fría repetible.</p></article>
              <article><strong>En validación</strong><p>Fedesoft, eventos institucionales y aliados enterprise comenzaron apenas en julio.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="report-section report-slide" id="origin">
        <SlideNumber number={2} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Por qué comenzamos</p><h2>La tesis original tenía señales reales. El error fue asumir que probaban la misma compra.</h2></div>
          <p>Charlas, educación, productos visibles, roles internos de IA y firmas de deployment son mercados relacionados, pero tienen compradores, riesgos, ciclos y economics diferentes.</p>
        </div>
        <div className="origin-table">
          <div className="origin-head"><span>Señal previa</span><span>Qué observamos</span><span>Qué sí probaba</span><span>Qué no probaba</span></div>
          {originSignals.map((item) => (
            <article key={item.signal}><h3>{item.signal}</h3><p>{item.observed}</p><p>{item.proved}</p><p>{item.didNotProve}</p></article>
          ))}
        </div>
      </section>

      <section className="report-section report-slide" id="assumptions">
        <SlideNumber number={3} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Hipótesis iniciales</p><h2>La marca sí abre la puerta. No crea por sí sola urgencia, presupuesto ni claridad de compra.</h2></div>
          <p>La diferencia entre una hipótesis correcta y un negocio es la repetibilidad. Estas son las cuatro ideas que realmente se pusieron a prueba.</p>
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
          <div><p className="context-line">Mes a mes</p><h2>Cada iteración aumentó atención, autoridad o conversaciones. Ninguna produjo todavía un motion repetible.</h2></div>
          <p>“Mes 3” no significa que el canal enterprise haya sido validado. Fedesoft, eventos institucionales y socios comerciales apenas comenzaron a probarse en julio.</p>
        </div>
        <ExperimentTimeline />
      </section>

      <section className="report-section report-slide" id="experiments">
        <SlideNumber number={5} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Registro de experimentos</p><h2>Probamos precio, formato, buyer y canal. El resultado más claro fue qué no basta.</h2></div>
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
          <div><p className="context-line">Qué nos dijo la audiencia</p><h2>Hay curiosidad y búsqueda de claridad. No hay un único workflow urgente compartido por todos.</h2></div>
          <p>Las vistas combinan formularios, sesiones y eventos solo cuando las preguntas son comparables. Cada gráfico muestra su propio denominador para no fabricar un “n” único.</p>
        </div>
        <AudienceExplorer />
      </section>

      <section className="report-section report-slide voices-section" id="voices">
        <SlideNumber number={7} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Quotes de leads y conversaciones</p><h2>La pregunta que más se repite no es técnica. Es: “¿voy bien?”</h2></div>
          <p>Las personas se acercan por confianza y profundidad técnica. Lo que traen, sin embargo, suele ser incertidumbre antes que un caso de uso listo para comprar.</p>
        </div>
        <div className="voices-layout">
          <article className="voice-feature">
            <span>Por qué se acercaron</span>
            <blockquote>“He visto el ecosistema que tienen. Quería entender hacia dónde estaban apuntando, qué estaban haciendo y explorar si existe una posibilidad de hacer algo.”</blockquote>
            <footer>Equipo técnico de Presidencia de El Salvador · conversación inicial</footer>
            <p>En la misma conversación dijeron que “expertos como tal no hay” y distinguieron entre intención, POC e implementaciones bien hechas. La credibilidad percibida sí está abriendo puertas.</p>
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
          <div><p className="context-line">Lectura de etapa</p><h2>Torrenegra es fuerte antes de que aparezca el presupuesto.</h2></div>
          <p>El contenido atrae cuando las personas descubren, aprenden y buscan claridad. La economía de una implementación exige que ya exista un proceso costoso, un dueño, datos y urgencia.</p>
        </div>
        <MarketStageChart />
        <div className="market-takeaway"><strong>La demanda existe, pero llega temprano.</strong><p>La mayor audiencia está en las etapas 0 a 2. Los contratos de implementación viven principalmente en las etapas 3 y 4.</p></div>
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
        <div className="economics-layout">
          <RevenueChart />
          <div className="signal-table">
            <div className="table-head"><span>Señal</span><span>Qué demuestra</span><span>Qué no demuestra</span></div>
            {revenueSignals.map(([signal, proves, notProves]) => <div key={signal}><strong>{signal}</strong><p>{proves}</p><p>{notProves}</p></div>)}
          </div>
        </div>
      </section>

      <section className="report-section report-slide" id="reading">
        <SlideNumber number={11} />
        <div className="section-heading split-heading">
          <div><p className="context-line">Honestidad intelectual</p><h2>El caso para no invertir y el caso para seguir observando.</h2></div>
          <p>Las dos lecturas pueden ser ciertas. La categoría es real y los activos son raros; eso no implica que una consultora generalista sea el vehículo correcto.</p>
        </div>
        <div className="decision-columns">
          <article className="decision-case decision-case-negative">
            <h3>Por qué no seguir igual</h3>
            <div className="decision-list">{antiCase.map(([title, body]) => <div key={title}><strong>{title}</strong><p>{body}</p></div>)}</div>
            <h4>Brechas que sostienen esta lectura</h4>
            <div className="decision-assets">{gaps.map(([title, body]) => <div key={title}><strong>{title}</strong><p>{body}</p></div>)}</div>
          </article>
          <article className="decision-case decision-case-positive">
            <h3>Por qué aún puede existir una oportunidad</h3>
            <div className="decision-list">{investCase.map(([title, body]) => <div key={title}><strong>{title}</strong><p>{body}</p></div>)}</div>
            <h4>Activos que sostienen esta lectura</h4>
            <div className="decision-assets">{strengths.map(([title, body]) => <div key={title}><strong>{title}</strong><p>{body}</p></div>)}</div>
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
