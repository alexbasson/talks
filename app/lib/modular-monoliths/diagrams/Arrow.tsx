import {Point} from "@/app/lib/definitions";
import {arrowPoints} from "@/app/lib/modular-monoliths/diagrams/arrowPoints";
import {stringifyForSvg} from "@/app/lib/modular-monoliths/diagrams/stringifyForSvg";
import {arrowPurple} from "@/app/lib/colors";

type ArrowProps = {
  points: Point[],
  width: number,
  color?: string,
  opacity?: number,
  dashArray?: number,
}

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
