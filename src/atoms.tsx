import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE"; // 옵션을 제한할 수 있음
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
