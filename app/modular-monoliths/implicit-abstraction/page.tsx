'use client'


export default function Page() {
  return (
    <div className='padding-horizontal w-full'>
      <div className='font-mono text-sm leading-normal flex justify-start mb-8'>
        <div className='mr-16'>
          <p className='mb-4'>online-chess/</p>
          <ul className='pl-16 list-none'>
            <li className={` mb-4 p-2`}>
              <p>game_play/</p>
              <ul className={"pl-16 list-none"}>
                <li>__init__.py</li>
                <li>make_move.py</li>
                <li>move_repository.py</li>
              </ul>
            </li>

            <li className={`mb-4 p-2`}>
              <p>persistence_adapter/</p>
              <ul className={"pl-16 list-none"}>
                <li>__init__.py</li>
                <li>sql_move_repository.py</li>
              </ul>
            </li>
          </ul>
        </div>


        <div>
          <div className='mb-16'>
            <div>
              def make_move(save_move: Function):<br/>
              &nbsp;&nbsp;&#35; game logic; is this move legal?<br/>
              &nbsp;&nbsp;save_move(move)<br/>
            </div>

            <br/>
          </div>

          <div>
            &#35; sql_move_repository.py<br/>
            <br/>
            def save_move(move):<br/>
            &nbsp;&nbsp;...<br/>
          </div>

        </div>
      </div>
    </div>
  )
}
