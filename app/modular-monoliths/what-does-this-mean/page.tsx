'use client';

import { useSearchParams } from "next/navigation";

type Slug = "inexpensive" | "low-overhead" | "domain-boundaries";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayInexpensive = () => {
    switch (slug) {
      case "inexpensive": return true;
      case "low-overhead": return true;
      case "domain-boundaries": return true;
      default: return false;
    }
  }

  const displayLowOverhead = () => {
    switch (slug) {
      case "low-overhead": return true;
      case "domain-boundaries": return true;
      default: return false;
    }
  }

  const displayDomainBoundaries = () => {
    switch (slug) {
      case "domain-boundaries": return true;
      default: return false;
    }
  }

  return (
    <div>
      <h1>what does this mean?</h1>
      <ul>
        { displayInexpensive() ? <li>reshaping deployables doesn&apos;t have to be expensive</li> : <></> }
        { displayLowOverhead() ? <li>therefore, you don&apos;t need to take on overhead before it will provide value</li> : <></> }
        { displayDomainBoundaries() ? <li>service boundaries are not nearly as interesting as <span>domain</span> boundaries and dependency relationships</li> : <></> }
      </ul>
    </div>
  );
}
