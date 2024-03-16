import { SidebarSection } from "./SidebarSection";

import '../../css/Sidebar.css';
import { SidebarSectionList } from "./SidebarSectionList";

export function Sidebar() {
    
    return (
        <div className="flex flex-col items-center w-[80%] h-[92.5%] bg-[#D9D9D9] rounded-2xl p-6 ">
            <div className="w-full mb-5">
                <SidebarSection name="Name" value="Prof. Byleth Eisner" />
            </div>
            <img className="pfp h-[25%] mb-4 rounded-full border border-[#796733] border-dashed border-black" src="https://i.imgur.com/CFIj52E.png"></img>
            <div className="flex flex-col justify-between h-[65%] w-full">
                <SidebarSection name="gID" value={localStorage.getItem('gId') as string}/>
                <SidebarSection name="Role" value="Lecturer"/>
                <SidebarSection name="Faculty" value="Combat"/>
                <SidebarSectionList name="Education" values={['(Dip.) Mending Spirits', '(BA.) Duelling Arts', '(Phd.) Bladed Combative Techniques']}/>
                <SidebarSectionList name="Teaching" values={['SWRD1121', 'SWRD3331', 'FAIH9417']}/>
            </div>
        </div>
    )
}