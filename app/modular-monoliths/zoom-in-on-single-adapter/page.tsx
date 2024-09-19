'use client'

import {adapterRed, arrowPurple, Geometry, policyBlue, Port} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import SecondaryPort from "@/app/lib/diagrams/SecondaryPort";
import PrimaryPort from "@/app/lib/diagrams/PrimaryPort";
import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayText: boolean,
  primaryAdapterTextLine1: string,
  primaryAdapterTextLine2: string,
  secondaryAdapterTextLine1: string,
  secondaryAdapterTextLine2: string,
  textColor: string,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayText: false,
      primaryAdapterTextLine1: "",
      primaryAdapterTextLine2: "",
      secondaryAdapterTextLine1: "",
      secondaryAdapterTextLine2: "",
      textColor: "",
    },
    {
      displayText: true,
      primaryAdapterTextLine1: "primary adapter",
      primaryAdapterTextLine2: "for policy B",
      secondaryAdapterTextLine1: "secondary adapter",
      secondaryAdapterTextLine2: "for policy A",
      textColor: policyBlue.hexValue,
    },
    {
      displayText: true,
      primaryAdapterTextLine1: "...by performing an",
      primaryAdapterTextLine2: "operation in policy B",
      secondaryAdapterTextLine1: "implements an interface",
      secondaryAdapterTextLine2: "from policy A...",
      textColor: policyBlue.hexValue,
    },
    {
      displayText: true,
      primaryAdapterTextLine1: "...so it can translate",
      primaryAdapterTextLine2: "between them",
      secondaryAdapterTextLine1: "imports both policies...",
      secondaryAdapterTextLine2: "",
      textColor: arrowPurple.hexValue,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const height = window.innerHeight;
  const width = window.innerWidth;

  const scale = height / 3;
  const policyAGeometry = systemGeometry(scale, 0.2 * width, 0.625 * height);
  const policyBGeometry = systemGeometry(scale, 0.8 * width, 0.625 * height);

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

  const lineHeight = 50;
  const arrowHeadPoints = `
  0, 0
  -20, 40
  20, 40
  `;

  return (
    <div className='svg-container'>
      <svg className='svg'>
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

        {frame.displayText ?
          <g>
            <text
              x={policyAGeometry.center.x}
              y={policyAGeometry.center.y + 50}
              textAnchor='middle'
              dominantBaseline='middle'
              fill={frame.textColor}
            >
              {frame.secondaryAdapterTextLine1}
            </text>
            <text
              x={policyAGeometry.center.x}
              y={policyAGeometry.center.y + 2 * lineHeight}
              textAnchor='middle'
              dominantBaseline='middle'
              fill={frame.textColor}
            >
              {frame.secondaryAdapterTextLine2}
            </text>
            <line
              x1={policyAGeometry.center.x}
              y1={policyAGeometry.center.y}
              x2={policyAGeometry.center.x + policyAGeometry.nePort.center.x - 1.2 * lineHeight}
              y2={policyAGeometry.center.y + policyAGeometry.nePort.center.y + (Math.sqrt(3) / 4) * 1.2 * lineHeight}
              stroke={frame.textColor}
              strokeWidth={15}
            />
            <polygon
              points={arrowHeadPoints}
              fill={frame.textColor}
              transform={`
                translate(
                  ${policyAGeometry.center.x + policyAGeometry.nePort.center.x - 0.8 * lineHeight},
                  ${policyAGeometry.center.y + policyAGeometry.nePort.center.y + (Math.sqrt(3) / 4) * 0.8 * lineHeight}
                )
                rotate(${policyAGeometry.nePort.rotate}, 0, 0)
              `}
            />
          </g>
          : <></>
        }

        {frame.displayText ?
          <g>
            <text
              x={policyBGeometry.center.x}
              y={policyBGeometry.center.y + lineHeight}
              textAnchor='middle'
              dominantBaseline='middle'
              fill={frame.textColor}
            >
              {frame.primaryAdapterTextLine1}
            </text>
            <text
              x={policyBGeometry.center.x}
              y={policyBGeometry.center.y + 2 * lineHeight}
              textAnchor='middle'
              dominantBaseline='middle'
              fill={frame.textColor}
            >
              {frame.primaryAdapterTextLine2}
            </text>
            <line
              x1={policyBGeometry.center.x}
              y1={policyBGeometry.center.y}
              x2={policyBGeometry.center.x + policyBGeometry.nwPort.center.x + lineHeight}
              y2={policyBGeometry.center.y + policyBGeometry.nwPort.center.y + (Math.sqrt(3) / 4) * lineHeight}
              stroke={frame.textColor}
              strokeWidth={15}
            />
            <polygon
              points={arrowHeadPoints}
              fill={frame.textColor}
              transform={`
                translate(
                  ${policyBGeometry.center.x + 0.5 * lineHeight},
                  ${policyBGeometry.center.y + (Math.sqrt(3) / 4) * 0.75 * lineHeight}
                )
                rotate(${policyBGeometry.nwPort.rotate + 180}, 0, 0)
              `}
            />
          </g>
          : <></>
        }
      </svg>
    </div>
  )
}
