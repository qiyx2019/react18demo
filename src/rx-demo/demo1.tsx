import * as React from 'react';
import tap_ from "./do";
import message from './delay';
import debouncedTimeinput from './dt';
// import func from './distinctUntilChanged'
// import func from './filter'
// import func from "./take"
// import func from "./takeUntil"
// import func from "./bufferTime"
// import func from "./concatMap"
// import func from "./scan"
import func from "./switchMap"
const App = () => {
  func();
  return <div>
    <button onClick={()=> debouncedTimeinput().subscribe(x => console.log(x))}>click</button>
    <input id="input"  type="text" />
  </div>
}
export default App;