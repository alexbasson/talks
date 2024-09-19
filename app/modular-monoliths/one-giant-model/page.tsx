'use client'

import DomainModule from "@/app/lib/diagrams/DomainModule";
import {policyBlue} from "@/app/lib/definitions";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";

export default function Page() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  const scale = 0.6 * height;
  const geometry = systemGeometry(scale, width/2, 0.5 * height);

  return (
    <div className='svg-container'>
      <svg className='svg'>
        <DomainModule geometry={geometry} fill={policyBlue.hexValue} text="ONLINE CHESS"/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} />
        <PrimaryAdapter geometry={geometry} portName={'swPort'} />
        <SecondaryAdapter geometry={geometry} portName={'nePort'} />
        <SecondaryAdapter geometry={geometry} portName={'sePort'} />
      </svg>
    </div>
  )
}
