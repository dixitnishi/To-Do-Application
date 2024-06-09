
import ToDo from "./ToDo";
import useGet from "../store/useGet";


function Todos() {
  // const { todos } = useContext(ToDoContext);

  const todos = useGet("https://sum-server.100xdevs.com/todos");
  
  return (
    <div className="flex justify-center">
      <div className="mt-12 bg-[#B4D4FF] w-1/2 px-6 py-4 rounded-xl h-max mb-2">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <ToDo title={todo.title} description={todo.description} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
