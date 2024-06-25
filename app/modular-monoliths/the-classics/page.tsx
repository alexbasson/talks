'use client'

import {useSearchParams} from "next/navigation";

type Slug = "list";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayList = slug === "list";

  return (
    <div>
      <h1>just the classics:</h1>
      {displayList ?
        <ul className={"pl-16 list-disc"}>
          <li>hexagonal architecture</li>
          <li>domain-driven design</li>
          <li>good old SOLID principles</li>
        </ul> : <></>}
    </div>
  )
}
