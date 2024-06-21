export type Slide = {
  route: string;
  next: string;
}

export type Point = {
  x: number;
  y: number;
}

export type Translation = {
  x: number;
  y: number;
}

export type Port = {
  center: Point;
  adapterOffset: Translation;
  rotate: number;
}

export type Geometry = {
  scale: number;
  center: Point;
  nwPort: Port;
  swPort: Port;
  nePort: Port;
  sePort: Port;
}

export type PortProps = {
  sideLength: number;
  fill: string;
  port?: { center: Point, rotate: number };
  translate?: Translation;
  displayOutline?: boolean;
}

export type DomainModuleProps = {
  geometry: Geometry;
  fill: string;
  text: string;
  rotate?: number;
  displayPrimaryPorts?: boolean;
  displaySecondaryPorts?: boolean;
}

export type AdapterProps = {
  geometry: Geometry;
  portName: "nwPort" | "swPort" | "nePort" | "sePort";
  fill: string;
  text: string;
}

export type DeployableModuleProps = {
  geometry: Geometry;
  stroke: string;
  width: number;
  height: number;
}
