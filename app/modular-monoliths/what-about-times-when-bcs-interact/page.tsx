'use client'

import clsx from "clsx";
import useFrame from "@/app/lib/useFrame";

type Frame = {
  highlightFriendsLanguage: boolean,
  highlightGameplayLanguage: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      highlightFriendsLanguage: false,
      highlightGameplayLanguage: false,
    },
    {
      highlightFriendsLanguage: true,
      highlightGameplayLanguage: false,
    },
    {
      highlightFriendsLanguage: false,
      highlightGameplayLanguage: true,
    },
    {
      highlightFriendsLanguage: false,
      highlightGameplayLanguage: false,
    },
    {
      highlightFriendsLanguage: false,
      highlightGameplayLanguage: false,
    },
    {
      highlightFriendsLanguage: false,
      highlightGameplayLanguage: false,
    },
    {
      highlightFriendsLanguage: false,
      highlightGameplayLanguage: false,
    },
    {
      highlightFriendsLanguage: false,
      highlightGameplayLanguage: false,
    },
    {
      highlightFriendsLanguage: false,
      highlightGameplayLanguage: false,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div>
      <h1>what about times when BCs interact?</h1>

      <div className={"font-mono text-sm"}>
        <div className={"mb-8"}>
          <p>Feature: Starting a game</p>
        </div>

        <div className={"mb-8"}>
          <p>Given I have <span className={clsx({"text-yellow-600": frame.highlightFriendsLanguage})}>invited</span> Cedar to play</p>
          <p>And Cedar has <span className={clsx({"text-yellow-600": frame.highlightFriendsLanguage})}>accepted</span> my <span className={clsx({"text-yellow-600": frame.highlightFriendsLanguage})}>invitation</span></p>
        </div>

        <div className={"mb-8"}>
          <p>When I start the <span className={clsx({"text-yellow-600": frame.highlightFriendsLanguage})}>game</span></p>
        </div>

        <div>
          <p>Then I am taken to a <span className={clsx({"text-yellow-600": frame.highlightGameplayLanguage})}>board</span> with all the <span className={clsx({"text-yellow-600": frame.highlightGameplayLanguage})}>pieces</span> in the starting <span className={clsx({"text-yellow-600": frame.highlightGameplayLanguage})}>position</span></p>
        </div>
      </div>
    </div>
  )
}
