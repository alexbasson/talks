'use client'

import {adapterRed, arrowPurple, deployableGreen, policyBlue, Rect} from "@/app/lib/definitions";
import Arrow from "@/app/lib/modular-monoliths/diagrams/Arrow";
import ModuleRect from "@/app/lib/modular-monoliths/diagrams/ModuleRect";
import useDimensions from "@/app/lib/useDimensions";
import {useRef} from "react";

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(targetRef);
  const width = dimensions.width - 40;

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
    <div className='padding-horizontal svg-container pt-16' ref={targetRef}>
      <svg className='svg'>
        <ModuleRect rect={deployableRect} text={"deployable"} fill={deployableGreen.hexValue}/>

        {/* LEFT CONTEXT */}

        <ModuleRect rect={leftContextAdapter1Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={leftContextAdapter2Rect} text={"adapter"} fill={adapterRed.hexValue}/>
        <ModuleRect rect={leftContextPolicyRect} text={"policy"} fill={policyBlue.hexValue}/>

        {/* arrow from deployable to left context adapter 1 */}

        <Arrow
          points={[
            {
              x: deployableRect.leftEdgeCenter.x - buffer,
              y: deployableRect.leftEdgeTopAnchor.y
            },
            {
              x: leftContextAdapter1Rect.topEdgeCenter.x,
              y: deployableRect.leftEdgeTopAnchor.y,
            },
            {
              x: leftContextAdapter1Rect.topEdgeCenter.x,
              y: leftContextAdapter1Rect.topEdgeCenter.y - buffer,
            }
          ]}
          width={arrowWidth}
        />

        {/* arrow from deployable to policy module rect */}

        <Arrow
          points={[
            {
              x: deployableRect.leftEdgeCenter.x - buffer,
              y: deployableRect.leftEdgeCenter.y
            },
            {
              x: leftContextPolicyRect.topEdgeCenter.x,
              y: deployableRect.leftEdgeCenter.y,
            },
            {
              x: leftContextPolicyRect.topEdgeCenter.x,
              y: leftContextPolicyRect.topEdgeCenter.y - buffer,
            }
          ]}
          width={arrowWidth}
        />

        {/* arrow from deployable to left context adapter 2 module rect */}

        <Arrow
          points={[
            {
              x: deployableRect.leftEdgeBottomAnchor.x - buffer,
              y: deployableRect.leftEdgeBottomAnchor.y
            },
            {
              x: leftContextAdapter2Rect.topEdgeCenter.x,
              y: deployableRect.leftEdgeBottomAnchor.y,
            },
            {
              x: leftContextAdapter2Rect.topEdgeCenter.x,
              y: leftContextAdapter2Rect.topEdgeCenter.y - buffer
            }
          ]}
          width={arrowWidth}
        />

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
        <ModuleRect rect={rightContextPolicyRect} text={"policy"} fill={policyBlue.hexValue}/>

        {/* arrow from deployable to right context adapter 1 */}

        <Arrow
          points={[
            {
              x: deployableRect.rightEdgeCenter.x + buffer,
              y: deployableRect.rightEdgeTopAnchor.y
            },
            {
              x: rightContextAdapter1Rect.topEdgeCenter.x,
              y: deployableRect.rightEdgeTopAnchor.y,
            },
            {
              x: rightContextAdapter1Rect.topEdgeCenter.x,
              y: rightContextAdapter1Rect.topEdgeCenter.y - buffer,
            }
          ]}
          width={arrowWidth}
        />

        {/* arrow from deployable to right policy module rect */}

        <Arrow
          points={[
            {
              x: deployableRect.rightEdgeCenter.x + buffer,
              y: deployableRect.rightEdgeCenter.y
            },
            {
              x: rightContextPolicyRect.topEdgeCenter.x,
              y: deployableRect.leftEdgeCenter.y,
            },
            {
              x: rightContextPolicyRect.topEdgeCenter.x,
              y: rightContextPolicyRect.topEdgeCenter.y - buffer,
            }
          ]}
          width={arrowWidth}
        />

        {/* arrow from deployable to right context adapter 2 module rect */}

        <Arrow
          points={[
            {
              x: deployableRect.rightEdgeBottomAnchor.x + buffer,
              y: deployableRect.rightEdgeBottomAnchor.y
            },
            {
              x: rightContextAdapter2Rect.topEdgeCenter.x,
              y: deployableRect.leftEdgeBottomAnchor.y,
            },
            {
              x: rightContextAdapter2Rect.topEdgeCenter.x,
              y: rightContextAdapter2Rect.topEdgeCenter.y - buffer
            }
          ]}
          width={arrowWidth}
        />

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
              x: rightContextPolicyRect.rightEdgeCenter.x + buffer,
              y: rightContextPolicyRect.rightEdgeCenter.y,
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
              x: rightContextPolicyRect.leftEdgeCenter.x - buffer,
              y: rightContextPolicyRect.leftEdgeCenter.y
            }
          ]}
          width={arrowWidth}
        />
      </svg>
    </div>
  )
}
