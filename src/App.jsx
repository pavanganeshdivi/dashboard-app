import DashboardContent from './components/DashboardContent'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div id='app-container'>
      <div id='app'>
        <Header/>
        <Sidebar/>
        <DashboardContent/>
      </div>
    </div>
  )
}

export default App
