import { Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function Home() {
    if (!localStorage.getItem('gId')) {
        return <Navigate replace to={"/"}></Navigate>
    }

    return (
        <>
            <Navbar/>
            <div className="flex flex-row w-screen h-[87%]">
                <div className="flex justify-center items-center w-[27.5%] h-full border-2 border-solid border-red-400">
                    <Sidebar/>
                </div>
                <div className="w-[72.5%] h-full border-2 border-solid border-blue-400">
                </div>
            </div>
        </>
    );
}