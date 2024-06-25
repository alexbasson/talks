import {ArrowProps} from "@/app/lib/definitions";

export default function Arrow({from, to, width}: ArrowProps) {

  const square = (n: number) => n * n;

  const length = Math.sqrt(square(to.x - from.x) + square(to.y - from.y));
  const angle = Math.atan(-(to.x - from.x)/(to.y - from.y)) * (180 / Math.PI) + 180;

  const arrowPoints = `
    0, 0
    ${width}, 40
    ${width / 2}, 40
    ${width / 2}, ${length}
    -${width / 2}, ${length}
    -${width / 2}, 40
    -${width}, 40
    `;

  return (
    <g transform={`rotate(${angle}, ${to.x}, ${to.y}), translate(${to.x}, ${to.y})`}>
      <polygon id="arrow" points={arrowPoints} fill={"purple"}/>
    </g>
  )
}
