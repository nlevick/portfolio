// import { roboto } from '@/fonts';
import Waves from '@/assets/waves';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid">
      <header className="flex flex-col justify-between min-h-screen bg-slate-900">
        <div className="sm:p-32 xs:p-12 w-full h-3/6">
          <h1
            className="font-medium uppercase text-6xl text-slate-300"
            // className={`font-medium uppercase text-6xl text-sky-400`}
            // className={`${roboto.className} font-medium uppercase text-7xl text-sky-500`}
          >
            Nathan Levick
          </h1>
          {/* <div className="mb-4 text-4xl text-sky-300">UX Engineer</div> */}
          <h2 className="mb-2 text-4xl text-sky-300">UX Engineer</h2>
        </div>

        <div>
          <Waves />
        </div>

        <div className="flex w-full justify-center items-center h-2/6 bg-neutral-900">
          <Link href="/#home">
            <button className="px-8 py-4 bg-slate-700 rounded shadow-md ">
              Dive Deeper
            </button>
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
