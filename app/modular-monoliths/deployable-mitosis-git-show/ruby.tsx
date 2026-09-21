export default function RubyDeployableMitosisGitShow() {
  return (
    <div className='padding-horizontal'>
      <div className={"font-mono"}>
        <h1>git show --name-status</h1>
        <ul className={"text-sm list-none font-bold"}>
          <li>A&nbsp;&nbsp;deployable-2/app.rb</li>
          <li>M&nbsp;&nbsp;deployable-1/app.rb</li>
        </ul>
      </div>
      <p>Everything else stays put!</p>
    </div>
  )
}
