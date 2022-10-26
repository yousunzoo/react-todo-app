# React hook form

- 기존 react에서는 ToDoList form을 만들기 위해서는 useState, event function, check validation을 일일이 컴포넌트마다 할당해야 했다. 그러지 않기 위해 recoil 라이브러리와 react hook form을 사용하려고 한다.

- 많은 코드들을 한 줄로 정리해주고, 큰 form에서 유용하다.
- react-hook-form에서 문자열을 리턴하면 에러 메세지를 리턴하게 된다.

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
- form을 모두 검사한 뒤, 데이터가 유효할 때만 form 데이터를 받고 onValid 함수를 호출한다.

# Validation check

- required가 기본적으로 HTML에 들어가있지만, 기능을 지원하지 않는 사이트에서의 오작동을 방지하기 위해 HTML에 의지하지 않고 JS를 사용해서 validation을 실행할 수 있다.
  -> register 함수 안에 {required : true}를 넣어준다.
  => required인 input을 입력하지 않고 제출하면, onValid가 작동하지 않고 해당 input으로 커서를 옮겨준다.
- validation도 register 함수 안에 입력 가능. : `{minlength : {value:5, message:"Your password is too short"}, maxlength:20}`

## formState

- `formState.errors` : form을 제출했을 때, 어떤 항목에서 어떤 error가 있는지를 알려준다.
- 해당 속성에 오류가 발생할 때 어떤 메세지를 띄울지 설정 가능
- `{errors?.email?.message}`을 통해서 메세지 내용을 사용자에게 보여줄 수 있다.

## RegExp(정규식)

- 또다른 validation 방법
- 코드에 문자열이 어떤 종류인지, 어떤 모양으로 생겨야하는지를 전달
- register props에 pattern을 입력
- 정규식에서는 "."도 문자로 취급 되기 때문에 앞에 역슬래시(\)를 붙여서 특수문자로 읽히도록 작성해야 한다.

* ^ : 문장의 시작
* [] : 문자셋 안의 아무문자
* - : 하나 또는 많이

## defaultValues

: useForm 안에 들어가는 값, 컴포넌트가 처음 렌더링될 때 초기값으로 사용된다.

## setError()

- 하나 이상의 오류를 수동으로 설정할 수 있다.

`setError("name", {message : "text"})`

- "name" 자리에는 에러를 발생시킬 항목의 이름을 적어주고, 띄울 메세지도 {message : ""}로 적어준다.
- "name" 자리에 extraError 가 들어가면 특정한 항목에 해당되는 에러가 아닌 전체 form에 해당되는 에러가 된다.
- form에서 선택한 input 항목에 {shouldFocus: true }로 강제로 focus 시킬 수 있다.

# custom validation

- firstname이 "nico"라는 이름을 포함하고 있는 사람은 등록할 수 없도록 설정하려고 한다.
- register 함수 안에 ` validate: (value) => value.includes("nico") ? "no nicos allowed" : true,`를 입력
  => "nico"라는 이름을 포함하면 validate가 false 로 됨과 동시에 메세지 출력, 아니면 true 값 반환하면서 통과
- validate 안에는 Object 형식으로 여러 검사 항목을 넣을 수 있다.

- 입력값이 submit 되고 검사를 통과하면 다시 input을 비우고 싶다.
  => setValue

---

# Recoil

## useRecoilState

`const toDoState = atom<IToDo[]>({key : "toDo", default:[]})`
`const [toDos, setToDos] = useRecoilState(toDoState)`

- useRecoilState 함수는 value와 modifier 함수를 반환한다. (useState와 같은 역할)
- useRecoilValue 와 useSetRecoilState를 합친 역할

- oldToDos 자체는 배열이지만 ...oldToDos는 배열 안의 요소들을 반환한다.
- interface 속성에서 옵션을 몇가지로 제한하고 싶다면 "|" 을 이용해서 제한할 수 있다. => category : "TO_DO" | "DONE" | "DOING";

- `category !== "DOING" && <button></button>`는 `if(category !== "DOING"){<button></button>}`과 같다.

---

# TO DO category button 활성화 시키기

1. id로 해당 todo를 찾아와야 한다. - index 찾기
   setToDos로부터 oldToDos의 array를 받아오고 있고, 이 array에서 toDo의 index를 찾기 위해 toDo의 id가 props에서 온 id와 같은지 비교하고 있다.

`Array.prototype.findIndex()`

- 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환.
- 만족하는 요소가 없으면 -1 반환

`const food = ["pizza", "mango", "kimchi", "kimbab"]; const front = ["pizza"]; const back = ["kimchi", "kimbab"]; const finalPart = [...front, "carrot", ...back];`

- food 배열에서 "mango"의 자리에 "carrot"을 넣고자 한다.

1. "mango"의 위치를 구해야 한다. -- findIndex
2. food 배열을 "mango"를 기점으로 두 부분으로 나눈다. (front, back)
3. front + "carrot" + "back"을 합친 새 배열을 만든다.

- slice 함수에서 end부분을 지정하지 않으면 알아서 끝부분까지 잘라준다.
- as any : 타입스크립트에게 체크하지 말라고 선언

- map을 이용해서도 할 수 있다.
  `const onClick = (category : IToDo["category"]) => {setToDos((prev)=>prev.map((toDo)=>{if (toDo.id === id){return{...toDo, category};} return toDo;}))}`

---

# Recoil Selector

- derived state : state를 입력 받아서 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값
- selector를 사용하면 state를 만들 수 있다.

- atom : 배열
- selector : atom의 output을 변형시킴

- selector는 key와 get 값을 가진다.
- get은 options라는 인자를 받으면서 호출된다.
- options는 객체이고, get function이 들어있다. get Fn을 이용하면 selector의 내부로 atom을 가지고 올 수 있다.

- .filter() : 배열에서 조건에 맞지 않는 원소들을 제거한 배열을 return 한다.

- selector를 이용해서 category 별로 배열을 만들고자 한다.
- useRecoilValue(toDoSelector)는 배열을 반환한다.
- 배열 안의 배열을 선택하려면 `const [toDo, doing, done] = useRecoilValue(toDoSelector)`처럼 배열을 열고 순서대로 이름을 지정하면 된다.
