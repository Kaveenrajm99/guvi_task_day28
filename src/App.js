import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Users from './users'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
      <div id='wrapper'>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                 <Route path="/users" element={<Users />}/>
             </Routes>
            </div>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
