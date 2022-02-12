import './CreateTodoButton.css';


function CreateTodoButton(props) {
  const handleClick = () => {
    props.setOpenModal(!props.openModal);
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
