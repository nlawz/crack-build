export function FrostedGlassFilter({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute backdrop-blur-xl backdrop-opacity-80 size-full rounded-2xl" />
      {children}
    </div>
  );
}
