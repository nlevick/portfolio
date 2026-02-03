import NavLink from './NavLink';

export default function Navigation() {
  return (
    <nav className="absolute flex top-0 shadow rounded-b-md right-1/2 translate-x-1/2 bg-background bg-opacity-50 h-10 items-center justify-center">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/work">Work</NavLink>
    </nav>
  );
}
