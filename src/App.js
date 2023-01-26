import { createContext, useState } from 'react';
import './App.css';
import Counter from './pages/Counter';
import Parent from './pages/Parent';
import ShortForm from './pages/ShortForm';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, set_count] = useState(0);

  const value = { count, set_count };

  return (
    <div className="text-center">
      <COUNTER_CONTEXT.Provider value={value}>
        <div className='grid place-items-center h-[100vh]'>
          {/* <Parent /> */}
          {/* <ShortForm /> */}
          <Counter />
        </div>
      </COUNTER_CONTEXT.Provider>
    </div>
  );
}

export default App;
