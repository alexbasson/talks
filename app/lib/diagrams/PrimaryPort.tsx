import AbstractPort, {PortProps} from "@/app/lib/diagrams/AbstractPort";

export default function PrimaryPort(props: PortProps) {
  const points = `
  ${props.sideLength / 10}, 0
  ${props.sideLength / 5}, ${props.sideLength / 8}
  -${props.sideLength / 5}, ${props.sideLength / 8}
  -${props.sideLength / 10}, 0
  `;

  return AbstractPort(points, props)
}
