'use client'

import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import {adapterRed, deployableGreen, policyBlue} from "@/app/lib/definitions";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const geometry = systemGeometry(0.25 * height, 0.5 * width, 0.5 * height);

  return (
    <div  className='padding-horizontal w-full h-full flex justify-start'>
      <div>
        <p>3 kinds of modules</p>
        <ul className='mt-96 pl-16 list-disc'>
          <li><span className={policyBlue.className}>policy modules</span></li>
          <li><span className={adapterRed.className}>adapter modules</span></li>
          <li><span className={deployableGreen.className}>deployable modules</span></li>
        </ul>
      </div>

      <div className='svg-container' ref={targetRef}>
        <svg className='svg'>
          <DomainModule geometry={geometry} fill={policyBlue.hexValue} text="policy"/>

          <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterRed.hexValue} text={"adapter"}/>
          <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={adapterRed.hexValue} text={"adapter"}/>
          <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={adapterRed.hexValue} text={"adapter"}/>
          <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterRed.hexValue} text={"adapter"}/>
          <DeployableModule geometry={geometry} stroke={deployableGreen.hexValue} width={0.5 * height}
                            height={0.4 * height}/>
          <text className={"text-base"}
                x={width}
                y={200}
                textAnchor='end'
                stroke={deployableGreen.hexValue}
                fill={deployableGreen.hexValue}>
            application
          </text>
        </svg>
      </div>
    </div>
  )
}
