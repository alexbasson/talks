'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayHurtThisBad: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayHurtThisBad: false,
    },
    {
      displayHurtThisBad: true,
    },
  ]

  const frame = frames[useFrame()];

  return (
    <div>
      <p>the future sounds great...</p>
      { frame.displayHurtThisBad ? <p>...but does the present have to hurt this bad?</p> : <></> }
    </div>
  )
}
