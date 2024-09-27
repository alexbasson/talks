import {ArrowProps, arrowPurple, Point} from "@/app/lib/definitions";
import {arrowPoints} from "@/app/lib/diagrams/arrowPoints";

const stringifyForSvg = (points: Point[]) => points.map(point => `${point.x} ${point.y}`).join(' ')

export default function Arrow({points, width, color = arrowPurple.hexValue, opacity = 1, dashArray = 0}: ArrowProps) {
  const {line, arrowhead} = arrowPoints({
    from: points[points.length - 2],
    to: points[points.length - 1],
    width: width
  })
  const modifiedPoints = JSON.parse(JSON.stringify(points))
  modifiedPoints[points.length - 1] = line.to

  return (
    <g>
      <polyline
        points={stringifyForSvg(modifiedPoints)}
        fill='none'
        strokeWidth={width}
        stroke={color}
        strokeOpacity={opacity}
        strokeDasharray={dashArray}
      />
      <polygon
        points={stringifyForSvg(arrowhead)}
        fill={color}
        fillOpacity={opacity}
      />
    </g>
  )
}
