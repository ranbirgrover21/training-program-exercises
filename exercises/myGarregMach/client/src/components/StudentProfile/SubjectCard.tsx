import '../../css/SubjectCard.css';

interface SubjectCardProps {
  courseCode: string;
  title: string;
  mark: number;
}

export function SubjectCard(props: SubjectCardProps) {
  return (
    <div className="bg-[#D9D9D9] h-[6.25rem] p-[1rem] shadow-md mb-[1rem]">
      <div className="flex flex-col justify-between h-full">
        <div className="w-full">
          <h1 className="font-bold subject-card-title">{props.courseCode}</h1>
        </div>
        <div className="w-full flex justify-between flex-row">
          <p>{props.title}</p>
          <p>Mark: {props.mark}</p>
        </div>
      </div>
    </div>
  );   
}