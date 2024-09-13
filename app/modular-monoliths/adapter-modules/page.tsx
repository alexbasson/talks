import {adapterRed} from "@/app/lib/definitions";

export default function Page() {
  return (
    <div className='padding-horizontal' style={{display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
      <div>
        <h1 className={adapterRed.className}>adapter modules</h1>
        <ul className={"pl-16 list-disc"}>
          <li>&ldquo;low-level detail&rdquo;</li>
          <li><span className={adapterRed.className}>specific technological solution</span> to a problem defined by a
            policy module
          </li>
          <li>
            <ul>
              <li><span className={adapterRed.className}>primary</span>: invokes an operation</li>
              <li><span className={adapterRed.className}>secondary</span>: implements an interface</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
