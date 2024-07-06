import { useEffect, useState } from "react";
import { MainBlock } from "../components/MainBlock/MainBlock";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { StaffActionButton } from "../components/StaffProfile/StaffActionButton";
import { requestUserData } from "../util/requestUserData";
import { AxiosResponse } from "axios";
import { Staff } from "../interfaces/staff";

export function StaffProfile() {
  const [staffData, setStaffData] = useState({});
  const gID = localStorage.getItem('gID');

  useEffect(() => {
    const dataString = localStorage.getItem('userData');
    if (!dataString) {
      const data = JSON.parse(dataString as string);
      setStaffData(data.staff);
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
        <div className="flex justify-center w-[72.5%] h-full py-10">
          <MainBlock>
            <h1 className="font-light text-3xl">Staff Actions</h1>
            <div className="flex flex-row justify-around items-center w-[90%] h-[85%]">
              <StaffActionButton title="View Students" iconUrl="https://www.svgrepo.com/show/14375/magnifying-glass.svg" nextUrl="/viewStudents"/>
              <StaffActionButton title="Enrol Student" iconUrl="https://images.emojiterra.com/twitter/v14.0/256px/1f4dd.png" nextUrl="/enrolStudent"/>
            </div>
          </MainBlock>
        </div>
      </div>
    </>
  );
}