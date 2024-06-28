'use client'

import useFrame from "@/app/lib/useFrame";
import Image from "next/image";

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
      <div style={{
        zIndex: 0,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image
          src="/emerald-city.jpg"
          alt="emerald city with yellow brick road"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div>
        <p>the future sounds great...</p>
        {frame.displayHurtThisBad ? <p>...but does the present have to hurt this bad?</p> : <></>}
      </div>
    </div>
  )
}
