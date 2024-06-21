'use client'

import { useSearchParams } from "next/navigation";
import clsx from "clsx";

type Slug = "highlighted";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;



  return (
    <div>
      <p><span className={clsx({"text-blue-600": slug === "highlighted"})}>modular monoliths</span> for maximum malleability and <span className={clsx({"text-blue-600": slug === "highlighted"})}>microservice</span> magic</p>
    </div>
  )
}
