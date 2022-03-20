import Header from './Header';
import Main from './Main';
import './components/css/style.min.css';
import { useState } from 'react';
function App() {
  const [join, setJoin] = useState('join');

  function isJoin(leave) {
    leave === 'leave' ? setJoin('leave') : setJoin('join');
  }
  return (
    <div className='container'>
      <Header join={join} isJoin={isJoin} />
      <Main join={join} isJoin={isJoin} />
    </div>
  );
}

export default App;
