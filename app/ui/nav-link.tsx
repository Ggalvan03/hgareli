'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { links } from '@/app/lib/link-data';


export default function NavLinks(){
    const pathname = usePathname();
    return(
    <>
        {links.map((link)=>{
            return(
                <Link
                key={link.name}
                href={link.href}
                className={clsx("mx-2 ",{
                    'font-bold': pathname === link.href,
                  }
                )}
                >
                    {link.name}
                </Link>

            );
        })}

    </>
    );
}