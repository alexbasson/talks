'use client'

import DomainModule from "@/app/lib/diagrams/DomainModule";
import {adapterRed, layoutPadding, policyBlue} from "@/app/lib/definitions";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";

export default function Page() {
  const height = window.innerHeight - 2*layoutPadding;
  const width = window.innerWidth - 2*layoutPadding;

  const scale = 0.6 * height;
  const geometry = systemGeometry(scale, width/2, 0.5 * height);

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <DomainModule geometry={geometry} fill={policyBlue.hexValue} text="ONLINE CHESS"/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterRed.hexValue} text={''}/>
        <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={adapterRed.hexValue} text={''}/>
        <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={adapterRed.hexValue} text={''}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterRed.hexValue} text={''}/>
      </svg>
    </div>
  )
}
