import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Empty } from "./components/List/Empty";
import { ListHeader } from "./components/List/ListHeader";

import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import "./global.css";

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if(!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input 
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          <Empty/>
        </div>
      </section>
    </main>
  );
}
