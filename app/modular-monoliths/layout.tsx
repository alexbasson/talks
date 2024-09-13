'use client'

import Link from "next/link";
import {useRouter} from 'next/navigation';
import {layoutPadding} from '@/app/lib/definitions';
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
      className={`bg-neutral-800 h-screen text-base`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Link className={"h-screen"} href={nextHrefFoo}>
        {children}
      </Link>
    </div>
  )
}
