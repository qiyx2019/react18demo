import {of} from "rxjs";
import {concatMap,mergeMap,delay} from "rxjs/operators";

const func = () => {
  const source = of(2000,1000);
  const example = source.pipe(concatMap(x => of(x).pipe(delay(x))));
  example.subscribe(x => console.log(x));
}
export default func;