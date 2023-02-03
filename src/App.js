import { createContext, useState } from 'react';
import './App.css';
import Counter from './pages/Counter';
import LongForm from './pages/LongForm';
import Parent from './pages/Parent';
import ShortForm from './pages/ShortForm';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, set_count] = useState(0);

  const value = { count, set_count };

  return (
    <div className="">
      <COUNTER_CONTEXT.Provider value={value}>
        <div className='grid place-items-center h-[100vh]'>
          {/* <Parent /> */}
          {/* <Counter /> */}
          {/* <ShortForm /> */}
          <LongForm></LongForm>
        </div>
      </COUNTER_CONTEXT.Provider>
    </div>
  );
}

export default App;
