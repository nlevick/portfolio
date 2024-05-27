import { PropsWithChildren } from 'react';

const SectionLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid">
      <header className="min-h-screen p-32 bg-red-200">
        <div>Nathan Levick</div>
        <div>UX Engineer</div>
      </header>
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[1fr_2fr] grid-rows-[14fr_1fr]">
        <nav className="bg-green-500 ">nav bar</nav>
        <main className="bg-blue-400">{children}</main>
        <footer className="bg-red-900 md:col-span-2">
          put copywrite/links here
        </footer>
      </div>
    </div>
  );
};

export default SectionLayout;
