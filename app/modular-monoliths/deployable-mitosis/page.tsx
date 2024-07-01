'use client'

import useFrame from "@/app/lib/useFrame";
import {arrowPurple, deployableGreen, layoutPadding, policyBlue} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";

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

  const height = window.innerHeight - 2*layoutPadding - 100;
  const width = window.innerWidth - 2*layoutPadding;

  const scale = height / 4;
  const policyAGeometry = systemGeometry(scale, 0.3 * width, 0.5 * height);
  const policyBGeometry = systemGeometry(scale, 0.7 * width, 0.5 * height);
  const deployableGeometry = systemGeometry(scale, width/2, 0.5 * height);

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>

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

          <DomainModule geometry={policyAGeometry} fill={policyBlue.hexValue} text="organizing games"/>
          <PrimaryAdapter geometry={policyAGeometry} portName={'nwPort'}/>
          <PrimaryAdapter geometry={policyAGeometry} portName={'swPort'}/>
          <SecondaryAdapter geometry={policyAGeometry} portName={'nePort'} text={"client"}/>
          <SecondaryAdapter geometry={policyAGeometry} portName={'sePort'} text={"publisher"}/>

          <DomainModule geometry={policyBGeometry} fill={policyBlue.hexValue} text="gameplay"/>
          <PrimaryAdapter geometry={policyBGeometry} portName={'nwPort'} text={"API"}/>
          <PrimaryAdapter geometry={policyBGeometry} portName={'swPort'} text={"subscriber"}/>
          <SecondaryAdapter geometry={policyBGeometry} portName={'nePort'}/>
          <SecondaryAdapter geometry={policyBGeometry} portName={'sePort'}/>
        </g>

        { frame.displaySingleDeployable ?
          <g>
            <text
              x={deployableGeometry.center.x - 600}
              y={deployableGeometry.center.y - 300}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={deployableGreen.hexValue}
            >
              Deployable
            </text>
            <DeployableModule
              geometry={deployableGeometry}
              stroke={deployableGreen.hexValue}
              width={0.47 * width}
              height={1.7 * scale}
            />
          </g>
          : <></> }

        { frame.displayMultipleDeployables ?
          <g>
            <text
              x={deployableGeometry.center.x - 700}
              y={deployableGeometry.center.y - 300}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={deployableGreen.hexValue}
            >
              Deployable 1
            </text>
            <text
              x={deployableGeometry.center.x + 700}
              y={deployableGeometry.center.y - 300}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={deployableGreen.hexValue}
            >
              Deployable 2
            </text>
            <DeployableModule
              geometry={policyAGeometry}
              stroke={deployableGreen.hexValue}
              width={0.19 * width}
              height={1.7 * scale}
            />
            <DeployableModule
              geometry={policyBGeometry}
              stroke={deployableGreen.hexValue}
              width={0.19 * width}
              height={1.7 * scale}
            />
          </g>
          : <></>}
      </svg>
    </div>
  )
}
