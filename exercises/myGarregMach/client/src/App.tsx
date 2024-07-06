import { Home } from './pages/Home';
import { Login } from './pages/Login';

import { Navigate, Route, Routes } from 'react-router-dom';
import { StaffProfile } from './pages/StaffProfile';
import { ViewStudents } from './pages/ViewStudents';
import { EnrolStudent } from './pages/EnrolStudent';
import { StudentProfile } from './pages/StudentProfile';

function App() {
  const gID = localStorage.getItem('gID');
  return (
    <Routes>
      <Route path="/" element={ gID ? <Navigate replace to={"/home"}></Navigate> : <Login/> }></Route>
      <Route path="/home" element={<Home/> }></Route>
      <Route path="/login" element={<Navigate replace to={"/"}/>}></Route>
      <Route path="/staffProfile" element={<StaffProfile/>}/>
      <Route path="/viewStudents" element={<ViewStudents/>} />
      <Route path="/enrolStudent" element={<EnrolStudent/>}/>
      <Route path="/studentProfile" element={<StudentProfile/>}></Route>
    </Routes>
  );
}

export default App
