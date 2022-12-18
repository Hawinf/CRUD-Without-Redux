import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Discovery from './pages/Discovery';
import ProtectedRoute from './hoc/ProtectedRoute';
import ProtectedRoutes from './hoc/ProtectedRouters';

function App() {
  
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path='discover' element={<Discovery />} />
          </Route>
          
      </Routes>
   </BrowserRouter>
  );
}

export default App;
