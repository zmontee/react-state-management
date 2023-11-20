import React, {useCallback, useMemo, useState} from 'react';

const SortedList = ({ list, sortFunc }) => {
  const sortedList = useMemo(() => {
    return list.sort(sortFunc);
  }, [list, sortFunc]);

  return (
    <ul>
      {sortedList.map(name =>
        <li key={name}>{name}</li>
      )}
    </ul>
  )
}

const UseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [names, setNames] = useState(["John", "Paul", "George", "Ringo"]);

  //bad usage of useMemo
  const countTotal = useMemo(() => count1 + count2, [count1, count2]);

  const sortFunc = useCallback((a, b) => a.localeCompare(b), []);

  return (
    <div>
      <div>Total: {countTotal}</div>
      <button onClick={() => setCount1(count1 + 1)}>
        Count1: {count1}
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Count2: {count2}
      </button>
      <SortedList list={names} sortFunc={sortFunc} />
    </div>
  );
};

export default UseMemo;