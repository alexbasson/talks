import {PortProps} from "@/app/lib/definitions";

export default function PrimaryPort({sideLength, fill, port = {center: {x: 0, y: 0}, rotate: 0}, translate = {x: 0, y: 0}, displayOutline = false}: PortProps) {
  const points = `
  ${sideLength / 10}, 0
  ${sideLength / 5}, ${sideLength / 8}
  -${sideLength / 5}, ${sideLength / 8}
  -${sideLength / 10}, 0
  `;

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
