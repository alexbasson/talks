'use client';

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayInexpensive: boolean,
  displayLowOverhead: boolean,
  displayDomainBoundaries: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayInexpensive: false,
      displayLowOverhead: false,
      displayDomainBoundaries: false,
    },
    {
      displayInexpensive: true,
      displayLowOverhead: false,
      displayDomainBoundaries: false,
    },
    {
      displayInexpensive: true,
      displayLowOverhead: true,
      displayDomainBoundaries: false,
    },
    {
      displayInexpensive: true,
      displayLowOverhead: true,
      displayDomainBoundaries: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <h1>what does this mean?</h1>
      <ul className='pl-16 list-disc'>
        { frame.displayInexpensive ? <li>reshaping deployables doesn&apos;t have to be expensive</li> : <></> }
        { frame.displayLowOverhead ? <li>therefore, you don&apos;t need to take on overhead before it will provide value</li> : <></> }
        { frame.displayDomainBoundaries ? <li>service boundaries are not nearly as interesting as <span>domain</span> boundaries and dependency relationships</li> : <></> }
      </ul>
    </div>
  );
}
