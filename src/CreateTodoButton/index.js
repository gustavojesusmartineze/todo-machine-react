import './CreateTodoButton.css';


function CreateTodoButton(props) {
  const handleClick = () => {
    console.log("Hello click");
  }

  
  return (
    <button 
      className="CreateTodoButton"
      onClick={handleClick}
    >
      +
    </button>
  );
}

export {
  CreateTodoButton
};
