/**
 * 
 * @returns flex-auto flex-row justify-between w-screen border-2 border-solid
 */

export function Navbar() {
    return (
            
            <div className="flex flex-auto flex-row items-center justify-between w-screen h-[13%] bg-[url('./src/assets/Navbar/Nav_BG.png')] shadow-2xl" >
                <div className="flex flex-row items-center px-[2%] w-[60%]">  
                    <img src="./src/assets/Navbar/COS_LOGO.png" className="h-[70%] w-[7%]"></img>
                    <div className="flex flex-row w-[70%] justify-between ml-[10%] text-center">
                        <a href='' className="font-bold text-xl">
                            myGarregMach
                        </a>
                        <a href=''>
                            HOME
                        </a>
                        <a href=''>
                           {localStorage.getItem('USER_TYPE') === 'STUDENT' ? "STUDENT PROFILE" : "STAFF PROFILE"}
                        </a>
                    </div>
                </div>
                <div className="px-[3%]">
                    <a href=''>
                        LOGOUT
                    </a>
                </div>
            </div>

    );
}