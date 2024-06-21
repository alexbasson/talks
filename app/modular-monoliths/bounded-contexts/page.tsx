'use client'

import { useSearchParams } from "next/navigation";

type Slug = "definition" | "model";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayDefinition = () => {
    switch (slug) {
      case "definition": return true;
      case "model": return true;
      default: return false;
    }
  }

  const displayModel = () => {
    switch (slug) {
      case "model": return true;
      default: return false;
    }
  }

  return (
    <div>
      <h1>bounded contexts</h1>
      { displayDefinition() ? <p>&ldquo;the scope of a particular model...within which a single model will apply and will be kept as unified as possible&rdquo;</p> : <></> }
      { displayModel() ? <p>&ldquo;the team&apos;s agreed-upon way of structuring domain knowledge and distinguishing the elements of most interest&rdquo;</p> : <></> }
    </div>
  )
}
