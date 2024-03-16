interface SidebarSectionProps {
    name: string;
    value: string;
}

export function SidebarSection(props: SidebarSectionProps) {
    console.log(props);
    return (
        <div className="name text-[14px] text-left">
            <h1 className="font-bold ">{props.name}</h1>
            <p className="font-[300]">{props.value}</p>
        </div>
    )
}