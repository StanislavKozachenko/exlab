import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Main />
    </div>
  );
}
