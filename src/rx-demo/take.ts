import {from ,Observable,Subscription} from 'rxjs';
import {take,mapTo,map} from 'rxjs/operators';
const func = () => {
  const arr:Observable<number> = from([1,2,3,4,5]);
  const example = arr.pipe(take(3),mapTo('hello'),map(i => i+'i'));
  example.subscribe(x => console.log(x)) 
}
export default func;