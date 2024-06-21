'use client'

import {useSearchParams} from "next/navigation";

type Slug = "settings" | "deployable" | "api-adapter" | "sql-adapter" | "policy";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const settings = slug === "settings";
  const deployable = slug === "deployable";
  const apiAdapter = slug === "api-adapter";
  const sqlAdapter = slug === "sql-adapter";
  const policy = slug === "policy";

  return (
    <div>
      <div>
        <p>online-chess/</p>
        <ul>
          <li>
            <p>settings.gradle</p>
          </li>
          <li>
            <p>chess-app/</p>
            <ul>
              <li>src/main/.../ChessApplication.java</li>
            </ul>
          </li>
          <li>
            <p>game-api-adapter/</p>
            <ul>
              <li>src/main/.../MovesController.java</li>
            </ul>
          </li>
          <li>
            <p>game-db-adapter/</p>
            <ul>
              <li>src/main/.../SqlMoveRepository.java</li>
            </ul>
          </li>
          <li>
            <p>game-policy/</p>
            <ul>
              <li>src/main/.../MakeMove.java</li>
              <li>src/main/.../MoveRepository.java</li>
            </ul>
          </li>
        </ul>
      </div>

      {settings ?
        <div>
          <p>&#47;&#47; settings.gradle</p>
          <p>include(</p>
          <ul>
            <li>&ldquo;chess-app&rdquo;,</li>
            <li>&ldquo;game-db-adapter&rdquo;,</li>
            <li>&ldquo;game-api-adapter&rdquo;,</li>
            <li>&ldquo;game-policy&rdquo;</li>
          </ul>
          <p>)</p>
        </div> : <></>
      }

      {deployable ?
        <div>
          <p>&#47;&#47; build.gradle</p>
          <p>dependencies &#123;</p>
          <ul>
            <li>project(&ldquo;:game-db-adapter&rdquo;)</li>
            <li>project(&ldquo;:game-api-adapter&rdquo;)</li>
            <li>project(&ldquo;:game-policy&rdquo;)</li>
          </ul>
          <p>&#125;</p>

          <p>&#47;&#47; ChessApplication.java</p>
          <p>@SpringBootApplication</p>
          <p>@Import(SqlMoveRepo.class)</p>
          <p>@Import(MovesCtlr.class)</p>
          <p>@Import(MakeMove.class)</p>
          <p>class ChessApplication</p>
        </div> : <></>
      }

      {apiAdapter ?
        <div>
          <p>&#47;&#47; build.gradle</p>
          <p>dependencies &#123;</p>
          <ul>
            <li>project(&ldquo;:game-policy&rdquo;)</li>
          </ul>
          <p>&#125;</p>

          <p>&#47;&#47; MovesController.java</p>
          <p>@RestController</p>
          <p>class MovesController &#123;</p>
          <p>private final MakeMove makeMove;</p>
        </div> : <></>
      }

      {sqlAdapter ?
        <div>
          <p>&#47;&#47; build.gradle</p>
          <p>dependencies &#123;</p>
          <ul>
            <li>project(&ldquo;:game-policy&rdquo;)</li>
          </ul>
          <p>&#125;</p>

          <p>&#47;&#47; SqlMoveRepository.java</p>
          <p>class SqlMoveRepository implements MoveRepository</p>
        </div> : <></>
      }

      {policy ?
        <div>
          <p>&#47;&#47; build.gradle</p>
          <p>dependencies &#123;</p>
          <ul>
          </ul>
          <p>&#125;</p>
        </div> : <></>
      }
    </div>
  )
}
