import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Authenticate from "./pages/authenticate/Authenticate";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddNote from "./pages/addnote/AddNote";
import UpdateNote from "./pages/updatenote/UpdateNote";
import Profile from "./pages/profile/Profile";
import MyState from "./context/data/myState";
import { Toaster } from 'react-hot-toast';
import ForgetPassword from './pages/forgetpassword/ForgetPassword'

function App() {

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/addnote" element={
            <ProtectedRoute>
              <AddNote />
            </ProtectedRoute>
          } />
          <Route path="/updatenote/:id" element={
            <ProtectedRoute>
              <UpdateNote />
            </ProtectedRoute> 
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute> 
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  if (token) {
    return children
  } else {
    return <Navigate to={'/authenticate'} />
  }
}
