'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

export default function NavLink({
  children,
  ...props
}: ComponentProps<typeof Link>) {
  const activeStyle =
    'bg-background shadow-lg flex items-center h-full rounded-b-lg border-2 border-teal-600 border-t-0';
  const pathname = usePathname();
  const isActive = pathname === props.href;

  console.log(isActive, pathname, props.href);
  return (
    <div className={isActive ? activeStyle : ''}>
      <Link className="px-8 uppercase font-medium" {...props}>
        {children}
      </Link>
    </div>
  );
}
