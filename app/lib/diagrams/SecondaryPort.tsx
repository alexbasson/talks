import AbstractPort, {PortProps} from "@/app/lib/diagrams/AbstractPort";

export default function SecondaryPort(props: PortProps) {
  const points = `
  ${props.sideLength / 6}, 0
  ${props.sideLength / 4}, ${props.sideLength / 12}
  0, ${props.sideLength / 6}
  -${props.sideLength / 4}, ${props.sideLength / 12}
  -${props.sideLength / 6}, 0
  `;

  return AbstractPort(points, props)
}
