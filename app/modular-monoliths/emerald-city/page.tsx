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

  const frame = frames[useFrame()];

  return (
    <div>
      <h1>foo</h1>
      { frame.displayTitle ? <p>10 bajillion microservice</p> : <></> }
      { frame.displayList ?
      <ul>
        <li>all perfectly decoupled</li>
        <li>all independently deployable</li>
        <li>all maintained by autonomous teams innovating without friction</li>
        <li>all choreographed with high availability and resiliency and telemetry and and and</li>
      </ul> : <></> }
    </div>
  )
}
