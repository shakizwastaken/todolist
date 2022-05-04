import './App.css';
import TasksManager from './components/TasksManager';

function App() {
  return (
    <div className="App">

      <h1 id='hero' >Task <span id= 'orange'>Manager</span></h1>

      <TasksManager />
    </div>
  );
}

export default App;
