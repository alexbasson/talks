'use client'

import Link from "next/link";
import {useRouter} from 'next/navigation';
import {useNextHref} from '@/app/lib/slides/slides';
import {KeyboardEvent, ReactNode, useEffect, useState} from "react";

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

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
        .then(() => setDisplayPresentButton(true))
    } else {
      setDisplayPresentButton(false)
      document.documentElement.requestFullscreen({navigationUI: 'hide'})
        .catch((err: TypeError) => console.error(err))
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === " ") {
      router.push(nextHref);
    }

    if (event.key === "ArrowLeft") {
      router.back();
    }

    if (event.key === "Enter") {
      toggleFullscreen()
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
          onClick={toggleFullscreen}
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
