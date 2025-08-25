import {Point} from "@/app/lib/definitions";

export const stringifyForSvg = (points: Point[]) => points.map(point => `${point.x}, ${point.y}`).join(' ')
