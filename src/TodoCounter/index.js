import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return(
    <h2 className="TodoCounter">
      You have completed {completed} of {total} ToDos
    </h2>
  )
}


export {
  TodoCounter
};