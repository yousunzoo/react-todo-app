import { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [ToDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {ToDoError !== "" ? ToDoError : null}
      </form>
    </div>
  );
} */

function ToDoList() {
  const { register, formState, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}>
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", {
            required: "Password is required",
            minLength: 5,
          })}
          placeholder="Username"
        />
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 10,
              message: "Your password is too short",
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: true, minLength: 10 })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
