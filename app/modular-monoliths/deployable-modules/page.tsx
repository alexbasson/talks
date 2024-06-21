export default function Page() {
  return (
    <div>
      <h1>deployable modules</h1>
      <ul>
        <li>1 deployable module = 1 deployable service</li>
        <li>imports everything to be deployed in this service</li>
        <li>
          defines configuration,<br />
          knows about the deployment environment<br />
          contains database migrations for the service&apos;s db
        </li>
      </ul>
    </div>
  )
}
