type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
      {children}
    </span>
  );
}