interface GMButtonProps {
    name: string;
    onClick: React.MouseEventHandler;
};

import '../../css/GMButton.css';

export function GMButton(props : GMButtonProps) {
    return (
        <button onClick={props.onClick} className="block bg-[#DFD3B3] h-[56px] w-[142px] text-lg GMButton">
            {props.name}
        </button>
    )
}