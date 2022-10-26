import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

const Btns = styled.div`
  display: flex;
  button {
    position: relative;
    width: 30px;
    background-color: transparent;
    border: none;

    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 20px;
      height: 20px;
    }
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCat: Categories) => {
    console.log(newCat);
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: newCat };
      console.log(
        "replace the to do in the index",
        targetIndex,
        "with",
        newToDo
      );
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteToDo = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      <Btns>
        {category !== Categories.DOING && (
          <button onClick={() => onClick(Categories.DOING)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
              alt="doing"
            />
          </button>
        )}
        {category !== Categories.TO_DO && (
          <button onClick={() => onClick(Categories.TO_DO)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3031/3031267.png"
              alt="to_do"
            />
          </button>
        )}
        {category !== Categories.DONE && (
          <button onClick={() => onClick(Categories.DONE)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32282.png"
              alt="done"
            />
          </button>
        )}
        <button onClick={deleteToDo}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
            alt="delete"
          />
        </button>
      </Btns>
    </li>
  );
}
export default ToDo;
