import './TodoSearch.css';

function TodoSearch() {
  const onSearchValueChanged = (event) => {
    console.log('Searching for: '+ event.target.value);
  }

  return (
    <input 
      className="TodoSearch" 
      placeholder="Cebolla" 
      onChange={onSearchValueChanged}
    />
  );
}

export {
  TodoSearch
};