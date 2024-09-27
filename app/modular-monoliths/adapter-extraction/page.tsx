'use client'

import useFrame from "@/app/lib/useFrame";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import {AdapterProps, adapterRed, arrowPurple, deployableGreen, Geometry, highlightYellow} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import SecondaryPort from "@/app/lib/diagrams/SecondaryPort";
import Arrow from "@/app/lib/diagrams/Arrow";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";

type Frame = {
  movesDbFill: string,
  removeMovesDbAdapter: boolean,
  displayCreatedAdapters: boolean,
  displayDeployable2: boolean,
  displayDependency: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      movesDbFill: adapterRed.hexValue,
      removeMovesDbAdapter: false,
      displayCreatedAdapters: false,
      displayDeployable2: false,
      displayDependency: false,
    },
    {
      movesDbFill: highlightYellow.hexValue,
      removeMovesDbAdapter: false,
      displayCreatedAdapters: false,
      displayDeployable2: false,
      displayDependency: false,
    },
    {
      movesDbFill: highlightYellow.hexValue,
      removeMovesDbAdapter: true,
      displayCreatedAdapters: false,
      displayDeployable2: false,
      displayDependency: false,
    },
    {
      movesDbFill: highlightYellow.hexValue,
      removeMovesDbAdapter: true,
      displayCreatedAdapters: true,
      displayDeployable2: false,
      displayDependency: false,
    },
    {
      movesDbFill: highlightYellow.hexValue,
      removeMovesDbAdapter: true,
      displayCreatedAdapters: true,
      displayDeployable2: true,
      displayDependency: false,
    },
    {
      movesDbFill: highlightYellow.hexValue,
      removeMovesDbAdapter: true,
      displayCreatedAdapters: true,
      displayDeployable2: true,
      displayDependency: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const scale = 0.25 * height;
  const policyGeometry = systemGeometry(scale, 0.333 * width, 0.4 * height);
  const removedMovesDbGeometry = systemGeometry(scale, width - 500, 0.4 * height);
  const deployable2Geometry = systemGeometry(scale, width - 325, 0.3 * height);
  const strokeWidth = 16;

  return (
    <div className='padding-horizontal svg-container'>
      <h1>adapter extraction</h1>

      <div className='svg-container' ref={targetRef}>
        <svg className='svg'>
          <DeployableModule geometry={policyGeometry} width={0.25 * width} height={0.375 * height} />
          {
            frame.displayDeployable2 ?
              <g>
                <DeployableModule geometry={deployable2Geometry} width={0.15 * width} height={0.25 * height} />
                <text className={"text-base"} x={width} y={600} textAnchor='end' fill={deployableGreen.hexValue}>deployable 2</text>
              </g> :
              <></>
          }

          {
            frame.displayCreatedAdapters ?
              <line
                x1={policyGeometry.center.x + policyGeometry.nePort.center.x}
                y1={policyGeometry.center.y + policyGeometry.nePort.center.y}
                x2={removedMovesDbGeometry.center.x + removedMovesDbGeometry.nePort.center.x}
                y2={removedMovesDbGeometry.center.y + removedMovesDbGeometry.nePort.center.y}
                stroke={arrowPurple.hexValue}
                strokeWidth={0.5 * strokeWidth}
                strokeDasharray={20}
              /> :
              <></>
          }

          <DomainModule geometry={policyGeometry} text="gameplay policy" />
          <PrimaryAdapter geometry={policyGeometry} portName={'nwPort'} text={'game API'}/>
          {
            frame.removeMovesDbAdapter ?
              <></> :
              <SecondaryAdapter geometry={policyGeometry} portName={'nePort'} text={'moves db'} fill={frame.movesDbFill} />
          }
          {
            frame.displayCreatedAdapters ?
              <SecondaryAdapter geometry={policyGeometry} portName={'nePort'} text={'moves client'} /> :
              <></>
          }
          <text className={"text-base"} x={0} y={100} fill={deployableGreen.hexValue}>deployable 1</text>

          {
            frame.displayCreatedAdapters ?
              <MovesAPIAdapter geometry={removedMovesDbGeometry} /> :
              <></>
          }

          {
            frame.displayDependency ?
              <g>
                <line
                  x1={removedMovesDbGeometry.center.x + removedMovesDbGeometry.nePort.center.x}
                  y1={removedMovesDbGeometry.center.y + removedMovesDbGeometry.nePort.center.y}
                  x2={removedMovesDbGeometry.center.x + removedMovesDbGeometry.nePort.center.x}
                  y2={0}
                  stroke={arrowPurple.hexValue}
                  strokeWidth={strokeWidth}
                />
                <line
                  x1={removedMovesDbGeometry.center.x + removedMovesDbGeometry.nePort.center.x}
                  y1={0.5 * strokeWidth}
                  x2={policyGeometry.center.x - 0.5 * strokeWidth}
                  y2={0.5 * strokeWidth}
                  stroke={arrowPurple.hexValue}
                  strokeWidth={strokeWidth}
                />
                <Arrow
                  points={[
                    {
                      x: policyGeometry.center.x,
                      y: 0,
                    },
                    {
                      x: policyGeometry.center.x,
                      y: policyGeometry.center.y - (Math.sqrt(3) / 2) * scale,
                    }
                  ]}
                  width={strokeWidth}
                />
              </g> :
              <></>
          }
          {
            frame.removeMovesDbAdapter ?
              <SecondaryAdapter geometry={removedMovesDbGeometry} portName={'nePort'} text={'moves db'} fill={frame.movesDbFill}/> :
              <></>
          }
        </svg>
      </div>
    </div>
  )
}

function MovesAPIAdapter({geometry}: { geometry: Geometry }) {
  const {center, scale, swPort, nePort} = geometry;
  const yScaleOffset = 1.25

  const transform = `
  translate(${nePort.center.x + nePort.adapterOffset.x + center.x}, ${nePort.center.y + nePort.adapterOffset.y + center.y}),
  rotate(${swPort.rotate}, 0, 0)
  `

  return (
    <>
      <defs>
        <mask id="foo">
          <SecondaryPort sideLength={scale} fill="black"/>
        </mask>
      </defs>
      <g transform={transform}>
        <rect x={-(0.5) * scale} y={-(0.4 * yScaleOffset) * scale} width={scale} height={(yScaleOffset * 0.4) * scale} fill={adapterRed.hexValue} mask="url(#foo)"/>
        <text className={"text-base"} y={-(0.2 * yScaleOffset) * scale} textAnchor="middle" dominantBaseline="middle">moves API</text>
      </g>
    </>
  )
}
