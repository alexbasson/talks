'use client'

import useFrame from "@/app/lib/useFrame";

import {adapterRed, deployableGreen, policyBlue} from "@/app/lib/colors";

type Frame = {
  bullet1: boolean,
  bullet2: boolean,
  bullet3: boolean,
  bullet4: boolean,
  orgGamesPlayer: boolean,
  gamePlayPlayer: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      bullet1: false,
      bullet2: false,
      bullet3: false,
      bullet4: false,
      orgGamesPlayer: false,
      gamePlayPlayer: false,
    },
    {
      bullet1: true,
      bullet2: false,
      bullet3: false,
      bullet4: false,
      orgGamesPlayer: false,
      gamePlayPlayer: false,
    },
    {
      bullet1: true,
      bullet2: true,
      bullet3: false,
      bullet4: false,
      orgGamesPlayer: false,
      gamePlayPlayer: false,
    },
    {
      bullet1: true,
      bullet2: true,
      bullet3: false,
      bullet4: false,
      orgGamesPlayer: true,
      gamePlayPlayer: false,
    },
    {
      bullet1: true,
      bullet2: true,
      bullet3: false,
      bullet4: false,
      orgGamesPlayer: true,
      gamePlayPlayer: true,
    },
    {
      bullet1: true,
      bullet2: true,
      bullet3: true,
      bullet4: false,
      orgGamesPlayer: true,
      gamePlayPlayer: true,
    },
    {
      bullet1: true,
      bullet2: true,
      bullet3: true,
      bullet4: true,
      orgGamesPlayer: true,
      gamePlayPlayer: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal grid grid-cols-2 gap-8'>
      <div>
        <h1>why is this nice?</h1>
        <ul className='pl-16 list-disc'>
          {frame.bullet1 ? <li>each piece <span className={"italic"}>actually</span> stays small</li> : <></>}
          {frame.bullet2 ? <li>each policy module stays specialized</li> : <></>}
          {frame.bullet3 ? <li>no extra deployment overhead</li> : <></>}
          {frame.bullet4 ? <li>lets you try out the context boundary</li> : <></>}
        </ul>
      </div>
      {frame.bullet2 ?
        <div className='font-mono text-sm leading-normal mt-4'>
          <p className='mb-4'>online-chess/</p>
          <ul className='pl-16 list-none'>
            <li className={`${policyBlue.className} p-2`}>
              <p>organizing-games-policy/</p>
              <ul className={"pl-16 list-none"}>
                <li>src/main/.../Player.java</li>
              </ul>
            </li>
            { frame.orgGamesPlayer ?
              <li className='ml-32'>
                <p>
                  class Player &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;String username;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;String email;<br/>
                  &#125;
                </p>
              </li>
              : <></>
            }
            <li className={`${policyBlue.className} p-2 mt-16`}>
              <p>gameplay-policy/</p>
              <ul className={"pl-16 list-none"}>
                <li>src/main/.../Player.java</li>
              </ul>
            </li>
            { frame.gamePlayPlayer ?
              <li className='ml-32'>
                <p>
                  class Player &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;String color;<br/>
                  &#125;
                </p>
              </li>
              : <></>
            }
          </ul>
        </div>
        : <></>
      }
    </div>
  )
}
