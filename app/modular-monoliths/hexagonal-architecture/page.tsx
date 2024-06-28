'use client'

import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import {adapterRed, deployableGreen, policyBlue, highlightYellow, gray, layoutPadding} from "@/app/lib/definitions";
import useFrame from "@/app/lib/useFrame";

type Frame = {
  domainFill: string,
  adapterFill: string,
  deployableFill: string,
  highlightPrimaryPorts: boolean,
  highlightSecondaryPorts: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      domainFill: policyBlue.hexValue,
      adapterFill: adapterRed.hexValue,
      deployableFill: deployableGreen.hexValue,
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: false,
    },
    {
      domainFill: highlightYellow.hexValue,
      adapterFill: gray.hexValue,
      deployableFill: gray.hexValue,
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: false,
    },
    {
      domainFill: gray.hexValue,
      adapterFill: gray.hexValue,
      deployableFill: gray.hexValue,
      highlightPrimaryPorts: true,
      highlightSecondaryPorts: true,
    },
    {
      domainFill: gray.hexValue,
      adapterFill: gray.hexValue,
      deployableFill: gray.hexValue,
      highlightPrimaryPorts: true,
      highlightSecondaryPorts: false,
    },
    {
      domainFill: gray.hexValue,
      adapterFill: gray.hexValue,
      deployableFill: gray.hexValue,
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: true,
    },
    {
      domainFill: gray.hexValue,
      adapterFill: highlightYellow.hexValue,
      deployableFill: gray.hexValue,
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: false,
    },
    {
      domainFill: policyBlue.hexValue,
      adapterFill: adapterRed.hexValue,
      deployableFill: deployableGreen.hexValue,
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: false,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const height = window.innerHeight - 2*layoutPadding;
  const width = window.innerWidth - 2*layoutPadding;

  const scale = height / 4;
  const geometry = systemGeometry(scale, width/2, 0.4 * height);

  return (
    <div>
      <h1>hexagonal architecture</h1>

      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <DomainModule geometry={geometry} fill={frame.domainFill} text="domain model" displayPrimaryPorts={frame.highlightPrimaryPorts} displaySecondaryPorts={frame.highlightSecondaryPorts}/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={frame.adapterFill} text={'API'}/>
        <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={frame.adapterFill} text={'subscriber'}/>
        <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={frame.adapterFill} text={'database'}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={frame.adapterFill} text={'svc client'}/>
        <DeployableModule geometry={geometry} stroke={frame.deployableFill} width={2 * scale} height={1.5 * scale}/>
        <text className={"text-base"} x={width/5} y={100} stroke={frame.deployableFill} fill={frame.deployableFill}>application</text>
      </svg>

    </div>
  )
}
