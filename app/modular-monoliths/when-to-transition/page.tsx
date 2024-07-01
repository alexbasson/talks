'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayListItem: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayListItem: false,
    },
    {
      displayListItem: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div>
      <h1>when to transition?</h1>
      <ul>
        { frame.displayListItem ? <li>when the balance tips!</li> : <></> }
      </ul>
    </div>
  )
}
