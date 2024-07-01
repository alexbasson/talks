'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayLi1: boolean,
  displayLi2: boolean,
  displayLi3: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayLi1: false,
      displayLi2: false,
      displayLi3: false,
    },
    {
      displayLi1: true,
      displayLi2: false,
      displayLi3: false,
    },
    {
      displayLi1: true,
      displayLi2: true,
      displayLi3: false,
    },
    {
      displayLi1: true,
      displayLi2: true,
      displayLi3: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div>
      <h1>but...microservices?</h1>
      <ul className={"list-disc"}>
        { frame.displayLi1 ? <li>microservices are costly, but also valuable for a lot of reasons</li> : <></> }
        { frame.displayLi2 ? <li>some of those reasons can be achieved in less-costly ways</li> : <></> }
        { frame.displayLi3 ? <li>some of those reasons don&apos;t kick in for a while</li> : <></> }
      </ul>
    </div>
  )
}
