'use client'

import { useSearchParams } from "next/navigation";

type Slug = "never-a-good-idea" | "never-plan-ahead" | "not-a-best-practice";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayNeverGoodIdea = () => {
    switch (slug) {
      case "never-a-good-idea": return true;
      case "never-plan-ahead": return true;
      case "not-a-best-practice": return true;
      default: false;
    }
  }

  const displayNeverPlanAhead = () => {
    switch (slug) {
      case "never-plan-ahead": return true;
      case "not-a-best-practice": return true;
      default: false;
    }
  }

  const displayNotABestPractice = () => {
    switch (slug) {
      case "not-a-best-practice": return true;
      default: return false;
    }
  }

  return (
    <div>
      <h1>what does this <span>not</span> mean?</h1>
      <ul>
        { displayNeverGoodIdea() ? <li>&ldquo;starting out with separate deployables is never a good idea!&rdquo;</li> : <></> }
        { displayNeverPlanAhead() ? <li>&ldquo;fantastic, I&apos;ll never bother planning ahead ever again!&rdquo;</li> : <></> }
        { displayNotABestPractice() ? <li>&ldquo;MODULAR MONOLITHS ARE A BEST PRACTICE&rdquo;</li> : <></> }
      </ul>
    </div>
  );
}
