'use client'

import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import {adapterRed, deployableGreen, policyBlue} from "@/app/lib/definitions";

export default function Page() {
  const height = window.innerHeight;

  const scale = height / 4;
  const geometry = systemGeometry(scale, 600, 0.5 * height);

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

      <div className='svg-container'>
        <svg className='svg'>
          <DomainModule geometry={geometry} fill={policyBlue.hexValue} text="policy"/>

          <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterRed.hexValue} text={"adapter"}/>
          <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={adapterRed.hexValue} text={"adapter"}/>
          <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={adapterRed.hexValue} text={"adapter"}/>
          <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterRed.hexValue} text={"adapter"}/>
          <DeployableModule geometry={geometry} stroke={deployableGreen.hexValue} width={2 * scale}
                            height={1.5 * scale}/>
          <text className={"text-base"} x={1000} y={200} stroke={deployableGreen.hexValue}
                fill={deployableGreen.hexValue}>application
          </text>
        </svg>
      </div>
    </div>
  )
}
