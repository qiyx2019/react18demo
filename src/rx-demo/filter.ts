import {from} from 'rxjs';
import {filter} from 'rxjs/operators';

const func = () => {
  const arr = from([1,2,3,4,5,6]);
  const example = arr.pipe(filter(i => i>4)).subscribe(x => console.log(x))
}
export default func;