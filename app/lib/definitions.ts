export type Point = {
  x: number;
  y: number;
}

export type Dimensions = {
  width: number;
  height: number;
}

export class Rect {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public width: number = 0,
    public height: number = 0) {}

  public leftEdgeCenter: Point = {
    x: this.x,
    y: this.y + 0.5 * this.height,
  };

  public leftEdgeTopAnchor: Point = {
    x: this.x,
    y: this.y + 0.25 * this.height,
  }

  public leftEdgeBottomAnchor: Point = {
    x: this.x,
    y: this.y + 0.75 * this.height,
  }

  public rightEdgeCenter: Point = {
    x: this.x + this.width,
    y: this.y + 0.5 * this.height,
  };

  public rightEdgeTopAnchor: Point = {
    x: this.x + this.width,
    y: this.y + 0.25 * this.height,
  }

  public rightEdgeBottomAnchor: Point = {
    x: this.x + this.width,
    y: this.y + 0.75 * this.height,
  }

  public topEdgeCenter: Point = {
    x: this.x + this.width / 2,
    y: this.y,
  };

  public bottomEdgeCenter: Point = {
    x: this.x + this.width / 2,
    y: this.y + this.height,
  };
}

export class Vector {
  constructor(private from: Point, private to: Point) {
  }

  public get x(): number {
    return this.to.x - this.from.x;
  }

  public get y(): number {
    return this.to.y - this.from.y;
  }

  public get isVertical(): boolean {
    return this.x === 0
  }

  public get direction(): number {
    const vectorOrientation = this.isVertical ? 0 : (this.x)/Math.abs(this.x)
    return this.isVertical
      ? (Math.PI / 2)
      : (Math.atan((this.y)/(this.x)) + ((1 - vectorOrientation)/2) * Math.PI)
  }
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
  fill?: string;
  text: string;
  rotate?: number;
  displayPrimaryPorts?: boolean;
  displaySecondaryPorts?: boolean;
}

export type AdapterProps = {
  geometry: Geometry;
  portName: "nwPort" | "swPort" | "nePort" | "sePort";
  fill?: string;
  text?: string;
}

export type DeployableModuleProps = {
  geometry: Geometry;
  stroke?: string;
  width: number;
  height: number;
}

export type ArrowProps = {
  from: Point,
  to: Point,
  width: number,
  fill?: string,
  opacity?: number,
  dashArray?: number,
}

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
export const arrowPurple = {
  className: "text-purple-700",
  hexValue: "#7e22ce"
};
