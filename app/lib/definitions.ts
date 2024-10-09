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

  public get direction(): number {
    const isVertical = this.x === 0
    return isVertical
      ? (Math.PI / 2)
      : (Math.atan((this.y)/(this.x)) + (this.x >= 0 ? 0 : Math.PI))
  }

  private get x(): number {
    return this.to.x - this.from.x;
  }

  private get y(): number {
    return this.to.y - this.from.y;
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

export type AdapterProps = {
  geometry: Geometry;
  portName: "nwPort" | "swPort" | "nePort" | "sePort";
  fill?: string;
  text?: string;
}
