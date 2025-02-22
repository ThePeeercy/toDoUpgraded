import "./App.css";
import Day from "./components/day";
import { startOfWeek, addDays, format } from "date-fns";
import { useTodo } from "./zustandStore/useTodo";
import Header from "./components/header";
import Section from "./components/section";

function App() {
  const today = new Date();
  const mondayOfThisWeek = startOfWeek(today, { weekStartsOn: 1 });

  const date = Array.from({ length: 7 }, (_, i) =>
    addDays(mondayOfThisWeek, i)
  );
  const todos1 = useTodo((state) => state.todos1);
  const todos2 = useTodo((state) => state.todos2);
  const todos3 = useTodo((state) => state.todos3);
  const todos4 = useTodo((state) => state.todos4);
  const todos5 = useTodo((state) => state.todos5);
  const todos6 = useTodo((state) => state.todos6);
  const todos7 = useTodo((state) => state.todos7);

  return (
    <div>
      <Header days={today} />
      <Section days={today} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xl:grid-cols-7 px-4 py-2 h-screen">
        <Day days={date[0]} todos={todos1} todosKey="todos1" />
        <Day days={date[1]} todos={todos2} todosKey="todos2" />
        <Day days={date[2]} todos={todos3} todosKey="todos3" />
        <Day days={date[3]} todos={todos4} todosKey="todos4" />
        <Day days={date[4]} todos={todos5} todosKey="todos5" />
        <Day days={date[5]} todos={todos6} todosKey="todos6" />
        <Day days={date[6]} todos={todos7} todosKey="todos7" />
      </div>
    </div>
  );
}

export default App;
