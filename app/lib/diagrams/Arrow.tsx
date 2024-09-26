import {ArrowProps, arrowPurple} from "@/app/lib/definitions";
import {arrowPoints} from "@/app/lib/diagrams/arrowPoints";

export default function Arrow({from, to, width, fill = arrowPurple.hexValue, opacity = 1, dashArray = 0}: ArrowProps) {

  const {line, arrowhead} = arrowPoints({from: from, to: to, width: width})

  const arrowheadPoints = `
  ${arrowhead[0].x} ${arrowhead[0].y}
  ${arrowhead[1].x} ${arrowhead[1].y}
  ${arrowhead[2].x} ${arrowhead[2].y}
  `;

  return (
    <g>
      <line
        x1={line.from.x} y1={line.from.y}
        x2={line.to.x} y2={line.to.y}
        strokeWidth={width}
        stroke={fill}
        strokeOpacity={opacity}
        strokeDasharray={dashArray}
      />
      <polygon points={arrowheadPoints} fill={fill} fillOpacity={opacity} />
    </g>
  )
}
