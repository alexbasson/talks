export const orgGamesPath = 'organizing-games-policy/player.py'
export const gameplayPath = 'gameplay-policy/player.py'

export default function PlayerClass({ params }: { params: string[] }) {
  return (
    <p className='ml-16'>
      from dataclasses import dataclass<br/>
      <br/>
      @dataclass<br/>
      class Player:<br/>
      { params.map(param => <>&nbsp;&nbsp;{param}: str<br/></>) }
      <br/>
    </p>
  )
}
