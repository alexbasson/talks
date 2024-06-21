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

  const domainFill = () => {
    switch (slug) {
      case "domain": return "yellow";
      case "ports": return "gray";
      case "primary-ports": return "gray";
      case "secondary-ports": return "gray";
      case "adapters": return "gray";
      default: return "dodgerBlue";
    }
  }

  const adapterFill = () => {
    switch (slug) {
      case "domain": return "gray";
      case "ports": return "gray";
      case "primary-ports": return "gray";
      case "secondary-ports": return "gray";
      case "adapters": return "yellow";
      default: return "red";
    }
  }

  const deployableFill = () => {
    switch (slug) {
      case "domain": return "gray";
      case "ports": return "gray";
      case "primary-ports": return "gray";
      case "secondary-ports": return "gray";
      case "adapters": return "gray";
      default: return "green";
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

  return (
    <div>
      <h1>hexagonal architecture</h1>

      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <DomainModule geometry={geometry} fill={domainFill()} text="domain model" displayPrimaryPorts={displayPrimaryPorts()} displaySecondaryPorts={displaySecondaryPorts()}/>

        <PrimaryAdapter geometry={geometry} portName={'nwPort'} fill={adapterFill()} text={'API'}/>
        <PrimaryAdapter geometry={geometry} portName={'swPort'} fill={adapterFill()} text={'subscriber'}/>
        <SecondaryAdapter geometry={geometry} portName={'nePort'} fill={adapterFill()} text={'database'}/>
        <SecondaryAdapter geometry={geometry} portName={'sePort'} fill={adapterFill()} text={'svc client'}/>
        <DeployableModule geometry={geometry} stroke={deployableFill()} width={2 * scale} height={1.5 * scale}/>
        <text className={"text-3xl"} x={500} y={100} stroke={deployableFill()} fill={deployableFill()}>application</text>
      </svg>

    </div>
  )
}
