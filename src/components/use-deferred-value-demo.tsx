import * as React from 'react';

const getLis = (key) => {
  const arr = [];
  for (let i = 0; i < 10000; i++) {
    if (String(i).includes(key)) {
      arr.push(<li key={i}>{i}</li>);
    }
  }
  return arr;
};
const UseDeferredValueDemo = () => {
  const [value, setValue] = React.useState("");
  const deferredValue = React.useDeferredValue(value);
  console.log(value,'value');
  console.log(deferredValue,'deferredValue');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div >
      <div>
        <input onChange={handleChange} />
      </div>
      <div>
        <ul>{deferredValue ? getLis(deferredValue) : null}</ul>
      </div>
    </div>
  );
}
export default UseDeferredValueDemo;