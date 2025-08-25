'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayPolicy: boolean,
  displayAdapter: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayPolicy: false,
      displayAdapter: false,
    },
    {
      displayPolicy: true,
      displayAdapter: false,
    },
    {
      displayPolicy: true,
      displayAdapter: true,
    },
  ]

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal w-full'>
      <p>This looks like Java. Gross.</p>

      <div className='font-mono text-sm leading-normal flex justify-start mb-8'>
        <div className='mr-16'>
          <p className='mb-4'>online-chess/</p>
          <ul className='pl-16 list-none'>
            {frame.displayPolicy ?
              <li className={` mb-4 p-2`}>
                <p>game_play/</p>
                <ul className={"pl-16 list-none"}>
                  <li>__init__.py</li>
                  <li>make_move.py</li>
                  <li>move_repository.py</li>
                </ul>
              </li> : <></>
            }

            {frame.displayAdapter ?
              <li className={`mb-4 p-2`}>
                <p>persistence_adapter/</p>
                <ul className={"pl-16 list-none"}>
                  <li>__init__.py</li>
                  <li>sql_move_repository.py</li>
                </ul>
              </li> : <></>
            }
          </ul>
        </div>

        <div>
        {frame.displayPolicy ?
          <div className='mb-16'>
            <div>
              &#35; make_move.py<br/>
              def make_move(move_repository: MoveRepository):<br/>
              &nbsp;&nbsp;&#35; game logic; is this move legal?<br/>
              &nbsp;&nbsp;move_repository.save_move(move)<br/>
            </div>

            <br/>

            <div>
              class MoveRepository(ABC):<br/>
              &nbsp;&nbsp;@abstract_method<br/>
              &nbsp;&nbsp;def save_move(self, move):<br/>
            </div>
          </div> : <></>
        }

        {frame.displayAdapter ?
          <div>
            &#35; sql_move_repository.py<br/>
            from game_play.move_repository import MoveRepository<br/>
            <br/>
            class SqlMoveRepository(MoveRepository):<br/>
            &nbsp;&nbsp;def save_move(self, move):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;...<br/>
          </div> : <></>
          }
        </div>

      </div>

      {frame.displayAdapter ? <p>Is this abstract class really necessary?</p> : <></> }
    </div>
  )
}
