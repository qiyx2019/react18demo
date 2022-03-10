import * as React from 'react'

function ExpensiveView(props) {
  const { count } = props
  const length = count * 20 + 100
  return (
    <div className="expensive-view">
      <h4>SVG Circle count:{length}</h4>
      {Array.from(Array(length).keys()).map((v) => {
        const per = (Math.PI * 2) / length
        const style = {
          left: Math.cos(per * v) * 200 + 250 - 50,
          top: Math.sin(per * v) * 120 + 250 - 50,
        }
        return (
          <div className="box" key={v} style={style}>
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="25" />
            </svg>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(ExpensiveView)
