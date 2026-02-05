import { CardProps } from './Card';

export default function Card({ title, children }: CardProps) {
  return (
    <>
      <h3 className="pb-2 font-medium text-xl text-slate-400">{title}</h3>
      <p className="pb-4">{children}</p>
    </>
  );
}
