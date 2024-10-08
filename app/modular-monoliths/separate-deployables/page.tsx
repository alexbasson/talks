'use client'

import systemGeometry from "@/app/lib/modular-monoliths/diagrams/systemGeometry";
import DomainModule from "@/app/lib/modular-monoliths/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/modular-monoliths/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/modular-monoliths/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/modular-monoliths/diagrams/DeployableModule";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";
import {arrowPurple, deployableGreen, policyBlue} from "@/app/lib/colors";

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const policyAGeometry = systemGeometry(0.15 * width, 0.25 * width, 0.5 * height);
  const policyBGeometry = systemGeometry(0.15 * width, 0.75 * width, 0.5 * height);

  return (
    <div className='padding-horizontal svg-container'>
      <h1>separate deployables</h1>

      <div className='svg-container' ref={targetRef}>
        <svg className='svg'>
          <g>
            <line
              x1={policyAGeometry.center.x + policyAGeometry.nePort.center.x}
              y1={policyAGeometry.center.y + policyAGeometry.nePort.center.y - 40}
              x2={policyBGeometry.center.x + policyBGeometry.nwPort.center.x}
              y2={policyBGeometry.center.y + policyBGeometry.nwPort.center.y - 40}
              stroke={arrowPurple.hexValue}
              strokeWidth={10}
              strokeDasharray={15}
            />

            <DomainModule geometry={policyAGeometry} text="gameplay policy"/>
            <PrimaryAdapter geometry={policyAGeometry} portName={'nwPort'} text={"game API"}/>
            <SecondaryAdapter geometry={policyAGeometry} portName={'nePort'} text={"moves client"}/>

            <DomainModule geometry={policyBGeometry} text="move history policy"/>
            <PrimaryAdapter geometry={policyBGeometry} portName={'nwPort'} text={"moves API"}/>
            <SecondaryAdapter geometry={policyBGeometry} portName={'nePort'} text={"moves db"}/>
          </g>

          <g>
            <text x={0} y={100} textAnchor="start" fill={deployableGreen.hexValue}>Deployable 1</text>
            <text x={width} y={100} textAnchor="end" fill={deployableGreen.hexValue}>Deployable 2</text>
            <DeployableModule geometry={policyAGeometry} width={0.25 * width} height={0.4 * height} />
            <DeployableModule geometry={policyBGeometry} width={0.25 * width} height={0.4 * height} />
          </g>
        </svg>
      </div>
    </div>
  )
}
