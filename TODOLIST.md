# React hook form

- 기존 react에서는 ToDoList form을 만들기 위해서는 useState, event function, check validation을 일일이 컴포넌트마다 할당해야 했다. 그러지 않기 위해 recoil 라이브러리와 react hook form을 사용하려고 한다.

- 많은 코드들을 한 줄로 정리해주고, 큰 form에서 유용하다.

## useForm();

-` const { register,watch, handleSubmit, formState } = useForm();`

## register

- name, onBlur, onChange, onClick, ref를 반환하는 return 함수
- `console.log(register("toDo")`를 해보면 name이 toDo인 Object가 반환된다.
- input 태그 안에 {...register("toDo")}를 작성하면 이벤트와 값들이 다 들어간다.

## watch

- form의 입력값들의 변화를 관찰할 수 있게 해주는 함수
- form에 있는 모든 input에서 일어나는 값들을 객체 형식으로 반환

## handleSubmit

- onSubmit의 기능을 대신함
- hanndleSubmit는 두 가지 argument가 필요함. 첫번째는 onValid일 때 실행할 함수, 두번째는 onInvalid일 때 실행할 함수(생략 가능)
- form을 모두 검사한 뒤, 데이터가 유효할 때만 onValid 함수를 호출하여 form 데이터를 받는다.

- required가 기본적으로 HTML에 들어가있지만, 기능을 지원하지 않는 사이트에서의 오작동을 방지하기 위해 HTML에 의지하지 않고 JS를 사용해서 validation을 실행할 수 있다.
  -> register 함수 안에 {required : true}를 넣어준다.
  => required인 input을 입력하지 않고 제출하면, onValid가 작동하지 않고 해당 input으로 커서를 옮겨준다.
- validation도 register 함수 안에 입력 가능. : `{minlength : 10}`

## formState

- `formState.errors` : form을 제출했을 때, 어떤 항목에서 어떤 error가 있는지를 알려준다.
- 해당 속성에 오류가 발생할 때 어떤 메세지를 띄울지 설정 가능
