import {from,Subscription} from 'rxjs';
import {distinctUntilChanged } from "rxjs/operators";

const func = () => {
  const obj = {name:'hello'}
  const arr = from([1,1,2,2,3,1,2,3]);
  const arrObj = from([
    obj,obj,obj,obj
  ]);
  const distinctSub:Subscription = arr.pipe(
    distinctUntilChanged()
  ).subscribe(x => console.log(x,'distinctSub'));
  const nonDistinctSub:Subscription = arr.subscribe(x => console.log(x,'nonDistinctSub'))
  arrObj.pipe(distinctUntilChanged()).subscribe(x => console.log(x,'distinctUntilChanged'));
  arrObj.subscribe(x => console.log(x,'nonDistinctSub'))
}
export default func;