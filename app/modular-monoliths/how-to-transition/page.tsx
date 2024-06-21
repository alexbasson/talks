'use client'

import { useSearchParams } from "next/navigation";

type Slug = "deployable-mitosis" | "adapter-division" | "adapter-extraction";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  return (
    <div>
      <h1>how to transition?</h1>
      <ul>
        <li>deployable mitosis</li>
        <li>adapter division</li>
        <li>adapter extraction</li>
      </ul>
    </div>
  )
}
