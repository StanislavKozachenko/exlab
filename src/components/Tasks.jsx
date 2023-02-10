import React from 'react';
import TaskComponent from './TaskComponent';
import TaskComponentSkeleton from './TaskComponentSkeleton';

export default function Tasks() {
  return (
    <div className="tasks">
      <TaskComponent />
      <TaskComponent />
      <TaskComponentSkeleton />
    </div>
  );
}
