import './CreateTodoButton.css';


function CreateTodoButton(props) {
  const handleClick = (msg) => {
    console.log(msg);
  }

  
  return (
    <button 
      className="CreateTodoButton"
      onClick={() => { handleClick("My message") } }
    >
      +
    </button>
  );
}

export {
  CreateTodoButton
};
