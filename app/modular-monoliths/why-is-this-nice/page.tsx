'use client'

import { useSearchParams } from "next/navigation";

type Slug = "how-does-this-go-wrong";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const title = () => {
    switch (slug) {
      case "how-does-this-go-wrong": return "how does this go wrong?";
      default: return "why is this nice?";
    }
  };

  return (
    <div>
      <h1>{title()}</h1>
      <ul>
        <li>each piece stays small</li>
        <li>enforces separation of concerns</li>
        <li>adapters are cheap and easy to replace</li>
        <li>facilitates testing modules in isolation</li>
      </ul>
    </div>
  )
}
