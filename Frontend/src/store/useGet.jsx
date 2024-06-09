import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToDoContext } from "./AppContext";

function useGet(url) {
  // const [todos, setTodos] = useState([]);
  const {set} = useContext(ToDoContext);
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get(url);
        setTodos(response.data.todos);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, [url]);
  return todos;
}

export default useGet;
