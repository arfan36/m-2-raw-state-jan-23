import './App.css';
import Child from './pages/Child';

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '100vh'
        }}
      >
        <Child></Child>
      </div>
    </div>
  );
}

export default App;
