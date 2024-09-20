import {Dimensions} from "@/app/lib/definitions";
import {RefObject, useLayoutEffect, useState} from "react";

export default function useDimensions(ref: RefObject<HTMLDivElement>): Dimensions {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight)
      setWidth(ref.current.offsetWidth)
    }
  }, [ref]);

  return {width, height};
}
