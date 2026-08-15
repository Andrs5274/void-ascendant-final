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
      className={`mx-auto w-full min-w-0 max-w-md overflow-hidden rounded-xl border text-left transition sm:max-w-none ${
        selected
          ? "border-green-400 bg-green-400/10"
          : "border-white/10 bg-white/5 hover:border-white/30"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="aspect-[4/5] w-full object-contain"
      />

      <div className="min-w-0 p-4">
        <p className="break-words font-bold">
          {name}
        </p>

        <p className="mt-1 break-words text-sm text-zinc-500">
          {role}
        </p>
      </div>
    </button>
  );
}