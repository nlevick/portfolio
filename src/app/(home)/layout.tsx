import Waves from '@/components/Waves';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid">
      <header className="flex flex-col justify-between min-h-screen bg-neutral-800">
        {/* <header className="flex flex-col justify-between min-h-screen bg-slate-900"> */}
        <div className=" xs:p-12 sm:p-20 md:p-32 w-full h-2/6 xs:text-center md:text-left">
          {/* <h1 className="font-extrabold uppercase text-7xl text-slate-300 "> */}
          <h1 className="font-extrabold uppercase text-7xl text-slate-300">
            Nathan Levick
          </h1>
          <h2 className="mt-2 text-4xl text-primary italic">UX Engineer</h2>
        </div>
        <div className="h-2/6">
          <Waves />
        </div>
        {/* <div className="flex w-full justify-center items-center h-2/6 bg-background"> */}
        <div className="flex w-full justify-center items-center h-2/6 bg-slate-900">
          <Link href="/#home">
            <Button radius="sm" size="lg" variant="bordered" color="primary">
              Dive Deeper
            </Button>
          </Link>
        </div>
      </header>
      <div
        id="home"
        className="grid min-h-screen grid-cols-1 md:grid-cols-[1fr_2fr] grid-rows-[14fr_1fr]"
      >
        <Navigation />
        <main className="bg-blue-400">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
