'use client'

import useFrame from "@/app/lib/useFrame"

type Frame = {
  displayMath: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayMath: false,
    },
    {
      displayMath: true,
    },
  ]

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <p>what this talk is</p>
      { frame.displayMath ? <p className={'text-xl text-yellow-600 font-mono'}>math</p> : <></> }
    </div>
  )
}
