'use client'

import clsx from "clsx";
import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayHighlights: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayHighlights: false,
    },
    {
      displayHighlights: true,
    }
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <p className='text-xl text-center py-[100px] px-[50px]'><span className={clsx({"text-yellow-600": frame.displayHighlights})}>modular monoliths</span> for maximum malleability and <span className={clsx({"text-yellow-600": frame.displayHighlights})}>microservice</span> magic</p>
      <p>Alex Basson</p>
      <p>alex.basson@primer.ai</p>
    </div>
  )
}
