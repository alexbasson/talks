import {ArrowProps, arrowPurple, Point} from "@/app/lib/definitions";
import {arrowPoints} from "@/app/lib/diagrams/arrowPoints";

export default function Arrow({points = [], from = {x: 0, y: 0}, to = {x: 0, y: 0}, width, color = arrowPurple.hexValue, opacity = 1, dashArray = 0}: ArrowProps) {
  let line: { from: Point, to: Point }
  let arrowhead: Point[]

  if (points.length >= 2) {
    const aPoints = arrowPoints({from: points[points.length - 2], to: points[points.length - 1], width: width})
    line = aPoints.line
    arrowhead = aPoints.arrowhead
    points[points.length - 1] = line.to
  } else {
    const aPoints = arrowPoints({from: from, to: to, width: width})
    line = aPoints.line
    arrowhead = aPoints.arrowhead
    points[0] = line.from
    points[1] = line.to
  }

  const linePoints = points
    .map(point => `${point.x},${point.y}`)
    .join(' ')

  const arrowheadPoints = `
  ${arrowhead[0].x} ${arrowhead[0].y}
  ${arrowhead[1].x} ${arrowhead[1].y}
  ${arrowhead[2].x} ${arrowhead[2].y}
  `;

  return (
    <g>
      <polyline
        points={linePoints}
        fill='none'
        strokeWidth={width}
        stroke={color}
        strokeOpacity={opacity}
        strokeDasharray={dashArray}
      />
      <polygon points={arrowheadPoints} fill={color} fillOpacity={opacity} />
    </g>
  )
}
