import { CardProps } from './Card';

export default function Card({ title, children }: CardProps) {
  return (
    <>
      <h3 className="pt-4 pb-2 font-medium text-xl text-slate-400">{title}</h3>
      <p>{children}</p>
    </>
  );
}
