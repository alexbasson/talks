import {deployableGreen, DeployableModuleProps} from "@/app/lib/definitions";

export default function DeployableModule({geometry, stroke = deployableGreen.hexValue, width, height}: DeployableModuleProps) {
  const {center} = geometry;
  const strokeWidth = 12;
  const rx = (width >= strokeWidth) ? (width - strokeWidth) : 0
  const ry = (height >= strokeWidth) ? (height - strokeWidth) : 0

  return (
    <g>
      <ellipse cx={center.x} cy={center.y} rx={rx} ry={ry} fill="none" stroke={stroke} strokeWidth={strokeWidth} />
    </g>
  )
}
