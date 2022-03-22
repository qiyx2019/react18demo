import {of,Subject,interval} from 'rxjs';
import { scan,last,distinctUntilChanged,map } from 'rxjs/operators';
const func = () => {
  const source = of(1,2,3,4);
  const example = source.pipe(scan(
    (acc,curr)=> acc+curr,0
  ),last())
  example.subscribe(x => console.log(x));
  const subject = new Subject();
  const p = subject.pipe(scan(
    (acc,curr)=> Object.assign({},acc,curr),{}
  )).subscribe(x => console.log(x));
  subject.next({name:'1'});
  subject.next({age:'1'});
  const scanf= interval(1000).pipe(
    scan((acc,curr)=> [...acc,curr],[]),
    map(r => r[Math.floor(Math.random()*r.length)]),
    distinctUntilChanged(),
  ).subscribe(x => console.log(x))
}
export default func;