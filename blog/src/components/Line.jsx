
export function Line({direction = 'horizontal'}){

    return (
       <div className={direction === 'horizontal' ? "w-full h-px bg-black dark:bg-white" : "h-full w-px bg-black dark:bg-white"}></div>
    )
}