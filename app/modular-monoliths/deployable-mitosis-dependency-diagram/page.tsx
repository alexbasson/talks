'use client'

import {adapterRed, arrowPurple, deployableGreen, highlightYellow, policyBlue, Rect} from "@/app/lib/definitions";
import ModuleRect from "@/app/lib/diagrams/ModuleRect";
import Arrow from "@/app/lib/diagrams/Arrow";
import useFrame from "@/app/lib/useFrame";

type Frame = {
  displaySingleDeployable: boolean
  displayDuplicateDeployable: boolean,
  displaySeparateDeployables: boolean,
  deployable1DependencyColor: string,
  deployable2DependencyColor: string,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displaySingleDeployable: true,
      displayDuplicateDeployable: false,
      displaySeparateDeployables: false,
      deployable1DependencyColor: arrowPurple.hexValue,
      deployable2DependencyColor: arrowPurple.hexValue,
    },
    {
      displaySingleDeployable: true,
      displayDuplicateDeployable: true,
      displaySeparateDeployables: false,
      deployable1DependencyColor: arrowPurple.hexValue,
      deployable2DependencyColor: arrowPurple.hexValue,
    },
    {
      displaySingleDeployable: true,
      displayDuplicateDeployable: true,
      displaySeparateDeployables: false,
      deployable1DependencyColor: highlightYellow.hexValue,
      deployable2DependencyColor: arrowPurple.hexValue,
    },
    {
      displaySingleDeployable: true,
      displayDuplicateDeployable: true,
      displaySeparateDeployables: false,
      deployable1DependencyColor: arrowPurple.hexValue,
      deployable2DependencyColor: highlightYellow.hexValue,
    },
    {
      displaySingleDeployable: false,
      displayDuplicateDeployable: false,
      displaySeparateDeployables: true,
      deployable1DependencyColor: arrowPurple.hexValue,
      deployable2DependencyColor: arrowPurple.hexValue,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const width = window.innerWidth - 40;

  const buffer = 15;
  const arrowWidth = 14;

  const rect = {
    width: 275,
    height: 150,
  }

  const deployableRect1 = new Rect(
    (width - rect.width) / 2,
    20,
    rect.width,
    rect.height
  );

  const deployableRect2 = new Rect(
    (width - rect.width) / 2 - 20,
    0,
    rect.width,
    rect.height
  );

  const deployableRect1After = new Rect(
    0.15 * width,
    20,
    rect.width,
    rect.height
  );

  const deployableRect2After = new Rect(
    0.72 * width,
    20,
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
        { frame.displaySingleDeployable ?
        <g>
          { frame.displayDuplicateDeployable ? <ModuleRect rect={deployableRect2} text={""} fill={deployableGreen.hexValue} /> : <></> }
          <ModuleRect rect={deployableRect1} text={"deployable"} fill={deployableGreen.hexValue} stroke={'black'} />

          {/* arrow from deployable to left context adapter 1 */}

          <line
            x1={deployableRect1.leftEdgeCenter.x - buffer}
            y1={deployableRect1.leftEdgeTopAnchor.y}
            x2={leftContextAdapter1Rect.topEdgeCenter.x - arrowWidth / 2}
            y2={deployableRect1.leftEdgeTopAnchor.y}
            stroke={frame.deployable1DependencyColor}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: leftContextAdapter1Rect.topEdgeCenter.x,
              y: deployableRect1.leftEdgeTopAnchor.y,
            }}
            to={{
              x: leftContextAdapter1Rect.topEdgeCenter.x,
              y: leftContextAdapter1Rect.topEdgeCenter.y - buffer,
            }}
            width={arrowWidth}
            fill={frame.deployable1DependencyColor}
          />

          {/* arrow from deployable to policy module rect */}

          <line
            x1={deployableRect1.leftEdgeCenter.x - buffer}
            y1={deployableRect1.leftEdgeCenter.y}
            x2={leftContextPolicyRect.topEdgeCenter.x - arrowWidth / 2}
            y2={deployableRect1.leftEdgeCenter.y}
            stroke={frame.deployable1DependencyColor}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: leftContextPolicyRect.topEdgeCenter.x,
              y: deployableRect1.leftEdgeCenter.y,
            }}
            to={{
              x: leftContextPolicyRect.topEdgeCenter.x,
              y: leftContextPolicyRect.topEdgeCenter.y - buffer,
            }}
            width={arrowWidth}
            fill={frame.deployable1DependencyColor}
          />

          {/* arrow from deployable to left context adapter 2 module rect */}

          <line
            x1={deployableRect1.leftEdgeBottomAnchor.x - buffer}
            y1={deployableRect1.leftEdgeBottomAnchor.y}
            x2={leftContextAdapter2Rect.topEdgeCenter.x - arrowWidth / 2}
            y2={deployableRect1.leftEdgeBottomAnchor.y}
            stroke={frame.deployable1DependencyColor}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: leftContextAdapter2Rect.topEdgeCenter.x,
              y: deployableRect1.leftEdgeBottomAnchor.y,
            }}
            to={{
              x: leftContextAdapter2Rect.topEdgeCenter.x,
              y: leftContextAdapter2Rect.topEdgeCenter.y - buffer
            }}
            width={arrowWidth}
            fill={frame.deployable1DependencyColor}
          />

          {/* arrow from deployable to right context adapter 1 */}

          <line
            x1={deployableRect1.rightEdgeCenter.x + buffer}
            y1={deployableRect1.rightEdgeTopAnchor.y}
            x2={rightContextAdapter1Rect.topEdgeCenter.x + arrowWidth / 2}
            y2={deployableRect1.rightEdgeTopAnchor.y}
            stroke={frame.deployable2DependencyColor}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: rightContextAdapter1Rect.topEdgeCenter.x,
              y: deployableRect1.rightEdgeTopAnchor.y,
            }}
            to={{
              x: rightContextAdapter1Rect.topEdgeCenter.x,
              y: rightContextAdapter1Rect.topEdgeCenter.y - buffer,
            }}
            width={arrowWidth}
            fill={frame.deployable2DependencyColor}
          />

          {/* arrow from deployable to right policy module rect */}

          <line
            x1={deployableRect1.rightEdgeCenter.x + buffer}
            y1={deployableRect1.rightEdgeCenter.y}
            x2={rightContextPolicyRect.topEdgeCenter.x + arrowWidth / 2}
            y2={deployableRect1.rightEdgeCenter.y}
            stroke={frame.deployable2DependencyColor}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: rightContextPolicyRect.topEdgeCenter.x,
              y: deployableRect1.leftEdgeCenter.y,
            }}
            to={{
              x: rightContextPolicyRect.topEdgeCenter.x,
              y: rightContextPolicyRect.topEdgeCenter.y - buffer,
            }}
            width={arrowWidth}
            fill={frame.deployable2DependencyColor}
          />

          {/* arrow from deployable to right context adapter 2 module rect */}

          <line
            x1={deployableRect1.rightEdgeBottomAnchor.x + buffer}
            y1={deployableRect1.rightEdgeBottomAnchor.y}
            x2={rightContextAdapter2Rect.topEdgeCenter.x + arrowWidth / 2}
            y2={deployableRect1.leftEdgeBottomAnchor.y}
            stroke={frame.deployable2DependencyColor}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: rightContextAdapter2Rect.topEdgeCenter.x,
              y: deployableRect1.leftEdgeBottomAnchor.y,
            }}
            to={{
              x: rightContextAdapter2Rect.topEdgeCenter.x,
              y: rightContextAdapter2Rect.topEdgeCenter.y - buffer
            }}
            width={arrowWidth}
            fill={frame.deployable2DependencyColor}
          />
        </g>
          :<></>}

        { frame.displaySeparateDeployables ?
        <g>
          <ModuleRect rect={deployableRect1After} text={"deployable 1"} fill={deployableGreen.hexValue} />
          <ModuleRect rect={deployableRect2After} text={"deployable 2"} fill={deployableGreen.hexValue} />

          {/* arrow from deployable 1 to left context adapter 1 */}

          <line
            x1={deployableRect1After.leftEdgeCenter.x - buffer}
            y1={deployableRect1After.leftEdgeCenter.y}
            x2={leftContextAdapter1Rect.topEdgeCenter.x - arrowWidth / 2}
            y2={deployableRect1After.leftEdgeCenter.y}
            stroke={arrowPurple.hexValue}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: leftContextAdapter1Rect.topEdgeCenter.x,
              y: deployableRect1After.leftEdgeCenter.y,
            }}
            to={{
              x: leftContextAdapter1Rect.topEdgeCenter.x,
              y: leftContextAdapter1Rect.topEdgeCenter.y - buffer,
            }}
            width={arrowWidth}
            fill={arrowPurple.hexValue}
          />

          {/* arrow from deployable 1 to policy module rect */}

          <Arrow
            from={{
              x: leftContextPolicyRect.bottomEdgeCenter.x,
              y: deployableRect1After.bottomEdgeCenter.y + buffer,
            }}
            to={{
              x: leftContextPolicyRect.topEdgeCenter.x,
              y: leftContextPolicyRect.topEdgeCenter.y - buffer,
            }}
            width={arrowWidth}
            fill={arrowPurple.hexValue}
          />

          {/* arrow from deployable 1 to left context adapter 2 module rect */}

          <line
            x1={deployableRect1After.rightEdgeCenter.x + buffer}
            y1={deployableRect1After.rightEdgeCenter.y}
            x2={leftContextAdapter2Rect.topEdgeCenter.x + arrowWidth / 2}
            y2={deployableRect1After.rightEdgeCenter.y}
            stroke={arrowPurple.hexValue}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: leftContextAdapter2Rect.topEdgeCenter.x,
              y: deployableRect1After.rightEdgeCenter.y,
            }}
            to={{
              x: leftContextAdapter2Rect.topEdgeCenter.x,
              y: leftContextAdapter2Rect.topEdgeCenter.y - buffer
            }}
            width={arrowWidth}
            fill={arrowPurple.hexValue}
          />

          {/* arrow from deployable 2 to right context adapter 1 */}

          <line
            x1={deployableRect2After.rightEdgeCenter.x + buffer}
            y1={deployableRect2After.rightEdgeCenter.y}
            x2={rightContextAdapter1Rect.topEdgeCenter.x + arrowWidth / 2}
            y2={deployableRect2After.rightEdgeCenter.y}
            stroke={arrowPurple.hexValue}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: rightContextAdapter1Rect.topEdgeCenter.x,
              y: deployableRect2After.rightEdgeCenter.y,
            }}
            to={{
              x: rightContextAdapter1Rect.topEdgeCenter.x,
              y: rightContextAdapter1Rect.topEdgeCenter.y - buffer,
            }}
            width={arrowWidth}
          />

          {/* arrow from deployable 2 to right policy module rect */}

          <Arrow
            from={{
              x: rightContextPolicyRect.topEdgeCenter.x,
              y: deployableRect2After.bottomEdgeCenter.y + buffer,
            }}
            to={{
              x: rightContextPolicyRect.topEdgeCenter.x,
              y: rightContextPolicyRect.topEdgeCenter.y - buffer,
            }}
            width={arrowWidth}
          />

          {/* arrow from deployable 2 to right context adapter 2 module rect */}

          <line
            x1={deployableRect2After.leftEdgeCenter.x - buffer}
            y1={deployableRect2After.leftEdgeCenter.y}
            x2={rightContextAdapter2Rect.topEdgeCenter.x - arrowWidth / 2}
            y2={deployableRect2After.leftEdgeCenter.y}
            stroke={arrowPurple.hexValue}
            strokeWidth={arrowWidth}
          />

          <Arrow
            from={{
              x: rightContextAdapter2Rect.topEdgeCenter.x,
              y: deployableRect2After.leftEdgeCenter.y,
            }}
            to={{
              x: rightContextAdapter2Rect.topEdgeCenter.x,
              y: rightContextAdapter2Rect.topEdgeCenter.y - buffer
            }}
            width={arrowWidth}
          />
        </g>
          :<></>}

        {/* LEFT CONTEXT */}

        <ModuleRect rect={leftContextAdapter1Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={leftContextAdapter2Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={leftContextPolicyRect} text={"policy A"} fill={policyBlue.hexValue}/>

        {/* arrow from left context adapter 1 module rect to left context policy rect */}

        <line
          x1={leftContextAdapter1Rect.bottomEdgeCenter.x}
          y1={leftContextAdapter1Rect.bottomEdgeCenter.y + buffer}
          x2={leftContextAdapter1Rect.bottomEdgeCenter.x}
          y2={leftContextPolicyRect.leftEdgeCenter.y + arrowWidth / 2}
          stroke={frame.deployable1DependencyColor}
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
          fill={frame.deployable1DependencyColor}
        />

        {/* arrow from left context adapter 1 module rect to left context policy rect */}

        <line
          x1={leftContextAdapter2Rect.bottomEdgeCenter.x}
          y1={leftContextAdapter2Rect.bottomEdgeCenter.y + buffer}
          x2={leftContextAdapter2Rect.bottomEdgeCenter.x}
          y2={leftContextPolicyRect.leftEdgeCenter.y + arrowWidth / 2}
          stroke={frame.deployable1DependencyColor}
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
          fill={frame.deployable1DependencyColor}
        />

        {/* RIGHT CONTEXT */}

        <ModuleRect rect={rightContextAdapter1Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={rightContextAdapter2Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={rightContextPolicyRect} text={"policy B"} fill={policyBlue.hexValue}/>

        {/* arrow from right context adapter 1 module rect to right context policy rect */}

        <line
          x1={rightContextAdapter1Rect.bottomEdgeCenter.x}
          y1={rightContextAdapter1Rect.bottomEdgeCenter.y + buffer}
          x2={rightContextAdapter1Rect.bottomEdgeCenter.x}
          y2={rightContextPolicyRect.leftEdgeCenter.y + arrowWidth / 2}
          stroke={frame.deployable2DependencyColor}
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
          fill={frame.deployable2DependencyColor}
        />

        {/* arrow from right context adapter 2 module rect to right context policy rect */}

        <line
          x1={rightContextAdapter2Rect.bottomEdgeCenter.x}
          y1={rightContextAdapter2Rect.bottomEdgeCenter.y + buffer}
          x2={rightContextAdapter2Rect.bottomEdgeCenter.x}
          y2={rightContextPolicyRect.leftEdgeCenter.y + arrowWidth / 2}
          stroke={frame.deployable2DependencyColor}
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
          fill={frame.deployable2DependencyColor}
        />
      </svg>
    </div>
  )
}
