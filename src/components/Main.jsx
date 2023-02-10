import React from 'react';
import SettingBar from './SettingBar';
import Tasks from './Tasks';

export default function Main() {
  return (
    <div className="main">
      <SettingBar />
      <Tasks />
    </div>
  );
}
