import './App.css'
import { TaskProvider } from './Context/TaskContext';
import TaskNavbar from './components/Navbar';

function App() {


  return (
    <>
  <TaskProvider>
  <TaskNavbar />
  </TaskProvider>
    </>
  )
}

export default App
