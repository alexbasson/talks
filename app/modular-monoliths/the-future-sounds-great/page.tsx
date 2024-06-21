'use client'

import { useSearchParams } from "next/navigation";

type Slug = "hurt-this-bad";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayHurtThisBad = slug === "hurt-this-bad";

  return (
    <div>
      <p>the future sounds great...</p>
      { displayHurtThisBad ? <p>...but does the present have to hurt this bad?</p> : <></> }
    </div>
  )
}
