import { useEffect, useState } from "react";
import axios from "axios";

function useGet(url) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.post(url,);
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
