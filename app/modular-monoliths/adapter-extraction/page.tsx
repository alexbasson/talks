'use client'

import { useSearchParams } from "next/navigation";

type Slug = "highlighted-adapter" | "extracted-adapter" | "added-adapters" | "added-deployable";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  return (
    <div>
      <h1>adapter extraction</h1>
    </div>
  )
}
