import {highlightYellow} from "@/app/lib/definitions";

export default function Page() {
  return (
    <div className={'text-lg text-center px-[300px] py-[150px]'}>
      <p>
        by focusing less on <span className={`${highlightYellow.className} italic`}>services</span> and
        more on <span className={`${highlightYellow.className} italic`}>boundaries</span>,
        we can reap <span className={highlightYellow.className}>early rewards</span> with <span className={highlightYellow.className}>less
        cost</span>, and without blocking ourselves off from the microservices we
        will <span className={highlightYellow.className}>eventually need</span>
      </p>
    </div>
  )
}
