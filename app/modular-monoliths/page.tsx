'use client'

import {useRef} from "react";
import {enterFullscreen, exitFullscreen} from "@/app/lib/fullscreen";

export default function Page() {

  const presentationRef = useRef(null);

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen(presentationRef.current);
    }
  }

  return (
    <div ref={presentationRef} className={"#app"}>
      <button onClick={handleFullscreen} className={"fullscreen"}>Present</button>

      <p>Start</p>
    </div>
  )
}
