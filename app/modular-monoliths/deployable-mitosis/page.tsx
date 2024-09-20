'use client'

import useFrame from "@/app/lib/useFrame";
import {arrowPurple, deployableGreen, policyBlue} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";

type Frame = {
  displaySingleDeployable: boolean,
  displayMultipleDeployables: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displaySingleDeployable: true,
      displayMultipleDeployables: false,
    },
    {
      displaySingleDeployable: false,
      displayMultipleDeployables: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const policyAGeometry = systemGeometry(0.25 * height, 0.25 * width, 0.5 * height);
  const policyBGeometry = systemGeometry(0.25 * height, 0.75 * width, 0.5 * height);
  const deployableGeometry = systemGeometry(0.25 * height, 0.5 * width, 0.5 * height);

  return (
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

            <line
              x1={policyAGeometry.center.x + policyAGeometry.sePort.center.x}
              y1={policyAGeometry.center.y + policyAGeometry.sePort.center.y + 40}
              x2={policyBGeometry.center.x + policyBGeometry.swPort.center.x}
              y2={policyBGeometry.center.y + policyBGeometry.swPort.center.y + 40}
              stroke={arrowPurple.hexValue}
              strokeWidth={10}
              strokeDasharray={15}
            />

          <DomainModule geometry={policyAGeometry} text="policy A"/>
          <PrimaryAdapter geometry={policyAGeometry} portName={'nwPort'}/>
          <PrimaryAdapter geometry={policyAGeometry} portName={'swPort'}/>
          <SecondaryAdapter geometry={policyAGeometry} portName={'nePort'} text={"client"}/>
          <SecondaryAdapter geometry={policyAGeometry} portName={'sePort'} text={"publisher"}/>

          <DomainModule geometry={policyBGeometry} text="policy B"/>
          <PrimaryAdapter geometry={policyBGeometry} portName={'nwPort'} text={"API"}/>
          <PrimaryAdapter geometry={policyBGeometry} portName={'swPort'} text={"subscriber"}/>
          <SecondaryAdapter geometry={policyBGeometry} portName={'nePort'}/>
          <SecondaryAdapter geometry={policyBGeometry} portName={'sePort'}/>
        </g>

        { frame.displaySingleDeployable ?
          <g>
            <text x={20} y={50} dominantBaseline="middle" fill={deployableGreen.hexValue}>Deployable</text>
            <DeployableModule geometry={deployableGeometry} width={0.5 * width} height={0.5 * height} />
          </g>
          : <></> }

        { frame.displayMultipleDeployables ?
          <g>
            <text x={20} y={50} textAnchor='start' fill={deployableGreen.hexValue}>Deployable 1</text>
            <text x={width - 20} y={50} textAnchor='end' fill={deployableGreen.hexValue}>Deployable 2</text>
            <DeployableModule geometry={policyAGeometry} width={0.25 * width} height={0.4 * height} />
            <DeployableModule geometry={policyBGeometry} width={0.25 * width} height={0.4 * height} />
          </g>
          : <></>}
      </svg>
    </div>
  )
}
