import { Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export function Home() {
    if (!localStorage.getItem('gId')) {
        return <Navigate replace to={"/"}></Navigate>
    }

    return (
        <>
            <Navbar/>
            <h1 className="text-black">This is the home page!</h1>
        </>
    );
}