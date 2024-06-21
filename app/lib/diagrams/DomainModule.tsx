import PrimaryPort from "./PrimaryPort";
import SecondaryPort from "./SecondaryPort";
import {DomainModuleProps} from "@/app/lib/definitions";

export default function DomainModule({geometry, fill, text, rotate = 0, displayPorts = false}: DomainModuleProps) {
  const {scale, center, nwPort, swPort, nePort, sePort} = geometry;

  const sideRoot3 = scale * Math.sqrt(3);

  const points = `
  -${scale / 2}, -${sideRoot3 / 2}
  ${scale / 2}, -${sideRoot3 / 2}
  ${scale}, 0
  ${scale / 2}, ${sideRoot3 / 2}
  -${scale / 2}, ${sideRoot3 / 2}
  -${scale}, 0
  `;

  const transform = `
  translate(${center.x}, ${center.y}),
  rotate(${rotate}, 0, 0)
  `;

  return (
    <>
      <defs>
        <mask id="foo">
          <polygon points={points} fill="white" />
          <PrimaryPort sideLength={scale} fill="black" port={nwPort}/>
          <PrimaryPort sideLength={scale} fill="black" port={swPort}/>
          <SecondaryPort sideLength={scale} fill="black" port={nePort}/>
          <SecondaryPort sideLength={scale} fill="black" port={sePort}/>
        </mask>
      </defs>
      <g transform={transform}>
        <polygon points={points} fill={fill} mask="url(#foo)" />
        <text x={0} y={0} textAnchor="middle" dominantBaseline="middle">{text}</text>
        <PrimaryPort sideLength={scale} fill="none" port={nwPort} displayOutline={displayPorts}/>
        <PrimaryPort sideLength={scale} fill="none" port={swPort} displayOutline={displayPorts}/>
        <SecondaryPort sideLength={scale} fill="none" port={nePort} displayOutline={displayPorts}/>
        <SecondaryPort sideLength={scale} fill="none" port={sePort} displayOutline={displayPorts}/>
      </g>
    </>
  )
}
