export const orgGamesPath = 'organizing-games-policy/Player.java'
export const gameplayPath = 'gameplay-policy/Player.java'

export default function PlayerClass({ params }: { params: string[] }) {
  return (
    <p className='ml-16'>
      class Player &#123;<br/>
      { params.map(param => <>&nbsp;&nbsp;&nbsp;&nbsp;String {param};<br/></>) }
      &#125;
    </p>
  )
}
