import Link from 'next/link';
import IconCodepen from './icons/Codepen';
import IconGithub from './icons/Github';
import IconLinkedin from './icons/Linkedin';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-background text-sm w-full">
      <div className="flex justify-center ">
        <Link href="https://github.com/nlevick" className="m-1 h-9 w-9">
          <IconLinkedin />
        </Link>
        <Link
          href="https://linkedin.com/in/nathan-levick"
          className="m-1 h-9 w-9"
        >
          <IconGithub />
        </Link>
        <Link href="https://codepen.io/nlevick" className="m-1 h-9 w-9">
          <IconCodepen />
        </Link>
      </div>
      <div className="p-2 text-center">© 2024 Nathan Levick</div>
    </footer>
  );
}
