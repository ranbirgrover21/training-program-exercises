import { SidebarSection } from "./SidebarSection";

import '../../css/Sidebar.css';
import { SidebarSectionList } from "./SidebarSectionList";
import { User } from "../../interfaces/user";
import { Staff } from "../../interfaces/staff";
import { ReactNode } from "react";

interface SidebarProps {
  userData: User;
}

const staffData = {
  "gID": localStorage.getItem('gID') as string,
  "role": "Lecturer",
  "faculty": "Combat",
  "education": ['(Dip.) Mending Spirits', '(BA.) Duelling Arts', '(Phd.) Bladed Combative Techniques'],
  "teaching": ['SWRD1121', 'SWRD3331', 'FAIH9417']
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
    staffProfile = [
      <SidebarSection name="gID" value={staffData.gID}/>, 
      <SidebarSection name="Role" value={staffData.role}/>,
      <SidebarSection name="Faculty" value={staffData.faculty}/>,
      <SidebarSectionList name="Education" values={staffData.education}/>,
      <SidebarSectionList name="Teaching" values={staffData.teaching}/>
    ];
  } else {
    studentProfile = [
      <SidebarSection name="gID" value={localStorage.getItem('gID') as string}/>, 
      <SidebarSection name="Degree" value="Bachelor of Magical Arts"/>,
      <SidebarSection name="Overall WAM" value="93.21"/>,
    ];
  }
  
  return (
    <div className="flex flex-col items-center w-[80%] h-[92.5%] bg-[#D9D9D9] rounded-2xl p-6 ">
      <div className="w-full mb-5 flex justify-between">
        <SidebarSection name="Name" value="Prof. Byleth Eisner" />
        { localStorage.getItem('USER_TYPE') == 'STUDENT' && <img className='max-h-[4.25rem]' src={houseToFile['black_eagles']}></img>}
      </div>
      <img className="pfp max-h-[8rem] mb-4 rounded-full border border-[#796733] border-dashed border-black" src="https://i.imgur.com/CFIj52E.png"></img>
      <div className="flex flex-col h-[65%] w-full overflow-scroll">
        { localStorage.getItem('USER_TYPE') == 'STUDENT' ? studentProfile.map(e => e) : staffProfile.map(e => e) }
      </div>
    </div>
  )
}