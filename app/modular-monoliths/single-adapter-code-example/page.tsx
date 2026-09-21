'use client'

import useFrame from "@/app/lib/useFrame";
import {Geometry, Port} from "@/app/lib/definitions";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";
import {highlightYellow, policyBlue} from "@/app/lib/colors";
import {language} from "@/app/lib/language";
import * as java from "./java";
import * as python from "./python";
import * as ruby from "./ruby";

const { TopSection, MethodSection } = language === 'java' ? java : language === 'ruby' ? ruby : python;

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
          <TopSection {...frame} />
        </p>
      </div>

      <div className='flex flex-start flex-grow'>
        <div className='w-2/5'>
          <p className='py-0 my-0 font-mono text-sm'>
            <br/>
            <MethodSection {...frame} />
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
