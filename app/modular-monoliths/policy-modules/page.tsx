import {domainBlue} from "@/app/lib/definitions";

export default function Page() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
      <div>
        <h1 className={domainBlue.className}>policy modules</h1>
        <ul className={"pl-16 list-disc"}>
          <li>&ldquo;high-level policy&rdquo;</li>
          <li><span className={domainBlue.className}>defines the domain model</span> for a specific bounded context</li>
          <li>defines interfaces, data structures, operations <span className={domainBlue.className}>exclusively in domain terms</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
