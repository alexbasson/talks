'use client'

import DomainModule from "@/app/lib/modular-monoliths/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/modular-monoliths/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/modular-monoliths/diagrams/SecondaryAdapter";
import systemGeometry from "@/app/lib/modular-monoliths/diagrams/systemGeometry";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";
import {adapterRed, policyBlue} from "@/app/lib/colors";

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const geometry = systemGeometry(0.6 * height, 0.5 * width, 0.5 * height);

  return (
    <div className='svg-container' ref={targetRef}>
      <svg className='svg'>
        <DomainModule geometry={geometry} text="domain model FOR DAAAAAAAAAAAAYS" />

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterRed.hexValue} text={'so much API'}/>
        <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={adapterRed.hexValue} text={'all the subscribers'}/>
        <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={adapterRed.hexValue} text={'MOAR DB'}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterRed.hexValue} text={'such client'}/>
      </svg>
    </div>
  )
}
