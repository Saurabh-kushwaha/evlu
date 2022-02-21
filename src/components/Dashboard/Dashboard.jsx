import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Prerequsite from './Prerequsite';
import Info from './Info';
import Register from './Register';

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='prerequsite' element={<Prerequsite/>}>
                <Route path='info' element={<Info />}>
                <Route path='register' element={<Register />}/>   
            </Route> 
        </Route>                  
      </Routes>
    </div>
  );
}
export default Dashboard;
