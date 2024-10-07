'use client'

import {adapterRed} from "@/app/lib/definitions";
import useFrame from "@/app/lib/useFrame";

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
        <h1 className={adapterRed.className}>adapter modules</h1>
        <ul className={"pl-16 list-disc"}>
          { frame.bullet1 ? <li>&ldquo;low-level detail&rdquo;</li> : <></> }
          { frame.bullet2 ? <li><span className={adapterRed.className}>specific technological solution</span> to a problem defined by a policy module</li> : <></> }
          { frame.bullet3 ?
            <li>
              <ul>
                <li><span className={adapterRed.className}>primary</span>: invokes an operation</li>
                <li><span className={adapterRed.className}>secondary</span>: implements an interface</li>
              </ul>
            </li>
            : <></> }
        </ul>
      </div>
    </div>
  )
}
