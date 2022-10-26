import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const array = [
  {
    text: "5",
    id: 1666748536994,
    category: "TO_DO",
  },
  {
    text: "4",
    id: 1666748536515,
    category: "TO_DO",
  },
  {
    text: "3",
    id: 1666748536276,
    category: "TO_DO",
  },
  {
    text: "2",
    id: 1666748536071,
    category: "TO_DO",
  },
  {
    text: "1",
    id: 1666748535782,
    category: "TO_DO",
  },
];

// 1) find to do based on id [2]

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      console.log(
        "replace the to do in the index",
        targetIndex,
        "with",
        newToDo
      );
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
export default ToDo;
