'use client'

import { useSearchParams } from "next/navigation";

type Slug = "microservices" | "all-the-things";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayTitle = () => {
    switch (slug) {
      case "microservices": return true;
      case "all-the-things": return true;
      default: return false;
    }
  }

  const displayList = () => {
    switch (slug) {
      case "all-the-things": return true;
      default: false;
    }
  }

  return (
    <div>
      { displayTitle() ? <p>10 bajillion microservice</p> : <></> }
      { displayList() ?
      <ul>
        <li>all perfectly decoupled</li>
        <li>all independently deployable</li>
        <li>all maintained by autonomous teams innovating without friction</li>
        <li>all choreographed with high availability and resiliency and telemetry and and and</li>
      </ul> : <></> }
    </div>
  )
}
