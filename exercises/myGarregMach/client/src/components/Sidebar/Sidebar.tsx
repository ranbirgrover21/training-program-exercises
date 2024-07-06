import { SidebarSection } from "./SidebarSection";

import '../../css/Sidebar.css';
import { SidebarSectionList } from "./SidebarSectionList";
import { User } from "../../interfaces/user";
import { Staff } from "../../interfaces/staff";
import { ReactNode } from "react";
import { Student } from "../../interfaces/student";

interface SidebarProps {
  userData: User;
}

interface houseToFile {
  golden_deer: string;
  blue_lions: string;
  black_eagles: string;
}

const houseToFile : houseToFile = {
  "golden_deer": './src/assets/Golden_Deer_Banner.png',
  'blue_lions': './src/assets/Blue_Lions_Banner.png',
  'black_eagles': './src/assets/Black_Eagles_Banner.png'
}

function isStaff(user: User): user is Staff {
  return user.user_type == "STAFF";
}

export function Sidebar(props: SidebarProps) {
  let userData = props.userData as User;

  let staffProfile : ReactNode[] = [];
  let studentProfile : ReactNode[] = [];

  if (isStaff(props.userData)) {
    const staffData = userData as Staff;

    staffProfile = [
      <SidebarSection key={0} name="gID" value={staffData.gID}/>, 
      <SidebarSection key={1} name="Role" value={staffData.role}/>,
      <SidebarSection key={2} name="Faculty" value={staffData.faculty}/>,
      <SidebarSectionList key={0} name="Education" values={staffData.education}/>,
      <SidebarSectionList key={1} name="Teaching" values={staffData.teaching}/>
    ];
  } else {
    const studentData = userData as Student;

    let wamTotal = 0;
    let num = 0;
    if ('subjects' in studentData) {
      for (const subject of studentData.subjects) {
        wamTotal += subject.mark;
        num += 1;
      }
    }

    studentProfile = [
      <SidebarSection key={0} name="gID" value={studentData.gID}/>, 
      <SidebarSection key={1} name="Degree" value={studentData.degree}/>,
      <SidebarSection key={2} name="Overall WAM" value={`${num === 0 ? wamTotal : (wamTotal * 100 / num) / 100 }`}/>,
    ];
  }
  
  return (
    <div className="flex flex-col items-center w-[80%] h-[92.5%] bg-[#D9D9D9] rounded-2xl p-6 ">
      <div className="w-full mb-5 flex justify-between">
        <SidebarSection name="Name" value={userData.name} />
        { localStorage.getItem('USER_TYPE') == 'STUDENT' && <img className='max-h-[4.25rem]' src={houseToFile[(userData as Student).house]}></img>}
      </div>
      <img className="pfp max-h-[8rem] mb-4 rounded-full border border-[#796733] border-dashed border-black" src={userData.profileUrl}></img>
      <div className="flex flex-col h-[65%] w-full overflow-scroll">
        { localStorage.getItem('USER_TYPE') == 'STUDENT' ? studentProfile.map(e => e) : staffProfile.map(e => e) }
      </div>
    </div>
  )
}