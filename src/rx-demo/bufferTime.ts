import {interval} from 'rxjs';
import {bufferTime} from "rxjs/operators";
const func = () => {
  //收集发出的值，直到经过了提供的时间才将其作为数组发出
  const source = interval(500);
  const example = source.pipe(bufferTime(2000,1000));
  example.subscribe(x => console.log(x));
}
export default func;