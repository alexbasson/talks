import SecondaryPort from "./SecondaryPort";
import {adapterRed} from "@/app/lib/colors";
import AbstractAdapter, {AdapterProps} from "@/app/lib/modular-monoliths/diagrams/AbstractAdapter";

export default function SecondaryAdapter(props: AdapterProps) {
  return (
    <AbstractAdapter geometry={props.geometry} portName={props.portName} fill={props.fill} text={props.text}>
      <SecondaryPort
          sideLength={0.8 * props.geometry.scale}
          fill={props.fill || adapterRed.hexValue}
          translate={{x: 0, y: 0}}
      />
    </AbstractAdapter>
  )
}
