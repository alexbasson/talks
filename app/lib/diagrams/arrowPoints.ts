import {Point, Vector} from "@/app/lib/definitions";

type ArrowPoints = {
  line: {from: Point, to: Point},
  arrowhead: Point[]
}

export const arrowPoints = ({from, to, width}: { from: Point, to: Point, width: number }): ArrowPoints => {
  const vector = new Vector(from, to)

  const headLength = 40
  const headSideLength = Math.sqrt((width * width) + (headLength * headLength))
  const headPoint1Angle = vector.direction + Math.atan(width/headLength) + Math.PI
  const headPoint2Angle = vector.direction - Math.atan(width/headLength) + Math.PI

  const headPoint1: Point = {
    x: to.x + headSideLength * Math.cos(headPoint1Angle),
    y: to.y + headSideLength * Math.sin(headPoint1Angle)
  }
  const headPoint2: Point = {
    x: to.x + headSideLength * Math.cos(headPoint2Angle),
    y: to.y + headSideLength * Math.sin(headPoint2Angle)
  }

  return {
    line: {
      from: from,
      to: {
        x: to.x - headLength * Math.cos(vector.direction),
        y: to.y - headLength * Math.sin(vector.direction)
      }
    },
    arrowhead: [to, headPoint1, headPoint2],
  }
}
