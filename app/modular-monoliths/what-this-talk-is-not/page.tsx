'use client'

import { caveat } from '@/app/lib/fonts';

export default function Page() {
  return (
    <div>
      <p>what this talk is not</p>
      <p className={`${caveat.className} text-yellow-600 text-xxl`}>bEsT pRacTiCEs</p>
    </div>
  )
}
