'use client'

import { useSearchParams } from "next/navigation";

type State = {
  title: string,
  displayPiecesStaySmall: boolean,
  displaySeparationOfConcerns: boolean,
  displayCheapAdatpers: boolean,
  displayTestingInIsolation: boolean
}

export default function Page() {
  const searchParams = useSearchParams();
  const state = parseInt(searchParams.get("state") ?? "0") ?? 0;

  const states: State[] = [
    {
      title: "why is this nice?",
      displayPiecesStaySmall: false,
      displaySeparationOfConcerns: false,
      displayCheapAdatpers: false,
      displayTestingInIsolation: false,
    },
    {
      title: "why is this nice?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: false,
      displayCheapAdatpers: false,
      displayTestingInIsolation: false,
    },
    {
      title: "why is this nice?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: true,
      displayCheapAdatpers: false,
      displayTestingInIsolation: false,
    },
    {
      title: "why is this nice?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: true,
      displayCheapAdatpers: true,
      displayTestingInIsolation: false,
    },
    {
      title: "why is this nice?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: true,
      displayCheapAdatpers: true,
      displayTestingInIsolation: true,
    },
    {
      title: "how does this go wrong?",
      displayPiecesStaySmall: true,
      displaySeparationOfConcerns: true,
      displayCheapAdatpers: true,
      displayTestingInIsolation: true,
    },
  ]

  return (
    <div>
      <h1>{states[state].title}</h1>
      <ul className={"pl-16 list-disc"}>
        { states[state].displayPiecesStaySmall ? <li>each piece stays small</li> : <></> }
        { states[state].displaySeparationOfConcerns ? <li>enforces separation of concerns</li>: <></> }
        { states[state].displayCheapAdatpers ? <li>adapters are cheap and easy to replace</li> : <></> }
        { states[state].displayTestingInIsolation ? <li>facilitates testing modules in isolation</li> : <></> }
      </ul>
    </div>
  )
}
