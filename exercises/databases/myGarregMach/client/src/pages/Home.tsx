import { Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainBlock } from "../components/MainBlock/MainBlock";

export function Home() {
    if (!localStorage.getItem('gId')) {
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
                    <MainBlock/>
                </div>
            </div>
        </>
    );
}