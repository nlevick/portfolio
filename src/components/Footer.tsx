import IconCodepen from './icons/Codepen';
import IconGithub from './icons/Github';
import IconLinkedin from './icons/Linkedin';
import FooterLink from './FooterLink';

export default function Footer() {
  return (
    <div className="p-1 flex flex-col justify-center bg-background text-sm w-full h-full">
      <div className="p-1 flex justify-center">
        <FooterLink href="https://github.com/nlevick">
          <IconLinkedin />
        </FooterLink>
        <FooterLink href="https://linkedin.com/in/nathan-levick">
          <IconGithub />
        </FooterLink>
        <FooterLink href="https://codepen.io/nlevick">
          <IconCodepen />
        </FooterLink>
      </div>
      <div className="text-center">© 2024 Nathan Levick</div>
    </div>
  );
}
