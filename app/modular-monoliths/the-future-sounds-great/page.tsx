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

  const frame = useFrame<Frame>(frames);

  return (
    <div>
      <div className='bg-image' style={{backgroundImage: "url(/emerald-city.jpg)"}}>
      </div>

      <div
        className='padding-horizontal'
        style={{
        zIndex: 10,
        marginTop: -window.innerHeight + 400,
      }}>
        <p>the future sounds great...</p>
        {frame.displayHurtThisBad ? <p>...but does the present have to hurt this bad?</p> : <></>}
      </div>
    </div>
  )
}
