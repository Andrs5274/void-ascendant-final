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
  const [selectedId, setSelectedId] = useState<AgentId>("anby");

  const selectedAgent =
    agents.find((agent) => agent.id === selectedId) ?? agents[0];

  return (
    <section
      id="agentes"
      className="min-h-screen bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.4em] text-green-400">
            ELIGE TU COMBATIENTE
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            AGENTES
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Cada agente cuenta con atributos y capacidades diferentes.
            Selecciona uno para conocer sus estadísticas.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
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

          <article className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-bold tracking-[0.3em] text-green-400">
              AGENTE SELECCIONADO
            </p>

            <h3 className="mt-3 text-5xl font-black">
              {selectedAgent.name}
            </h3>

            <p className="mt-2 text-lg text-green-400">
              {selectedAgent.role}
            </p>

            <p className="mt-6 leading-7 text-zinc-400">
              {selectedAgent.description}
            </p>

            <div className="mt-10 space-y-6">
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
    <div>
      <div className="mb-2 flex justify-between text-sm font-bold">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-green-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}