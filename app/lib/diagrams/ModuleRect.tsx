import {Rect} from "@/app/lib/definitions";

export default function ModuleRect({rect, text, fill, stroke = "none"}: {rect: Rect, text: string, fill: string, stroke?: string}) {
  return (
    <g transform={`translate(${rect.x}, ${rect.y})`}>
      <rect
        x="0"
        y="0"
        width={rect.width}
        height={rect.height}
        fill={fill}
        stroke={stroke}
      />
      <text
        x={rect.width / 2}
        y={rect.height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="black"
      >
        {text}
      </text>
    </g>
  )
}
