import { redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export function Home() {
    // const navigate = useNavigate();
    console.log("HELLo", localStorage.getItem('gId'));

    return (
        <>
            <Navbar/>
            <h1 className="text-black">This is the home page!</h1>
        </>
    );
}