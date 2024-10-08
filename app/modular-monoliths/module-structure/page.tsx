'use client'

import {Rect} from "@/app/lib/definitions";
import Arrow from "@/app/lib/modular-monoliths/diagrams/Arrow";
import ModuleRect from "@/app/lib/modular-monoliths/diagrams/ModuleRect";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";
import {adapterRed, arrowPurple, deployableGreen, policyBlue} from "@/app/lib/colors";

export default function Page() {
  const legendRef = useRef<HTMLDivElement>(null);
  const {width} = useDimensions(legendRef);

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
    <div className='padding-horizontal w-full flex justify-start'>
      <div className='flex flex-col justify-end w-1/4'>
        <div className='mb-12'>
          <h1>module structure</h1>
        </div>

        <div className='svg-container' ref={legendRef}>
          <svg className='svg'>
            <Arrow points={[{x: 0, y: 30}, {x: width, y: 30}]} width={15} />
            <text className={"text-base"} y={100} fill={arrowPurple.hexValue}>&ldquo;depends on&rdquo;</text>
            <text className={"text-base"} y={170} fill={arrowPurple.hexValue}>&ldquo;imports from&rdquo;</text>
          </svg>
        </div>
      </div>

      <div className='mt-12 svg-container'>
        <svg className='svg'>
          <ModuleRect rect={deployableRect} text={"deployable"} fill={deployableGreen.hexValue} />
          <ModuleRect rect={leftAdapterRect} text={"adapter"} fill={adapterRed.hexValue} />
          <ModuleRect rect={rightAdapterRect} text={"adapter"} fill={adapterRed.hexValue} />
          <ModuleRect rect={policyRect} text={"policy"} fill={policyBlue.hexValue} />

          <Arrow
            points={[
              {
                x: deployableRect.leftEdgeCenter.x - buffer,
                y: deployableRect.leftEdgeCenter.y
              },
              {
                x: leftAdapterRect.topEdgeCenter.x,
                y: leftAdapterRect.topEdgeCenter.y - buffer
              }
            ]}
            width={arrowWidth}
          />

          <Arrow
            points={[
              {
                x: leftAdapterRect.bottomEdgeCenter.x - buffer,
                y: leftAdapterRect.bottomEdgeCenter.y + buffer
              },
              {
                x: policyRect.leftEdgeCenter.x - 10,
                y: policyRect.leftEdgeCenter.y
              },
            ]}
            width={arrowWidth}
          />

          <Arrow
            points={[
              {
                x: deployableRect.rightEdgeCenter.x + buffer,
                y: deployableRect.rightEdgeCenter.y
              },
              {
                x: rightAdapterRect.topEdgeCenter.x,
                y: rightAdapterRect.topEdgeCenter.y - buffer
              }
            ]}
            width={arrowWidth}
          />

          <Arrow
            points={[
              {
                x: rightAdapterRect.bottomEdgeCenter.x,
                y: rightAdapterRect.bottomEdgeCenter.y + buffer
              },
              {
                x: policyRect.rightEdgeCenter.x + buffer,
                y: policyRect.rightEdgeCenter.y
              }
            ]}
            width={arrowWidth}
          />

          <Arrow
            points={[
              {
                x: deployableRect.bottomEdgeCenter.x,
                y: deployableRect.bottomEdgeCenter.y + buffer
              },
              {
                x: policyRect.topEdgeCenter.x,
                y: policyRect.topEdgeCenter.y - buffer
              }
            ]}
            width={arrowWidth}
          />
        </svg>
      </div>
    </div>
  )
}
