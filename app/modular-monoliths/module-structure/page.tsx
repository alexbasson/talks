'use client'

import {adapterRed, deployableGreen, domainBlue, layoutPadding, Point, Rect} from "@/app/lib/definitions";
import Arrow from "@/app/lib/diagrams/Arrow";

function ModuleRect({rect, text, fill}: {rect: Rect, text: string, fill: string}) {
  return (
    <g transform={`translate(${rect.x}, ${rect.y})`}>
      <rect x={0} y={0} width={rect.width} height={rect.height} fill={fill}/>
      <text x={rect.width / 2}
            y={rect.height / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white">{text}
      </text>
    </g>
  )
}

export default function Page() {
  const leftColumnWidth = 500;
  const height = window.innerHeight - 2 * layoutPadding;
  const width = window.innerWidth - leftColumnWidth - 2 * layoutPadding;

  const buffer = 15;
  const arrowWidth = 15;

  const rect = {
    width: 400,
    height: 150,
  }

  const deployableRect = new Rect(
    rect.width,
    0,
    rect.width,
    rect.height
  );

  const leftAdapterRect = new Rect(
    0,
    rect.height * 2,
    rect.width,
    rect.height
  );

  const rightAdapterRect = new Rect(
    rect.width * 2,
    rect.height * 2,
    rect.width,
    rect.height
  );

  const policyRect = new Rect(
    deployableRect.x,
    rect.height * 4,
    rect.width,
    rect.height
  );

  return (
    <div style={{display: 'grid', gridTemplateColumns: `${leftColumnWidth}px 1fr`}}>
      <div>
        <h1>module structure</h1>
      </div>

      <div>
        <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
          <ModuleRect rect={deployableRect} text={"deployable"} fill={deployableGreen.hexValue} />
          <ModuleRect rect={leftAdapterRect} text={"adapter"} fill={adapterRed.hexValue} />
          <ModuleRect rect={rightAdapterRect} text={"adapter"} fill={adapterRed.hexValue} />
          <ModuleRect rect={policyRect} text={"policy"} fill={domainBlue.hexValue} />

          <Arrow
            from={{x: deployableRect.leftEdgeCenter.x - buffer, y: deployableRect.leftEdgeCenter.y}}
            to={{x: leftAdapterRect.topEdgeCenter.x, y: leftAdapterRect.topEdgeCenter.y - buffer}}
            width={arrowWidth}
          />

          <Arrow
            from={{x: leftAdapterRect.bottomEdgeCenter.x - buffer, y: leftAdapterRect.bottomEdgeCenter.y + buffer}}
            to={{x: policyRect.leftEdgeCenter.x - 10, y: policyRect.leftEdgeCenter.y}}
            width={arrowWidth}
          />

          <Arrow
            from={{x: deployableRect.rightEdgeCenter.x + buffer, y: deployableRect.rightEdgeCenter.y}}
            to={{x: rightAdapterRect.topEdgeCenter.x, y: rightAdapterRect.topEdgeCenter.y - buffer}}
            width={arrowWidth}
          />

          <Arrow
            from={{x: rightAdapterRect.bottomEdgeCenter.x, y: rightAdapterRect.bottomEdgeCenter.y + buffer}}
            to={{x: policyRect.rightEdgeCenter.x + buffer, y: policyRect.rightEdgeCenter.y}}
            width={arrowWidth}
          />

          <Arrow
            from={{x: deployableRect.bottomEdgeCenter.x, y: deployableRect.bottomEdgeCenter.y + buffer}}
            to={{x: policyRect.topEdgeCenter.x, y: policyRect.topEdgeCenter.y - buffer}}
            width={arrowWidth}
          />
        </svg>
      </div>

    </div>
  )
}
