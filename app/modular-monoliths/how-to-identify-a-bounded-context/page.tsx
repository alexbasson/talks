'use client'

import {useSearchParams} from "next/navigation";
import clsx from "clsx";

type Slug = "gameplay-stories" | "gameplay-language" | "friends-stories" | "friends-language" | "contrast-stories";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayGameplayStories = () => {
    switch (slug) {
      case "gameplay-stories":
        return true;
      case "gameplay-language":
        return true;
      default:
        return false;
    }
  }

  const displayFriendsStories = () => {
    switch (slug) {
      case "friends-stories":
        return true;
      case "friends-language":
        return true;
      default:
        return false;
    }
  }

  const displayStoriesInDifferentContexts = () => {
    switch (slug) {
      case "contrast-stories":
        return true;
      case "friends-language":
        return true;
      default:
        return false;
    }
  }

  const highlightGameplayLanguage = slug === "gameplay-language";
  const highlightFriendsLanguage = slug === "friends-language";

  return (
    <div>
      <h1>how to identify a bounded context?</h1>

      {displayGameplayStories() ?
        <div>
          <div>
            <p>Feature: Promoting a pawn</p>

            <p>Given it is my <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>turn</span></p>
            <p>And I have a <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>pawn</span> that can <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>legally move</span> onto the last row</p>

            <p>When I <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>move</span> the <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>pawn</span> forward</p>

            <p>Then <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>I am asked</span> to choose between <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>bishop</span>, <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>knight</span>, <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>rook</span>, and <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>queen</span></p>
            <p>And the <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>pawn</span> becomes the type of piece I choose</p>
          </div>

          <div>
            <p>Feature: Moving into check</p>

            <p>Given it is my <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>turn</span></p>
            <p>And I have an otherwise <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>legal</span> move that would put my <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>king</span> in check</p>

            <p>When I try to make that <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>move</span></p>

            <p>Then <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>I am told</span> the <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>move</span> is <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>illegal</span></p>
          </div>
        </div> : <></>}

      {displayFriendsStories() ?
        <div>
          <div>
            <p>Feature: Per-opponent wins/losses</p>

            <p>Given Cedar is in my <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>friends list</span></p>
            <p>And ahs been my <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>opponent</span> in 6 <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>games</span></p>
            <p>And I won 3, Cedar won 2, and 1 was a stalemate</p>

            <p>When I view my <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>friends list</span></p>

            <p>Then Cedar is listed as</p>
            <p>Cedar (3-2-1)</p>
          </div>

          <div>
            <p>Feature: inviting a friend to play</p>

            <p>Given Cedar is in my <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>friends list</span></p>
            <p>And I have created a <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>game</span></p>

            <p>When I choose Cedar as my <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>opponent</span></p>

            <p>Then Cedar receives an invite notification</p>
          </div>
        </div> : <></>
      }

      {displayStoriesInDifferentContexts() ?
        <div>
          <div>
            <p>Feature: Promoting a pawn</p>

            <p>Given it is my <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>turn</span></p>
            <p>And I have a <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>pawn</span> that
              can <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>legally move</span> onto the
              last row</p>

            <p>When I <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>move</span> the <span
              className={clsx({"text-yellow-600": highlightGameplayLanguage})}>pawn</span> forward</p>

            <p>Then <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>I am asked</span> to choose
              between <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>bishop</span>, <span
                className={clsx({"text-yellow-600": highlightGameplayLanguage})}>knight</span>, <span
                className={clsx({"text-yellow-600": highlightGameplayLanguage})}>rook</span>, and <span
                className={clsx({"text-yellow-600": highlightGameplayLanguage})}>queen</span></p>
            <p>And the <span className={clsx({"text-yellow-600": highlightGameplayLanguage})}>pawn</span> becomes the
              type of piece I choose</p>
          </div>

          <div>
            <p>Feature: inviting a friend to play</p>

            <p>Given Cedar is in my <span
              className={clsx({"text-yellow-600": highlightFriendsLanguage})}>friends list</span></p>
            <p>And I have created a <span className={clsx({"text-yellow-600": highlightFriendsLanguage})}>game</span>
            </p>

            <p>When I choose Cedar as my <span
              className={clsx({"text-yellow-600": highlightFriendsLanguage})}>opponent</span></p>

            <p>Then Cedar receives an invite notification</p>
          </div>
        </div> : <></>
      }
    </div>
  )
}
