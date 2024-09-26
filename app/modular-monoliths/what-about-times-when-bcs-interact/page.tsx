'use client'

import useFrame from "@/app/lib/useFrame";
import {highlightYellow} from "@/app/lib/definitions";
import Arrow from "@/app/lib/diagrams/Arrow";

type Frame = {
  friendsLanguageColor: string,
  gameplayLanguageColor: string,
  displayThisStoryOverlap: boolean,
  displayTwoContextOverlap: boolean,
  displayOneContext: boolean,
  displayThreeContextOverlap: boolean,
  displayThreeContexts: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      friendsLanguageColor: "text-white",
      gameplayLanguageColor: "text-white",
      displayThisStoryOverlap: false,
      displayTwoContextOverlap: false,
      displayOneContext: false,
      displayThreeContextOverlap: false,
      displayThreeContexts: false,
    },
    {
      friendsLanguageColor: highlightYellow.className,
      gameplayLanguageColor: "text-white",
      displayThisStoryOverlap: false,
      displayTwoContextOverlap: false,
      displayOneContext: false,
      displayThreeContextOverlap: false,
      displayThreeContexts: false,
    },
    {
      friendsLanguageColor: "text-white",
      gameplayLanguageColor: highlightYellow.className,
      displayThisStoryOverlap: false,
      displayTwoContextOverlap: false,
      displayOneContext: false,
      displayThreeContextOverlap: false,
      displayThreeContexts: false,
    },
    {
      friendsLanguageColor: "text-white",
      gameplayLanguageColor: "text-white",
      displayThisStoryOverlap: true,
      displayTwoContextOverlap: false,
      displayOneContext: false,
      displayThreeContextOverlap: false,
      displayThreeContexts: false,
    },
    {
      friendsLanguageColor: "text-white",
      gameplayLanguageColor: "text-white",
      displayThisStoryOverlap: false,
      displayTwoContextOverlap: true,
      displayOneContext: false,
      displayThreeContextOverlap: false,
      displayThreeContexts: false,
    },
    {
      friendsLanguageColor: "text-white",
      gameplayLanguageColor: "text-white",
      displayThisStoryOverlap: false,
      displayTwoContextOverlap: false,
      displayOneContext: true,
      displayThreeContextOverlap: false,
      displayThreeContexts: false,
    },
    {
      friendsLanguageColor: "text-white",
      gameplayLanguageColor: "text-white",
      displayThisStoryOverlap: false,
      displayTwoContextOverlap: false,
      displayOneContext: false,
      displayThreeContextOverlap: true,
      displayThreeContexts: false,
    },
    {
      friendsLanguageColor: "text-white",
      gameplayLanguageColor: "text-white",
      displayThisStoryOverlap: false,
      displayTwoContextOverlap: false,
      displayOneContext: false,
      displayThreeContextOverlap: false,
      displayThreeContexts: true,
    },
    {
      friendsLanguageColor: "text-white",
      gameplayLanguageColor: "text-white",
      displayThisStoryOverlap: true,
      displayTwoContextOverlap: false,
      displayOneContext: false,
      displayThreeContextOverlap: false,
      displayThreeContexts: false,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal flex flex-col'>
      <h1 className={"mb-16"}>what about times when BCs interact?</h1>

      <div className="flex flex-start flex-grow">
        <div className='w-1/2 font-mono text-sm'>
          <div className={"mb-8"}>
            <p>Feature: Starting a game</p>
          </div>

          <div className={"mb-8"}>
            <p>Given I have <span className={frame.friendsLanguageColor}>invited</span> Cedar to play</p>
            <p>And Cedar has <span className={frame.friendsLanguageColor}>accepted</span> my <span className={frame.friendsLanguageColor}>invitation</span></p>
          </div>

          <div className={"mb-8"}>
            <p>When I start the <span className={frame.friendsLanguageColor}>game</span></p>
          </div>

          <div>
            <p>Then I am taken to a <span className={frame.gameplayLanguageColor}>board</span> with all the <span className={frame.gameplayLanguageColor}>pieces</span> in the starting <span className={frame.gameplayLanguageColor}>position</span></p>
          </div>
        </div>

        <div className='svg-container'>
          <svg className='svg'>
            { frame.displayThisStoryOverlap ?
            <g>
              <ellipse strokeWidth={10} cx={250} cy={220} rx={200} ry={210} stroke={'white'} fill={'none'}/>
              <text x={250} y={180} textAnchor='middle' dominantBaseline='middle' fill={'white'}>organizing games</text>

              <ellipse strokeWidth={10} cx={500} cy={450} rx={200} ry={220} stroke={'white'} fill={'none'}/>
              <text x={500} y={500} textAnchor='middle' dominantBaseline='middle' fill={'white'}>gameplay</text>

              <text
                x={550}
                y={50}
                textAnchor='left'
                dominantBaseline='middle'
                fill={highlightYellow.hexValue}
              >
                this story
              </text>

              <Arrow
                from={{x: 540, y: 80}}
                to={{x: 400, y: 300}}
                width={8}
                color={highlightYellow.hexValue}
              />
            </g>
              : <></> }

            { frame.displayTwoContextOverlap ?
            <g>
              <ellipse cx={250} cy={220} rx={200} ry={210} stroke={'white'} strokeWidth={8} fill={'none'}/>
              <ellipse cx={300} cy={250} rx={200} ry={220} stroke={'lightgray'} strokeWidth={8} fill={'none'}/>
            </g>
              : <></> }

            { frame.displayOneContext ?
            <g>
              <ellipse cx={275} cy={235} rx={240} ry={230} stroke={highlightYellow.hexValue} strokeWidth={8} fill={'none'}/>
            </g>
              : <></> }

            { frame.displayThreeContextOverlap ?
            <g transform={'rotate(0, 0, 45)'}>
              <ellipse cx={320} cy={200} rx={300} ry={180} stroke={'white'} strokeWidth={8} fill={'none'}/>
              <ellipse cx={470} cy={350} rx={180} ry={300} stroke={'lightgray'} strokeWidth={8} fill={'none'}/>
            </g>
              : <></> }

            { frame.displayThreeContexts ?
            <g>
              <ellipse cx={200} cy={200} rx={170} ry={170} stroke={highlightYellow.hexValue} strokeWidth={8} fill={'none'}/>
              <ellipse cx={500} cy={200} rx={170} ry={170} stroke={highlightYellow.hexValue} strokeWidth={8} fill={'none'}/>
              <ellipse cx={500} cy={500} rx={170} ry={170} stroke={highlightYellow.hexValue} strokeWidth={8} fill={'none'}/>
            </g>
              : <></> }
          </svg>
        </div>
      </div>
    </div>
  )
}
