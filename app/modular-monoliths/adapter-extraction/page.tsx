'use client'

import useFrame from "@/app/lib/useFrame";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import {
  AdapterProps,
  adapterRed,
  arrowPurple,
  deployableGreen,
  highlightYellow,
  layoutPadding,
  policyBlue
} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import SecondaryPort from "@/app/lib/diagrams/SecondaryPort";
import Arrow from "@/app/lib/diagrams/Arrow";

type Frame = {
  highlightMovesDb: boolean,
  removeMovesDbAdapter: boolean,
  displayCreatedAdapters: boolean,
  displayDeployable2: boolean,
  displayDependency: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      highlightMovesDb: false,
      removeMovesDbAdapter: false,
      displayCreatedAdapters: false,
      displayDeployable2: false,
      displayDependency: false,
    },
    {
      highlightMovesDb: true,
      removeMovesDbAdapter: false,
      displayCreatedAdapters: false,
      displayDeployable2: false,
      displayDependency: false,
    },
    {
      highlightMovesDb: true,
      removeMovesDbAdapter: true,
      displayCreatedAdapters: false,
      displayDeployable2: false,
      displayDependency: false,
    },
    {
      highlightMovesDb: true,
      removeMovesDbAdapter: true,
      displayCreatedAdapters: true,
      displayDeployable2: false,
      displayDependency: false,
    },
    {
      highlightMovesDb: true,
      removeMovesDbAdapter: true,
      displayCreatedAdapters: true,
      displayDeployable2: true,
      displayDependency: false,
    },
    {
      highlightMovesDb: true,
      removeMovesDbAdapter: true,
      displayCreatedAdapters: true,
      displayDeployable2: true,
      displayDependency: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const height = window.innerHeight - 6*layoutPadding;
  const width = window.innerWidth - 6*layoutPadding;

  const scale = height / 4;
  const geometry = systemGeometry(scale, width/3, 0.4 * height);
  const removedMovesDbGeometry = systemGeometry(scale, width - 400, 0.4 * height);
  const deployable2Geometry = systemGeometry(scale, width - 250, 0.3 * height);
  const movesAPIGeometry = systemGeometry(scale, width - 100, 0.2 * height);

  return (
    <div className='padding-horizontal'>
      <h1>adapter extraction</h1>

      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        {frame.displayCreatedAdapters ?
          <line
            x1={800}
            y1={220}
            x2={1500}
            y2={300}
            stroke={arrowPurple.hexValue}
            strokeWidth={10}
            strokeDasharray={15}
          /> : <></>
        }

        <DomainModule geometry={geometry} text="gameplay policy" fill={policyBlue.hexValue}/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} text={'game API'}/>
        {frame.removeMovesDbAdapter ? <></> :
          <SecondaryAdapter geometry={geometry} portName={'nePort'} text={'moves db'}
                            fill={frame.highlightMovesDb ? highlightYellow.hexValue : adapterRed.hexValue}/>}
        {frame.displayCreatedAdapters ? <SecondaryAdapter geometry={geometry} portName={'nePort'} text={'moves client'}
                                                          fill={adapterRed.hexValue}/> : <></>}
        <DeployableModule geometry={geometry} width={2 * scale} height={1.5 * scale} stroke={deployableGreen.hexValue}/>
        <text className={"text-base"} x={0} y={100} fill={deployableGreen.hexValue}>deployable 1</text>


        {frame.displayCreatedAdapters ?
          <MovesAPIAdapter geometry={movesAPIGeometry}
                           portName={'swPort'}
                           text={'moves API'}
                           fill={adapterRed.hexValue}/> : <></>}
        {frame.removeMovesDbAdapter ?
          <SecondaryAdapter geometry={removedMovesDbGeometry} portName={'nePort'} text={'moves db'}
                            fill={frame.highlightMovesDb ? highlightYellow.hexValue : adapterRed.hexValue}/> : <></>}

        {frame.displayDeployable2 ?
          <>
            <DeployableModule geometry={deployable2Geometry} width={scale} height={scale}
                              stroke={deployableGreen.hexValue}/>
            <text className={"text-base"} x={1400} y={550} fill={deployableGreen.hexValue}>deployable 2</text>
          </>
          : <></>
        }

        {frame.displayDependency ?
          <g>
            <line
              x1={1450}
              y1={125}
              x2={1375}
              y2={8}
              stroke={arrowPurple.hexValue}
              strokeWidth={15}
            />
            <line
              x1={1380}
              y1={10}
              x2={593}
              y2={80}
              stroke={arrowPurple.hexValue}
              strokeWidth={15}
            />
            <Arrow
              from={{
                x: 600,
                y: 78,
              }}
              to={{
                x: 600,
                y: 150,
              }}
              width={15}
            />
          </g> : <></>
        }
      </svg>
    </div>
  )
}

function MovesAPIAdapter({geometry, portName, fill = adapterRed.hexValue, text = ""}: AdapterProps) {
  const {center, scale} = geometry;
  const port = geometry[portName];

  const transform = `
  translate(${port.center.x + port.adapterOffset.x + center.x}, ${port.center.y + port.adapterOffset.y + center.y}),
  rotate(${port.rotate}, 0, 0)
  `

  return (
    <>
      <defs>
        <mask id="foo">
          <SecondaryPort sideLength={scale} fill="black" />
        </mask>
      </defs>
      <g transform={transform}>
        <rect x={-0.5 * scale} y={-0.4 * scale} width={scale} height={0.55 * scale} fill={fill} mask="url(#foo)"/>
        <text className={"text-base"} y={-0.2 * scale} textAnchor="middle" dominantBaseline="middle">{text}</text>
      </g>
    </>
  )
}
