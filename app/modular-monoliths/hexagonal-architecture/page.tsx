'use client'

import { useSearchParams } from "next/navigation";
import systemGeometry from "@/app/lib/diagrams/systemGeometry";
import DeployableModule from "@/app/lib/diagrams/DeployableModule";
import SecondaryAdapter from "@/app/lib/diagrams/SecondaryAdapter";
import PrimaryAdapter from "@/app/lib/diagrams/PrimaryAdapter";
import DomainModule from "@/app/lib/diagrams/DomainModule";
import {adapterRed, deployableGreen, domainBlue, layoutPadding} from "@/app/lib/definitions";

type Slug = "domain" | "ports" | "primary-ports" | "secondary-ports" | "adapters" | "whole-picture";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const domainFill = () => {
    switch (slug) {
      case "domain": return "yellow";
      case "ports": return "gray";
      case "primary-ports": return "gray";
      case "secondary-ports": return "gray";
      case "adapters": return "gray";
      default: return domainBlue.hexValue;
    }
  }

  const adapterFill = () => {
    switch (slug) {
      case "domain": return "gray";
      case "ports": return "gray";
      case "primary-ports": return "gray";
      case "secondary-ports": return "gray";
      case "adapters": return "yellow";
      default: return adapterRed.hexValue;
    }
  }

  const deployableFill = () => {
    switch (slug) {
      case "domain": return "gray";
      case "ports": return "gray";
      case "primary-ports": return "gray";
      case "secondary-ports": return "gray";
      case "adapters": return "gray";
      default: return deployableGreen.hexValue;
    }
  }

  const displayPrimaryPorts = () => {
    switch (slug) {
      case "ports": return true;
      case "primary-ports": return true;
      default: return false;
    }
  }

  const displaySecondaryPorts = () => {
    switch (slug) {
      case "ports": return true;
      case "secondary-ports": return true;
      default: return false;
    }
  }

  const height = window.innerHeight - 2*layoutPadding;
  const width = window.innerWidth - 2*layoutPadding;

  const scale = height / 4;
  const geometry = systemGeometry(scale, width/2, height/2);

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <DomainModule geometry={geometry} fill={domainFill()} text="domain model" displayPrimaryPorts={displayPrimaryPorts()} displaySecondaryPorts={displaySecondaryPorts()}/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterFill()} text={'API'}/>
        <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={adapterFill()} text={'subscriber'}/>
        <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={adapterFill()} text={'database'}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterFill()} text={'svc client'}/>
        <DeployableModule geometry={geometry} stroke={deployableFill()} width={2 * scale} height={1.5 * scale}/>
        <text className={"text-base"} x={width/5} y={height/5} stroke={deployableFill()} fill={deployableFill()}>application</text>
      </svg>

    </div>
  )
}
