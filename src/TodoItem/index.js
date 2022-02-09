import './TodoItem.css';

const onComplete = () => {
  console.log("Hello onComplete");
}

const onDelete = () => {
  console.log("Hello onDelete");
}

function TodoItem(props){

  return(
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export {
  TodoItem 
};