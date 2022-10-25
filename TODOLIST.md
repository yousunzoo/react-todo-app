# React hook form

- 기존 react에서는 ToDoList form을 만들기 위해서는 useState, event function, check validation을 일일이 컴포넌트마다 할당해야 했다. 그러지 않기 위해 recoil 라이브러리와 react hook form을 사용하려고 한다.

- 많은 코드들을 한 줄로 정리해주고, 큰 form에서 유용하다.

## useForm();

-` const { register,watch } = useForm();`

## register

- name, onBlur, onChange, onClick, ref를 반환하는 return 함수
- `console.log(register("toDo")`를 해보면 name이 toDo인 Object가 반환된다.
- input 태그 안에 {...register("toDo")}를 작성하면 이벤트와 값들이 다 들어간다.

## watch

- form의 입력값들의 변화를 관찰할 수 있게 해주는 함수
- form에 있는 모든 input에서 일어나는 값들을 객체 형식으로 반환
