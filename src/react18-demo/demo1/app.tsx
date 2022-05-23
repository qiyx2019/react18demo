import React, {
  useState,
  useTransition,
  useDeferredValue,
  Suspense,
  useRef,
  useEffect,
} from 'react'
import ExpensiveView from '@/react18-demo/demo1/expensive-view'
import './app.css'

function App() {
  const [value, setValue] = useState(0)
  const [isStartTransition, setIsStartTransition] = useState(false)
  const [renderValue, setRenderValue] = useState(0)
  const deferredValue = useDeferredValue(value, { timeoutMs: 2000 })

  const [isPending, startTransition] = useTransition({
    timeoutMs: 100,
  })

  const atRangeChange = React.useCallback(
    (e) => {
      setValue(e.target.value)
      if (isStartTransition) {
        startTransition(() => {
          setRenderValue(e.target.value / 1)
        })
      } else {
        setRenderValue(e.target.value / 1)
      }
    },
    [isStartTransition, startTransition]
  )

  return (
    <div className="App">
      <div className="app-content">
        <label>
          <input
            type="checkbox"
            checked={isStartTransition}
            onChange={(e) => {
              setIsStartTransition(e.target.checked)
            }}
          />
          useTransition
        </label>
        <h3>inpunt:{value}</h3>
        <h3>deferredValue:{deferredValue}</h3>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={atRangeChange}
        />
        {isPending ? ' Loading...' : null}
        <ExpensiveView count={renderValue} />
      </div>
    </div>
  )
}

export default App
