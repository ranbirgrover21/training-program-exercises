import { useNavigate } from "react-router";

interface StaffActionButtonProps {
    title: string;
    iconUrl: string;
    nextUrl: string;
}

export function StaffActionButton(props: StaffActionButtonProps) {
    const navigate = useNavigate();

    function nav() {
        navigate(props.nextUrl);
    }

    return (
        <button onClick={nav} className="bg-[#D9D9D9] flex flex-col justify-center items-center rounded-3xl h-[80%] w-[40%]">
            <h1 className="w-[100px] text-3xl text-center mb-2">{props.title}</h1>
            <img width="20%" src={props.iconUrl}></img>
        </button>
    )
}