import React from 'react';
import styles from './TaskComponentSkeleton.module.scss';
export default function TaskComponentSkeleton() {
  return (
    <div className={styles.taskComponentSkeleton}>
      <button className={styles.taskComponentSkeleton__addbtn}>+ добавить колонку</button>
    </div>
  );
}
