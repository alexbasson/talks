import {highlightYellow} from "@/app/lib/colors";

export default function Page() {
  return (
    <div className='text-lg text-center px-[300px] py-[150px]'>
      <p>
        by focusing on <span className={`${highlightYellow.className} italic`}>boundaries</span>,
        we can keep our codebase <span className={highlightYellow.className}>manageable</span> and <span className={highlightYellow.className}>navegable</span>,
        while offering us the <span className={highlightYellow.className}>flexibility</span> to make changes easier, faster, and less costly.
      </p>
    </div>
  )
}
