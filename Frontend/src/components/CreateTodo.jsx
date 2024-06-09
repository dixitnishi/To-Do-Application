import { useContext, useRef } from "react";
import { ToDoContext } from "../store/AppContext";


function CreateTodo() {
  const { handleAdd } = useContext(ToDoContext);
  const title = useRef();
  const description = useRef();

  function handleClick() {
    const newTodo = {
      title: title.current.value,
      description: description.current.value,
      completed: false,
    };

    handleAdd(newTodo);

    title.current.value="";
    description.current.value = "";
  }

  return (
    <div className="flex justify-center mt-12">
      <div className="flex justify-between bg-[#B4D4FF] p-4 rounded-xl w-1/2">
        <input
          className="mx-4 rounded-md px-3 bg-[#EEF5FF] border-s-inherit"
          type="text"
          placeholder="Title"
          ref={title}
        />
        <input
          className="mx-4 rounded-md px-3 bg-[#EEF5FF] "
          type="text"
          placeholder="Description"
          ref={description}
        />
        <button
          onClick={handleClick}
          className="mx-4 bg-[#EEF5FF] px-4 py-1 rounded-md hover:bg-[#176B87] hover:text-white">
          Add a todo
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
