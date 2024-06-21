'use client'

import {useSearchParams} from "next/navigation";

type Slug = "policy" | "adapters" | "deployable";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayPolicy = () => {
    switch (slug) {
      case "policy":
        return true;
      case "adapters":
        return true;
      case "deployable":
        return true;
      default:
        return false;
    }
  }

  const displayAdapters = () => {
    switch (slug) {
      case "adapters":
        return true;
      case "deployable":
        return true;
      default:
        return false;
    }
  }

  const displayDeployables = () => {
    switch (slug) {
      case "deployable":
        return true;
      default:
        return false;
    }
  }

  return (
    <div>
      <h1>example: online chess</h1>
      {displayAdapters() ? <p>POST /&#123;gameId&#125;/moves</p> : <></>}
      {displayPolicy() ?
        <ul>
          <li>move</li>
          <li>board state</li>
          <li>make move</li>
          <li>move is illegal</li>
          <li>checkmate</li>
        </ul> : <></>
      }
      {displayAdapters() ? <p>INSERT INTO moves VALUES</p> : <></>}
      {displayDeployables() ? <p>DI container, env vars</p> : <></>}
    </div>
  )
}
