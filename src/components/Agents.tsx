import { useState } from "react";
import AgentCard from "./AgentCard";

type AgentId = "anby" | "billy" | "soldier11" | "pyrois";

type Agent = {
  id: AgentId;
  name: string;
  role: string;
  description: string;
  image: string;
  attack: number;
  defense: number;
  energy: number;
};

const agents: Agent[] = [
  {
    id: "anby",
    name: "Anby",
    role: "Agente eléctrica",
    description:
      "Una combatiente equilibrada, rápida y precisa. Especialista en mantener el control del campo de batalla.",
    image: "/images/Agent_Soldier_0_-_Anby_Portrait.webp",
    attack: 87,
    defense: 68,
    energy: 92,
  },
  {
    id: "billy",
    name: "Billy",
    role: "Agente de asalto",
    description:
      "Un atacante veloz especializado en combate a distancia y movimientos impredecibles.",
    image: "/images/Agent_Starlight_-_Billy_Kid_Portrait.webp",
    attack: 91,
    defense: 55,
    energy: 88,
  },
  {
    id: "soldier11",
    name: "Soldier 11",
    role: "Agente de combate",
    description:
      "Una luchadora disciplinada con gran capacidad ofensiva y excelente resistencia.",
    image: "/images/Agent_Soldier_11_Portrait.webp",
    attack: 94,
    defense: 74,
    energy: 80,
  },
  {
    id: "pyrois",
    name: "Pyrois",
    role: "Agente especial",
    description:
      "Una unidad extremadamente poderosa, orientada al daño y al dominio energético.",
    image: "/images/Agent_Pyrois_Portrait.webp",
    attack: 96,
    defense: 89,
    energy: 72,
  },
];

export default function Agents() {
  const [selectedId, setSelectedId] =
    useState<AgentId>("anby");

  const selectedAgent =
    agents.find((agent) => agent.id === selectedId) ??
    agents[0];

  return (
    <section
      id="agentes"
      className="overflow-hidden bg-zinc-950 px-4 py-20 text-white sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-green-400 sm:text-sm sm:tracking-[0.4em]">
            ELIGE TU COMBATIENTE
          </p>

          <h2 className="break-words text-4xl font-black sm:text-5xl lg:text-6xl">
            AGENTES
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Cada agente cuenta con atributos y capacidades diferentes.
            Selecciona uno para conocer sus estadísticas.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

          {/* TARJETAS */}
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                name={agent.name}
                role={agent.role}
                image={agent.image}
                selected={agent.id === selectedId}
                onSelect={() => setSelectedId(agent.id)}
              />
            ))}
          </div>

          {/* INFORMACIÓN */}
          <article className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 lg:flex lg:flex-col lg:justify-center">
            <p className="break-words text-xs font-bold tracking-[0.25em] text-green-400 sm:text-sm sm:tracking-[0.3em]">
              AGENTE SELECCIONADO
            </p>

            <h3 className="mt-3 break-words text-4xl font-black sm:text-5xl">
              {selectedAgent.name}
            </h3>

            <p className="mt-2 break-words text-base text-green-400 sm:text-lg">
              {selectedAgent.role}
            </p>

            <p className="mt-6 break-words text-sm leading-7 text-zinc-400 sm:text-base">
              {selectedAgent.description}
            </p>

            <div className="mt-8 min-w-0 space-y-6 sm:mt-10">
              <Stat
                label="ATAQUE"
                value={selectedAgent.attack}
              />

              <Stat
                label="DEFENSA"
                value={selectedAgent.defense}
              />

              <Stat
                label="ENERGÍA"
                value={selectedAgent.energy}
              />
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

type StatProps = {
  label: string;
  value: number;
};

function Stat({ label, value }: StatProps) {
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center justify-between gap-4 text-sm font-bold">
        <span>{label}</span>

        <span className="shrink-0">
          {value}%
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-green-400"
          style={{
            width: `${Math.min(value, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}