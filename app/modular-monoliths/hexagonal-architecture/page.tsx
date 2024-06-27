'use client'

import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import {adapterRed, deployableGreen, domainBlue, layoutPadding} from "@/app/lib/definitions";
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
      domainFill: domainBlue.hexValue,
      adapterFill: adapterRed.hexValue,
      deployableFill: deployableGreen.hexValue,
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: false,
    },
    {
      domainFill: "yellow",
      adapterFill: "gray",
      deployableFill: "gray",
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: false,
    },
    {
      domainFill: "gray",
      adapterFill: "gray",
      deployableFill: "gray",
      highlightPrimaryPorts: true,
      highlightSecondaryPorts: true,
    },
    {
      domainFill: "gray",
      adapterFill: "gray",
      deployableFill: "gray",
      highlightPrimaryPorts: true,
      highlightSecondaryPorts: false,
    },
    {
      domainFill: "gray",
      adapterFill: "gray",
      deployableFill: "gray",
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: true,
    },
    {
      domainFill: "gray",
      adapterFill: "yellow",
      deployableFill: "gray",
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: false,
    },
    {
      domainFill: domainBlue.hexValue,
      adapterFill: adapterRed.hexValue,
      deployableFill: deployableGreen.hexValue,
      highlightPrimaryPorts: false,
      highlightSecondaryPorts: false,
    },
  ];

  const frame = frames[useFrame()];

  const height = window.innerHeight - 2*layoutPadding;
  const width = window.innerWidth - 2*layoutPadding;

  const scale = height / 4;
  const geometry = systemGeometry(scale, width/2, height/2);

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <DomainModule geometry={geometry} fill={frame.domainFill} text="domain model" displayPrimaryPorts={frame.highlightPrimaryPorts} displaySecondaryPorts={frame.highlightSecondaryPorts}/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={frame.adapterFill} text={'API'}/>
        <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={frame.adapterFill} text={'subscriber'}/>
        <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={frame.adapterFill} text={'database'}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={frame.adapterFill} text={'svc client'}/>
        <DeployableModule geometry={geometry} stroke={frame.deployableFill} width={2 * scale} height={1.5 * scale}/>
        <text className={"text-base"} x={width/5} y={height/5} stroke={frame.deployableFill} fill={frame.deployableFill}>application</text>
      </svg>

    </div>
  )
}
