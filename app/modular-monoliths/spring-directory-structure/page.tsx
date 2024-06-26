'use client'

import {useSearchParams} from "next/navigation";
import {adapterRed, deployableGreen, domainBlue} from "@/app/lib/definitions";
import clsx from "clsx";

type Slug = "settings" | "deployable" | "api-adapter" | "sql-adapter" | "policy";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const settings = slug === "settings";
  const deployable = slug === "deployable";
  const apiAdapter = slug === "api-adapter";
  const sqlAdapter = slug === "sql-adapter";
  const policy = slug === "policy";

  const border = "border-4 border-amber-500";

  return (
    <div className={'grid gap-8'} style={{gridTemplateColumns: "56% 44%"}}>
      <div className={"font-mono leading-normal"}>
        <p className={"mb-8"}>online-chess/</p>
        <ul className={"pl-16 list-none"}>
          <li className={clsx({[border]: settings}, "mb-4 p-2")}>
            <p>settings.gradle</p>
          </li>
          <li className={clsx({[border]: deployable}, `mb-4 ${deployableGreen.className} p-2`)}>
            <p>chess-app/</p>
            <ul className={"pl-16 list-none"}>
              <li>src/main/.../ChessApplication.java</li>
            </ul>
          </li>
          <li className={clsx({[border]: apiAdapter}, `mb-4 ${adapterRed.className} p-2`)}>
            <p>game-api-adapter/</p>
            <ul className={"pl-16 list-none"}>
              <li>src/main/.../MovesController.java</li>
            </ul>
          </li>
          <li className={clsx({[border]: sqlAdapter}, `mb-4 ${adapterRed.className} p-2`)}>
            <p>game-db-adapter/</p>
            <ul className={"pl-16 list-none"}>
              <li>src/main/.../SqlMoveRepository.java</li>
            </ul>
          </li>
          <li className={clsx({[border]: policy}, `${domainBlue.className} p-2`)}>
            <p>game-policy/</p>
            <ul className={"pl-16 list-none"}>
              <li>src/main/.../MakeMove.java</li>
              <li>src/main/.../MoveRepository.java</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={"font-mono text-sm leading-loose"}>
        {settings ?
          <div>
            <p className={"mb-8"}>&#47;&#47; settings.gradle</p>
            <p>include(</p>
            <ul className={"pl-16 list-none"}>
              <li>&ldquo;chess-app&rdquo;,</li>
              <li>&ldquo;game-db-adapter&rdquo;,</li>
              <li>&ldquo;game-api-adapter&rdquo;,</li>
              <li>&ldquo;game-policy&rdquo;</li>
            </ul>
            <p>)</p>
          </div> : <></>
        }

        {deployable ?
          <div className={`font-mono text-sm leading-normal ${deployableGreen.className}`}>
            <div className={"mb-8"}>
              <p>&#47;&#47; build.gradle</p>
            </div>

            <div className={"mb-16"}>
              <p>dependencies &#123;</p>
              <div>
                <ul className={"pl-16 list-none"}>
                  <li>project(&ldquo;:game-db-adapter&rdquo;)</li>
                  <li>project(&ldquo;:game-api-adapter&rdquo;)</li>
                  <li>project(&ldquo;:game-policy&rdquo;)</li>
                </ul>
                <p>&#125;</p>
              </div>
            </div>

            <div>
              <p className={"mb-8"}>&#47;&#47; ChessApplication.java</p>
              <p className={"text-amber-600"}>@SpringBootApplication</p>
              <p>@Import(SqlMoveRepo.class)</p>
              <p>@Import(MovesCtlr.class)</p>
              <p>@Import(MakeMove.class)</p>
              <p>class ChessApplication</p>
            </div>
          </div> : <></>
        }

        {apiAdapter ?
          <div className={`font-mono text-sm leading-normal ${adapterRed.className}`}>
            <div className={"mb-8"}>
              <p>&#47;&#47; build.gradle</p>
            </div>

            <div className={"mb-16"}>
              <p>dependencies &#123;</p>
              <ul className={"pl-16 list-none"}>
                <li>project(&ldquo;:game-policy&rdquo;)</li>
              </ul>
              <p>&#125;</p>
            </div>

            <div>
              <p className={"mb-8"}>&#47;&#47; MovesController.java</p>
              <p>@RestController</p>
              <p>class MovesController &#123;</p>
              <p className={"pl-16"}>private final MakeMove makeMove;</p>
              <p className={"pl-16"}>...</p>
              <p>&#125;</p>
            </div>
          </div> : <></>
        }

        {sqlAdapter ?
          <div className={`font-mono text-sm leading-normal ${adapterRed.className}`}>
            <div className={"mb-8"}>
              <p>&#47;&#47; build.gradle</p>
            </div>

            <div className={"mb-16"}>
              <p>dependencies &#123;</p>
              <ul className={"pl-16 list-none"}>
                <li>project(&ldquo;:game-policy&rdquo;)</li>
              </ul>
              <p>&#125;</p>
            </div>

            <div>
              <p className={"mb-8"}>&#47;&#47; SqlMoveRepository.java</p>
              <p>class SqlMoveRepository implements MoveRepository</p>
            </div>
          </div> : <></>
        }

        {policy ?
          <div className={`font-mono text-sm leading-normal ${domainBlue.className}`}>
            <div className={"mb-8"}>
              <p>&#47;&#47; build.gradle</p>
            </div>

            <div>
              <p>dependencies &#123;</p>
              <ul>
              </ul>
              <p>&#125;</p>
            </div>
          </div> : <></>
        }
      </div>
    </div>
  )
}
