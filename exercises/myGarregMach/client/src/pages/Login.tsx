import { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import '../css/Login.css';
import { GMButton } from "../components/GMButton/GMButton";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";
import { getAxios } from "../util/axios";
import { AxiosResponse } from "axios";

export function Login() {
  const [gID, setGID] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setError] = useState(false);
  const [errorMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    getAxios()
      .post('/login', {
        gID,
        password
      })
      .then((res: AxiosResponse) => {
        ///// DON'T CHANGE CODE ABOVE!!! ////

        /* Exercise 1 — Basic Local Storage */

        /**
         * The res variable will return a response from the backend.
         * 
         * To access it, you can do res.data 
         * You can look over at server/funcs/login.ts to get an idea of what res.data 
         * will look like, but for quick reference, it will look like this:
         * 
         * {
         *    "gID" : string,
         *    "user_type": "STAFF" | "STUDENT"
         * }
         * 
         * Your task is to store gID inside the gID field, and user_type inside the USER_TYPE
         * field in localStorage. If done correctly, the Login button should work and redirect you.
         * 
         * You can use Professor Byleth's credentials for Login:
         * 
         * gID: 5364821
         * password: pokerfaceprof
         */

        // Add your code here!!! 

        ///// DO NOT CHANGE BELOW!! ////
        setError(false);
        navigate("/home");
      })
      .catch((err) => {
        setErrMsg(err.response.data.error.message);
        setError(true);
      }); 
  }

  return (
    <>
      <Navbar/>
        <div className="flex w-screen h-[87%] padding-2 justify-center items-center">
          <div className="flex flex-col items-center py-20 w-[70%] h-[80%] shadow-lg bg-[url('./src/assets/MAIN_BLOCK.png')] overflow-scroll">
            <h1 className="text-4xl text-center">Welcome Back!</h1>
            { displayError ? <Alert variant="filled" severity="error" className="mt-2">{errorMsg}</Alert> : null}
            <div className="flex flex-col items-center text-left w-[70%] h-[50%] mt-8 ">
              <div className="w-[75%] mb-[4%]">
                <h2 className="text-xl">gID</h2>
                <input type="text" className="w-full shadow-xl p-[10px] loginInput" onChange={e => setGID(e.target.value)}></input>
              </div>
              <div className="w-[75%]">
                <h2 className="text-xl">Password</h2>
                <input type="password" className="w-full shadow-xl p-[10px] mb-7 loginInput"  onChange={e => setPassword(e.target.value)}></input>
              </div>
            </div>
            <div className="flex justify-center items-center w-[70%] h-[20%] mt-8">
              <GMButton name="Log In" onClick={handleSubmit}/>
            </div>
          </div>
        </div>
    </>
  )
}