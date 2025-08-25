'use client'

import useFrame from "@/app/lib/useFrame";

import {policyBlue} from "@/app/lib/colors";

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
    <div className='padding-horizontal w-full flex justify-start'>
      <div className='mr-8'>
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
          <p className='mb-8'>online-chess/</p>

          <div className='pl-16'>
            <div className='mb-8'>
              <p className={`${policyBlue.className} p-2`}>organizing-games-policy/player.py</p>
              { frame.orgGamesPlayer ? <PlayerClass params={['username', 'email']} /> : <></> }
            </div>

            <div>
              <p className={`${policyBlue.className} p-2`}>gameplay-policy/player.py</p>
              { frame.gamePlayPlayer ? <PlayerClass params={['color']}/> : <></> }
            </div>
          </div>

        </div>
        : <></>
      }
    </div>
  )
}

function PlayerClass({ params }: { params: string[] }) {
  return (
    <p className='ml-16'>
      class Player:<br/>
      &nbsp;&nbsp;def __init__(self, {params.join(', ')}):<br/>
      { params.map(param => <>&nbsp;&nbsp;&nbsp;&nbsp;self.{param} = {param}<br/></>) }
      <br/>
    </p>
  )
}
