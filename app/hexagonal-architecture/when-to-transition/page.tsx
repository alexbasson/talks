'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayListItem: boolean,
  displayMath: boolean,
  displayCosts: boolean,
  displayFeedback: boolean,
  displayTheTimeHasCome: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayListItem: false,
      displayMath: false,
      displayCosts: false,
      displayFeedback: false,
      displayTheTimeHasCome: false,
    },
    {
      displayListItem: true,
      displayMath: false,
      displayCosts: false,
      displayFeedback: false,
      displayTheTimeHasCome: false,
    },
    {
      displayListItem: true,
      displayMath: true,
      displayCosts: false,
      displayFeedback: false,
      displayTheTimeHasCome: false,
    },
    {
      displayListItem: true,
      displayMath: true,
      displayCosts: true,
      displayFeedback: false,
      displayTheTimeHasCome: false,
    },
    {
      displayListItem: true,
      displayMath: true,
      displayCosts: true,
      displayFeedback: true,
      displayTheTimeHasCome: false,
    },
    {
      displayListItem: true,
      displayMath: true,
      displayCosts: true,
      displayFeedback: true,
      displayTheTimeHasCome: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <h1>when to transition?</h1>
      <ul>
        {
          frame.displayListItem ?
            <>
              <li>when the balance tips!</li>
              <li>You have to:
                <ul className='pl-16 list-disc'>
                  { frame.displayMath ? <li>do the math</li> : <></> }
                  { frame.displayCosts ? <li>be aware of where the costs are and who feels them</li> : <></> }
                  { frame.displayFeedback ? <li>keep feedback channels open</li> : <></> }
                </ul>
              </li>
            </> :
            <></>
        }
        { frame.displayTheTimeHasCome ? <p className='text-lg italic'>but what if the time has come?</p> : <></> }
      </ul>
    </div>
  )
}
