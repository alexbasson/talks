'use client'

import { useSearchParams } from "next/navigation";

type Slug = "five-microservices" | "run-locally" | "features" | "repo" | "doing-it-wrong";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") as Slug;

  const displayFiveMicroservices = () => {
    switch (slug) {
      case "five-microservices": return true;
      case "run-locally": return true;
      case "features": return true;
      case "repo": return true;
      case "doing-it-wrong": return true;
      default: return false;
    }
  }

  const displayRunLocally = () => {
    switch (slug) {
      case "run-locally": return true;
      case "features": return true;
      case "repo": return true;
      case "doing-it-wrong": return true;
      default: return false;
    }
  }

  const displayFeatures = () => {
    switch (slug) {
      case "features": return true;
      case "repo": return true;
      case "doing-it-wrong": return true;
      default: return false;
    }
  }

  const displayRepo = () => {
    switch (slug) {
      case "repo": return true;
      case "doing-it-wrong": return true;
      default: return false;
    }
  }

  const displayDoingItWrong = () => {
    switch (slug) {
      case "doing-it-wrong": return true;
      default: return false;
    }
  }

  return (
    <div>
      { displayFiveMicroservices() ? <p>5 microservices</p> : <></> }
      { displayRunLocally() ? <p>ugh, i&apos;ll have to...<em>run everything locally...</em></p> : <></> }
      { displayFeatures() ? <p>can&apos;t wait to work on features again...</p> : <></> }
      { displayRepo() ? <p>which repo was that code in?</p> : <></> }

      { displayDoingItWrong() ? (
        <div className={'text-red-600 font-bold z-10'}>
          <h2 className={'rotate-12 mt-[-200px]'}>DOING IT WRONG</h2>
          <h2 className={'-rotate-12 mt-[-250px]'}>EAT YOUR VEGETABLES</h2>
          <h2 className={'rotate-6 mt-[230px] ml-[50px]'}>DOING IT WRONG</h2>
        </div>
        ) : <></>
      }
    </div>
  )
}
