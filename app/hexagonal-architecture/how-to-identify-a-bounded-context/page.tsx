'use client'

import clsx from "clsx";
import useFrame from "@/app/lib/useFrame";

import {highlightYellow} from "@/app/lib/colors";

type Frame = {
  displayGameplayStories: boolean,
  displayFriendsStories: boolean,
  displayStoriesInDifferentContexts: boolean,
  highlightGameplayLanguage: boolean,
  highlightFriendsLanguage: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayGameplayStories: false,
      displayFriendsStories: false,
      displayStoriesInDifferentContexts: false,
      highlightGameplayLanguage: false,
      highlightFriendsLanguage: false,
    },
    {
      displayGameplayStories: true,
      displayFriendsStories: false,
      displayStoriesInDifferentContexts: false,
      highlightGameplayLanguage: false,
      highlightFriendsLanguage: false,
    },
    {
      displayGameplayStories: true,
      displayFriendsStories: false,
      displayStoriesInDifferentContexts: false,
      highlightGameplayLanguage: true,
      highlightFriendsLanguage: false,
    },
    {
      displayGameplayStories: false,
      displayFriendsStories: true,
      displayStoriesInDifferentContexts: false,
      highlightGameplayLanguage: false,
      highlightFriendsLanguage: false,
    },
    {
      displayGameplayStories: false,
      displayFriendsStories: true,
      displayStoriesInDifferentContexts: false,
      highlightGameplayLanguage: false,
      highlightFriendsLanguage: true,
    },
    {
      displayGameplayStories: false,
      displayFriendsStories: false,
      displayStoriesInDifferentContexts: true,
      highlightGameplayLanguage: false,
      highlightFriendsLanguage: false,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <h1 className={"mb-16"}>how to identify a bounded context?</h1>

      {frame.displayGameplayStories ?
        <div className={"grid grid-cols-2 gap-16"}>
          <section className={"font-mono text-sm"}>
            <div className={"mb-8"}>
              <p>Feature: Promoting a pawn</p>
            </div>

            <div className={"mb-8"}>
              <p>Given it is my <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>turn</span>
              </p>
              <p>And I have a <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>pawn</span> that can <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>legally move</span> onto the last
                row</p>
            </div>

            <div className={"mb-8"}>
              <p>When I <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>move</span> the <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>pawn</span> forward</p>
            </div>

            <div>
              <p>Then <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>I am asked</span> to
                choose between <span
                  className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>bishop</span>, <span
                  className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>knight</span>, <span
                  className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>rook</span>, and <span
                  className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>queen</span></p>
              <p>And the <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>pawn</span> becomes the type of
                piece I choose</p>
            </div>
          </section>

          <section className={"font-mono text-sm"}>
            <div className={"mb-8"}>
              <p>Feature: Moving into check</p>
            </div>

            <div className={"mb-8"}>
              <p>Given it is my <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>turn</span>
              </p>
              <p>And I have an otherwise <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>legal</span> move that would put
                my <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>king</span> in check</p>
            </div>

            <div className={"mb-8"}>
              <p>When I try to make that <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>move</span></p>
            </div>

            <div>
              <p>Then <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>I am told</span> the <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>move</span> is <span
                className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>illegal</span></p>
            </div>
          </section>
        </div> : <></>}

      {frame.displayFriendsStories ?
        <div className={"grid grid-cols-2 gap-16"}>
          <section className={"font-mono text-sm"}>
            <div className={"mb-8"}>
              <p>Feature: Per-opponent wins/losses</p>
            </div>

            <div className={"mb-8"}>
              <p>Given Cedar is in my <span className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>friends list</span>
              </p>
              <p>And ahs been my <span
                className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>opponent</span> in 6 <span
                className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>games</span></p>
              <p>And I won 3, Cedar won 2, and 1 was a stalemate</p>
            </div>

            <div className={"mb-8"}>
              <p>When I view my <span
                className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>friends list</span></p>
            </div>

            <div>
              <p>Then Cedar is listed as</p>
              <p>Cedar (3-2-1)</p>
            </div>
          </section>

          <section className={"font-mono text-sm"}>
            <div className={"mb-8"}>
              <p>Feature: inviting a friend to play</p>
            </div>

            <div className={"mb-8"}>
              <p>Given Cedar is in my <span className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>friends list</span>
              </p>
              <p>And I have created a <span
                className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>game</span></p>
            </div>

            <div className={"mb-8"}>
              <p>When I choose Cedar as my <span
                className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>opponent</span></p>
            </div>

            <div>
              <p>Then Cedar receives an invite notification</p>
            </div>
          </section>
        </div> : <></>
      }

      {frame.displayStoriesInDifferentContexts ?
        <div className={"grid grid-cols-2 gap-16"}>
          <section className={"font-mono text-sm"}>
            <div className={"mb-8"}>
              <p>Feature: Promoting a pawn</p>
            </div>

            <div className={"mb-8"}>
              <p>Given it is my <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>turn</span></p>
              <p>And I have a <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>pawn</span> that can <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>legally move</span> onto the last row</p>
            </div>

            <div className={"mb-8"}>
              <p>When I <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>move</span> the <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>pawn</span> forward</p>
            </div>

            <div>
              <p>Then <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>I am asked</span> to choose between <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>bishop</span>, <span                 className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>knight</span>, <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>rook</span>, and <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>queen</span></p>
              <p>And the <span className={clsx({[highlightYellow.className]: frame.highlightGameplayLanguage})}>pawn</span> becomes the type of piece I choose</p>
            </div>
          </section>

          <section className={"font-mono text-sm"}>
            <div className={"mb-8"}>
              <p>Feature: Inviting a friend to play</p>
            </div>

            <div className={"mb-8"}>
              <p>Given Cedar is in my <span className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>friends list</span></p>
              <p>And I have created a <span className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>game</span></p>
            </div>

            <div className={"mb-8"}>
              <p>When I choose Cedar as my <span className={clsx({[highlightYellow.className]: frame.highlightFriendsLanguage})}>opponent</span></p>
            </div>

            <div>
              <p>Then Cedar receives an invite notification</p>
            </div>
          </section>
        </div> : <></>
      }
    </div>
  )
}
