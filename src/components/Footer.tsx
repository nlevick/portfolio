import IconCodepen from './icons/Codepen';
import IconGithub from './icons/Github';
import IconLinkedin from './icons/Linkedin';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-background text-sm w-full">
      <div className="flex justify-center ">
        <div className="m-1 h-9 w-9">
          <IconLinkedin />
        </div>
        <div className="m-1 h-9 w-9">
          <IconGithub />
        </div>
        <div className="m-1 h-9 w-9">
          <IconCodepen />
        </div>
      </div>
      <div className="p-2 text-center">© 2024 Nathan Levick</div>
    </footer>
  );
}
