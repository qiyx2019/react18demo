import * as React from 'react';

const UseRefDemo = (props) => {
  const myref = React.useRef(null);
  const myref1 = React.useRef(null);
  const myref2 = React.useRef(null);
  const onButtonClick = () => {
    myref.current?.focus();
    myref1.current.innerHTML = Math.random()
    console.log(myref1.current?.innerHTML);
  }
  const FancyInput = React.forwardRef((props,ref) => {
    const inp = React.useRef(null);
    React.useImperativeHandle(ref,()=>({
      focus:()=>inp.current?.focus()
    }))
    return <input ref={inp} type="text" />
  })
  return <>
    <input ref={myref} />
    <div ref={myref1}>asd</div>
    
    <button onClick={onButtonClick}>Focus the input</button>
    <FancyInput ref={myref2} />
  </>
}

UseRefDemo.displayName = "UseRefDemo"
export default UseRefDemo;