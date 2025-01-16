
export function Line({direction = 'horizontal',width='w-full'}){

    return (
       <div className={direction === 'horizontal' ? `w-full h-px bg-black dark:bg-white ${width}` : `h-full w-px bg-black dark:bg-white ${width}`}></div>
    )
}