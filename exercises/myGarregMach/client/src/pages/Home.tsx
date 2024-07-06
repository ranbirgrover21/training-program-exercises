import { Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainBlock } from "../components/MainBlock/MainBlock";

import '../css/MainBlock.css';
import { NoticeBoard } from "../components/NoticeBoard/NoticeBoard";
import { getAxios } from "../util/axios";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { User } from "../interfaces/user";
import { requestUserData } from "../util/requestUserData";

export function Home() {
  const gID = localStorage.getItem('gID');
	if (!gID) {
		return <Navigate replace to={"/"}></Navigate>
	}

  const [noticeData, setNoticeData] = useState([]);
  const [userData, setUserData] = useState({});
  const userType = localStorage.getItem('USER_TYPE');

	useEffect(() => {
		getAxios()
			.get('/notices')
			.then((res: AxiosResponse) => {
				setNoticeData(res.data.notices);
			})
			.catch((err) => {
				console.error(err);
			});

		const route = userType == 'STAFF' ? '/staffDetails' : '/studentDetails';
		if (localStorage.getItem('userData')) {
      const data = JSON.parse(localStorage.getItem('userData') as string);
      if (userType == 'STAFF') {
        setUserData(data.staff);
      } else {
        setUserData(data.student);
      }
		  return;
		}

		requestUserData(route, gID)
      .then((res : AxiosResponse) => {
        if (userType == 'STAFF') {
        setUserData(res.data.staff);
        } else {
        setUserData(res.data.student);
        }
        localStorage.setItem('userData', JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
	}, []);

	return (
		<>
			<Navbar/>
			<div className="flex flex-row w-screen h-[87%]">
				<div className="flex justify-center items-center w-[27.5%] h-full">
					<Sidebar userData={userData as User}/>
				</div>
				<div className="flex justify-center w-[72.5%] h-full py-6">
					<MainBlock>
						<div id="bulletinTag" className="text-center text-white leading-[51px] w-[323px] h-[51px] bg-[url('./src/assets/MainBlock/tag.png')] text-xl">BULLETIN BOARD</div>
						<NoticeBoard noticeData={noticeData}/>
					</MainBlock>
				</div>
			</div>
		</>
	);
}