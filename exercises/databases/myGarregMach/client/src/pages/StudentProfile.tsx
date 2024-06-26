import { MainBlock } from "../components/MainBlock/MainBlock";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { SubjectCard } from "../components/StudentProfile/SubjectCard";

export function StudentProfile() {
    const subjects = [
        {
            "course_code": "REAS3121",
            "course_title": "Sorcerisms and Magical Techniques",
            "mark": 100,
        },
        {
            "course_code": "REAS1511",
            "course_title": "Arcane Fundamentals",
            "mark": 96,
        },
        {
            "course_code": "FAIH1200",
            "course_title": "Seirosian Healing",
            "mark": 94,
        },
        {
            "course_code": "FAIH1200",
            "course_title": "Seirosian Healing",
            "mark": 94,
        },
    
    ];

    return (
        <>
            <Navbar/>
            <div className="flex flex-row w-screen h-[87%]">
                <div className="flex justify-center items-center w-[27.5%] h-full">
                    <Sidebar/>
                </div>
                <div className="flex justify-center w-[72.5%] h-full py-10">
                    <MainBlock>
                        <div className="w-[87.5%]">
                            <h1 className="text-3xl">My enrolment</h1>
                        </div>
                        <div className="w-[87.5%] overflow-scroll">
                            <br/>
                            {subjects.map(s => <SubjectCard courseCode={s.course_code} title={s.course_title} mark={s.mark}/>)}
                        </div>
                    </MainBlock>
                </div>
            </div>
        </>
    );
}