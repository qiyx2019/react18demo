import * as React from 'react';
import * as co from 'co'
import {cloneDeep} from 'lodash';

class Effect {
  static exec(effect,...arg){
    let arr = Array.apply(null,arg);
    //这里使用co自动执行saga
    co(effect.apply(null,arr));
  }
}

export const useStore = (initModel) => {
  let init = cloneDeep(initModel.state);
  let initState = null;
  
  const Reducer = (state,action) => {
    console.log(state)
    if(!initState) {
      initState = cloneDeep(state);
    }
    let {effects,reducers} = initModel;
    let type = action.type;
    console.log(effects,reducers)
    if(effects.hasOwnProperty(type)) {
      Effect.exec(effects[type],action)
    }
    if(reducers.hasOwnProperty(type)) {
      state = cloneDeep(reducers[type](state,action))
    }  
    return {...state}
  }
  const [state,dispatch] = React.useReducer(Reducer,init);
  
  return [state,dispatch]
}
