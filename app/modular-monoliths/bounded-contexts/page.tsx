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

  const frame = frames[useFrame()];

  return (
    <div>
      <h1>bounded contexts</h1>
      { frame.displayDefinition ? <p>&ldquo;the scope of a particular model...within which a single model will apply and will be kept as unified as possible&rdquo;</p> : <></> }
      { frame.displayModel ? <p>&ldquo;the team&apos;s agreed-upon way of structuring domain knowledge and distinguishing the elements of most interest&rdquo;</p> : <></> }
    </div>
  )
}
