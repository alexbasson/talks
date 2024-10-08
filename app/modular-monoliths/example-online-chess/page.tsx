'use client'

import {adapterRed, deployableGreen, policyBlue} from "@/app/lib/definitions";
import DomainModule from "@/app/lib/modular-monoliths/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/modular-monoliths/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/modular-monoliths/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/modular-monoliths/diagrams/DeployableModule";
import systemGeometry from "@/app/lib/modular-monoliths/diagrams/systemGeometry";
import useFrame from "@/app/lib/useFrame";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";

type Frame = {
  displayPolicy: boolean,
  displayAdapters: boolean,
  displayDeployables: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayPolicy: false,
      displayAdapters: false,
      displayDeployables: false,
    },
    {
      displayPolicy: true,
      displayAdapters: false,
      displayDeployables: false,
    },
    {
      displayPolicy: true,
      displayAdapters: true,
      displayDeployables: false,
    },
    {
      displayPolicy: true,
      displayAdapters: true,
      displayDeployables: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const geometry = systemGeometry(0.25 * height, 0.5 * width + 225, 0.5 * height);

  const policyTextStart = 300;

  return (
    <div className='padding-horizontal svg-container'>
      <h1>example: online chess</h1>

      <div className='svg-container' ref={targetRef}>
        <svg className='svg'>
          <DomainModule geometry={geometry} text="game policy"/>

          <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterRed.hexValue} text={'game-api'}/>
          <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterRed.hexValue} text={'game-db'}/>
          <DeployableModule geometry={geometry} width={0.25 * width} height={0.4 * height}/>
          <text className={"text-base"} x={0.85 * width} y={0.2 * height} fill={deployableGreen.hexValue}>chess-app</text>

          {frame.displayPolicy ?
            <g>
              <text y={policyTextStart + 0 * 50} fill={policyBlue.hexValue}>move</text>
              <text y={policyTextStart + 1 * 50} fill={policyBlue.hexValue}>board state</text>
              <text y={policyTextStart + 2 * 50} fill={policyBlue.hexValue}>make move</text>
              <text y={policyTextStart + 3 * 50} fill={policyBlue.hexValue}>move is illegal</text>
              <text y={policyTextStart + 4 * 50} fill={policyBlue.hexValue}>checkmate</text>

              <line x1={300} y1={policyTextStart + 2 * 50} x2={1000} y2={600} stroke={policyBlue.hexValue} strokeWidth={5} strokeDasharray={30} />
            </g> : <></>
          }

          {frame.displayAdapters ?
            <g>
              <text y={200} dominantBaseline={'middle'} fill={adapterRed.hexValue} className={'font-mono'}>POST /&#123;gameId&#125;/moves</text>
              <line x1={500} y1={200} x2={870} y2={320} stroke={adapterRed.hexValue}
                    strokeWidth={5} strokeDasharray={30}/>

              <text y={700} dominantBaseline={'middle'} fill={adapterRed.hexValue} className={'font-mono'}>INSERT INTO moves VALUES</text>
              <line x1={600} y1={700} x2={1250} y2={650} stroke={adapterRed.hexValue} strokeWidth={5} strokeDasharray={30}/>
            </g> : <></>
          }

            {frame.displayDeployables ?
              <g>
                <text y={600} dominantBaseline={'middle'} fill={deployableGreen.hexValue}>DI container, env vars</text>
                <line x1={430} y1={600} x2={geometry.center.x - 0.25 * width + 20} y2={600} stroke={deployableGreen.hexValue} strokeWidth={5} strokeDasharray={30}/>
              </g> : <></>
          }
        </svg>
      </div>
    </div>
  )
}
