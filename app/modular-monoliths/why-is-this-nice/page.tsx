'use client'

import { useSearchParams } from "next/navigation";

type Slug = "pieces-stay-small" | "separation-of-concerns" | "cheap-adapters" | "testing-in-isolation" | "how-does-this-go-wrong";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const title = () => {
    switch (slug) {
      case "how-does-this-go-wrong": return "how does this go wrong?";
      default: return "why is this nice?";
    }
  };

  const displayPiecesStaySmall = () => {
    switch (slug) {
      case "pieces-stay-small": return true;
      case "separation-of-concerns": return true;
      case "cheap-adapters": return true;
      case "testing-in-isolation": return true;
      case "how-does-this-go-wrong": return true;
      default: return false;
    }
  }

  const displaySeparationOfConcerns = () => {
    switch (slug) {
      case "separation-of-concerns": return true;
      case "cheap-adapters": return true;
      case "testing-in-isolation": return true;
      case "how-does-this-go-wrong": return true;
      default: return false;
    }
  }

  const displayCheapAdapters = () => {
    switch (slug) {
      case "cheap-adapters": return true;
      case "testing-in-isolation": return true;
      case "how-does-this-go-wrong": return true;
      default: return false;
    }
  }

  const displayTestingInIsolation = () => {
    switch (slug) {
      case "testing-in-isolation": return true;
      case "how-does-this-go-wrong": return true;
      default: return false;
    }
  }

  return (
    <div>
      <h1>{title()}</h1>
      <ul>
        { displayPiecesStaySmall() ? <li>each piece stays small</li> : <></> }
        { displaySeparationOfConcerns() ? <li>enforces separation of concerns</li>: <></> }
        { displayCheapAdapters() ? <li>adapters are cheap and easy to replace</li> : <></> }
        { displayTestingInIsolation() ? <li>facilitates testing modules in isolation</li> : <></> }
      </ul>
    </div>
  )
}
