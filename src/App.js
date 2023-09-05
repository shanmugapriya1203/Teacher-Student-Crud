
import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login/Login';
import Student from './components/Student/Student';
import Portal from "./components/Portal/Portal"
import { useState } from 'react';
import Mentor from './components/Teacher/Mentor';
import MentorView from './components/Teacher/MentorView';
import StudentView from './components/Student/StudentView';
import AdmissionForm from './components/Student/AdmissionForm';
import EditStudent from './components/Student/EditStudent';
import { UserProvider } from './components/Context/UserContext';

function App() {
  const [studentdata, setstudentData] = useState([
    {
      roll_no: 1,
      name: "John Doe",
      standard: 10,
      mother_name: "Mary",
      father_name: "John",
      contact: "952654****",
      address: "New York"
    },
    {
      roll_no: 10,
      name: "Jane Smith",
      standard: 5,
      mother_name: "Alice",
      father_name: "Bob",
      contact: "985654****",
      address: "Los Angeles"
    }
  ])
  const mentordata = [
    {
      employe_id: 1,
      name: "Michael Johnson",
      subject: "History",
      qualification: "Ph.D. in History",
      experience: "10 years",
      salary: 50000,
      contact: "922634****",
      address: "Chicago"
    },
    {
      employe_id: 2,
      name: "Emily Davis",
      subject: "English",
      qualification: "M.A. in English",
      experience: "5 years",
      salary: 45000,
      contact: "852654****",
      address: "San Francisco"
    },
    {
      employe_id: 3,
      name: "David Brown",
      subject: "Maths",
      qualification: "M.Sc., B.Ed.",
      experience: "8 years",
      salary: 60000,
      contact: "978654****",
      address: "Houston"
    },
    {
      employe_id: 4,
      name: "Sophia Lee",
      subject: "Science",
      qualification: "M.Sc. in Science",
      experience: "3 years",
      salary: 55000,
      contact: "912654****",
      address: "Miami"
    },
    {
      employe_id: 5,
      name: "Olivia Wilson",
      subject: "Social Studies",
      qualification: "M.A. in History",
      experience: "4 years",
      salary: 48000,
      contact: "952824****",
      address: "Seattle"
    }
  ]
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login setMentorVisible={setMentorVisible} />} />
        <Route path="/portal" element={<Portal />}>
          <Route path='mentor' element={<Mentor mentordata={mentordata} />} />
          <Route path='mentorview/:id' element={<MentorView mentordata={mentordata} />} />
          <Route path="student" element={<Student studentdata={studentdata} setstudentData={setstudentData} mentorVisible={mentorVisible} />} />
          <Route path='studentview/:id' element={<StudentView studentdata={studentdata} />} />
          <Route path='admissionform' element={<AdmissionForm studentdata={studentdata} setstudentData={setstudentData} />} />
          <Route path='editstudent/:id' element={<EditStudent studentdata={studentdata} setstudentData={setstudentData} />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
