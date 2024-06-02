// import { roboto } from '@/fonts';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid">
      <header className="flex flex-col justify-between min-h-screen p-32 bg-slate-900">
        <div>
          <h1
            className={`font-medium uppercase text-6xl text-slate-300`}
            // className={`font-medium uppercase text-6xl text-sky-400`}
            // className={`${roboto.className} font-medium uppercase text-7xl text-sky-500`}
          >
            Nathan Levick
          </h1>
          {/* <div className="mb-4 text-4xl text-sky-300">UX Engineer</div> */}
          <h2 className="mb-2 text-4xl text-sky-300">UX Engineer</h2>
          {/* <div className="text-2xl text-green-200 italic"> */}
          {/*   prismatic innvoation */}
          {/* </div> */}
        </div>
        <div className="flex w-full justify-center">
          <Link href="/#home">Dive deeper</Link>
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
