'use client'

import useFrame from "@/app/lib/useFrame";
import clsx from "clsx";

type Frame = {
  highlightDeployableMitosis: boolean,
  highlightAdapterDivision: boolean,
  highlightAdapterExtraction: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      highlightDeployableMitosis: false,
      highlightAdapterDivision: false,
      highlightAdapterExtraction: false,
    },
    {
      highlightDeployableMitosis: true,
      highlightAdapterDivision: false,
      highlightAdapterExtraction: false,
    },
    {
      highlightDeployableMitosis: false,
      highlightAdapterDivision: true,
      highlightAdapterExtraction: false,
    },
    {
      highlightDeployableMitosis: false,
      highlightAdapterDivision: false,
      highlightAdapterExtraction: true,
    },
  ];

  const frame = frames[useFrame()];

  return (
    <div>
      <h1>how to transition?</h1>
      <ul>
        <li><span  className={clsx({"text-yellow-600": frame.highlightDeployableMitosis})}>deployable mitosis</span></li>
        <li><span  className={clsx({"text-yellow-600": frame.highlightAdapterDivision})}>adapter division</span></li>
        <li><span  className={clsx({"text-yellow-600": frame.highlightAdapterExtraction})}>adapter extraction</span></li>
      </ul>
    </div>
  )
}
