import * as React from 'react'
interface State {
  hasError:boolean;
}
class ErrorBoundary extends React.Component<any, State> {
  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器

    console.log(error, errorInfo)
  }

  render() {
    console.log(this.state.hasError)
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染

      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
export default ErrorBoundary;