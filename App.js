import './App.css';
import Header from "C:/Users/mudig/OneDrive/Documents/React/first-app-venkatesh/src/Components/Header.js";
import { About } from "C:/Users/mudig/OneDrive/Documents/React/first-app-venkatesh/src/Components/About.js";
import { Footer } from "C:/Users/mudig/OneDrive/Documents/React/first-app-venkatesh/src/Components/Footer.js";
import { Todo } from "C:/Users/mudig/OneDrive/Documents/React/first-app-venkatesh/src/Components/Todo.js";

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

