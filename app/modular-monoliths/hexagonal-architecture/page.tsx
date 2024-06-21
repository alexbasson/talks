'use client'

import { useSearchParams } from "next/navigation";

type Slug = "domain" | "ports" | "primary-ports" | "secondary-ports" | "adapters" | "whole-picture";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  return (
    <div>
      <h1>hexagonal architecture</h1>
    </div>
  )
}
