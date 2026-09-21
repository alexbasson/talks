import clsx from "clsx";
import {highlightYellow} from "@/app/lib/colors";

type Props = {
  highlightSecondaryAdapter: boolean,
  highlightPrimaryAdapter: boolean,
  highlightNames: boolean,
  highlightGameId: boolean,
}

export function TopSection({ highlightSecondaryAdapter, highlightPrimaryAdapter }: Props) {
  return (
    <>
      <span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>require &apos;organizing_games/game_initializer&apos;</span><br/>
      <span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>require &apos;gameplay/setup_board&apos;</span><br/><br/>

      class GameplayGameInitializer<br/>
      &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>include GameInitializer</span><br/><br/>
      &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>def initialize(setup_board)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>@setup_board = setup_board</span><br/>
      &nbsp;&nbsp;end<br/>
    </>
  )
}

export function MethodSection({ highlightSecondaryAdapter, highlightPrimaryAdapter, highlightNames, highlightGameId }: Props) {
  return (
    <>
      &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>def initialize_game</span>(<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;white_player,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;black_player<br/>
      &nbsp;&nbsp;)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;board_id = <span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>@setup_board.call</span>(<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightNames})}>white_player.name,</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightNames})}>black_player.name</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightGameId})}>GameId.new(board_id.value)</span><br/>
      &nbsp;&nbsp;end<br/>
      end<br/>
    </>
  )
}
