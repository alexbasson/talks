import {deployableGreen, DeployableModuleProps} from "@/app/lib/definitions";

export default function DeployableModule({geometry, stroke = deployableGreen.hexValue, width, height}: DeployableModuleProps) {
  const {center} = geometry;
  const strokeWidth = 12;

  return (
    <g>
      <ellipse cx={center.x} cy={center.y} rx={width - strokeWidth} ry={height - strokeWidth} fill="none" stroke={stroke} strokeWidth={strokeWidth} />
    </g>
  )
}
