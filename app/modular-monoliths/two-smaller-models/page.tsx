'use client'

import {adapterRed, deployableGreen, layoutPadding, policyBlue} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";

export default function Page() {
  const height = window.innerHeight - 2*layoutPadding;
  const width = window.innerWidth - 2*layoutPadding;

  const scale = height / 4;
  const organizingGamesGeometry = systemGeometry(scale, 0.3 * width, 0.5 * height);
  const gamePlayGeometry = systemGeometry(scale, 0.7 * width, 0.5 * height);
  const deployableGeometry = systemGeometry(scale, width/2, 0.5 * height);

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <DomainModule geometry={organizingGamesGeometry} fill={policyBlue.hexValue} text="organizing games" />
        <PrimaryAdapter geometry={organizingGamesGeometry} portName={'nwPort'} />
        <PrimaryAdapter geometry={organizingGamesGeometry} portName={'swPort'} />
        <SecondaryAdapter geometry={organizingGamesGeometry} portName={'nePort'} />
        <SecondaryAdapter geometry={organizingGamesGeometry} portName={'sePort'} />

        <DomainModule geometry={gamePlayGeometry} fill={policyBlue.hexValue} text="gameplay" />
        <PrimaryAdapter geometry={gamePlayGeometry} portName={'nwPort'} />
        <PrimaryAdapter geometry={gamePlayGeometry} portName={'swPort'} />
        <SecondaryAdapter geometry={gamePlayGeometry} portName={'nePort'} />
        <SecondaryAdapter geometry={gamePlayGeometry} portName={'sePort'} />

        <DeployableModule geometry={deployableGeometry} stroke={deployableGreen.hexValue} width={0.47 * width} height={1.7 * scale}/>
      </svg>
    </div>
  )
}
