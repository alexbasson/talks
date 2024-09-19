'use client'

import {adapterRed, deployableGreen, Geometry, policyBlue, Port} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import PrimaryPort from "@/app/lib/diagrams/PrimaryPort";
import SecondaryPort from "@/app/lib/diagrams/SecondaryPort";

export default function Page() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  const scale = height / 4;
  const policyAGeometry = systemGeometry(scale, 0.3 * width, 0.5 * height);
  const policyBGeometry = systemGeometry(scale, 0.7 * width, 0.5 * height);
  const deployableGeometry = systemGeometry(scale, width/2, 0.5 * height);

  const transform = (geometry: Geometry, port: Port) =>  `
  translate(${port.center.x + port.adapterOffset.x + geometry.center.x}, ${port.center.y + port.adapterOffset.y + geometry.center.y}),
  rotate(${port.rotate}, 0, 0)
  `

  const points = `
  ${policyAGeometry.center.x + scale}, ${policyAGeometry.center.y},
  ${policyAGeometry.center.x + scale / 2}, ${policyAGeometry.center.y - (Math.sqrt(3) / 2) * scale},
  ${policyBGeometry.center.x - scale / 2}, ${policyBGeometry.center.y - (Math.sqrt(3) / 2) * scale},
  ${policyBGeometry.center.x - scale}, ${policyBGeometry.center.y},
  `

  return (
    <div className='svg-container'>
      <svg className='svg'>
        <DomainModule geometry={policyAGeometry} fill={policyBlue.hexValue} text="organizing games"/>
        <PrimaryAdapter geometry={policyAGeometry} portName={'nwPort'}/>
        <PrimaryAdapter geometry={policyAGeometry} portName={'swPort'}/>
        <SecondaryAdapter geometry={policyAGeometry} portName={'sePort'}/>

        <DomainModule geometry={policyBGeometry} fill={policyBlue.hexValue} text="gameplay"/>
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

          <polygon points={points} fill={adapterRed.hexValue} />

          <text
            x={(policyAGeometry.center.x + policyBGeometry.center.x) / 2}
            y={(policyAGeometry.center.y - (Math.sqrt(3) / 4) * scale)}
            textAnchor='middle'
            dominantBaseline='middle'
          >
            adapter
          </text>
        </g>

        <DeployableModule geometry={deployableGeometry} stroke={deployableGreen.hexValue} width={0.47 * width}
                          height={1.7 * scale}/>
      </svg>
    </div>
  )
}
