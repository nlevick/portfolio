import Waves from '@/components/Waves';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import IconCaretDown from '../../components/icons/CaretDown';
import { BG_COLOR } from '../../../tailwind.config';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <header className="flex flex-col justify-between h-full bg-gradient-radial from-slate-700 to-slate-800">
        <div
          className="pt-[20vh] w-full h-3/6 text-center"
          style={{ textShadow: `1px 0px 6px ${BG_COLOR}` }}
        >
          <h1 className="font-extrabold uppercase text-7xl">Nathan Levick</h1>
          <h2 className="mt-1 px-3 text-3xl font-light text-primary">
            frontend engineer navigating the UX stack
          </h2>
        </div>
        <div className="h-2/6">
          <Waves />
        </div>
        <div className="flex flex-col w-full justify-center items-center h-1/6 bg-background">
          <Button radius="sm" size="lg" variant="light" color="primary">
            <Link href="/#home" className="uppercase font-semibold">
              Dive Deeper
            </Link>
          </Button>
          <div className="mt-2 animate-bounce animate-ease-out h-10 w-14">
            <IconCaretDown />
          </div>
        </div>
      </header>
      <div id="home" className="w-full">
        <Navigation />
        <main className="bg-background h-full w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
