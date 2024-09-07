export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      id="about"
      className="p-20 flex flex-col justify-between h-full bg-gradient-radial from-slate-700 to-slate-800"
    >
      {children}
    </main>
  );
}
