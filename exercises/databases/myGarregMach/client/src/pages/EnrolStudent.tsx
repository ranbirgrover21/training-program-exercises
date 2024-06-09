import { useNavigate } from "react-router-dom";
import { GMButton } from "../components/GMButton/GMButton";
import { MainBlock } from "../components/MainBlock/MainBlock";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { BsCaretLeftSquareFill } from "react-icons/bs";
import { BsCaretRightSquareFill } from "react-icons/bs";

import '../css/EnrolStudent.css';
import { useState } from "react";

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

const houses : (keyof houseToFile)[] = [  'black_eagles', 'blue_lions', 'golden_deer'];

export function EnrolStudent() {
    const navgiate = useNavigate();
    const [carouselIndex, setCarousel] = useState(0);

    function navBack() {
        navgiate('/staffProfile');
    }

    function carouselNext() {
        setCarousel((carouselIndex + 1) % houses.length);
    }

    function carouselPrev() {
        let val = carouselIndex - 1;
        if (carouselIndex - 1 < 0) {
            val = houses.length - 1;
        }

        setCarousel((val) % houses.length);
    }

    return (
        <>
            <Navbar/>
            <div className="flex flex-row w-screen h-[87%]">
                <div className="flex justify-center items-center w-[27.5%] h-full">
                    <Sidebar/>
                </div>
                <div className="flex flex-col items-center justify-center w-[72.5%] py-10">
                    <MainBlock>
                        <div className="w-[92%] text-xl font-bold">
                            <h1 className="text-left">New Student Form</h1>
                        </div>
                        <div className="flex flex-row w-[92%] h-[100%]">
                            <div className="flex flex-col justify-between w-[70%] py-3">
                                <div>
                                    <h1 className="text-lg">Name</h1>
                                    <input className="enrol-input h-[2rem] w-[85%] shadow-md"></input>
                                    <h1 className="text-lg">Default Password</h1>
                                    <input className="enrol-input h-[2rem] w-[85%] shadow-md" type="password"></input>
                                    <h1 className="text-lg">Profile Picture URL</h1>
                                    <input className="enrol-input h-[2rem] w-[85%] shadow-md"></input>
                                    <h1 className="text-lg">Degree</h1>
                                    <input className="enrol-input h-[2rem] w-[45%] shadow-md"></input>
                                </div>
                                <div className="submit-container">
                                    <button>
                                        <div className="w-[8rem] p-3 bg-[#D9D9D9]">Submit</div>
                                    </button>
                                </div>
                            </div>
                            <div className="w-[30%] text-center">
                                <h1 className="text-2xl mt-2">Select House</h1>
                                <div className="flex w-[100%] h-[80%] items-center">
                                    <button onClick={carouselPrev}>
                                        <div className="text-4xl text-[rgb(223,211,179)]">
                                            <BsCaretLeftSquareFill/>
                                        </div>
                                    </button>
                                    <div className={`flex justify-center w-[20em] min-h-[20em] p-3`}>
                                        <div className="w-full bg-contain bg-no-repeat" style={{ backgroundImage: `url(${houseToFile[houses[carouselIndex]]})`}}></div>
                                    </div>
                                    <button onClick={carouselNext}>
                                        <div className="text-4xl text-[rgb(223,211,179)]">
                                            <BsCaretRightSquareFill/>
                                        </div>
                                    </button>
                                </div>
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