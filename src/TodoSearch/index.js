import { useState } from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearch] = useState('');

  const onSearchValueChanged = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <>
      <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        value={searchValue}
        onChange={onSearchValueChanged}
      />
      <p>Searching for: {searchValue}</p>
    </>
  );
}

export {
  TodoSearch
};