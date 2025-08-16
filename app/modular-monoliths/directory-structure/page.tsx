'use client'

import clsx from "clsx";
import useFrame from "@/app/lib/useFrame";
import {adapterRed, deployableGreen, highlightYellow, policyBlue} from "@/app/lib/colors";

type Frame = {
  deployable: boolean,
  highlightDeployable: boolean,
  apiAdapter: boolean,
  highlightApiAdapter: boolean,
  sqlAdapter: boolean,
  highlightSqlAdapter: boolean,
  policy: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      deployable: false,
      highlightDeployable: false,
      apiAdapter: false,
      highlightApiAdapter: false,
      sqlAdapter: false,
      highlightSqlAdapter: false,
      policy: false,
    },
    {
      deployable: true,
      highlightDeployable: false,
      apiAdapter: false,
      highlightApiAdapter: false,
      sqlAdapter: false,
      highlightSqlAdapter: false,
      policy: false,
    },
    {
      deployable: true,
      highlightDeployable: true,
      apiAdapter: false,
      highlightApiAdapter: false,
      sqlAdapter: false,
      highlightSqlAdapter: false,
      policy: false,
    },
    {
      deployable: false,
      highlightDeployable: false,
      apiAdapter: true,
      highlightApiAdapter: false,
      sqlAdapter: false,
      highlightSqlAdapter: false,
      policy: false,
    },
    {
      deployable: false,
      highlightDeployable: false,
      apiAdapter: true,
      highlightApiAdapter: true,
      sqlAdapter: false,
      highlightSqlAdapter: false,
      policy: false,
    },
    {
      deployable: false,
      highlightDeployable: false,
      apiAdapter: false,
      highlightApiAdapter: false,
      sqlAdapter: true,
      highlightSqlAdapter: false,
      policy: false,
    },
    {
      deployable: false,
      highlightDeployable: false,
      apiAdapter: false,
      highlightApiAdapter: false,
      sqlAdapter: true,
      highlightSqlAdapter: true,
      policy: false,
    },
    {
      deployable: false,
      highlightDeployable: false,
      apiAdapter: false,
      highlightApiAdapter: false,
      sqlAdapter: false,
      highlightSqlAdapter: false,
      policy: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  const border = (display: boolean): string => {
    return "border-4 " + (display ? "border-yellow-300" : "border-transparent");
  }

  return (
    <div className='padding-horizontal w-full flex justify-start'>
      <div className='font-mono text-sm leading-normal mr-16'>
        <p className='mb-4'>online-chess/</p>
        <ul className='pl-16 list-none'>
          <li className={`${deployableGreen.className} ${border(frame.deployable)} mb-4 p-2`}>
            <p>chess_app/</p>
            <ul className={"pl-16 list-none"}>
              <li>__init__.py</li>
              <li>app.py</li>
            </ul>
          </li>
          <li className={`${adapterRed.className} ${border(frame.apiAdapter)} mb-4 p-2`}>
            <p>game_api_adapter/</p>
            <ul className={"pl-16 list-none"}>
              <li>__init__.py</li>
              <li>moves_routers.py</li>
            </ul>
          </li>
          <li className={`${adapterRed.className} ${border(frame.sqlAdapter)} mb-4 p-2`}>
            <p>game_db_adapter/</p>
            <ul className={"pl-16 list-none"}>
              <li>__init__.py</li>
              <li>sql_move_repository.py</li>
            </ul>
          </li>
          <li className={`${policyBlue.className} ${border(frame.policy)} p-2`}>
            <p>game_policy/</p>
            <ul className={"pl-16 list-none"}>
              <li>__init__.py</li>
              <li>make_move.py</li>
              <li>move_repository.py</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={"font-mono text-sm leading-loose"}>
        {frame.deployable ?
          <div className={`font-mono text-sm leading-normal ${deployableGreen.className}`}>
            <div>
              <p>&#35; chess_application.py</p>
              <br/>
              <p>import game_api_adapter.sql_move_repository</p>
              <p>import game_db_adapter.import moves_routers</p>
              <p>import game_policy.make_move</p>
              <p>import game_policy.move_repository</p>
              <br/>
              <p className={clsx({[highlightYellow.className]: frame.highlightDeployable})}>def create_app():</p>
              <p className={clsx({[highlightYellow.className]: frame.highlightDeployable})}>&nbsp;&nbsp;...</p>
            </div>
          </div> : <></>
        }

        {frame.apiAdapter ?
          <div className={`font-mono text-sm leading-normal ${adapterRed.className}`}>
            <div>
              <p>&#35; moves_routers.py</p>
              <br/>
              <p>from game_policy.make_move import make_move</p>
              <br/>
              <p>@chess_game.route(&ldquo;/&rdquo;)</p>
              <p>class Moves(Resource):</p>
              <p className={clsx({[highlightYellow.className]: frame.highlightApiAdapter})}>&nbsp;&nbsp;def __init__(self, make_move):</p>
              <p className={clsx({[highlightYellow.className]: frame.highlightApiAdapter})}>&nbsp;&nbsp;&nbsp;&nbsp;...</p>
            </div>
          </div> : <></>
        }

        {frame.sqlAdapter ?
          <div className={`font-mono text-sm leading-normal ${adapterRed.className}`}>
            <div>
              <p>&#35; sql_move_repository.py</p>
              <br/>
              <p>from game_policy.move_repository import MoveRepository</p>
              <br/>
              <p>class <span className={clsx({[highlightYellow.className]: frame.highlightSqlAdapter})}>SqlMoveRepository(MoveRepository):</span></p>
              <p>&nbsp;&nbsp;...</p>
            </div>
          </div> : <></>
        }

        {frame.policy ?
          <div className={`font-mono text-sm leading-normal ${policyBlue.className}`}>
            <div className='mb-16'>
              <p>&#35; make_move.py</p>
              <p>def make_move():</p>
              <p>&nbsp;&nbsp;...</p>
            </div>

            <div>
              <p>&#35; move_repository.py</p>
              <p>class MoveRepository(ABC):</p>
              <p>&nbsp;&nbsp;...</p>
            </div>
          </div> : <></>
        }
      </div>
    </div>
  )
}
