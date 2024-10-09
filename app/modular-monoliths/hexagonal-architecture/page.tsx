'use client'

import systemGeometry from "@/app/lib/modular-monoliths/diagrams/systemGeometry";
import DeployableModule from "@/app/lib/modular-monoliths/diagrams/DeployableModule";
import SecondaryAdapter from "@/app/lib/modular-monoliths/diagrams/SecondaryAdapter";
import PrimaryAdapter from "@/app/lib/modular-monoliths/diagrams/PrimaryAdapter";
import DomainModule from "@/app/lib/modular-monoliths/diagrams/DomainModule";
import useFrame from "@/app/lib/useFrame";
import {useRef} from "react";
import useDimensions from "@/app/lib/useDimensions";
import {adapterRed, deployableGreen, gray, highlightYellow, policyBlue} from "@/app/lib/colors";

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

  const targetRef = useRef<HTMLDivElement>(null);
  const {width, height} = useDimensions(targetRef);

  const geometry = systemGeometry(0.25 * height, 0.5 * width, 0.5 * height);

  return (
    <div className='padding-horizontal svg-container'>
      <h1>hexagonal architecture</h1>
      <p className='text-sm text-blue-400'>https://alistair.cockburn.us/hexagonal-architecture/</p>

      <div className='svg-container' ref={targetRef}>
        <svg className='svg'>
          <DomainModule geometry={geometry} fill={frame.domainFill} text="domain model"
                        displayPrimaryPorts={frame.highlightPrimaryPorts}
                        displaySecondaryPorts={frame.highlightSecondaryPorts}/>

          <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={frame.adapterFill} text={'API'}/>
          <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={frame.adapterFill} text={'subscriber'}/>
          <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={frame.adapterFill} text={'database'}/>
          <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={frame.adapterFill} text={'svc client'}/>
          <DeployableModule geometry={geometry} stroke={frame.deployableFill} width={0.5 * height} height={0.4 * height}/>
          <text className={"text-base"} x={0.2 * width} y={100} stroke={frame.deployableFill}
                fill={frame.deployableFill}>application
          </text>
        </svg>
      </div>
    </div>
  )
}
