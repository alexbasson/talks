export type Slide = {
  route: string;
  next: string;
}

export type Point = {
  x: number;
  y: number;
}

export class Rect {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public width: number = 0,
    public height: number = 0) {}

  public leftEdgeCenter: Point = {
    x: this.x,
    y: this.y + this.height / 2,
  };

  public rightEdgeCenter: Point = {
    x: this.x + this.width,
    y: this.y + this.height / 2,
  };

  public topEdgeCenter: Point = {
    x: this.x + this.width / 2,
    y: this.y,
  };

  public bottomEdgeCenter: Point = {
    x: this.x + this.width / 2,
    y: this.y + this.height,
  };
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

export type ArrowProps = {
  from: Point,
  to: Point,
  width: number,
}

export const layoutPadding = 16;

export const domainBlue = {
  className: "text-cyan-400",
  hexValue: "#22d3ee",
};
export const adapterRed = {
  className: "text-red-500",
  hexValue: "#ef4444",
};
export const deployableGreen = {
  className: "text-green-700",
  hexValue: "#15803d",
};

