import "./App.css";
import Day from "./components/day";
import { startOfWeek, addDays, format } from "date-fns";
import { useTodo } from "./zustandStore/useTodo";
import Header from "./components/header";
import Section from "./components/section";
import AllTodos from "./components/alltodos";
import { useState, useEffect } from "react";

function App() {
  const today = new Date();
  const mondayOfThisWeek = startOfWeek(today, { weekStartsOn: 1 });
  const [dates, setDates] = useState([]);
  const todos = useTodo((state) => state.todos);

  useEffect(() => {
    setDates(Array.from({ length: 7 }, (_, i) => addDays(mondayOfThisWeek, i)));
  }, []);

  return (
    <div>
      <Header days={today} todos={todos} />
      <Section days={today} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xl:grid-cols-7 px-4 py-2 ">
        {dates.map((date) => {
          const todosForDay = todos.filter(
            (item) => item.day === format(date, "yyyy-MM-dd")
          );
          return <Day key={date} days={date} todos={todosForDay} />;
        })}
      </div>
      <div>
        <AllTodos todos={todos} />
      </div>
    </div>
  );
}

export default App;
