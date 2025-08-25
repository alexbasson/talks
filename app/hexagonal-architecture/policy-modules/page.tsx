'use client'

import useFrame from "@/app/lib/useFrame";
import {policyBlue} from "@/app/lib/colors";

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
        <h1 className={policyBlue.className}>policy modules</h1>
        <ul className={"pl-16 list-disc"}>
          { frame.bullet1 ? <   li>&ldquo;high-level policy&rdquo;</li> : <></> }
          { frame.bullet2 ? <li><span className={policyBlue.className}>defines the domain model</span> for a specific bounded context</li> : <></> }
          { frame.bullet3 ? <li>defines interfaces, data structures, operations <span className={policyBlue.className}>exclusively in domain terms</span></li> : <></> }
        </ul>
      </div>
    </div>
  )
}
