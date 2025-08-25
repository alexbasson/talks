'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayDefinition: boolean,
  displayModel: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayDefinition: false,
      displayModel: false,
    },
    {
      displayDefinition: true,
      displayModel: false,
    },
    {
      displayDefinition: true,
      displayModel: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <h1>bounded contexts</h1>
      <p className='text-sm'>Eric Evans</p>
      { frame.displayDefinition ? <p className={"mt-16 leading-tight"}>&ldquo;the scope of a particular model...within which a single<br/>model will apply and will be kept as unified as possible&rdquo;</p> : <></> }
      { frame.displayModel ? <p className={"mt-16 leading-tight"}>&ldquo;the team&apos;s agreed-upon way of structuring domain<br/>knowledge and distinguishing the elements of most interest&rdquo;</p> : <></> }
    </div>
  )
}
