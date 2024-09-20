'use client'

import {arrowPurple, deployableGreen, policyBlue} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import useFrame from "@/app/lib/useFrame";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";

type Frame = {
  policyANEPortText: string,
  policyBNWPortText: string,
  displayClientAPIInteraction: boolean,
  policyASEPortText: string,
  policyBSWPortText: string,
  displayPubSubInteraction: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      policyANEPortText: "",
      policyBNWPortText: "",
      displayClientAPIInteraction: false,
      policyASEPortText: "",
      policyBSWPortText: "",
      displayPubSubInteraction: false,
    },
    {
      policyANEPortText: "client",
      policyBNWPortText: "API",
      displayClientAPIInteraction: true,
      policyASEPortText: "",
      policyBSWPortText: "",
      displayPubSubInteraction: false,
    },
    {
      policyANEPortText: "",
      policyBNWPortText: "",
      displayClientAPIInteraction: false,
      policyASEPortText: "publisher",
      policyBSWPortText: "subscriber",
      displayPubSubInteraction: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const policyAGeometry = systemGeometry(0.25 * height, 0.3 * width, 0.5 * height);
  const policyBGeometry = systemGeometry(0.25 * height, 0.7 * width, 0.5 * height);
  const deployableGeometry = systemGeometry(0.25 * height, width/2, 0.5 * height);

  return (
    <div className='svg-container' ref={targetRef}>
      <svg className='svg'>

        {frame.displayClientAPIInteraction ?
          <line
            x1={policyAGeometry.center.x + policyAGeometry.nePort.center.x}
            y1={policyAGeometry.center.y + policyAGeometry.nePort.center.y - 40}
            x2={policyBGeometry.center.x + policyBGeometry.nwPort.center.x}
            y2={policyBGeometry.center.y + policyBGeometry.nwPort.center.y - 40}
            stroke={arrowPurple.hexValue}
            strokeWidth={10}
            strokeDasharray={15}
          />
          : <></>
        }

        {frame.displayPubSubInteraction ?
          <line
            x1={policyAGeometry.center.x + policyAGeometry.sePort.center.x}
            y1={policyAGeometry.center.y + policyAGeometry.sePort.center.y + 40}
            x2={policyBGeometry.center.x + policyBGeometry.swPort.center.x}
            y2={policyBGeometry.center.y + policyBGeometry.swPort.center.y + 40}
            stroke={arrowPurple.hexValue}
            strokeWidth={10}
            strokeDasharray={15}
          />
          : <></>
        }

        <DomainModule geometry={policyAGeometry} fill={policyBlue.hexValue} text="organizing games"/>
        <PrimaryAdapter geometry={policyAGeometry} portName={'nwPort'}/>
        <PrimaryAdapter geometry={policyAGeometry} portName={'swPort'}/>
        <SecondaryAdapter geometry={policyAGeometry} portName={'nePort'} text={frame.policyANEPortText}/>
        <SecondaryAdapter geometry={policyAGeometry} portName={'sePort'} text={frame.policyASEPortText}/>

        <DomainModule geometry={policyBGeometry} fill={policyBlue.hexValue} text="gameplay"/>
        <PrimaryAdapter geometry={policyBGeometry} portName={'nwPort'} text={frame.policyBNWPortText}/>
        <PrimaryAdapter geometry={policyBGeometry} portName={'swPort'} text={frame.policyBSWPortText}/>
        <SecondaryAdapter geometry={policyBGeometry} portName={'nePort'}/>
        <SecondaryAdapter geometry={policyBGeometry} portName={'sePort'}/>

        <DeployableModule geometry={deployableGeometry} stroke={deployableGreen.hexValue} width={0.47 * width}
                          height={1.7 * 0.25 * height}/>
      </svg>
    </div>
  )
}
