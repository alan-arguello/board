"use client";

import { useState } from "react";

const groups = [
  {
    id: "paid",
    label: "Monetizó",
    summary: "USD 6.4K en nueve transacciones",
    items: [
      ["2 proyectos de ejecución", "USD 2.6K · ambos por relaciones previas de Alan"],
      ["3 mentorías", "USD 3K · Alexander fue el producto"],
      ["4 llamadas pagadas", "USD 800 · sin conversión posterior demostrada"],
    ],
  },
  {
    id: "failed",
    label: "No convirtió",
    summary: "Atención y llamadas, pero ninguna oferta repetible",
    items: [
      ["Cursos y programas", "Sin ventas confirmadas pese a distribución y pauta"],
      ["Outcome-based pricing", "Dos leads débiles; quitar el riesgo no creó urgencia"],
      ["Pauta", "Cerca de diez llamadas y cero contratos"],
      ["Sesiones y assessments", "Interés, cotizaciones y claridad; sin un motion repetible"],
    ],
  },
  {
    id: "testing",
    label: "En validación",
    summary: "Experimentos iniciados recientemente; todavía no son canales",
    items: [
      ["Fedesoft + Cenisoft", "Alianza lanzada y SDR dedicado; sin revenue atribuido al corte"],
      ["Socios enterprise", "Reclutados en julio; ofertas y cuentas apenas se están definiendo"],
      ["Eventos institucionales", "Generaron autoridad y algunos leads; falta medir conversión"],
      ["B2G / El Salvador", "Discovery con una operación de escala; todavía sin contrato"],
    ],
  },
];

export function ExperimentStatus() {
  const [activeId, setActiveId] = useState("paid");
  const active = groups.find((group) => group.id === activeId) ?? groups[0];

  return (
    <div className="experiment-status">
      <div className="status-tabs" role="tablist" aria-label="Estado de los experimentos">
        {groups.map((group) => (
          <button
            aria-selected={active.id === group.id}
            className={active.id === group.id ? "is-active" : ""}
            key={group.id}
            onClick={() => setActiveId(group.id)}
            role="tab"
            type="button"
          >
            <span>{group.label}</span>
            <small>{group.summary}</small>
          </button>
        ))}
      </div>
      <div className="status-panel" role="tabpanel" aria-live="polite">
        {active.items.map(([title, body], index) => (
          <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{body}</p></article>
        ))}
      </div>
    </div>
  );
}
