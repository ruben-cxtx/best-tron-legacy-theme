"use client";

import { useEffect, useState, type ComponentProps } from "react";
import Link from "next/link";

type ProgramStatus = "idle" | "syncing" | "complete" | "error";

interface GridProgram {
  id: string;
  title: string;
  status: ProgramStatus;
  cycles: number;
  readonly owner?: {
    name: string;
    role: "user" | "iso" | "admin";
  };
}

const PROGRAMS: GridProgram[] = [
  { id: "encom-01", title: "Identity Disc Sync", status: "syncing", cycles: 42 },
  { id: "grid-07", title: "Portal Telemetry", status: "complete", cycles: 108 }
];

function useGridPrograms(seed: GridProgram[]) {
  const [programs, setPrograms] = useState(seed);

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setInterval(() => {
      setPrograms((current) =>
        current.map((program) => ({
          ...program,
          cycles: program.cycles + 1
        }))
      );
    }, 2500);

    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, []);

  return programs;
}

export function ProgramPanel(props: ComponentProps<"section">) {
  const programs = useGridPrograms(PROGRAMS);

  return (
    <section
      {...props}
      className="grid gap-4 rounded border border-cyan-400/40 bg-slate-950/90 p-4 text-cyan-50 shadow-[0_0_30px_rgba(0,245,255,0.18)]"
    >
      <header className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
          Encom Systems
        </h2>
        <Link className="text-xs text-amber-300 hover:text-cyan-200" href="/grid">
          open grid
        </Link>
      </header>

      <ul className="grid gap-2">
        {programs.map((program) => {
          const isActive = program.status === "syncing";

          return (
            <li
              key={program.id}
              data-active={isActive}
              className="flex items-center justify-between border-l-2 border-cyan-300/70 bg-cyan-300/5 px-3 py-2"
            >
              <span>{program.title}</span>
              <span className={isActive ? "text-emerald-300" : "text-cyan-200"}>
                {program.cycles.toLocaleString()} cycles
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
