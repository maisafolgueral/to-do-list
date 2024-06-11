import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Empty } from "./components/List/Empty";

import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <Empty/>
        </div>
      </section>
    </main>
  );
}
