'use client'

import {enterFullscreen, exitFullscreen} from "@/app/lib/fullscreen";

export default function Page() {

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen(document.documentElement);
    }
  }

  return (
    <div className={"#app"}>
      <button onClick={handleFullscreen} className={"fullscreen"}>Present</button>

      <p>Start</p>
    </div>
  )
}
