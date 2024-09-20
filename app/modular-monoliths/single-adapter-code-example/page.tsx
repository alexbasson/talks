'use client'

import useFrame from "@/app/lib/useFrame";
import clsx from "clsx";
import {Geometry, highlightYellow, policyBlue, Port} from "@/app/lib/definitions";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";

type Frame = {
  displayDiagram: boolean,
  highlightSecondaryAdapter: boolean,
  highlightPrimaryAdapter: boolean,
  highlightNames: boolean,
  highlightGameId: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayDiagram: false,
      highlightSecondaryAdapter: false,
      highlightPrimaryAdapter: false,
      highlightNames: false,
      highlightGameId: false,
    },
    {
      displayDiagram: true,
      highlightSecondaryAdapter: false,
      highlightPrimaryAdapter: false,
      highlightNames: false,
      highlightGameId: false,
    },
    {
      displayDiagram: true,
      highlightSecondaryAdapter: true,
      highlightPrimaryAdapter: false,
      highlightNames: false,
      highlightGameId: false,
    },
    {
      displayDiagram: true,
      highlightSecondaryAdapter: false,
      highlightPrimaryAdapter: true,
      highlightNames: false,
      highlightGameId: false,
    },
    {
      displayDiagram: true,
      highlightSecondaryAdapter: false,
      highlightPrimaryAdapter: false,
      highlightNames: true,
      highlightGameId: false,
    },
    {
      displayDiagram: true,
      highlightSecondaryAdapter: false,
      highlightPrimaryAdapter: false,
      highlightNames: false,
      highlightGameId: true,
    },
  ]
  const frame = useFrame<Frame>(frames);

  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const policyAGeometry = systemGeometry(0.2 * width, 0.25 * width, 0.5 * height);
  const policyBGeometry = systemGeometry(0.2 * width, 0.75 * width, 0.5 * height);

  const transform = (geometry: Geometry, port: Port) =>  `
  translate(
    ${port.center.x + 20 * port.adapterOffset.x + geometry.center.x},
    ${port.center.y + 20 * (Math.sqrt(3)/4) * port.adapterOffset.y + geometry.center.y}
  ),
  rotate(${port.rotate}, 0, 0)
  `
  return (
    <div className='padding-horizontal w-full flex flex-col flex-grow flex-shrink-0'>
      <div>
        <p className={"pb-0 mb-0 font-mono text-sm"}>
          class GameplayGameInitializer implements <span className={clsx({[highlightYellow.className]: frame.highlightSecondaryAdapter})}>GameInitializer</span> &#123;<br/>
          &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightPrimaryAdapter})}>private final SetupBoard setupBoard;</span><br/><br/>
          &nbsp;&nbsp;public GameplayGameInitializer(SetupBoard setupBoard) &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;this.setupBoard = setupBoard;<br/>
          &nbsp;&nbsp;&#125;<br/>
        </p>
      </div>

      <div className='flex flex-start flex-grow'>
        <div className='w-2/5'>
          <p className='py-0 my-0 font-mono text-sm'>
            <br/>
            &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightSecondaryAdapter})}>@Override</span><br/>
            &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightSecondaryAdapter})}>public GameId initializeGame</span>(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Player whitePlayer,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Player blackPlayer<br/>
            &nbsp;&nbsp;) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;BoardId boardId = <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightPrimaryAdapter})}>setupBoard.execute</span>(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightNames})}>whitePlayer.name,</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightNames})}>blackPlayer.name</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return <span className={clsx({[highlightYellow.className]: frame.highlightGameId})}>GameId(boardId.value)</span>;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &#125;<br/>
          </p>
        </div>
        <div className='svg-container' ref={targetRef}>
          {frame.displayDiagram ?
          <svg className='svg'>
            <DomainModule geometry={policyAGeometry} text="organizing games"/>
            <text
              x={0}
              y={0}
              textAnchor='middle'
              dominantBaseline='middle'
              transform={transform(policyAGeometry, policyAGeometry.nwPort)}
              fill={policyBlue.hexValue}
            >
              start game
            </text>
            <text
              x={0}
              y={0}
              textAnchor='middle'
              dominantBaseline='middle'
              transform={transform(policyAGeometry, policyAGeometry.nePort)}
              fill={frame.highlightSecondaryAdapter ? highlightYellow.hexValue : policyBlue.hexValue}
            >
              game initializer
            </text>

            <DomainModule geometry={policyBGeometry} text="gameplay"/>
            <text
              x={0}
              y={0}
              textAnchor='middle'
              dominantBaseline='middle'
              transform={transform(policyBGeometry, policyBGeometry.nwPort)}
              fill={frame.highlightPrimaryAdapter ? highlightYellow.hexValue : policyBlue.hexValue}
            >
              setup board
            </text>
          </svg>
            : <></>}
        </div>
      </div>
    </div>
  )
}
