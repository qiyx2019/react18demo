import {interval ,timer} from "rxjs";
import {takeUntil} from "rxjs/operators";

const func = () => {
  const source = interval(1000);
  const time$ = timer(5000);
  const example = source.pipe(takeUntil(time$));
  example.subscribe(x => console.log(x));
}
export default func;