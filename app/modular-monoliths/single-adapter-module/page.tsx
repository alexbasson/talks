'use client'

import {adapterRed, deployableGreen, Geometry, Point, policyBlue, Port} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import PrimaryPort from "@/app/lib/diagrams/PrimaryPort";
import SecondaryPort from "@/app/lib/diagrams/SecondaryPort";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";
import {stringifyForSvg} from "@/app/lib/diagrams/stringifyForSvg";

export default function Page() {
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

  const crossPolicyAdapterPoints: Point[] = [
    {
      x: policyAGeometry.center.x + scale,
      y: policyAGeometry.center.y
    },
    {
      x: policyAGeometry.center.x + scale / 2,
      y: policyAGeometry.center.y - (Math.sqrt(3) / 2) * scale
    },
    {
      x: policyBGeometry.center.x - scale / 2,
      y: policyBGeometry.center.y - (Math.sqrt(3) / 2) * scale
    },
    {
      x: policyBGeometry.center.x - scale,
      y: policyBGeometry.center.y
    }
  ]

  return (
    <div className='svg-container' ref={targetRef}>
      <svg className='svg'>
        <DomainModule geometry={policyAGeometry} text="organizing games"/>
        <PrimaryAdapter geometry={policyAGeometry} portName={'nwPort'}/>
        <PrimaryAdapter geometry={policyAGeometry} portName={'swPort'}/>
        <SecondaryAdapter geometry={policyAGeometry} portName={'sePort'}/>

        <DomainModule geometry={policyBGeometry} text="gameplay"/>
        <PrimaryAdapter geometry={policyBGeometry} portName={'swPort'}/>
        <SecondaryAdapter geometry={policyBGeometry} portName={'nePort'}/>
        <SecondaryAdapter geometry={policyBGeometry} portName={'sePort'}/>

        {/* cross policy adapter */}

        <g>
          <g transform={`${transform(policyAGeometry, policyAGeometry.nePort)}`}>
            <SecondaryPort
              sideLength={0.8 * scale}
              fill={adapterRed.hexValue}
            />
          </g>

          <g transform={`${transform(policyBGeometry, policyBGeometry.nwPort)}`}>
            <PrimaryPort
              sideLength={0.8 * scale}
              fill={adapterRed.hexValue}
            />
          </g>

          <polygon points={stringifyForSvg(crossPolicyAdapterPoints)} fill={adapterRed.hexValue} />

          <text
            x={(policyAGeometry.center.x + policyBGeometry.center.x) / 2}
            y={(policyAGeometry.center.y - (Math.sqrt(3) / 4) * scale)}
            textAnchor='middle'
            dominantBaseline='middle'
          >
            adapter
          </text>
        </g>

        <DeployableModule geometry={deployableGeometry} width={0.5 * width} height={0.5 * height} />
      </svg>
    </div>
  )
}
