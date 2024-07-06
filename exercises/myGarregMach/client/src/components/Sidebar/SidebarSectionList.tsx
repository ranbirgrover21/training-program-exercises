interface SidebarSectionProps {
  name: string;
  values: string[];
}

export function SidebarSectionList(props: SidebarSectionProps) {
  return (
    <div className="name text-[14px] text-left mb-[0.5rem]">
      <h1 className="font-bold ">{props.name}</h1>
      {props.values.map(e => <p className="font-[300]">{e}</p>)}
    </div>
  )
}
