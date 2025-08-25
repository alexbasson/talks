export default function Page() {
  return (
    <div className='padding-horizontal'>
      <div className={"font-mono"}>
        <h1>git show --name-status</h1>
        <ul className={"text-sm list-none font-bold"}>
          <li>A&nbsp;&nbsp;deployable-2/app.py</li>
          <li>M&nbsp;&nbsp;deployable-1/app.py</li>
        </ul>
      </div>

      <p>Everything else stays put!</p>
    </div>
  )
}
