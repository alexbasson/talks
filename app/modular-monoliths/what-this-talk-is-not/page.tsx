'use client'

import { caveat } from '@/app/lib/fonts';
import useFrame from "@/app/lib/useFrame"

type Frame = {
  displayBestPractices: boolean;
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayBestPractices: false,
    },
    {
      displayBestPractices: true,
    },
  ]

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <p>what this talk is not</p>
      { frame.displayBestPractices ? <p className={`${caveat.className} text-yellow-600 text-xxl`}>bEsT pRacTiCEs</p> : <></> }
    </div>
  )
}
