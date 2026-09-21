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

export default function RubyDirectoryStructure() {
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
              <li>app.rb</li>
              <li>config.ru</li>
            </ul>
          </li>
          <li className={`${adapterRed.className} ${border(frame.apiAdapter)} mb-4 p-2`}>
            <p>game_api_adapter/</p>
            <ul className={"pl-16 list-none"}>
              <li>moves_routes.rb</li>
            </ul>
          </li>
          <li className={`${adapterRed.className} ${border(frame.sqlAdapter)} mb-4 p-2`}>
            <p>game_db_adapter/</p>
            <ul className={"pl-16 list-none"}>
              <li>sql_move_repository.rb</li>
            </ul>
          </li>
          <li className={`${policyBlue.className} ${border(frame.policy)} p-2`}>
            <p>game_policy/</p>
            <ul className={"pl-16 list-none"}>
              <li>make_move.rb</li>
              <li>move_repository.rb</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={"font-mono text-sm leading-loose"}>
        {frame.deployable ?
          <div className={`font-mono text-sm leading-normal ${deployableGreen.className}`}>
            <p>&#35; app.rb</p>
            <br/>
            <p>require &apos;game_api_adapter/moves_routes&apos;</p>
            <p>require &apos;game_db_adapter/sql_move_repository&apos;</p>
            <p>require &apos;game_policy/make_move&apos;</p>
            <p>require &apos;game_policy/move_repository&apos;</p>
            <br/>
            <p className={clsx({[highlightYellow.className]: frame.highlightDeployable})}>def create_app</p>
            <p className={clsx({[highlightYellow.className]: frame.highlightDeployable})}>&nbsp;&nbsp;...</p>
            <p className={clsx({[highlightYellow.className]: frame.highlightDeployable})}>end</p>
          </div> : <></>
        }

        {frame.apiAdapter ?
          <div className={`font-mono text-sm leading-normal ${adapterRed.className}`}>
            <p>&#35; moves_routes.rb</p>
            <br/>
            <p>class MovesRoutes &lt; Sinatra::Base</p>
            <p className={clsx({[highlightYellow.className]: frame.highlightApiAdapter})}>&nbsp;&nbsp;def initialize(make_move)</p>
            <p className={clsx({[highlightYellow.className]: frame.highlightApiAdapter})}>&nbsp;&nbsp;&nbsp;&nbsp;...</p>
            <p className={clsx({[highlightYellow.className]: frame.highlightApiAdapter})}>&nbsp;&nbsp;end</p>
            <p>end</p>
          </div> : <></>
        }

        {frame.sqlAdapter ?
          <div className={`font-mono text-sm leading-normal ${adapterRed.className}`}>
            <p>&#35; sql_move_repository.rb</p>
            <br/>
            <p>require &apos;game_policy/move_repository&apos;</p>
            <br/>
            <p>class <span className={clsx({[highlightYellow.className]: frame.highlightSqlAdapter})}>SqlMoveRepository &lt; MoveRepository</span></p>
            <p>&nbsp;&nbsp;...</p>
            <p>end</p>
          </div> : <></>
        }

        {frame.policy ?
          <div className={`font-mono text-sm leading-normal ${policyBlue.className}`}>
            <div className='mb-16'>
              <p>&#35; make_move.rb</p>
              <p>def make_move</p>
              <p>&nbsp;&nbsp;...</p>
              <p>end</p>
            </div>

            <div>
              <p>&#35; move_repository.rb</p>
              <br/>
              <p>module MoveRepository</p>
              <p>&nbsp;&nbsp;...</p>
              <p>end</p>
            </div>
          </div> : <></>
        }
      </div>
    </div>
  )
}
