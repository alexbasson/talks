import PrimaryPort from "./PrimaryPort";
import {AdapterProps} from "@/app/lib/definitions";
import {adapterRed} from "@/app/lib/colors";

export default function PrimaryAdapter({geometry, portName, fill = adapterRed.hexValue, text = ""}: AdapterProps) {
  const {center, scale} = geometry;
  const port = geometry[portName];

  const transform = `
  translate(${port.center.x + port.adapterOffset.x + center.x}, ${port.center.y + port.adapterOffset.y + center.y}),
  rotate(${port.rotate}, 0, 0)
  `

  return (
    <g transform={transform}>
      <rect x={-0.5 * scale} y={-0.4 * scale} width={scale} height={0.4 * scale} fill={fill}/>
      <rect x={-1 * scale / 12} y={0} width={scale / 6} height={3} fill={fill}/>
      <PrimaryPort sideLength={0.8 * scale} fill={fill} translate={{x: 0, y: 3}} />
      <text className={"text-base"} y={-0.2 * scale} textAnchor="middle" dominantBaseline="middle">{text}</text>
    </g>
  )
}
