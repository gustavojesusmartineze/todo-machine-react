import './CreateTodoButton.css';


function CreateTodoButton(props) {
  const handleClick = () => {
    props.setOpenModal(prevState => !prevState);
  }

  
  return (
    <button 
      className="CreateTodoButton"
      onClick={() => { handleClick() } }
    >
      +
    </button>
  );
}

export {
  CreateTodoButton
};
