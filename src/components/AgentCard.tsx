type AgentCardProps = {
  name: string;
  role: string;
  image: string;
  selected: boolean;
  onSelect: () => void;
};

export default function AgentCard({
  name,
  role,
  image,
  selected,
  onSelect,
}: AgentCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`overflow-hidden rounded-xl border text-left transition ${
        selected
          ? "border-green-400 bg-green-400/10"
          : "border-white/10 bg-white/5 hover:border-white/30"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="aspect-[4/5] w-full object-cover"
      />

      <div className="p-4">
        <p className="font-bold">{name}</p>

        <p className="text-sm text-zinc-500">{role}</p>
      </div>
    </button>
  );
}