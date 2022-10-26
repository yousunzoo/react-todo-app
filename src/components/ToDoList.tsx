import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../atoms";
import CategoriesS from "./CategoriesS";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  margin: auto;
  padding: 50px;
  row-gap: 10px;
  h1 {
    font-size: 30px;
    text-align: center;
    font-weight: 700;
  }
`;

const ToDoWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  select {
    width: 100%;
    height: 40px;
    padding: 0 20px;
    border: none;
    font-size: 16px;
    border-radius: 20px;
    appearance: none;
    background-color: ${(props) => props.theme.liColor};

    option {
      border: none;
      background-color: ${(props) => props.theme.tabColor};
      color: white;
      padding: 5px 0;
      box-sizing: content-box;
    }
  }
  form {
    position: relative;
    width: 100%;
    input {
      width: 100%;
      height: 40px;
      background-color: ${(props) => props.theme.liColor};
      border: none;
      padding: 0 20px;
      border-radius: 20px;
      font-size: 18px;
    }
    button {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
      align-content: center;
      border: transparent;
      background-color: transparent;
      img {
        position: absolute;
        filter: opacity(0.5) drop-shadow(0 0 0 green);
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const LiContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  background-color: white;
  padding: 40px 30px;
  border-radius: 20px;

  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: ${(props) => props.theme.liTextColor};
    margin-bottom: 15px;
    padding: 15px 0;
    border-bottom: 3px dotted green;
    :first-child {
      padding-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
    span {
      font-size: 16px;
      text-transform: capitalize;
    }
  }
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <Container>
      <h1>TODOLIST</h1>
      <hr />
      <ToDoWrap>
        <CategoriesS />
        <CreateToDo />
      </ToDoWrap>
      <LiContainer>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </LiContainer>
    </Container>
  );
}

export default ToDoList;
