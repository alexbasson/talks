'use client'

import useFrame from "@/app/lib/useFrame"

type Frame = {
  displayMath: boolean,
  displayCostsVBenefits: boolean,
  displayQuestion: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayMath: false,
      displayCostsVBenefits: false,
      displayQuestion: false,
    },
    {
      displayMath: true,
      displayCostsVBenefits: false,
      displayQuestion: false,
    },
    {
      displayMath: true,
      displayCostsVBenefits: true,
      displayQuestion: false,
    },
    {
      displayMath: true,
      displayCostsVBenefits: true,
      displayQuestion: true,
    },
  ]

  const frame = useFrame<Frame>(frames);

  return (
    <div className='padding-horizontal'>
      <p>what this talk is</p>
      { frame.displayMath ? <p className={'text-xl text-yellow-600 font-mono'}>math</p> : <></> }
      { frame.displayCostsVBenefits ? <p>weighing costs versus benefits</p> : <></> }
      { frame.displayQuestion ? <p>how can we get more benefits for less cost?</p> : <></> }
    </div>
  )
}
