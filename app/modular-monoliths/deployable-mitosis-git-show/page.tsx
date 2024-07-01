export default function Page() {
  return (
    <div>
      <div className={"font-mono"}>
        <h1>git show --name-status</h1>
        <ul className={"text-sm list-none font-bold"}>
          <li>A&nbsp;&nbsp;deployable-2/build.gradle</li>
          <li>A&nbsp;&nbsp;deployable-2/src/main/.../Deployable2Application.java</li>
          <li>M&nbsp;&nbsp;deployable-1/build.gradle</li>
          <li>M&nbsp;&nbsp;deployable-1/src/main/.../Deployable1Application.java</li>
        </ul>
      </div>

      <p>Everything else stays put!</p>
    </div>
  )
}
