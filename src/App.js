import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';
import { GlobleContext } from './context/AuthContext';

function App() {
  const {isLogedIn} = useContext(GlobleContext);
  return (
    <div className="App">
      <Routes>
        {isLogedIn ? (<Route path='/*' element={<Dashboard />} />
        ): (
          <Route path='' element={ <Login/> }/>
        )}
        <Route path='*'
          element={
            <Navigate to={isLogedIn ? "/" : "/"} />
          }
        />
      </Routes>  
    </div>
  );
}
export default App;
