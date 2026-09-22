export const orgGamesPath = 'organizing_games_policy/player.rb'
export const gameplayPath = 'gameplay_policy/player.rb'

export default function PlayerClass({ params }: { params: string[] }) {
  return (
    <p className='ml-16'>
      Player = Data.define({params.map((p, i) => <>{i > 0 ? ', ' : ''}:{p}</>)})<br/>
    </p>
  )
}
