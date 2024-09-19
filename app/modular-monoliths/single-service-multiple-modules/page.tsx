'use client'

import {adapterRed, arrowPurple, deployableGreen, policyBlue, Rect} from "@/app/lib/definitions";
import Arrow from "@/app/lib/diagrams/Arrow";
import ModuleRect from "@/app/lib/diagrams/ModuleRect";

export default function Page() {
  const width = window.innerWidth - 40;

  const buffer = 15;
  const arrowWidth = 14;

  const rect = {
    width: 250,
    height: 150,
  }

  const deployableRect = new Rect(
    (width - rect.width) / 2,
    0,
    rect.width,
    rect.height
  );

  const leftContextAdapter1Rect = new Rect(
    0,
    rect.height * 2,
    rect.width,
    rect.height
  );

  const leftContextAdapter2Rect = new Rect(
    rect.width * 2,
    rect.height * 2,
    rect.width,
    rect.height
  );

  const leftContextPolicyRect = new Rect(
    0.15 * width,
    rect.height * 4,
    rect.width,
    rect.height
  );

  const rightContextAdapter1Rect = new Rect(
    width - rect.width,
    rect.height * 2,
    rect.width,
    rect.height
  );

  const rightContextAdapter2Rect = new Rect(
    width - rect.width * 3,
    rect.height * 2,
    rect.width,
    rect.height
  );

  const rightContextPolicyRect = new Rect(
    0.72 * width,
    rect.height * 4,
    rect.width,
    rect.height
  );

  return (
    <div className='padding-horizontal svg-container pt-16'>
      <svg className='svg'>
        <ModuleRect rect={deployableRect} text={"deployable"} fill={deployableGreen.hexValue}/>

        {/* LEFT CONTEXT */}

        <ModuleRect rect={leftContextAdapter1Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={leftContextAdapter2Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={leftContextPolicyRect} text={"policy"} fill={policyBlue.hexValue}/>

        {/* arrow from deployable to left context adapter 1 */}

        <line
          x1={deployableRect.leftEdgeCenter.x - buffer}
          y1={deployableRect.leftEdgeTopAnchor.y}
          x2={leftContextAdapter1Rect.topEdgeCenter.x - arrowWidth / 2}
          y2={deployableRect.leftEdgeTopAnchor.y}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: leftContextAdapter1Rect.topEdgeCenter.x,
            y: deployableRect.leftEdgeTopAnchor.y,
          }}
          to={{
            x: leftContextAdapter1Rect.topEdgeCenter.x,
            y: leftContextAdapter1Rect.topEdgeCenter.y - buffer,
          }}
          width={arrowWidth}
        />

        {/* arrow from deployable to policy module rect */}

        <line
          x1={deployableRect.leftEdgeCenter.x - buffer}
          y1={deployableRect.leftEdgeCenter.y}
          x2={leftContextPolicyRect.topEdgeCenter.x - arrowWidth / 2}
          y2={deployableRect.leftEdgeCenter.y}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: leftContextPolicyRect.topEdgeCenter.x,
            y: deployableRect.leftEdgeCenter.y,
          }}
          to={{
            x: leftContextPolicyRect.topEdgeCenter.x,
            y: leftContextPolicyRect.topEdgeCenter.y - buffer,
          }}
          width={arrowWidth}
        />

        {/* arrow from deployable to left context adapter 2 module rect */}

        <line
          x1={deployableRect.leftEdgeBottomAnchor.x - buffer}
          y1={deployableRect.leftEdgeBottomAnchor.y}
          x2={leftContextAdapter2Rect.topEdgeCenter.x - arrowWidth / 2}
          y2={deployableRect.leftEdgeBottomAnchor.y}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: leftContextAdapter2Rect.topEdgeCenter.x,
            y: deployableRect.leftEdgeBottomAnchor.y,
          }}
          to={{
            x: leftContextAdapter2Rect.topEdgeCenter.x,
            y: leftContextAdapter2Rect.topEdgeCenter.y - buffer
          }}
          width={arrowWidth}
        />

        {/* arrow from left context adapter 1 module rect to left context policy rect */}

        <line
          x1={leftContextAdapter1Rect.bottomEdgeCenter.x}
          y1={leftContextAdapter1Rect.bottomEdgeCenter.y + buffer}
          x2={leftContextAdapter1Rect.bottomEdgeCenter.x}
          y2={leftContextPolicyRect.leftEdgeCenter.y + arrowWidth / 2}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: leftContextAdapter1Rect.bottomEdgeCenter.x,
            y: leftContextPolicyRect.leftEdgeCenter.y,
          }}
          to={{
            x: leftContextPolicyRect.leftEdgeCenter.x - buffer,
            y: leftContextPolicyRect.leftEdgeCenter.y,
          }}
          width={arrowWidth}
        />

        {/* arrow from left context adapter 1 module rect to left context policy rect */}

        <line
          x1={leftContextAdapter2Rect.bottomEdgeCenter.x}
          y1={leftContextAdapter2Rect.bottomEdgeCenter.y + buffer}
          x2={leftContextAdapter2Rect.bottomEdgeCenter.x}
          y2={leftContextPolicyRect.leftEdgeCenter.y + arrowWidth / 2}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: leftContextAdapter2Rect.bottomEdgeCenter.x,
            y: leftContextPolicyRect.rightEdgeCenter.y,
          }}
          to={{
            x: leftContextPolicyRect.rightEdgeCenter.x + buffer,
            y: leftContextPolicyRect.rightEdgeCenter.y
          }}
          width={arrowWidth}
        />

        {/* RIGHT CONTEXT */}

        <ModuleRect rect={rightContextAdapter1Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={rightContextAdapter2Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={rightContextPolicyRect} text={"policy"} fill={policyBlue.hexValue}/>

        {/* arrow from deployable to right context adapter 1 */}

        <line
          x1={deployableRect.rightEdgeCenter.x + buffer}
          y1={deployableRect.rightEdgeTopAnchor.y}
          x2={rightContextAdapter1Rect.topEdgeCenter.x + arrowWidth / 2}
          y2={deployableRect.rightEdgeTopAnchor.y}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: rightContextAdapter1Rect.topEdgeCenter.x,
            y: deployableRect.rightEdgeTopAnchor.y,
          }}
          to={{
            x: rightContextAdapter1Rect.topEdgeCenter.x,
            y: rightContextAdapter1Rect.topEdgeCenter.y - buffer,
          }}
          width={arrowWidth}
        />

        {/* arrow from deployable to right policy module rect */}

        <line
          x1={deployableRect.rightEdgeCenter.x + buffer}
          y1={deployableRect.rightEdgeCenter.y}
          x2={rightContextPolicyRect.topEdgeCenter.x + arrowWidth / 2}
          y2={deployableRect.rightEdgeCenter.y}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: rightContextPolicyRect.topEdgeCenter.x,
            y: deployableRect.leftEdgeCenter.y,
          }}
          to={{
            x: rightContextPolicyRect.topEdgeCenter.x,
            y: rightContextPolicyRect.topEdgeCenter.y - buffer,
          }}
          width={arrowWidth}
        />

        {/* arrow from deployable to right context adapter 2 module rect */}

        <line
          x1={deployableRect.rightEdgeBottomAnchor.x + buffer}
          y1={deployableRect.rightEdgeBottomAnchor.y}
          x2={rightContextAdapter2Rect.topEdgeCenter.x + arrowWidth / 2}
          y2={deployableRect.leftEdgeBottomAnchor.y}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: rightContextAdapter2Rect.topEdgeCenter.x,
            y: deployableRect.leftEdgeBottomAnchor.y,
          }}
          to={{
            x: rightContextAdapter2Rect.topEdgeCenter.x,
            y: rightContextAdapter2Rect.topEdgeCenter.y - buffer
          }}
          width={arrowWidth}
        />

        {/* arrow from right context adapter 1 module rect to right context policy rect */}

        <line
          x1={rightContextAdapter1Rect.bottomEdgeCenter.x}
          y1={rightContextAdapter1Rect.bottomEdgeCenter.y + buffer}
          x2={rightContextAdapter1Rect.bottomEdgeCenter.x}
          y2={rightContextPolicyRect.leftEdgeCenter.y + arrowWidth / 2}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: rightContextAdapter1Rect.bottomEdgeCenter.x,
            y: rightContextPolicyRect.leftEdgeCenter.y,
          }}
          to={{
            x: rightContextPolicyRect.rightEdgeCenter.x + buffer,
            y: rightContextPolicyRect.rightEdgeCenter.y,
          }}
          width={arrowWidth}
        />

        {/* arrow from right context adapter 2 module rect to right context policy rect */}

        <line
          x1={rightContextAdapter2Rect.bottomEdgeCenter.x}
          y1={rightContextAdapter2Rect.bottomEdgeCenter.y + buffer}
          x2={rightContextAdapter2Rect.bottomEdgeCenter.x}
          y2={rightContextPolicyRect.leftEdgeCenter.y + arrowWidth / 2}
          stroke={arrowPurple.hexValue}
          strokeWidth={arrowWidth}
        />

        <Arrow
          from={{
            x: rightContextAdapter2Rect.bottomEdgeCenter.x,
            y: rightContextPolicyRect.rightEdgeCenter.y,
          }}
          to={{
            x: rightContextPolicyRect.leftEdgeCenter.x - buffer,
            y: rightContextPolicyRect.leftEdgeCenter.y
          }}
          width={arrowWidth}
        />

      </svg>
    </div>
  )
}
