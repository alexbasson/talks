import {DeployableModuleProps} from "@/app/lib/definitions";

export default function DeployableModule({geometry, stroke, width, height}: DeployableModuleProps) {
  const {center} = geometry;

  return (
    <g>
      <ellipse cx={center.x} cy={center.y} rx={width} ry={height} fill="none" stroke={stroke} strokeWidth={12} />
    </g>
  )
}
