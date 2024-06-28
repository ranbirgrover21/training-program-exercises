import { Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainBlock } from "../components/MainBlock/MainBlock";

import '../css/MainBlock.css';
import { NoticeBoard } from "../components/NoticeBoard/NoticeBoard";

const noticeData = [
    {
        title: 'Power Outage', 
        body: 'There is a planned outage for myGarregMach scheduled for slay'
    },
    {
        title: 'Fishing contest at 9am SHARP',
        body: 'Flayn is hosting a fishing contest at 9am in the main entrance, please attend'
    },
    {
        title: 'Hogwarts student exchange',
        body: 'Hogwarts students are coming over for exchange! Please make all of them feel welcomed and safe members of the community'
    },
    {
        title: 'Local Contest',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

export function Home() {
    if (!localStorage.getItem('gID')) {
        return <Navigate replace to={"/"}></Navigate>
    }

    return (
        <>
            <Navbar/>
            <div className="flex flex-row w-screen h-[87%]">
                <div className="flex justify-center items-center w-[27.5%] h-full">
                    <Sidebar/>
                </div>
                <div className="flex justify-center w-[72.5%] h-full py-6">
                    <MainBlock>
                        <div id="bulletinTag" className="text-center text-white leading-[51px] w-[323px] h-[51px] bg-[url('./src/assets/MainBlock/tag.png')] text-xl">BULLETIN BOARD</div>
                        <NoticeBoard noticeData={noticeData}/>
                    </MainBlock>
                </div>
            </div>
        </>
    );
}