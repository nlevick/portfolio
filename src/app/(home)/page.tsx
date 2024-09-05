import Waves from '@/components/Waves';
import { BG_COLOR } from '../../../tailwind.config';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full bg-gradient-radial from-slate-700 to-slate-800">
      <div
        className="pt-[15vh] w-full h-3/6 text-center"
        style={{ textShadow: `1px 0px 6px ${BG_COLOR}` }}
      >
        <h1 className="font-extrabold uppercase text-7xl">Nathan Levick</h1>
        <h2 className="mt-1 px-3 text-3xl font-light text-primary">
          frontend engineer navigating the UX stack
        </h2>
      </div>
      <div className="h-3/6">
        <Waves />
      </div>
    </div>
  );
}
