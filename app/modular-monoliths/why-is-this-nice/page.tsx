'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  title: string,
  displayPiecesStaySmall: boolean,
  displaySeparationOfConcerns: boolean,
  displayCheapAdapters: boolean,
  displayTestingInIsolation: boolean
}

export default function Page() {
  const frames: Frame[] = [
    {
      title: "why is this nice?",
      displayPiecesStaySmall: false,
      displaySeparationOfConcerns: false,
      displayCheapAdapters: false,
      displayTestingInIsolation: false,
    },
    {
      title: "why is this nice?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: false,
      displayCheapAdapters: false,
      displayTestingInIsolation: false,
    },
    {
      title: "why is this nice?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: true,
      displayCheapAdapters: false,
      displayTestingInIsolation: false,
    },
    {
      title: "why is this nice?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: true,
      displayCheapAdapters: true,
      displayTestingInIsolation: false,
    },
    {
      title: "why is this nice?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: true,
      displayCheapAdapters: true,
      displayTestingInIsolation: true,
    },
    {
      title: "how does this go wrong?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: true,
      displayCheapAdapters: true,
      displayTestingInIsolation: true,
    },
  ];

  const frame = frames[useFrame()];

  return (
    <div>
      <h1>{frame.title}</h1>
      <ul className={"pl-16 list-disc"}>
        { frame.displayPiecesStaySmall ? <li>each piece stays small</li> : <></> }
        { frame.displaySeparationOfConcerns ? <li>enforces separation of concerns</li>: <></> }
        { frame.displayCheapAdapters ? <li>adapters are cheap and easy to replace</li> : <></> }
        { frame.displayTestingInIsolation ? <li>facilitates testing modules in isolation</li> : <></> }
      </ul>
    </div>
  )
}
