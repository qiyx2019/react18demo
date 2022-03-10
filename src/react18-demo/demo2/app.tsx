import { useState, useTransition, Suspense } from 'react'
import * as React from 'react'
import GlobalLoader from './global-loader'
import Content from './content'
import { fetchData } from './fakeApi'
import './app.css'
const initialResource = fetchData()

export default function App() {
  const [tab, setTab] = useState(0)
  const [resource, setResource] = useState(initialResource)
  const [isPending, startTransition] = useTransition()

  function handleClick(index) {
    startTransition(() => {
      setTab(index)
      setResource(fetchData())
    })
  }

  return (
    <>
      <GlobalLoader isLoading={isPending} />
      <ul className="inline">
        <li
          className={tab === 0 ? 'selected' : null}
          onClick={() => handleClick(0)}
        >
          demo
        </li>
        <li
          className={tab === 1 ? 'selected' : null}
          onClick={() => handleClick(1)}
        >
          use-transition-demo
        </li>
        <li
          className={tab === 2 ? 'selected' : null}
          onClick={() => handleClick(2)}
        >
          use-deferred-value-demo
        </li>
      </ul>
      <div className={`tab ${isPending ? 'pending' : null}`}>
        <Suspense fallback={<Loader />}>
          {tab === 0 && <Content page="demo" resource={resource} />}
          {tab === 1 && <Content page="use-transition-demo" resource={resource} />}
          {tab === 2 && <Content page="use-deferred-value-demo" resource={resource} />}
        </Suspense>
      </div>
    </>
  )
}
function Loader() {
  const [count, setCount] = useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => setCount((c) => (c + 1) % 4), 150)

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [])

  return (
    <div className="loader">
      Loading {Array.from(new Array(count), () => '.')}
    </div>
  )
}
