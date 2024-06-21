'use client'

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import DomainModule from "@/app/lib/diagrams/DomainModule";

type Slug = "domain" | "ports" | "primary-ports" | "secondary-ports" | "adapters" | "whole-picture";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const { innerWidth: width, innerHeight: height } = window;

  const scale = height / 7;
  const geometry = systemGeometry(scale, 600, 300);

  const [domainColor, setDomainColor] = useState("dodgerBlue");
  const [adapterColor, setAdapterColor] = useState("red");
  const [deployableColor, setDeployableColor] = useState("green");
  const [focused, setFocused] = useState(false);

  const [displayPorts, setDisplayPorts] = useState(false);

  return (
    <div>
      <h1>hexagonal architecture</h1>

      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <DomainModule geometry={geometry} fill={domainColor} text="domain model" displayPorts={displayPorts}/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterColor} text={'API'}/>
        <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={adapterColor} text={'subscriber'}/>
        <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={adapterColor} text={'database'}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterColor} text={'svc client'}/>
        <DeployableModule geometry={geometry} stroke={deployableColor} width={2 * scale} height={1.5 * scale}/>
        <text x={500} y={100} stroke={deployableColor}>application</text>
      </svg>

    </div>
  )
}
