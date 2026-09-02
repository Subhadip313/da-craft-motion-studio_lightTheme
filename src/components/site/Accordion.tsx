import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

/** Accessible single-open disclosure list. Buttons control their own panels. */
export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const base = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-line rounded-sm border border-line bg-white", className)}>
      {items.map((item, i) => {
        const expanded = open === i;
        const panelId = `${base}-panel-${i}`;
        const btnId = `${base}-btn-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold text-ink transition hover:text-orange-dim"
              >
                {item.q}
                <Plus
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 text-orange transition-transform duration-300",
                    expanded && "rotate-45",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!expanded}
              className="px-5 pb-5 text-sm leading-relaxed text-ink-soft"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
