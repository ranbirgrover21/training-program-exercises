export function MainBlock({ children } : any) {
    return (
        <div className="py-5 flex flex-col items-center w-[92.5%] h-[85%] shadow-lg bg-[url('./src/assets/MAIN_BLOCK.png')]">
            {children}
        </div>
    )
}