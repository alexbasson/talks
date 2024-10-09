'use client'

import {Rect} from "@/app/lib/definitions";
import ModuleRect from "@/app/lib/modular-monoliths/diagrams/ModuleRect";
import Arrow from "@/app/lib/modular-monoliths/diagrams/Arrow";
import useFrame from "@/app/lib/useFrame";
import useDimensions from "@/app/lib/useDimensions";
import {useRef} from "react";
import {adapterRed, arrowPurple, deployableGreen, highlightYellow, policyBlue} from "@/app/lib/colors";

type Frame = {
  displaySingleDeployable: boolean
  displayDuplicateDeployable: boolean,
  displaySeparateDeployables: boolean,
  deployable1Opacity: number,
  deployable1DashArray: number,
  deployable2Opacity: number,
  deployable2DashArray: number,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displaySingleDeployable: true,
      displayDuplicateDeployable: false,
      displaySeparateDeployables: false,
      deployable1Opacity: 1,
      deployable1DashArray: 0,
      deployable2Opacity: 1,
      deployable2DashArray: 0,
    },
    {
      displaySingleDeployable: true,
      displayDuplicateDeployable: true,
      displaySeparateDeployables: false,
      deployable1Opacity: 1,
      deployable1DashArray: 0,
      deployable2Opacity: 1,
      deployable2DashArray: 0,
    },
    {
      displaySingleDeployable: true,
      displayDuplicateDeployable: true,
      displaySeparateDeployables: false,
      deployable1Opacity: 0.5,
      deployable1DashArray: 20,
      deployable2Opacity: 1,
      deployable2DashArray: 0,
    },
    {
      displaySingleDeployable: true,
      displayDuplicateDeployable: true,
      displaySeparateDeployables: false,
      deployable1Opacity: 1,
      deployable1DashArray: 0,
      deployable2Opacity: 0.5,
      deployable2DashArray: 20,
    },
    {
      displaySingleDeployable: false,
      displayDuplicateDeployable: false,
      displaySeparateDeployables: true,
      deployable1Opacity: 1,
      deployable1DashArray: 0,
      deployable2Opacity: 1,
      deployable2DashArray: 0,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const targetRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(targetRef);
  const width = dimensions.width - 40;

  const buffer = 15;
  const arrowWidth = 14;

  const rect = {
    width: 275,
    height: 150,
  }

  const deployableRect1 = new Rect((width - rect.width) / 2, 20, rect.width, rect.height);
  const deployableRect1After = new Rect(0.25 * width - rect.width/2, 20, rect.width, rect.height);
  const leftContextAdapter1Rect = new Rect(0, rect.height * 2, rect.width, rect.height);
  const leftContextAdapter2Rect = new Rect((width/2 - 40) - rect.width, rect.height * 2, rect.width, rect.height);
  const leftContextPolicyRect = new Rect(deployableRect1After.x, rect.height * 4, rect.width, rect.height);

  const deployableRect2 = new Rect(deployableRect1.x - 20, 0, rect.width, rect.height);
  const deployableRect2After = new Rect(0.75 * width - rect.width/2, 20, rect.width, rect.height);
  const rightContextAdapter1Rect = new Rect((width/2 + 40), rect.height * 2, rect.width, rect.height);
  const rightContextAdapter2Rect = new Rect(width - rect.width, rect.height * 2, rect.width, rect.height);
  const rightContextPolicyRect = new Rect(deployableRect2After.x, rect.height * 4, rect.width, rect.height);

  return (
    <div className='padding-horizontal svg-container pt-16' ref={targetRef}>
      <svg className='svg'>
        { frame.displaySingleDeployable ?
        <g>
          { frame.displayDuplicateDeployable ? <ModuleRect rect={deployableRect2} text={""} fill={deployableGreen.hexValue} /> : <></> }
          <ModuleRect rect={deployableRect1} text={"deployable"} fill={deployableGreen.hexValue} stroke={'black'} />

          {/* arrow from deployable to left context adapter 1 */}

          <Arrow
            points={[
              {
                x: deployableRect1.leftEdgeCenter.x - buffer,
                y: deployableRect1.leftEdgeTopAnchor.y
              },
              {
                x: leftContextAdapter1Rect.topEdgeCenter.x,
                y: deployableRect1.leftEdgeTopAnchor.y,
              },
              {
                x: leftContextAdapter1Rect.topEdgeCenter.x,
                y: leftContextAdapter1Rect.topEdgeCenter.y - buffer,
              }
            ]}
            width={arrowWidth}
            opacity={frame.deployable1Opacity}
            dashArray={frame.deployable1DashArray}
          />

          {/* arrow from deployable to policy module rect */}

          <Arrow
            points={[
              {
                x: deployableRect1.leftEdgeCenter.x - buffer,
                y: deployableRect1.leftEdgeCenter.y
              },
              {
                x: leftContextPolicyRect.topEdgeCenter.x,
                y: deployableRect1.leftEdgeCenter.y,
              },
              {
                x: leftContextPolicyRect.topEdgeCenter.x,
                y: leftContextPolicyRect.topEdgeCenter.y - buffer,
              }
            ]}
            width={arrowWidth}
            opacity={frame.deployable1Opacity}
            dashArray={frame.deployable1DashArray}
          />

          {/* arrow from deployable to left context adapter 2 module rect */}

          <Arrow
            points={[
              {
                x: deployableRect1.leftEdgeBottomAnchor.x - buffer,
                y: deployableRect1.leftEdgeBottomAnchor.y
              },
              {
                x: leftContextAdapter2Rect.topEdgeCenter.x,
                y: deployableRect1.leftEdgeBottomAnchor.y,
              },
              {
                x: leftContextAdapter2Rect.topEdgeCenter.x,
                y: leftContextAdapter2Rect.topEdgeCenter.y - buffer
              }
            ]}
            width={arrowWidth}
            opacity={frame.deployable1Opacity}
            dashArray={frame.deployable1DashArray}
          />

          {/* arrow from deployable to right context adapter 1 */}

          <Arrow
            points={[
              {
                x: deployableRect1.rightEdgeCenter.x + buffer,
                y: deployableRect1.rightEdgeBottomAnchor.y
              },
              {
                x: rightContextAdapter1Rect.topEdgeCenter.x,
                y: deployableRect1.rightEdgeBottomAnchor.y,
              },
              {
                x: rightContextAdapter1Rect.topEdgeCenter.x,
                y: rightContextAdapter1Rect.topEdgeCenter.y - buffer,
              }
            ]}
            width={arrowWidth}
            opacity={frame.deployable2Opacity}
            dashArray={frame.deployable2DashArray}
          />

          {/* arrow from deployable to right policy module rect */}

          <Arrow
            points={[
              {
                x: deployableRect1.rightEdgeCenter.x + buffer,
                y: deployableRect1.rightEdgeCenter.y
              },
              {
                x: rightContextPolicyRect.topEdgeCenter.x,
                y: deployableRect1.leftEdgeCenter.y,
              },
              {
                x: rightContextPolicyRect.topEdgeCenter.x,
                y: rightContextPolicyRect.topEdgeCenter.y - buffer,
              }
            ]}
            width={arrowWidth}
            opacity={frame.deployable2Opacity}
            dashArray={frame.deployable2DashArray}
          />

          {/* arrow from deployable to right context adapter 2 module rect */}

          <Arrow
            points={[
              {
                x: deployableRect1.rightEdgeTopAnchor.x + buffer,
                y: deployableRect1.rightEdgeTopAnchor.y
              },
              {
                x: rightContextAdapter2Rect.topEdgeCenter.x,
                y: deployableRect1.rightEdgeTopAnchor.y,
              },
              {
                x: rightContextAdapter2Rect.topEdgeCenter.x,
                y: rightContextAdapter2Rect.topEdgeCenter.y - buffer
              }
            ]}
            width={arrowWidth}
            opacity={frame.deployable2Opacity}
            dashArray={frame.deployable2DashArray}
          />
        </g>
          :<></>}

        { frame.displaySeparateDeployables ?
        <g>
          <ModuleRect rect={deployableRect1After} text={"deployable 1"} fill={deployableGreen.hexValue} />
          <ModuleRect rect={deployableRect2After} text={"deployable 2"} fill={deployableGreen.hexValue} />

          {/* arrow from deployable 1 to left context adapter 1 */}

          <Arrow
            points={[
              {
                x: deployableRect1After.leftEdgeCenter.x - buffer,
                y: deployableRect1After.leftEdgeCenter.y
              },
              {
                x: leftContextAdapter1Rect.topEdgeCenter.x,
                y: deployableRect1After.leftEdgeCenter.y,
              },
              {
                x: leftContextAdapter1Rect.topEdgeCenter.x,
                y: leftContextAdapter1Rect.topEdgeCenter.y - buffer,
              }
            ]}
            width={arrowWidth}
          />

          {/* arrow from deployable 1 to policy module rect */}

          <Arrow
            points={[
              {
                x: leftContextPolicyRect.bottomEdgeCenter.x,
                y: deployableRect1After.bottomEdgeCenter.y + buffer,
              },
              {
                x: leftContextPolicyRect.topEdgeCenter.x,
                y: leftContextPolicyRect.topEdgeCenter.y - buffer,
              }
            ]}
            width={arrowWidth}
          />

          {/* arrow from deployable 1 to left context adapter 2 module rect */}

          <Arrow
            points={[
              {
                x: deployableRect1After.rightEdgeCenter.x + buffer,
                y: deployableRect1After.rightEdgeCenter.y
              },
              {
                x: leftContextAdapter2Rect.topEdgeCenter.x,
                y: deployableRect1After.rightEdgeCenter.y,
              },
              {
                x: leftContextAdapter2Rect.topEdgeCenter.x,
                y: leftContextAdapter2Rect.topEdgeCenter.y - buffer
              }
            ]}
            width={arrowWidth}
          />

          {/* arrow from deployable 2 to right context adapter 1 */}

          <Arrow
            points={[
              {
                x: deployableRect2After.leftEdgeCenter.x - buffer,
                y: deployableRect2After.leftEdgeCenter.y
              },
              {
                x: rightContextAdapter1Rect.topEdgeCenter.x,
                y: deployableRect2After.rightEdgeCenter.y,
              },
              {
                x: rightContextAdapter1Rect.topEdgeCenter.x,
                y: rightContextAdapter1Rect.topEdgeCenter.y - buffer,
              }
            ]}
            width={arrowWidth}
          />

          {/* arrow from deployable 2 to right policy module rect */}

          <Arrow
            points={[
              {
                x: rightContextPolicyRect.topEdgeCenter.x,
                y: deployableRect2After.bottomEdgeCenter.y + buffer,
              },
              {
                x: rightContextPolicyRect.topEdgeCenter.x,
                y: rightContextPolicyRect.topEdgeCenter.y - buffer,
              }
            ]}
            width={arrowWidth}
          />

          {/* arrow from deployable 2 to right context adapter 2 module rect */}

          <Arrow
            points={[
              {
                x: deployableRect2After.rightEdgeCenter.x + buffer,
                y: deployableRect2After.rightEdgeCenter.y
              },
              {
                x: rightContextAdapter2Rect.topEdgeCenter.x,
                y: deployableRect2After.leftEdgeCenter.y,
              },
              {
                x: rightContextAdapter2Rect.topEdgeCenter.x,
                y: rightContextAdapter2Rect.topEdgeCenter.y - buffer
              }
            ]}
            width={arrowWidth}
          />
        </g>
          :<></>}

        {/* LEFT CONTEXT */}

        <ModuleRect rect={leftContextAdapter1Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={leftContextAdapter2Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={leftContextPolicyRect} text={"policy A"} fill={policyBlue.hexValue}/>

        {/* arrow from left context adapter 1 module rect to left context policy rect */}

        <Arrow
          points={[
            {
              x: leftContextAdapter1Rect.bottomEdgeCenter.x,
              y: leftContextAdapter1Rect.bottomEdgeCenter.y + buffer
            },
            {
              x: leftContextAdapter1Rect.bottomEdgeCenter.x,
              y: leftContextPolicyRect.leftEdgeCenter.y,
            },
            {
              x: leftContextPolicyRect.leftEdgeCenter.x - buffer,
              y: leftContextPolicyRect.leftEdgeCenter.y,
            }
          ]}
          width={arrowWidth}
        />

        {/* arrow from left context adapter 1 module rect to left context policy rect */}

        <Arrow
          points={[
            {
              x: leftContextAdapter2Rect.bottomEdgeCenter.x,
              y: leftContextAdapter2Rect.bottomEdgeCenter.y + buffer
            },
            {
              x: leftContextAdapter2Rect.bottomEdgeCenter.x,
              y: leftContextPolicyRect.rightEdgeCenter.y,
            },
            {
              x: leftContextPolicyRect.rightEdgeCenter.x + buffer,
              y: leftContextPolicyRect.rightEdgeCenter.y
            }
          ]}
          width={arrowWidth}
        />

        {/* RIGHT CONTEXT */}

        <ModuleRect rect={rightContextAdapter1Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={rightContextAdapter2Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={rightContextPolicyRect} text={"policy B"} fill={policyBlue.hexValue}/>

        {/* arrow from right context adapter 1 module rect to right context policy rect */}

        <Arrow
          points={[
            {
              x: rightContextAdapter1Rect.bottomEdgeCenter.x,
              y: rightContextAdapter1Rect.bottomEdgeCenter.y + buffer
            },
            {
              x: rightContextAdapter1Rect.bottomEdgeCenter.x,
              y: rightContextPolicyRect.leftEdgeCenter.y,
            },
            {
              x: rightContextPolicyRect.leftEdgeCenter.x - buffer,
              y: rightContextPolicyRect.leftEdgeCenter.y,
            }
          ]}
          width={arrowWidth}
        />

        {/* arrow from right context adapter 2 module rect to right context policy rect */}

        <Arrow
          points={[
            {
              x: rightContextAdapter2Rect.bottomEdgeCenter.x,
              y: rightContextAdapter2Rect.bottomEdgeCenter.y + buffer
            },
            {
              x: rightContextAdapter2Rect.bottomEdgeCenter.x,
              y: rightContextPolicyRect.rightEdgeCenter.y,
            },
            {
              x: rightContextPolicyRect.rightEdgeCenter.x + buffer,
              y: rightContextPolicyRect.rightEdgeCenter.y
            }
          ]}
          width={arrowWidth}
        />
      </svg>
    </div>
  )
}
