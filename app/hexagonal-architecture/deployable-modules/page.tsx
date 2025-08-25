'use client'

import useFrame from "@/app/lib/useFrame";
import {deployableGreen} from "@/app/lib/colors";

type Frame = {
  bullet1: boolean,
  bullet2: boolean,
  bullet3: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      bullet1: false,
      bullet2: false,
      bullet3: false,
    },
    {
      bullet1: true,
      bullet2: false,
      bullet3: false,
    },
    {
      bullet1: true,
      bullet2: true,
      bullet3: false,
    },
    {
      bullet1: true,
      bullet2: true,
      bullet3: true,
    },
  ]

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal' style={{display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
      <div>
        <h1 className={deployableGreen.className}>deployable modules</h1>
        <ul className={"pl-16 list-disc"}>
          { frame.bullet1
            ? <li>1 deployable module = 1 deployable service</li>
            : <></>
          }
          { frame.bullet2
            ? <li><span className={deployableGreen.className}>imports everything to be deployed</span> in this service</li>
            : <></>
          }
          { frame.bullet3 ?
            <li>
              defines <span className={deployableGreen.className}>configuration</span>,<br/>
              knows about the deployment <span className={deployableGreen.className}>environment</span><br/>
              contains <span className={deployableGreen.className}>database migrations</span> for the service&apos;s db
            </li>
            : <></> }
        </ul>
      </div>
    </div>
  )
}
