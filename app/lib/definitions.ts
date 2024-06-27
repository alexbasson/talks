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

export const policyBlue = {
  className: "text-cyan-400",
  hexValue: "#22d3ee",
};
export const adapterRed = {
  className: "text-orange-600",
  hexValue: "#ea580c",
};
export const deployableGreen = {
  className: "text-lime-400",
  hexValue: "#a3e635",
};
export const highlightYellow = {
  className: "text-yellow-300",
  hexValue: "#fde047",
};
export const gray = {
  className: "text-zinc-400",
  hexValue: "#a1a1aa"
};
