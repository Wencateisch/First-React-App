import "./App.css";
import Header from "Header.js";
import { About } from "About.js";
import { Footer } from "Footer.js";
import { Todo } from "Todo.js";

function App() {

  let todolist = [
    {

      sno: 1,
      title: "Learn React",
      desc: "Learn React From Scratch",
    },
    {

      sno: 2,
      title: "Learn Java",
      desc: "Learn Java From Scratch",
    },
    {

      sno: 3,
      title: "Learn Flutter",
      desc: "Learn Flutter From Scratch",
    },
  ]

  const onDelete = () => {
    console.log("I am Delete");
  }

  let empty = []

  return (
    <>
      <Header title="Venkatesh Todos" />
      <About />
      <Todo todolist={todolist} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

