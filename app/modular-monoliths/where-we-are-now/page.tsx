'use client'

import Image from 'next/image';
import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayTitle: boolean,
  displayRunLocally: boolean,
  displayFeatures: boolean,
  displayRepo: boolean,
  displayDoingItWrong: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayTitle: false,
      displayRunLocally: false,
      displayFeatures: false,
      displayRepo: false,
      displayDoingItWrong: false,
    },
    {
      displayTitle: true,
      displayRunLocally: false,
      displayFeatures: false,
      displayRepo: false,
      displayDoingItWrong: false,
    },
    {
      displayTitle: true,
      displayRunLocally: true,
      displayFeatures: false,
      displayRepo: false,
      displayDoingItWrong: false,
    },
    {
      displayTitle: true,
      displayRunLocally: true,
      displayFeatures: true,
      displayRepo: false,
      displayDoingItWrong: false,
    },
    {
      displayTitle: true,
      displayRunLocally: true,
      displayFeatures: true,
      displayRepo: true,
      displayDoingItWrong: false,
    },
    {
      displayTitle: true,
      displayRunLocally: true,
      displayFeatures: true,
      displayRepo: true,
      displayDoingItWrong: true,
    },
  ];

  const frame = frames[useFrame()];

  return (
    <div>
      <div style={{
        zIndex: 0,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image
          src="/dorothy-witch.jpg"
          alt="wicked with and dorothy"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div>
        <div>
          {frame.displayTitle ? <p>5 microservices</p> : <></>}
          {frame.displayRunLocally ? <p>ugh, i&apos;ll have to...<em>run everything locally...</em></p> : <></>}
          {frame.displayFeatures ? <p>can&apos;t wait to work on features again...</p> : <></>}
          {frame.displayRepo ? <p>which repo was that code in?</p> : <></>}
        </div>

        {frame.displayDoingItWrong ? (
          <div className={'text-red-600 font-bold z-10'}>
            <h2 className={'rotate-12 mt-[-200px]'}>DOING IT WRONG</h2>
            <h2 className={'-rotate-12 mt-[-250px]'}>EAT YOUR VEGETABLES</h2>
            <h2 className={'rotate-6 mt-[230px] ml-[50px]'}>DOING IT WRONG</h2>
          </div>
        ) : <></>
        }
      </div>
    </div>
  )
}
