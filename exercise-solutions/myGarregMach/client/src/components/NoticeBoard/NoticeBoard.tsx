import { Notice, NoticeProps } from "./Notice";

interface NoticeBoardProps {
  noticeData: NoticeProps[];
}

export function NoticeBoard(props: NoticeBoardProps) {
  return (
    <div className="w-[90%] h-[85%] p-5 overflow-scroll">
      {props.noticeData.map(e => <Notice title={e.title} body={e.body}/>)}
    </div>
  )
}