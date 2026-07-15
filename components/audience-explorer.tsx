"use client";

import { useMemo, useState } from "react";
import {
  adoptionStages,
  builderStages,
  challengeClusters,
  countries,
  eventRoles,
  organizationTypes,
  revenueBands,
  type ReportDatum,
} from "@/lib/report-data";

type ViewKey = "profile" | "revenue" | "adoption" | "challenges" | "countries";

const views: Array<{
  key: ViewKey;
  label: string;
  title: string;
  insight: string;
  note: string;
  data?: ReportDatum[];
}> = [
  {
    key: "profile",
    label: "Perfil",
    title: "La audiencia es amplia; el comprador enterprise no domina la entrada",
    insight: "PyMEs, consultoras y agencias representan más de la mitad del webinar. Los eventos también atrajeron founders, estudiantes y builders en etapas tempranas.",
    note: "Cada vista conserva su propio denominador: organizaciones n=1,222; roles del fireside n=147; etapa de Builders' Night n=136.",
  },
  {
    key: "revenue",
    label: "Facturación",
    title: "El interés aparece antes que el presupuesto enterprise",
    insight: "287 de 454 solicitantes declararon no tener ingresos o facturar menos de USD 100K. Solo 22 reportaron más de USD 5M.",
    note: "n=454 aplicaciones a sesiones de estrategia. Facturación autodeclarada.",
    data: revenueBands,
  },
  {
    key: "adoption",
    label: "Adopción",
    title: "Usar herramientas no equivale a cambiar la operación",
    insight: "343 de 454 describieron uso individual de herramientas. Solo 42 llegaron buscando adopción a nivel de equipo.",
    note: "n=454 aplicaciones. Clasificación sobre respuesta declarada; no es una auditoría técnica.",
    data: adoptionStages,
  },
  {
    key: "challenges",
    label: "Retos",
    title: "El dolor común es eficiencia; los workflows concretos están dispersos",
    insight: "Eficiencia y automatización aparece en 42.5% de las respuestas, pero agrupa procesos muy distintos. Ningún flujo específico concentra por sí solo la demanda.",
    note: "Base analizada: 1,932 descripciones de retos. Codificación multi-etiqueta; los porcentajes pueden sumar más de 100%.",
    data: challengeClusters,
  },
  {
    key: "countries",
    label: "Países",
    title: "Colombia es el mercado natural de la audiencia capturada",
    insight: "Colombia concentra la mayoría de las respuestas con país explícito; México y Estados Unidos son mercados secundarios en este corte.",
    note: "n=312 personas con país explícito en aplicaciones de estrategia e implementación.",
    data: countries,
  },
];

function BarView({ data, compact = false }: { data: ReportDatum[]; compact?: boolean }) {
  const max = Math.max(...data.map((item) => item.value));

  return (
    <div className={compact ? "audience-bars is-compact" : "audience-bars"}>
      {data.map((item) => (
        <div className="audience-bar" key={item.label} title={`${item.label}: ${item.display ?? item.value}`}>
          <div className="audience-bar-copy">
            <span>{item.label}</span>
            {item.detail ? <small>{item.detail}</small> : null}
          </div>
          <div className="audience-bar-track" aria-hidden="true">
            <i style={{ width: `${Math.max((item.value / max) * 100, 1.5)}%` }} />
          </div>
          <strong>{item.display ?? item.value.toLocaleString("es-MX")}</strong>
        </div>
      ))}
    </div>
  );
}

function DonutView({ data }: { data: ReportDatum[] }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let offset = 0;

  return (
    <div className="donut-layout">
      <div className="donut-figure" aria-label="Distribución por tipo de organización">
        <svg viewBox="0 0 200 200" role="img">
          <circle className="donut-base" cx="100" cy="100" r="70" pathLength="100" />
          {data.map((item) => {
            const percentage = (item.value / total) * 100;
            const currentOffset = offset;
            offset += percentage;
            return (
              <circle
                className="donut-segment"
                cx="100"
                cy="100"
                r="70"
                pathLength="100"
                key={item.label}
                stroke={item.color}
                strokeDasharray={`${percentage} ${100 - percentage}`}
                strokeDashoffset={-currentOffset}
              />
            );
          })}
        </svg>
        <div><strong>{total.toLocaleString("es-MX")}</strong><span>organizaciones</span></div>
      </div>
      <div className="donut-legend">
        {data.map((item) => (
          <div key={item.label}>
            <i style={{ background: item.color }} />
            <span>{item.label}</span>
            <strong>{item.display}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileView() {
  return (
    <div className="profile-view">
      <div className="profile-primary">
        <span className="chart-label">Tipo de organización · n=1,222</span>
        <DonutView data={organizationTypes} />
      </div>
      <div className="profile-secondary">
        <article>
          <header><strong>Fireside presencial</strong><span>roles · n=147</span></header>
          <BarView compact data={eventRoles} />
        </article>
        <article>
          <header><strong>Builders&apos; Night</strong><span>etapa · n=136</span></header>
          <BarView compact data={builderStages} />
        </article>
      </div>
    </div>
  );
}

export function AudienceExplorer() {
  const [activeKey, setActiveKey] = useState<ViewKey>("profile");
  const active = useMemo(() => views.find((view) => view.key === activeKey) ?? views[0], [activeKey]);

  return (
    <div className="audience-explorer">
      <div className="audience-tabs" role="tablist" aria-label="Explorar audiencia">
        {views.map((view) => (
          <button
            aria-controls="audience-panel"
            aria-selected={active.key === view.key}
            className={active.key === view.key ? "is-active" : ""}
            key={view.key}
            onClick={() => setActiveKey(view.key)}
            role="tab"
            type="button"
          >
            {view.label}
          </button>
        ))}
      </div>

      <div className="audience-panel" id="audience-panel" role="tabpanel" aria-live="polite">
        <header>
          <h3>{active.title}</h3>
          <p>{active.insight}</p>
        </header>
        {active.key === "profile" ? <ProfileView /> : <BarView data={active.data ?? []} />}
        <footer>{active.note}</footer>
      </div>
    </div>
  );
}
