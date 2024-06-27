'use client'

import Image from 'next/image';
import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayTitle: boolean,
  displayList: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayTitle: false,
      displayList: false,
    },
    {
      displayTitle: true,
      displayList: false,
    },
    {
      displayTitle: true,
      displayList: true,
    },
  ]

  const frame = frames[useFrame()];

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
        { frame.displayTitle ? <p>10 bajillion microservices</p> : <></> }
        { frame.displayList ?
        <ul>
          <li>all perfectly decoupled</li>
          <li>all independently deployable</li>
          <li>all maintained by autonomous teams innovating without friction</li>
          <li>all choreographed with high availability and resiliency and telemetry and and and</li>
        </ul> : <></> }
      </div>
    </div>
  )
}
