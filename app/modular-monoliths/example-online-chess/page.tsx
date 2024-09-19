'use client'

import {adapterRed, deployableGreen, policyBlue} from "@/app/lib/definitions";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import useFrame from "@/app/lib/useFrame";

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

  const height = window.innerHeight;
  const width = window.innerWidth;

  const scale = height / 4;
  const geometry = systemGeometry(scale, width / 2 + 200, height / 2);

  const policyTextStart = 300;

  return (
    <div className='padding-horizontal svg-container'>
      <h1>example: online chess</h1>

      <svg className='svg'>
        <DomainModule geometry={geometry} fill={policyBlue.hexValue} text="game policy"/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterRed.hexValue} text={'game-api'}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterRed.hexValue} text={'game-db'}/>
        <DeployableModule geometry={geometry} stroke={deployableGreen.hexValue} width={2 * scale}
                          height={1.5 * scale}/>
        <text className={"text-base"} x={0.85 * width} y={height / 5} fill={deployableGreen.hexValue}>chess-app</text>

        {frame.displayPolicy ?
          <g>
            <text y={policyTextStart + 0 * 50} fill={policyBlue.hexValue}>move</text>
            <text y={policyTextStart + 1 * 50} fill={policyBlue.hexValue}>board state</text>
            <text y={policyTextStart + 2 * 50} fill={policyBlue.hexValue}>make move</text>
            <text y={policyTextStart + 3 * 50} fill={policyBlue.hexValue}>move is illegal</text>
            <text y={policyTextStart + 4 * 50} fill={policyBlue.hexValue}>checkmate</text>

            <line x1={300} y1={policyTextStart + 2 * 50} x2={950} y2={460} stroke={policyBlue.hexValue} strokeWidth={5} strokeDasharray={30} />
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
              <line x1={430} y1={600} x2={700} y2={590} stroke={deployableGreen.hexValue} strokeWidth={5} strokeDasharray={30}/>
            </g> : <></>
        }
      </svg>
    </div>
  )
}
