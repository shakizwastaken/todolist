import './App.css';
import TasksManager from './components/TasksManager';

function App() {
  return (
    <div className="App">

      <h1 id='hero' className='main' >Task<span className='shade' > Manager</span></h1>

      <TasksManager />
    </div>
  );
}

export default App;
