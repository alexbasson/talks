'use client'

import useFrame from "@/app/lib/useFrame";
import clsx from "clsx";
import {
  adapterRed,
  deployableGreen,
  Geometry,
  highlightYellow,
  layoutPadding,
  policyBlue,
  Port
} from "@/app/lib/definitions";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import SecondaryPort from "@/app/lib/diagrams/SecondaryPort";
import PrimaryPort from "@/app/lib/diagrams/PrimaryPort";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";

type Frame = {
  displayDiagram: boolean,
  highlightSecondaryAdapter: boolean,
  highlightPrimaryAdapter: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayDiagram: false,
      highlightSecondaryAdapter: false,
      highlightPrimaryAdapter: false,
    },
    {
      displayDiagram: true,
      highlightSecondaryAdapter: false,
      highlightPrimaryAdapter: false,
    },
    {
      displayDiagram: true,
      highlightSecondaryAdapter: true,
      highlightPrimaryAdapter: false,
    },
    {
      displayDiagram: true,
      highlightSecondaryAdapter: false,
      highlightPrimaryAdapter: true,
    },
  ]
  const frame = useFrame<Frame>(frames);

  const height = window.innerHeight - 2*layoutPadding;
  const width = 0.6 * (window.innerWidth - 2*layoutPadding);

  const scale = height / 4;
  const policyAGeometry = systemGeometry(scale, 0.25 * width, 0.3 * height);
  const policyBGeometry = systemGeometry(scale, 0.75 * width, 0.3 * height);

  const transform = (geometry: Geometry, port: Port) =>  `
  translate(
    ${port.center.x + 20 * port.adapterOffset.x + geometry.center.x},
    ${port.center.y + 20 * (Math.sqrt(3)/4) * port.adapterOffset.y + geometry.center.y}
  ),
  rotate(${port.rotate}, 0, 0)
  `

  const points = `
  ${policyAGeometry.center.x + scale}, ${policyAGeometry.center.y},
  ${policyAGeometry.center.x + scale / 2}, ${policyAGeometry.center.y - (Math.sqrt(3) / 2) * scale},
  ${policyBGeometry.center.x - scale / 2}, ${policyBGeometry.center.y - (Math.sqrt(3) / 2) * scale},
  ${policyBGeometry.center.x - scale}, ${policyBGeometry.center.y},
  `
  return (
    <div>
      <div>
        <p className={"pb-0 mb-0 font-mono text-sm"}>
          class GameplayGameInitializer implements <span className={clsx({[highlightYellow.className]: frame.highlightSecondaryAdapter})}>GameInitializer</span> &#123;<br/>
          &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightPrimaryAdapter})}>private final SetupBoard setupBoard;</span><br/><br/>
          &nbsp;&nbsp;public GameplayGameInitializer(SetupBoard setupBoard) &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;this.setupBoard = setupBoard;<br/>
          &nbsp;&nbsp;&#125;<br/>
        </p>
      </div>
      <div className={"grid"} style={{gridTemplateColumns: `40% 60%`}}>
        <div>
          <p className={"py-0 my-0 font-mono text-sm"}>
            <br/>
            &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightSecondaryAdapter})}>@Override</span><br/>
            &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightSecondaryAdapter})}>public GameId initializeGame</span>(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Player whitePlayer,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Player blackPlayer<br/>
            &nbsp;&nbsp;) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;BoardId boardId = <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: frame.highlightPrimaryAdapter})}>setupBoard.execute</span>(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;whitePlayer.name,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;blackPlayer.name<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return GameId(boardId.value);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &#125;<br/>
          </p>
        </div>
        <div>
          {frame.displayDiagram ?
          <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
            <DomainModule geometry={policyAGeometry} fill={policyBlue.hexValue} text="organizing games"/>
            <text
              x={0}
              y={0}
              textAnchor='middle'
              dominantBaseline='middle'
              transform={transform(policyAGeometry, policyAGeometry.nwPort)}
              fill={policyBlue.hexValue}
            >
              start game
            </text>
            <text
              x={0}
              y={0}
              textAnchor='middle'
              dominantBaseline='middle'
              transform={transform(policyAGeometry, policyAGeometry.nePort)}
              fill={frame.highlightSecondaryAdapter ? highlightYellow.hexValue : policyBlue.hexValue}
            >
              game initializer
            </text>

            <DomainModule geometry={policyBGeometry} fill={policyBlue.hexValue} text="gameplay"/>
            <text
              x={0}
              y={0}
              textAnchor='middle'
              dominantBaseline='middle'
              transform={transform(policyBGeometry, policyBGeometry.nwPort)}
              fill={frame.highlightPrimaryAdapter ? highlightYellow.hexValue : policyBlue.hexValue}
            >
              setup board
            </text>
          </svg>
            : <></>}
        </div>
      </div>
    </div>
  )
}
