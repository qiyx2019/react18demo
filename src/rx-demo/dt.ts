import {fromEvent,timer,Observable} from "rxjs";
import {debounceTime,map} from "rxjs/operators";

const debouncedInput = ():Observable<Event> => {
  const input:HTMLElement = document.querySelector("#input");
  const example:Observable<Event> = fromEvent(input,'keyup').pipe(
    map(i => i.currentTarget?.value)
  );
  return example.pipe(debounceTime(500));
}
export default debouncedInput;