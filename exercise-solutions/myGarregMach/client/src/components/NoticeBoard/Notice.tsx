
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

export interface NoticeProps {
    title: string;
    body: string;
}

export function Notice(props: NoticeProps) {
    const [expand, setExpand] = useState('truncate');

    function setTruncate() {
        if (expand === 'truncate') {
            setExpand('');
        } else {
            setExpand('truncate');
        }
    }

    return (
        <div className="flex flex-row w-full min-h-[23%] max-h-[100%] box-border bg-white mb-8 p-3 shadow-lg overflow-scroll">
            <div className="w-[92%]">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold truncate mb-1">{props.title}</h1>
                    <p className={expand}>
                        {props.body}
                    </p>
                </div>
            </div>
            <div  className="flex box-border w-[8%] justify-center items-start">
                <button onClick={setTruncate} className="">
                    { expand ? <IoMdArrowDropdown size={40} color="#D9D9D9"/> : <IoMdArrowDropleft size={40} color="#D9D9D9"/>}
                </button>
            </div> 
        </div>
    )
}