import {deployableGreen} from "@/app/lib/definitions";

export default function Page() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
      <div>
        <h1 className={deployableGreen.className}>deployable modules</h1>
        <ul className={"pl-16 list-disc"}>
          <li>1 deployable module = 1 deployable service</li>
          <li><span className={deployableGreen.className}>imports everything to be deployed</span> in this service</li>
          <li>
            defines <span className={deployableGreen.className}>configuration</span>,<br/>
            knows about the deployment <span className={deployableGreen.className}>environment</span><br/>
            contains <span className={deployableGreen.className}>database migrations</span> for the service&apos;s db
          </li>
        </ul>
      </div>
    </div>
  )
}
