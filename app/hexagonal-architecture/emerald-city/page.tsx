'use client'

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

  const frame = useFrame<Frame>(frames);

  return (
    <div>
      <div className='bg-image' style={{backgroundImage: "url(/emerald-city.jpg)"}}>
      </div>

      <div className='overlay-text padding-horizontal'>
        {frame.displayTitle ? <p>10 bajillion microservices</p> : <></>}
        {frame.displayList ?
          <ul className='pl-16 list-disc'>
            <li>all perfectly decoupled</li>
            <li>all independently deployable</li>
            <li>all maintained by autonomous teams innovating without friction</li>
            <li>all choreographed with high availability and resiliency and telemetry and and and</li>
          </ul> : <></>}
      </div>
    </div>
  )
}
