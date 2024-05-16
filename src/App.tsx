import { Header } from "./components/Header";
import { Input } from "./components/Input";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
        </div>
      </section>
    </main>
  );
}
