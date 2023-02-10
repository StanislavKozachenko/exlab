import React from 'react';
import Task from '../Task';
import styles from './TaskComponent.module.scss';
export default function TaskComponent() {
  return (
    <div className={styles.taskComponent}>
      Название колонки
      <button className={styles.taskComponent__addbtn}>+ добавить задачу</button>
      <Task />
    </div>
  );
}
