const stages = [
  {
    id: "0",
    title: "Atención",
    voice: "No quiero quedarme atrás.",
    behavior: "Consume contenido, se registra y pregunta.",
    purchase: "Rara vez paga.",
  },
  {
    id: "1",
    title: "Aprendizaje",
    voice: "Quiero usar mejor las herramientas.",
    behavior: "Prueba ChatGPT, Claude o herramientas de código.",
    purchase: "Cursos, charlas y mentoría.",
  },
  {
    id: "2",
    title: "Claridad externa",
    voice: "¿Qué aplica realmente a mi empresa?",
    behavior: "Compara opciones y busca una opinión respetada.",
    purchase: "Paga si la decisión ya es concreta.",
  },
  {
    id: "3",
    title: "Ejecución",
    voice: "Este proceso ya me cuesta tiempo o dinero.",
    behavior: "Tiene dueño, datos, urgencia y una métrica.",
    purchase: "Piloto e implementación.",
  },
  {
    id: "4",
    title: "Escala",
    voice: "Necesito institucionalizarlo.",
    behavior: "Integra gobierno, seguridad y cambio operativo.",
    purchase: "Transformación enterprise.",
  },
];

export function MarketStageChart() {
  return (
    <div className="stage-chart" aria-label="Etapas observadas de adopción de inteligencia artificial">
      <div className="stage-range"><span>La demanda capturada se concentra aquí</span></div>
      <div className="stage-grid">
        {stages.map((stage, index) => (
          <article className={`stage stage-${index}`} key={stage.id}>
            <span className="stage-index">{stage.id}</span>
            <h3>{stage.title}</h3>
            <blockquote>{stage.voice}</blockquote>
            <p>{stage.behavior}</p>
            <small>{stage.purchase}</small>
          </article>
        ))}
      </div>
      <div className="stage-economics">
        <span>Más volumen, menor urgencia</span>
        <i aria-hidden="true" />
        <span>Menos volumen, mayor presupuesto</span>
      </div>
    </div>
  );
}

const contentSignals = [
  { label: "La mayoría nunca ha usado IA", value: 79317, note: "104 reposts" },
  { label: "Codex y su personalidad", value: 77895, note: "14 reposts" },
  { label: "Uber agotó su presupuesto de IA", value: 70973, note: "32 comentarios" },
  { label: "La factura de Claude de USD 500M", value: 63174, note: "16 comentarios" },
  { label: "La matriz de dónde no usar IA", value: 42624, note: "126 reposts" },
];

export function ContentSignalChart() {
  const max = Math.max(...contentSignals.map((item) => item.value));
  return (
    <div className="content-chart" aria-label="Publicaciones de mayor alcance en LinkedIn de Torrenegra y compañía">
      {contentSignals.map((item) => (
        <div className="content-row" key={item.label}>
          <div><span>{item.label}</span><small>{item.note}</small></div>
          <div className="content-track"><i style={{ width: `${(item.value / max) * 100}%` }} /></div>
          <strong>{(item.value / 1000).toFixed(1)}K</strong>
        </div>
      ))}
    </div>
  );
}

export function RevenueChart() {
  const rows = [
    { label: "2 proyectos de ejecución", value: "USD 2.6K", share: 40.625, className: "revenue-projects", note: "Ambos llegaron por relaciones previas de Alan" },
    { label: "3 mentorías con Alexander", value: "USD 3.0K", share: 46.875, className: "revenue-mentoring", note: "La compra fue acceso y criterio individual" },
    { label: "4 llamadas iniciales", value: "USD 0.8K", share: 12.5, className: "revenue-calls", note: "Sin conversión posterior demostrada" },
  ];

  return (
    <div className="revenue-visual" aria-label="Ingreso bruto reconstruido por fuente">
      <div className="revenue-heading">
        <span>Ingreso bruto reconstruido</span>
        <strong>USD 6.4K</strong>
        <small>9 transacciones · sujeto a conciliación contable</small>
      </div>
      <div className="revenue-detail">
        <div className="revenue-stack" aria-hidden="true">
          {rows.map((row) => <i className={row.className} key={row.label} style={{ width: `${row.share}%` }} />)}
        </div>
        <div className="revenue-rows">
          {rows.map((row) => (
            <div key={row.label}>
              <i className={row.className} />
              <span><strong>{row.label}</strong><small>{row.note}</small></span>
              <b>{row.value}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperimentTimeline() {
  const months = [
    {
      month: "Mes 1",
      title: "Atención y acceso",
      hypothesis: "La marca y una conversación con Alexander acelerarían confianza y ventas.",
      actions: "Contenido, sesiones 1:1, newsletter, comunidades y distribución de guerrilla.",
      result: "Alcance, aplicaciones y cuatro llamadas pagadas; ninguna oferta repetible.",
    },
    {
      month: "Mes 2",
      title: "Menos fricción, más formatos",
      hypothesis: "El pago inicial o el packaging estaban bloqueando la conversión.",
      actions: "Formulario abierto, pauta, cursos, programas, summit, assessments, partners y entrevistas.",
      result: "Más conversaciones y cerca de diez llamadas de pauta; cero cierres.",
    },
    {
      month: "Mes 3",
      title: "Inicio de enterprise y canales",
      hypothesis: "El comprador podía estar en corporativos, gobierno o Estados Unidos.",
      actions: "Fedesoft, Consulado, OpenAI, cámaras y reclutamiento de socios con acceso comercial.",
      result: "Más autoridad y pipeline institucional. Estos canales apenas comenzaron a probarse en julio.",
    },
  ];

  return (
    <div className="timeline">
      {months.map((item) => (
        <article key={item.month}>
          <header><span>{item.month}</span><h3>{item.title}</h3></header>
          <dl>
            <div><dt>Hipótesis</dt><dd>{item.hypothesis}</dd></div>
            <div><dt>Qué se hizo</dt><dd>{item.actions}</dd></div>
            <div><dt>Resultado</dt><dd>{item.result}</dd></div>
          </dl>
        </article>
      ))}
    </div>
  );
}
