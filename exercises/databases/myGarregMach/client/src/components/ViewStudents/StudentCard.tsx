interface StudentCardProps {
    name: string;
    degree: string;
    house: string;
    profileUrl: string;
}

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

export function StudentCard(props: StudentCardProps) {
 
    return (
        <div className="h-[10rem] flex flex-col bg-[#D9D9D9] box-border px-3 py-2 rounded-lg overflow-scroll">
            <h1 className="text-xl font-thin overflow-x-auto whitespace-nowrap">{props.name}</h1>
            <h2 className="text-sm overflow-x-auto whitespace-nowrap">{props.degree}</h2>
            <div className="mt-2 flex flex-row w-full justify-between h-[65%]">
                <img src={houseToFile[props.house as keyof houseToFile]}></img>
                <img src={props.profileUrl} className="rounded-full border border-dashed border-black"></img>
            </div>
        </div>
    );
}