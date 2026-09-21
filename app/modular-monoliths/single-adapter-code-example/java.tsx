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
      class GameplayGameInitializer implements <span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>GameInitializer</span> &#123;<br/>
      &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>private final SetupBoard setupBoard;</span><br/><br/>
      &nbsp;&nbsp;public GameplayGameInitializer(SetupBoard setupBoard) &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;this.setupBoard = setupBoard;<br/>
      &nbsp;&nbsp;&#125;<br/>
    </>
  )
}

export function MethodSection({ highlightSecondaryAdapter, highlightPrimaryAdapter, highlightNames, highlightGameId }: Props) {
  return (
    <>
      &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>@Override</span><br/>
      &nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightSecondaryAdapter})}>public GameId initializeGame</span>(<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;Player whitePlayer,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;Player blackPlayer<br/>
      &nbsp;&nbsp;) &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;BoardId boardId =<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightPrimaryAdapter})}>setupBoard.execute</span>(<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightNames})}>whitePlayer.name,</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={clsx({[highlightYellow.className]: highlightNames})}>blackPlayer.name</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;return <span className={clsx({[highlightYellow.className]: highlightGameId})}>GameId(boardId.value)</span>;<br/>
      &nbsp;&nbsp;&#125;<br/>
      &#125;<br/>
    </>
  )
}
