import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children?: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="relative m-4 mx-auto w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <div className="absolute -inset-px rounded-2xl bg-teal-500/10 blur-lg opacity-40" />
      <div className="relative rounded-2xl border border-slate-400/15 bg-background/60 backdrop-blur-2xl p-8 pt-6 shadow-xl">
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.09),inset_0_-1px_0_rgba(0,0,0,0.3)]" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-transparent opacity-50" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/10 opacity-40" />

        {title && (
          <h3 className="font-medium text-2xl text-slate-400">{title}</h3>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
