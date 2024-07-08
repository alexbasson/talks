'use client'

import useFrame from "@/app/lib/useFrame";

type Frame = {
  displayNeverGoodIdea: boolean,
  displayNeverPlanAhead: boolean,
  displayNotABestPractice: boolean,
}

export default function Page() {
  const frames: Frame[] = [
    {
      displayNeverGoodIdea: false,
      displayNeverPlanAhead: false,
      displayNotABestPractice: false,
    },
    {
      displayNeverGoodIdea: true,
      displayNeverPlanAhead: false,
      displayNotABestPractice: false,
    },
    {
      displayNeverGoodIdea: true,
      displayNeverPlanAhead: true,
      displayNotABestPractice: false,
    },
    {
      displayNeverGoodIdea: true,
      displayNeverPlanAhead: true,
      displayNotABestPractice: true,
    },
  ];

  const frame = useFrame<Frame>(frames);

  return (
    <div>
      <h1>what does this <span className={'italic'}>not</span> mean?</h1>
      <ul className={"list-disc"}>
        { frame.displayNeverGoodIdea ? <li>&ldquo;starting out with separate deployables is never a good idea!&rdquo;</li> : <></> }
        { frame.displayNeverPlanAhead ? <li>&ldquo;fantastic, I&apos;ll never bother planning ahead ever again!&rdquo;</li> : <></> }
        { frame.displayNotABestPractice ? <li>&ldquo;MODULAR MONOLITHS ARE A BEST PRACTICE&rdquo;</li> : <></> }
      </ul>
    </div>
  );
}
