'use client'

import {useSearchParams} from "next/navigation";

type Slug = "list";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayList = slug === "list";

  return (
    <div>
      <p>just the classics:</p>
      {displayList ?
        <ul>
          <li>hexagonal architecture</li>
          <li>domain-driven design</li>
          <li>good old SOLID principles</li>
        </ul> : <></>}
    </div>
  )
}
