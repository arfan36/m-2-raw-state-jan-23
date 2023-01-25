import { createContext, useState } from 'react';
import './App.css';
import Parent from './pages/Parent';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, set_count] = useState(0);

  const value = { count, set_count };

  return (
    <div className="text-center">
      <COUNTER_CONTEXT.Provider value={value}>
        <div className='grid place-items-center h-[100vh]'>
          <Parent />
        </div>
      </COUNTER_CONTEXT.Provider>
    </div>
  );
}

export default App;
