'use client'

import { useSearchParams } from "next/navigation";

type Slug = "highlighted-adapter" | "hidden-adapter" | "divided-adapter";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;



  return (
    <div>
      <h1>adapter division</h1>
    </div>
  )
}
