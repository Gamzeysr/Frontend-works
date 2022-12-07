import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    //!actiondaki addTodo yu buraya cagırdık ve içerisnede useStatetext verisini koyduk. 
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;

// ! Add butonuna basıldıgında handleSubmit calısyor
// ? inputa bir seyler yazılıp Add butonuna tıkladıgında o veriyi text de tutor. o yüzden text verisini dispatch etmem lazım . oyüzden✨ const dispatch = useDispatch(); ✨ hookunu cagırıyorum.

//? Kullanıxcıının girdiği degerleri useState hooku tutuyr