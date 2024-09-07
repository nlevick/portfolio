import Link from 'next/link';
import { ComponentProps } from 'react';

export default function FooterLink({
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className="m-1 h-9 w-9 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-250"
      {...props}
    >
      {children}
    </Link>
  );
}
