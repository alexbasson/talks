import {policyBlue} from "@/app/lib/definitions";

export default function Page() {
  return (
    <div className='padding-horizontal' style={{display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
      <div>
        <h1 className={policyBlue.className}>policy modules</h1>
        <ul className={"pl-16 list-disc"}>
          <li>&ldquo;high-level policy&rdquo;</li>
          <li><span className={policyBlue.className}>defines the domain model</span> for a specific bounded context</li>
          <li>defines interfaces, data structures, operations <span className={policyBlue.className}>exclusively in domain terms</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
