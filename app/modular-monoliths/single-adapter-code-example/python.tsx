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
      from typing import Callable<br/>
      <span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>from organizing_games.game_initializer import GameInitializer, Player, GameId</span><br/>
      <span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>from gameplay.setup_board import setup_board</span><br/><br/>

      class GameplayGameInitializer(<span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>GameInitializer</span>):<br/>
      &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>def __init__(self, setup_board: Callable):</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;self.setup_board = setup_board<br/>
    </>
  )
}

export function MethodSection({ highlightSecondaryAdapter, highlightPrimaryAdapter, highlightNames, highlightGameId }: Props) {
  return (
    <>
      &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>def initialize_game</span>(self,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;white_player: Player,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;black_player: Player<br/>
      &nbsp;&nbsp;) -&gt; GameId:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;board_id = <span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>self.setup_board</span>(<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightNames})}>white_player.name,</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightNames})}>black_player.name</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;return <span className={clsx({[highlightYellow.className]: highlightGameId})}>GameId(board_id.value)</span><br/>
    </>
  )
}
