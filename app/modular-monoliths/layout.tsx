'use client'

import Link from "next/link";
import {useRouter} from 'next/navigation';
import {useNextHref} from '@/app/lib/slides/slides';

export default function Layout({children}: { children: React.ReactNode }) {
  const router = useRouter();
  const nextHrefFoo = useNextHref();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      router.push(nextHrefFoo);
    }

    if (e.key === "ArrowLeft") {
      router.back();
    }
  }

  return (
    <div
      className='bg-neutral-800 h-screen w-screen text-base'
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Link className='flex h-full w-full' href={nextHrefFoo}>
        {children}
      </Link>
    </div>
  )
}
