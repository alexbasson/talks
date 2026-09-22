export const orgGamesPath = 'organizing-games-policy/Player.java'
export const gameplayPath = 'gameplay-policy/Player.java'

export default function PlayerClass({ params }: { params: string[] }) {
  return (
    <p className='ml-16'>
      record Player({params.map((p, i) => <>{i > 0 ? ', ' : ''}<br/>&nbsp;&nbsp;String {p}</>)}<br/>) &#123;&#125;
    </p>
  )
}
