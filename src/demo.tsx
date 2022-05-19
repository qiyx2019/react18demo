import { useCallback, useMemo, useState, useEffect, memo } from "react";
import * as React from "react";
export default () => {
  const [count, setCount] = useState(null);
  const [number, setNumber] = useState(null);
  const handleChange = (e) => {
    setCount(e.target.value);
    console.log(e.target.value);
  };
  let data = useMemo(() => count, [count]);
  const handleChange1 = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const Props = {
   
    handleChange1,
  };
  console.log("demo渲染了");
  return (
    <div>
      <div>{count}</div>

      <input onChange={handleChange} />
      <Child {...Props} />
      <Child2 />
    </div>
  );
};
const Child = memo(({ data, handleChange1 }:any) => {
  console.log("child渲染了");
  return (
    <div>
      child --
      <button onClick={handleChange1}>+</button>
    </div>
  );
});
const Child2 = memo(()=> {
    console.log("child2渲染了");
    return <>
    child2
    </>
})