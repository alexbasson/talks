'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayLi1: boolean,
  displayLi2: boolean,
  displayLi3: boolean,
  displayLi4: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayLi1: false,
      displayLi2: false,
      displayLi3: false,
      displayLi4: false,
    },
    {
      displayLi1: true,
      displayLi2: false,
      displayLi3: false,
      displayLi4: false,
    },
    {
      displayLi1: true,
      displayLi2: true,
      displayLi3: false,
      displayLi4: false,
    },
    {
      displayLi1: true,
      displayLi2: true,
      displayLi3: true,
      displayLi4: false,
    },
    {
      displayLi1: true,
      displayLi2: true,
      displayLi3: true,
      displayLi4: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <h1>why is this nice?</h1>
      <ul className='pl-16 list-disc'>
        { frame.displayLi1 ? <li>each piece <span className={"italic"}>actually</span> stays small</li> : <></> }
        { frame.displayLi2 ? <li>each policy module stays specialized</li> : <></> }
        { frame.displayLi3 ? <li>no extra deployment overhead</li> : <></> }
        { frame.displayLi4 ? <li>lets you try out the context boundary</li> : <></> }
      </ul>
    </div>
  )
}
