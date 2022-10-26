import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CategoriesS from "./CategoriesS";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CategoriesS />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
