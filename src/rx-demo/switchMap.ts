import {timer, interval,fromEvent} from 'rxjs';
import {switchMap,mapTo} from "rxjs/operators";
const func = () => {
  const source = timer(0,5000);
  const example = source.pipe(
    switchMap(()=>interval(1000))
  ).subscribe(x => console.log(x));
  const example_ = fromEvent(document, 'click').pipe(
    switchMap(()=>interval(3000).pipe(mapTo('hello ,i tap it')))
  ).subscribe(x => console.log(x));
}
export default func;