import './App.css';
import Parent from './pages/Parent';

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
        <Parent></Parent>
      </div>
    </div>
  );
}

export default App;
