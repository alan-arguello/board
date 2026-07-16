"use client";

import { useEffect, useMemo, useState } from "react";

export type PresentationItem = {
  id: string;
  label: string;
};

export function PresentationNav({ items }: { items: PresentationItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const activeIndex = useMemo(() => Math.max(0, items.findIndex((item) => item.id === activeId)), [activeId, items]);

  useEffect(() => {
    const requestedSlide = window.location.hash.slice(1);
    if (items.some((item) => item.id === requestedSlide)) setActiveId(requestedSlide);

    const elements = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0.08, 0.25, 0.5] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [items]);

  const goTo = (index: number, behavior: ScrollBehavior = "smooth") => {
    const bounded = Math.min(Math.max(index, 0), items.length - 1);
    const item = items[bounded];
    const target = document.getElementById(item?.id);
    if (item) {
      setActiveId(item.id);
      window.history.replaceState(null, "", `#${item.id}`);
    }
    target?.scrollIntoView({ behavior, block: "start" });
    setIsOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, select, button, [contenteditable='true']")) return;
      if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key)) {
        event.preventDefault();
        goTo(activeIndex + 1);
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goTo(activeIndex - 1);
      }
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items]);

  return (
    <>
      <header className="topbar">
        <button className="brand" onClick={() => goTo(0)} type="button">Torrenegra &amp; Co</button>
        <button className="current-slide" onClick={() => setIsOpen((value) => !value)} type="button" aria-expanded={isOpen}>
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <strong>{items[activeIndex]?.label}</strong>
          <i aria-hidden="true">⌄</i>
        </button>
        <span className="confidential">Confidencial · 15 jul 2026</span>
      </header>

      <div className={isOpen ? "presentation-menu is-open" : "presentation-menu"} aria-hidden={!isOpen}>
        <div className="presentation-menu-inner">
          <header><strong>Índice</strong><button onClick={() => setIsOpen(false)} type="button" aria-label="Cerrar índice">×</button></header>
          <nav aria-label="Páginas del reporte">
            {items.map((item, index) => (
              <button className={item.id === activeId ? "is-active" : ""} key={item.id} onClick={() => goTo(index, "auto")} type="button">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.label}</strong>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="presentation-controls" aria-label="Navegación de páginas">
        <button disabled={activeIndex === 0} onClick={() => goTo(activeIndex - 1)} type="button" aria-label="Página anterior">←</button>
        <span><strong>{String(activeIndex + 1).padStart(2, "0")}</strong> / {String(items.length).padStart(2, "0")}</span>
        <button disabled={activeIndex === items.length - 1} onClick={() => goTo(activeIndex + 1)} type="button" aria-label="Página siguiente">→</button>
      </div>

      <div className="presentation-progress" aria-hidden="true"><i style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }} /></div>
    </>
  );
}
