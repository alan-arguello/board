"use client";

import { useMemo, useState } from "react";
import {
  adoptionStages,
  audienceProfiles,
  challengeClusters,
  countries,
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
    title: "Dos de cada tres perfiles clasificados son fundadores o alta dirección",
    insight: "El problema no es llegar únicamente a perfiles junior. La audiencia sí incluye personas con poder de decisión; el reto es que operan empresas de tamaños distintos y no comparten un mismo problema urgente.",
    note: "Base consolidada: 1,937 contactos únicos de cinco fuentes, deduplicados por email. Fue posible clasificar el perfil de 1,930.",
  },
  {
    key: "revenue",
    label: "Facturación",
    title: "Tres de cada cuatro operan sin ingresos o por debajo de USD 500K",
    insight: "457 de 607 contactos con información comparable están sin ingresos o por debajo de USD 500K. La autoridad alcanza a decisores, pero gran parte de ellos todavía no tiene presupuesto para una consultoría enterprise.",
    note: "n=607 contactos únicos con facturación o etapa comparable en aplicaciones y eventos. Datos autodeclarados y deduplicados.",
    data: revenueBands,
  },
  {
    key: "adoption",
    label: "Adopción",
    title: "El uso se concentra en asistentes y construcción; pocos describen adopción organizacional",
    insight: "Más de 90% de las respuestas clasificables describen uso general o técnico. Solo 64 contactos explicaron un uso claro dentro de procesos o equipos.",
    note: "n=1,497 contactos únicos con una respuesta clasificable de uso. La clasificación es direccional y no sustituye una auditoría de adopción.",
    data: adoptionStages,
  },
  {
    key: "challenges",
    label: "Retos",
    title: "La eficiencia es el tema común; los procesos concretos son distintos",
    insight: "Eficiencia y automatización aparece en 42.5% de las respuestas, pero agrupa procesos muy distintos. Ningún flujo específico concentra por sí solo la demanda.",
    note: "Base consolidada: 1,932 descripciones abiertas de cinco fuentes. Codificación multi-etiqueta; los porcentajes pueden sumar más de 100%.",
    data: challengeClusters,
  },
  {
    key: "countries",
    label: "Países",
    title: "Colombia es el mercado natural de la audiencia capturada",
    insight: "Colombia concentra la mayoría de las respuestas con país explícito; México y Estados Unidos son mercados secundarios en este corte.",
    note: "n=312 contactos únicos con país explícito; 354 menciones porque algunas empresas operan en más de un país.",
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
      <div className="donut-figure" aria-label="Distribución consolidada por perfil">
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
        <div><strong>{total.toLocaleString("es-MX")}</strong><span>perfiles clasificados</span></div>
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
    <div className="profile-view profile-view-unified">
      <span className="chart-label">Perfil consolidado de la audiencia</span>
      <DonutView data={audienceProfiles} />
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
            id={`audience-tab-${view.key}`}
            key={view.key}
            onClick={() => setActiveKey(view.key)}
            role="tab"
            type="button"
          >
            {view.label}
          </button>
        ))}
      </div>

      <div className="audience-panel" id="audience-panel" role="tabpanel" aria-labelledby={`audience-tab-${active.key}`} aria-live="polite">
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
