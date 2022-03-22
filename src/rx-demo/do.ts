import {of} from "rxjs";
import {tap,map} from "rxjs/operators";

const source = of(1,2,3,4,5);
const tap_ = source.pipe(
  tap(value => console.log(`before map`+value)),
  map(value => value+10),
  tap(value =>console.log(`after map`+value))
)
export default tap_;