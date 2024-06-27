'use client'

import DomainModule from "@/app/lib/diagrams/DomainModule";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import {adapterRed, layoutPadding, policyBlue} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";

export default function Page() {
  const height = window.innerHeight - 2*layoutPadding;
  const width = window.innerWidth - 2*layoutPadding;

  const scale = 0.6 * height;
  const geometry = systemGeometry(scale, width/2, 0.5 * height);

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <DomainModule geometry={geometry} fill={policyBlue.hexValue} text="domain model FOR DAAAAAAAAAAAAYS" />

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterRed.hexValue} text={'so much API'}/>
        <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={adapterRed.hexValue} text={'all the subscribers'}/>
        <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={adapterRed.hexValue} text={'MOAR DB'}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterRed.hexValue} text={'such client'}/>
      </svg>
    </div>
  )
}
