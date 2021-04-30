import React from "react";
import styles from "./App.module.scss";
import EmotionComponent from "./components/emotion/EmotionComponent";
import Header from "./components/header/Header";
import TaskForm from "./features/task/taskForm/TaskForm";
import TaskList from "./features/task/taskList/TaskList";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
        <EmotionComponent />
      </div>
    </div>
  );
};

export default App;
