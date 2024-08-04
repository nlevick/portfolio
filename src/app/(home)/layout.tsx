import Waves from '@/components/Waves';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <header className="flex flex-col justify-between h-full bg-gray-800">
        <div className=" xs:p-12 sm:p-20 md:p-32 w-full h-2/6 xs:text-center md:text-left">
          <h1 className="font-extrabold uppercase text-6xl">Nathan Levick</h1>
          <h2 className="mt-2 text-3xl text-primary italic">UX/UI Engineer</h2>
        </div>
        <div className="h-2/6">
          <Waves />
        </div>
        <div className="flex w-full justify-center items-center h-2/6 bg-background">
          <Link href="/#home">
            <Button radius="sm" size="lg" variant="bordered" color="primary">
              Dive Deeper
            </Button>
          </Link>
        </div>
      </header>
      <div
        id="home"
        // className="grid grid-cols-1 md:grid-cols-[1fr_2fr] grid-rows-[14fr_1fr] h-full"
        className="w-full h-full"
      >
        <Navigation />
        <main className="bg-background h-full w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
