import { Navigate } from "react-router-dom";
import { MainBlock } from "../components/MainBlock/MainBlock";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { SubjectCard } from "../components/StudentProfile/SubjectCard";
import { Student } from "../interfaces/student";
import { useEffect, useState } from "react";
import { requestUserData } from "../util/requestUserData";
import { AxiosResponse } from "axios";
import { Subject } from "../interfaces/subject";

interface StudentProfileProps {
  studentData?: Student;
}

export function StudentProfile(props: StudentProfileProps) {
  const [studentData, setStudentData] = useState({});
  const [subjectData, setSubjectData] = useState([]);

  const gID = localStorage.getItem('gID');
  if (!gID) return <Navigate replace to={"/"}></Navigate>;

  useEffect(() => {
    let dataString = localStorage.getItem('userData');
    if (dataString) {
      const data = JSON.parse(dataString as string);
      setStudentData(data.student);
      setSubjectData(data.student.subjects);
      return;
    }

    requestUserData('/studentDetails', gID)
      .then((res : AxiosResponse) => {
        setStudentData(res.data.student);
        setSubjectData(res.data.student.subjects);
        localStorage.setItem('userData', JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <>
      <Navbar/>
      <div className="flex flex-row w-screen h-[87%]">
        <div className="flex justify-center items-center w-[27.5%] h-full">
          <Sidebar userData={studentData as Student}/>
        </div>
        <div className="flex justify-center w-[72.5%] h-full py-10">
          <MainBlock>
            <div className="w-[87.5%]">
              <h1 className="text-3xl">My enrolment</h1>
            </div>
            <div className="w-[87.5%] overflow-scroll">
              <br/>
              {(subjectData as Subject[]).map(s => <SubjectCard courseCode={s.courseCode} title={s.courseTitle} mark={s.mark}/>)}
            </div>
          </MainBlock>
        </div>
      </div>
    </>
  );
}