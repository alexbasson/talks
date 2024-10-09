import {Point, Translation} from "@/app/lib/definitions";

export type PortProps = {
  sideLength: number;
  fill: string;
  port?: { center: Point, rotate: number };
  translate?: Translation;
  displayOutline?: boolean;
}

export default function AbstractPort(points: string, {fill, port = {center: {x: 0, y: 0}, rotate: 0}, translate = {x: 0, y: 0}, displayOutline = false}: PortProps) {
  const transform = `
  translate(${port.center.x + translate.x}, ${port.center.y + translate.y}),
  rotate(${port.rotate}, 0, 0)
  `;

  return (
    <g transform={transform}>
      <polygon points={points} fill={fill} />

      {
        displayOutline ?
          <polyline points={points} fill="none" stroke="yellow" strokeWidth={8} />
          : null
      }
    </g>
  )
}
