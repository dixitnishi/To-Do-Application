import { createContext, useState } from "react";

export const ToDoContext = createContext({
  todos: [],
  handleAdd: () => {},
});

const ToDoContextProvider = ({ children }) => {
  const [todoState, setToDoState] = useState({
    todos: [],
  });

  function handleAddToDo(todoData) {
    setToDoState((prevState) => {
      return {
        ...prevState,
        todos: [...prevState.todos, todoData],
      };
    });
  }

  const contextValue = {
    todos: todoState.todos,
    handleAdd: handleAddToDo,
  };

  return (
    <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
