import { atom, selector } from "recoil";

type categories = "TO_DO" | "DOING" | "DONE";
export interface IToDo {
  text: string;
  id: number;
  category: categories; // 옵션을 제한할 수 있음
}

export const categoryState = atom<categories>({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
