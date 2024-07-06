interface SidebarSectionProps {
  name: string;
  value: string;
}

export function SidebarSection(props: SidebarSectionProps) {
  return (
    <div className="name text-[14px] text-left mb-[0.5rem]">
      <h1 className="font-bold ">{props.name}</h1>
      <p className="font-[300]">{props.value}</p>
    </div>
  )
}