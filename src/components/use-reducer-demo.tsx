import * as React from 'react';
import {useStore} from '@/utils/store';
const reducer = (state,action)=> {
  let {type,payload} = action;
  console.log(type,payload)
  if(type === 'getCount') {
    state.count += payload;
    return {...state}
  }
  return state
}
const UseReducerDemo = (props)=> {
  
   const [state,dispatch] = React.useReducer(reducer,{count:0});
  return <div>
    <button onClick={(()=>dispatch({
      type:"getCount",
      payload:1,
    }))}>{'+'}</button>
    {state.count}
  </div>
}
UseReducerDemo.displayName ='UseReducerDemo'
export default UseReducerDemo;