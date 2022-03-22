import {of,merge} from "rxjs";
import {mapTo,delay} from "rxjs/operators";

const delay_ = of(null);
const message = merge(
  delay_.pipe(mapTo('hello')),
  delay_.pipe(mapTo('world'),delay(1000)),
  delay_.pipe(mapTo('qyx'),delay(2000)),
  delay_.pipe(mapTo('lm'),delay(3000))
)
export default message;