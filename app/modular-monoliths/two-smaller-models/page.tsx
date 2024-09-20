'use client'

import {deployableGreen, policyBlue} from "@/app/lib/definitions";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const organizingGamesGeometry = systemGeometry(0.14 * width, 0.25 * width, 0.5 * height);
  const gamePlayGeometry = systemGeometry(0.14 * width, 0.75 * width, 0.5 * height);
  const deployableGeometry = systemGeometry(0.14 * width, 0.5 * width, 0.5 * height);

  return (
    <div className='svg-container' ref={targetRef}>
      <svg className='svg'>
        <DomainModule geometry={organizingGamesGeometry} text="organizing games" />
        <PrimaryAdapter geometry={organizingGamesGeometry} portName={'nwPort'} />
        <PrimaryAdapter geometry={organizingGamesGeometry} portName={'swPort'} />
        <SecondaryAdapter geometry={organizingGamesGeometry} portName={'nePort'} />
        <SecondaryAdapter geometry={organizingGamesGeometry} portName={'sePort'} />

        <DomainModule geometry={gamePlayGeometry} text="gameplay" />
        <PrimaryAdapter geometry={gamePlayGeometry} portName={'nwPort'} />
        <PrimaryAdapter geometry={gamePlayGeometry} portName={'swPort'} />
        <SecondaryAdapter geometry={gamePlayGeometry} portName={'nePort'} />
        <SecondaryAdapter geometry={gamePlayGeometry} portName={'sePort'} />

        <DeployableModule geometry={deployableGeometry} width={0.5 * width} height={0.5 * height} />
      </svg>
    </div>
  )
}
