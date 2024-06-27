'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayList: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayList: false,
    },
    {
      displayList: true,
    },
  ];

  const frame = frames[useFrame()];

  return (
    <div>
      <h1>just the classics:</h1>
      {frame.displayList ?
        <ul className={"pl-16 list-disc"}>
          <li>hexagonal architecture</li>
          <li>domain-driven design</li>
          <li>good old SOLID principles</li>
        </ul> : <></>}
    </div>
  )
}
