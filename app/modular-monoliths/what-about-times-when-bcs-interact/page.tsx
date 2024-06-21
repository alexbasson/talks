'use client'

import {useSearchParams} from "next/navigation";
import clsx from "clsx";

type Slug = "friends-language" | "gameplay-language" | "little-overlap" | "high-overlap" | "one-module" | "medium-overlap" | "three-modules" | "this-story";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const highlightFriendsLanguage = slug === "friends-language";
  const highlightGameplayLanguage = slug === "gameplay-language";

  return (
    <div>
      <h1>what about times when BCs interact?</h1>

      <div>
        <p>Feature: Starting a game</p>

        <p>Given I have <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>invited</span> Cedar to
          play</p>
        <p>And Cedar has <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>accepted</span> my <span
          className={clsx({"text-yellow-600": highlightFriendsLanguage})}>invitation</span></p>

        <p>When I start the <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>game</span></p>

        <p>Then I am taken to a <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>board</span> with
          all the <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>pieces</span> in the
          starting <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>position</span></p>
      </div>
    </div>
  )
}
