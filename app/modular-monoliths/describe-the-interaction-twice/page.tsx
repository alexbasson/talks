'use client'

import {Point} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/modular-monoliths/diagrams/systemGeometry";
import DomainModule from "@/app/lib/modular-monoliths/diagrams/DomainModule";
import useFrame from "@/app/lib/useFrame";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";
import {policyBlue} from "@/app/lib/colors";

type Frame = {
  displayOrganizingGamesPorts: boolean,
  displayGameplayPorts: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayOrganizingGamesPorts: false,
      displayGameplayPorts: false,
    },
    {
      displayOrganizingGamesPorts: true,
      displayGameplayPorts: false,
    },
    {
      displayOrganizingGamesPorts: true,
      displayGameplayPorts: true,
    },
  ]

  const frame = useFrame<Frame>(frames);

  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const organizingGamesGeometry = systemGeometry(0.25 * height, 0.3 * width, 0.5 * height);
  const gamePlayGeometry = systemGeometry(0.25 * height, 0.7 * width, 0.5 * height);

  const portTextBuffer = 20;

  const organizingGamesNWPortText: Point = {
    x: organizingGamesGeometry.center.x + organizingGamesGeometry.nwPort.center.x - portTextBuffer * Math.sqrt(3),
    y: organizingGamesGeometry.center.y + organizingGamesGeometry.nwPort.center.y - portTextBuffer
  }

  const organizingGamesNEPortText: Point = {
    x: organizingGamesGeometry.center.x + organizingGamesGeometry.nePort.center.x + portTextBuffer * Math.sqrt(3),
    y: organizingGamesGeometry.center.y + organizingGamesGeometry.nePort.center.y - portTextBuffer
  }

  const gamePlayNWPortText: Point = {
    x: gamePlayGeometry.center.x + gamePlayGeometry.nwPort.center.x - portTextBuffer * Math.sqrt(3),
    y: gamePlayGeometry.center.y + gamePlayGeometry.nwPort.center.y - portTextBuffer
  }

  return (
    <div className='svg-container' ref={targetRef}>
      <svg className='svg'>
        <DomainModule geometry={organizingGamesGeometry} text="organizing games"/>

        {frame.displayOrganizingGamesPorts ?
          <g>
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              fill={policyBlue.hexValue}
              transform={`translate(${organizingGamesNWPortText.x}, ${organizingGamesNWPortText.y}) rotate(${organizingGamesGeometry.nwPort.rotate})`}
            >
              start game
            </text>

            <text
              textAnchor="middle"
              dominantBaseline="middle"
              fill={policyBlue.hexValue}
              transform={`translate(${organizingGamesNEPortText.x}, ${organizingGamesNEPortText.y}) rotate(${organizingGamesGeometry.nePort.rotate})`}
            >
              game initializer
            </text>
          </g>
          : <></>
        }

        <DomainModule geometry={gamePlayGeometry} text="gameplay"/>

        {frame.displayGameplayPorts ?
          <g>
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              fill={policyBlue.hexValue}
              transform={`translate(${gamePlayNWPortText.x}, ${gamePlayNWPortText.y}) rotate(${gamePlayGeometry.nwPort.rotate})`}
            >
              setup board
            </text>
          </g>
          : <></>
        }
      </svg>
    </div>
  )
}
