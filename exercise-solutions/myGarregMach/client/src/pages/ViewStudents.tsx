import { useNavigate } from "react-router";
import { GMButton } from "../components/GMButton/GMButton";
import { MainBlock } from "../components/MainBlock/MainBlock";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { StudentCard } from "../components/ViewStudents/StudentCard";

import '../css/ViewStudents.css';
import { useEffect, useState } from "react";
import { Staff } from "../interfaces/staff";
import { requestUserData } from "../util/requestUserData";
import { AxiosResponse } from "axios";
import { getAxios } from "../util/axios";

interface StudentCard {
  name: string;
  degree: string;
  house: 'black_eagles' | 'blue_lions' | 'golden_deer';
  profileUrl: string;
}

export function ViewStudents() {
  const navgiate = useNavigate();

  function navBack() {
      navgiate('/staffProfile');
  }

  const [staffData, setStaffData] = useState({});
  const [studentCards, setStudentCards] = useState([]);
  const gID = localStorage.getItem('gID');

  useEffect(() => {

    if (!localStorage.getItem('studentCards')) {
      getAxios()
        .get('/studentCards')
        .then((res: AxiosResponse) => {
          setStudentCards(res.data.studentCards);
          localStorage.setItem('studentCards', JSON.stringify(res.data));
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setStudentCards(JSON.parse(localStorage.getItem('studentCards') as string).studentCards);
    }

    const dataString = localStorage.getItem('userData');
    if (dataString) {
      setStaffData(JSON.parse(dataString).staff);
      return;
    }

    requestUserData('/staffDetails', gID as string)
      .then((res : AxiosResponse) => {
        setStaffData(res.data.staff);
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
            <Sidebar userData={staffData as Staff}/>
        </div>
        <div className="flex flex-col items-center justify-center w-[72.5%] py-10">
          <MainBlock>
            <div className="flex w-[95%] overflow-scroll px-5 justify-center">
              <div className="grid grid-cols-3 gap-8">
                {(studentCards as StudentCard[]).map(e => <StudentCard name={e.name} degree={e.degree} house={e.house} profileUrl={e.profileUrl}/>)}
              </div>
            </div>
          </MainBlock>
          <br></br>
          <div className="w-[92.5%]">
            <GMButton name='Back' onClick={navBack}/>
          </div>
        </div>
      </div>
    </>
  )
}