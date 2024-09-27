'use client'

import Link from "next/link";
import {useRouter} from 'next/navigation';
import {useNextHref} from '@/app/lib/slides/slides';
import {enterFullscreen, exitFullscreen} from "@/app/lib/fullscreen";
import {useEffect, useState, KeyboardEvent, ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
  const router = useRouter();
  const nextHref = useNextHref();
  const [displayPresentButton, setDisplayPresentButton] = useState<boolean>(true);

  useEffect(() => {
    const exitHandler= () => {
      if (!document.fullscreenElement) {
        setDisplayPresentButton(true)
      }
    }

    document.addEventListener('fullscreenchange', exitHandler, false);
  }, [])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === " ") {
      router.push(nextHref);
    }

    if (event.key === "ArrowLeft") {
      router.back();
    }
  }

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      exitFullscreen()
        .then(() => setDisplayPresentButton(true))
    } else {
      setDisplayPresentButton(false)
      enterFullscreen(document.documentElement)
        .catch((err: TypeError) => console.error(err))
    }
  }

  return (
    <div
      className='bg-neutral-800 h-screen w-screen text-base'
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {displayPresentButton ?
        <button
          onClick={handleFullscreen}
          className='absolute top-0 right-0 bg-blue-500 text-white text-sm px-4 py-2 rounded'>
          Present
        </button>
        : <></>}
      <Link className='flex h-full w-full' href={nextHref}>
        {children}
      </Link>
    </div>
  )
}
