'use client'

import {
  adapterRed,
  arrowPurple,
  deployableGreen,
  Geometry,
  highlightYellow,
  policyBlue,
  Port
} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import SecondaryPort from "@/app/lib/diagrams/SecondaryPort";
import PrimaryPort from "@/app/lib/diagrams/PrimaryPort";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import useFrame from "@/app/lib/useFrame";
import useDimensions from "@/app/lib/useDimensions";
import {useRef} from "react";

type Frame = {
  singleAdapterFill: string,
  displaySingleAdapter: boolean,
  displayClientAPIInteraction: boolean,
  separateAdaptersFill: string,
}

export default function Page() {
  const frames: Frame[] = [
    {
      singleAdapterFill: adapterRed.hexValue,
      displaySingleAdapter: true,
      displayClientAPIInteraction: false,
      separateAdaptersFill: "none",
    },
    {
      singleAdapterFill: highlightYellow.hexValue,
      displaySingleAdapter: true,
      displayClientAPIInteraction: false,
      separateAdaptersFill: "none",
    },
    {
      singleAdapterFill: adapterRed.hexValue,
      displaySingleAdapter: false,
      displayClientAPIInteraction: false,
      separateAdaptersFill: "none",
    },
    {
      singleAdapterFill: adapterRed.hexValue,
      displaySingleAdapter: false,
      displayClientAPIInteraction: true,
      separateAdaptersFill: highlightYellow.hexValue,
    },
  ];

  const frame = useFrame<Frame>(frames);
  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const scale = 0.22 * height;
  const policyAGeometry = systemGeometry(scale, 0.25 * width, 0.5 * height);
  const policyBGeometry = systemGeometry(scale, 0.75 * width, 0.5 * height);
  const deployableGeometry = systemGeometry(scale, 0.5 * width, 0.5 * height);

  const transform = (geometry: Geometry, port: Port) =>  `
  translate(${port.center.x + port.adapterOffset.x + geometry.center.x}, ${port.center.y + port.adapterOffset.y + geometry.center.y}),
  rotate(${port.rotate}, 0, 0)
  `

  const points = `
  ${policyAGeometry.center.x + scale}, ${policyAGeometry.center.y},
  ${policyAGeometry.center.x + 0.5 * scale}, ${policyAGeometry.center.y - (Math.sqrt(3) / 2) * scale},
  ${policyBGeometry.center.x - 0.5 * scale}, ${policyBGeometry.center.y - (Math.sqrt(3) / 2) * scale},
  ${policyBGeometry.center.x - scale}, ${policyBGeometry.center.y},
  `

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

        <DomainModule geometry={policyAGeometry} text="organizing games"/>
        <PrimaryAdapter geometry={policyAGeometry} portName={'nwPort'}/>
        <PrimaryAdapter geometry={policyAGeometry} portName={'swPort'}/>
        {frame.displayClientAPIInteraction ? <SecondaryAdapter geometry={policyAGeometry} portName={'nePort'} fill={frame.separateAdaptersFill} text={"client"}/> : <></> }
        <SecondaryAdapter geometry={policyAGeometry} portName={'sePort'}/>

        <DomainModule geometry={policyBGeometry} text="gameplay"/>
        {frame.displayClientAPIInteraction ? <PrimaryAdapter geometry={policyBGeometry} portName={'nwPort'} fill={frame.separateAdaptersFill} text={"API"}/> : <></> }
        <PrimaryAdapter geometry={policyBGeometry} portName={'swPort'}/>
        <SecondaryAdapter geometry={policyBGeometry} portName={'nePort'}/>
        <SecondaryAdapter geometry={policyBGeometry} portName={'sePort'}/>

        {/* cross policy adapter */}

        {frame.displaySingleAdapter ?
        <g>
          <g transform={`${transform(policyAGeometry, policyAGeometry.nePort)}`}>
            <SecondaryPort
              sideLength={0.8 * scale}
              fill={frame.singleAdapterFill}
            />
          </g>

          <g transform={`${transform(policyBGeometry, policyBGeometry.nwPort)}`}>
            <PrimaryPort
              sideLength={0.8 * scale}
              fill={frame.singleAdapterFill}
            />
          </g>

          <polygon points={points} fill={frame.singleAdapterFill} />

          <text
            x={(policyAGeometry.center.x + policyBGeometry.center.x) / 2}
            y={(policyAGeometry.center.y - (Math.sqrt(3) / 4) * scale)}
            textAnchor='middle'
            dominantBaseline='middle'
          >
            adapter
          </text>
        </g>
        : <></> }

        <DeployableModule geometry={deployableGeometry} width={0.5 * width} height={0.5 * height}/>
      </svg>
    </div>
  )
}
