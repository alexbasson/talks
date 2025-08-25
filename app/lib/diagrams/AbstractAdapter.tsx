import {PropsWithChildren} from "react";
import {adapterRed} from "@/app/lib/colors";
import {Geometry} from "@/app/lib/definitions";

export type AdapterProps = {
  geometry: Geometry;
  portName: "nwPort" | "swPort" | "nePort" | "sePort";
  fill?: string;
  text?: string;
}

export default function AbstractAdapter(props: PropsWithChildren<AdapterProps>) {
  const {children, geometry, portName, fill = adapterRed.hexValue, text = ""} = props
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
      {children}
      <text className={"text-base"} y={-0.2 * scale} textAnchor="middle" dominantBaseline="middle">{text}</text>
    </g>
  )

}
